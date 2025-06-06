import Course from './components/Course';

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

  return <Course key={course.id} courses={course} />;
};

export default App;
