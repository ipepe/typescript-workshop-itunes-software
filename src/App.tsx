import styles from './App.module.css';
import { Counter } from './counter';
import { Button, Stack } from '@chakra-ui/react';

function App({ title }: { title: string }) {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <Stack>
          <Button colorScheme="blue">Hello {title}!</Button>
          <Counter />
        </Stack>
      </header>
    </div>
  );
}

export default App;
