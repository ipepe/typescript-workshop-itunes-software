import { call, put, takeLatest } from 'redux-saga/effects';
import * as yup from 'yup';
import { PayloadActionFromCreator } from '../utils';
import { fetchSoftware, setSoftware } from './itunesSlice';

const softwareSchema = yup.object({
  artistName: yup.string().defined(),
  artworkUrl100: yup.string().defined(),
  trackId: yup.number().defined(),
  trackName: yup.string().defined(),
  genres: yup.array(yup.string().defined()).defined(),
  formattedPrice: yup.string().defined(),
  averageUserRating: yup.number(),
  userRatingCount: yup.number(),
});

type ApiSoftware = yup.InferType<typeof softwareSchema>;

export async function getApplications(
  searchTerm: string
): Promise<ApiSoftware[]> {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      searchTerm
    )}&entity=software`
  );
  const rawData: any = await response.json();
  const data = await yup
    .object({
      resultCount: yup.number().defined(),
      results: yup.array(softwareSchema).defined(),
    })
    .validate(rawData);

  return data.results;
}

export function* onFetchSoftware(
  action: PayloadActionFromCreator<typeof fetchSoftware>
) {
  console.log('fetching software for', action.payload);
  try {
    const software: ApiSoftware[] = yield call(getApplications, action.payload);
    yield put(setSoftware(software));
  } finally {
    console.log('fetching done');
  }
}

export function* itunesSaga() {
  yield takeLatest(fetchSoftware.type, onFetchSoftware);
}
