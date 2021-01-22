import { Button, Stack, Tag } from '@chakra-ui/react';
import { useState } from 'react';

export function Counter() {
  // const count = 5;
  const [count, setCount] = useState(0);
  return (
    <Stack direction="row">
      <Tag>{count}</Tag>
      <Button colorScheme={'red'} onClick={() => setCount(count - 1)}>
        -1
      </Button>
      <Button colorScheme={'green'} onClick={() => setCount(count + 1)}>
        +1
      </Button>
    </Stack>
  );
}
