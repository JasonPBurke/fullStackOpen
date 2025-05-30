const course = 'Half Stack application development';
const courseData = [
  { part1: 'Fundamentals of React', exercise1: 10 },
  { part2: 'Using props to pass data', exercise2: 7 },
  { part3: 'State of a component', exercise3: 14 },
];

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (data) => {
  return (
    <p>
      {data.part} {data.exercise}{' '}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props[0].part1} exercise={props[0].exercise1} />
      <Part part={props[1].part2} exercise={props[1].exercise2} />
      <Part part={props[2].part3} exercise={props[2].exercise3} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props[0].exercise1 + props[1].exercise2 + props[2].exercise3}
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content {...courseData} />
      <Total {...courseData} />
    </div>
  );
};

export default App;
