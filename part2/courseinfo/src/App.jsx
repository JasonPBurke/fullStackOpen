const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}{' '}
    </p>
  );
};

const Content = ({ parts }) => {
  return parts.map((part) => (
    <Part key={part.id} part={part.name} exercises={part.exercises} />
  ));
};

const Total = ({ totals }) => {
  const totalExercises = totals.reduce((accumulator, part) => {
    return (accumulator += part.exercises);
  }, 0);
  return <p>Total of {totalExercises} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total totals={course.parts}></Total>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 0,
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        id: 1,
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        id: 2,
        name: 'State of a component',
        exercises: 14,
      },
      {
        id: 3,
        name: 'Redux',
        exercises: 11,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
