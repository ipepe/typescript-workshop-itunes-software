import { Button, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSoftware, Software, fetchSoftware } from './itunesSlice';
import { SoftwareTable } from './SoftwareTable';

export function Itunes() {
  const software = useSelector(selectSoftware);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Stack>
      <Stack direction="row">
        <Input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyUp={(e) => ((e.key === 'Enter' || e.keyCode === 13) && dispatch(fetchSoftware(searchTerm)))}
        />
      </Stack>
      <SoftwareTable software={software} />
    </Stack>
  );
}
