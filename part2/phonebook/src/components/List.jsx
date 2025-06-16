import Person from './Person';

const List = ({ persons, handleRemove }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {persons.map((person) => {
        return (
          <Person
            person={person}
            key={person.id}
            handleRemove={handleRemove}
          >
            {person.name}
          </Person>
        );
      })}
    </ul>
  );
};

export default List;
