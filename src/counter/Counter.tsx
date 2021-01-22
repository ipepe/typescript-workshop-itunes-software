import { Button, Stack, Tag } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, incCount, decCount } from './counterSlice';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Stack direction="row">
      <Tag>{count}</Tag>
      <Button colorScheme="red" onClick={() => dispatch(decCount(1))}>
        -1
      </Button>
      <Button colorScheme="green" onClick={() => dispatch(incCount(1))}>
        +1
      </Button>
    </Stack>
  );
}
