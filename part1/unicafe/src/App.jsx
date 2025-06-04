import { useState } from 'react';

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ name, value }) => {
  return (
    <div>
      {name} {value}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setRating = (value, setValue) => () => setValue(value + 1);
  const calculateAverage = () => (good * 1 + bad * -1) / (good + neutral + bad);
  const calculatePositive = () => (good / (good + bad + neutral)) * 100 + '%';

  return (
    <>
      <Heading text='give feedback'></Heading>
      <Button onClick={setRating(good, setGood)} text='good'></Button>
      <Button onClick={setRating(neutral, setNeutral)} text='neutral'></Button>
      <Button onClick={setRating(bad, setBad)} text='bad'></Button>
      <Heading text='statistics'></Heading>
      <Statistics name='good' value={good}></Statistics>
      <Statistics name='neutral' value={neutral}></Statistics>
      <Statistics name='bad' value={bad}></Statistics>
      <Statistics name='all' value={good + neutral + bad}></Statistics>
      <Statistics name='average' value={calculateAverage()}></Statistics>
      <Statistics name='positive' value={calculatePositive()}></Statistics>
    </>
  );
};

export default App;
