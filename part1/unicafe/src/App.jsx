import { useState } from 'react';

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = (good / total) * 100 + '%';
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine name='good' value={good} />
        <StatisticLine name='neutral' value={neutral} />
        <StatisticLine name='bad' value={bad} />
        <StatisticLine name='all' value={total} />
        <StatisticLine name='average' value={average} />
        <StatisticLine name='positive' value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setRating = (value, setValue) => () => setValue(value + 1);
  // const calculateAverage = () => (good * 1 + bad * -1) / (good + neutral + bad);
  // const calculatePositive = () => (good / (good + bad + neutral)) * 100 + '%';

  return (
    <>
      <Heading text='give feedback'></Heading>
      <Button onClick={setRating(good, setGood)} text='good'></Button>
      <Button onClick={setRating(neutral, setNeutral)} text='neutral'></Button>
      <Button onClick={setRating(bad, setBad)} text='bad'></Button>
      <Heading text='statistics'></Heading>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      {/* <div>
        {good + bad + neutral === 0 ? (
          'No feedback given'
        ) : (
          <table>
            <tbody>
              <Statistics name='good' value={good}></Statistics>
              <Statistics name='neutral' value={neutral}></Statistics>
              <Statistics name='bad' value={bad}></Statistics>
              <Statistics name='all' value={good + neutral + bad}></Statistics>
              <Statistics
                name='average'
                value={calculateAverage()}
              ></Statistics>
              <Statistics
                name='positive'
                value={calculatePositive()}
              ></Statistics>
            </tbody>
          </table>
        )}
      </div> */}
    </>
  );
};

export default App;
