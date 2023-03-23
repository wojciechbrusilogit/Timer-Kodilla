import Button from './components/Button/Button.js';
import TimeCounter from './components/TimeCounter/TimeCounter.js';
import Container from './components/Container/Container.js';
import { useEffect, useState } from 'react';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 10);
    }, 10));
  };


  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const stop = () => {
    clearInterval(timer);
  };
  const reset = () => {
    setTime(0);
  };

  return (
    <div>
      <Container>
        <TimeCounter time={time} />
        <Button action={start}>Start</Button>
        <Button action={stop}>Stop</Button>
        <Button action={reset}>Reset</Button>
      </Container>
    </div>
  );
}

export default App;