import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-545-0093', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  ]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleChange = (setNewValue) => (e) => {
    setNewValue(e.target.value);
  };

  const addPersons = (e) => {
    let rejectName = false;
    e.preventDefault();
    persons.forEach((element) => {
      if (element.name === newName) {
        rejectName = true;
      }
    });

    rejectName === false
      ? setPersons(
          persons.concat({
            name: newName,
            number: newNumber,
            id: persons.length + 1,
          })
        )
      : alert(`${newName} is already added to phonebook`);

    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter
        persons={persons}
        setFilteredPersons={setFilteredPersons}
        filter={filter}
        setFilter={setFilter}
      ></SearchFilter>
      <h2>add a new</h2>
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPersons={addPersons}
        handleChange={handleChange}
      ></Form>
      <h2>Numbers</h2>
      {filter === '' ? (
        <List persons={persons} />
      ) : (
        <List persons={filteredPersons} />
      )}
    </div>
  );
};

export default App;
