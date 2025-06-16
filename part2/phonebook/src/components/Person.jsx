const Person = ({ person, handleRemove }) => (
  <li>
    {person.name} {person.number}
    <button onClick={handleRemove(person)}>delete</button>
  </li>
);

export default Person;
