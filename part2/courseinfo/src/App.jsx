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

const Course = ({ courses }) => {
  return courses.map((course) => (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total totals={course.parts}></Total>
    </>
  ));
};

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          id: 1,
          name: 'Routing',
          exercises: 3,
        },
        {
          id: 2,
          name: 'Middlewares',
          exercises: 7,
        },
      ],
    },
  ];

  return <Course courses={course} />;
};

export default App;
