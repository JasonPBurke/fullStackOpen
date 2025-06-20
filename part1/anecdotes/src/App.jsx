import { useState } from 'react';

const randomizer = (anecdotes, setSelected) => () => {
  if (!anecdotes || anecdotes.length === 0) {
    return undefined;
  }
  const randomNum = Math.floor(Math.random() * anecdotes.length);
  setSelected(randomNum);
  return randomNum;
};

const addVote = (selected, votes, setVotes, setHighest) => () => {
  const newVotes = [...votes];
  newVotes[selected]++;
  const mostVoted = newVotes.indexOf(Math.max(...newVotes));
  setVotes(newVotes);
  setHighest(mostVoted);
};

const Heading = ({ text }) => <h1>{text}</h1>;

const Content = ({ data }) => <p>{data}</p>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [highest, setHighest] = useState(0);

  return (
    <>
      <Heading text='Anecdote of the day'></Heading>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button
        onClick={addVote(selected, votes, setVotes, setHighest)}
        text='vote'
      ></Button>
      <Button
        onClick={randomizer(anecdotes, setSelected)}
        text='next anecdote'
      ></Button>
      {votes[highest] !== 0 ? (
        <>
          <Heading text='Anecdote with most votes'></Heading>
          <Content data={anecdotes[highest]}></Content>
          <div>has {votes[highest]} votes</div>
        </>
      ) : null}
    </>
  );
};

export default App;
