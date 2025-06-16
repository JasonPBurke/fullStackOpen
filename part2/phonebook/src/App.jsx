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

  const handleRemove = (person) => () => {
    window.confirm(`Delete ${person.name}?`)
      ? numbers.remove(person.id).then((deletedPerson) => {
          setPersons(
            persons.filter((person) => deletedPerson.id !== person.id)
          );
        })
      : null;
  };

  const updatePerson = (person) => {
    console.log('person', person);
    numbers
      .update(person[0].id, { ...person[0], number: newNumber })
      .then((updated) => {
        const filteredPersons = persons.filter((object) => {
          return object.id !== updated.id;
          // console.log('object.id', object.id);
          // console.log('updated.id', updated.id);
        });
        console.log('filteredPersons', filteredPersons);
        setPersons(filteredPersons.concat(updated));
      });
  };

  const addPersons = (e) => {
    let rejectName = false;
    e.preventDefault();
    persons.forEach((object) => {
      if (object.name === newName) {
        rejectName = true;
      }
    });

    rejectName === false
      ? numbers
          .create({ name: newName, number: newNumber })
          .then((newObject) => {
            setPersons(persons.concat(newObject));
          })
      : window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ? updatePerson(persons.filter((person) => person.name === newName))
      : null;

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
        <List persons={persons} handleRemove={handleRemove} />
      ) : (
        <List persons={filteredPersons} handleRemove={handleRemove} />
      )}
    </div>
  );
};

export default App;
