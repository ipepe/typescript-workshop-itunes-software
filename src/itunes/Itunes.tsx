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
        />
        <Button
          colorScheme="blue"
          onClick={() => dispatch(fetchSoftware(searchTerm))}
        >
          Search
        </Button>
      </Stack>
      <SoftwareTable software={software} />
    </Stack>
  );
}
