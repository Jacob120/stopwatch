import {useEffect, useState} from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    let timer;

    if(isActive) {
      timer = (setInterval(() => {
        setTime(prevValue => prevValue + 1)
      }, 1))
    } else if (!isActive) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
