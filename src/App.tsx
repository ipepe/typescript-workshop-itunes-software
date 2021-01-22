import styles from './App.module.css';
import { Itunes } from './itunes';
import { Stack } from '@chakra-ui/react';

function App({ title }: { title: string }) {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <Stack>
          <h1>{title}</h1>
          <Itunes />
        </Stack>
      </header>
    </div>
  );
}

export default App;
