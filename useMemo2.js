import React,{useState, useCallback, useMemo} from 'react';

function App() {

  const [count, setCount] = useState(0);

  let val = useCallback(() => {
    return count + 1;
  }, [count]);

  let increase = () => {
    console.log(val());
    setCount(count + 1);
  }

  return (
    <>
    {console.warn("RENDER")}
      {val()}<br />
      <button onClick={increase}>Count</button>
    </>
  )
}

export default App;
