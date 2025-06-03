import { useState } from 'react';

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setRating = (value, setValue) => () => setValue(value + 1);

  return (
    <>
      <Heading text='give feedback' />
      <Button onClick={setRating(good, setGood)} text='good'></Button>
      <Button onClick={setRating(neutral, setNeutral)} text='neutral'></Button>
      <Button onClick={setRating(bad, setBad)} text='bad'></Button>
      <Heading text='statistics' />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

export default App;
