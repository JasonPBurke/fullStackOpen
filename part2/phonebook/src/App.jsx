import { useEffect, useState } from 'react';
import numbers from './services/phoneNumbers.js';
import Form from './components/Form';
import List from './components/List';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    numbers.getAll().then((initialNumbers) => {
      setPersons(initialNumbers);
    });
  }, []);

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
      ? numbers
          .create({ name: newName, number: newNumber })
          .then((newObject) => {
            setPersons(persons.concat(newObject));
          })
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
      <h3>add a new</h3>
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPersons={addPersons}
        handleChange={handleChange}
      ></Form>
      <h3>Numbers</h3>
      {filter === '' ? (
        <List persons={persons} />
      ) : (
        <List persons={filteredPersons} />
      )}
    </div>
  );
};

export default App;
