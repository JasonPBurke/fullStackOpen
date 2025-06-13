import Person from './Person';

const List = ({ persons }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {persons.map((person) => {
        return (
          <Person person={person} key={person.id}>
            {person.name}
          </Person>
        );
      })}
    </ul>
  );
};

export default List;
