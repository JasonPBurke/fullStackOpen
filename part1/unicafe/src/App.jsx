import { useState } from 'react';

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setRating = (value, setValue) => () => setValue(value + 1);

  const calculateAverage = () => {
    return (good * 1 + bad * -1) / (good + neutral + bad);
  };

  calculateAverage();

  return (
    <>
      <Heading text='give feedback' />
      <Button onClick={setRating(good, setGood)} text='good'></Button>
      <Button onClick={setRating(neutral, setNeutral)} text='neutral'></Button>
      <Button onClick={setRating(bad, setBad)} text='bad'></Button>
      <Heading text='statistics' />
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {calculateAverage()}</div>
      <div>positive {(good / (good + neutral + bad)) * 100}%</div>
    </>
  );
};

export default App;
