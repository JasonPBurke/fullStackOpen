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
    <div key={course.id}>
      <Header name={course.name}></Header>
      <Content key={course.id} parts={course.parts}></Content>
      <Total totals={course.parts}></Total>
    </div>
  ));
};

export default Course;
