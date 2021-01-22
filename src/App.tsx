import styles from './App.module.css';
import { Button } from '@chakra-ui/react';

function App({ title }: { title: string }) {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <Button colorScheme="blue">Hello iTunes Software!</Button>
      </header>
    </div>
  );
}

export default App;
