import { useEffect, useState } from 'react';
import numbers from './services/phoneNumbers.js';
import Form from './components/Form';
import List from './components/List';
import Notification from './components/Notification';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
    numbers
      .update(person.id, { ...person, number: newNumber })
      .then((updated) => {
        const filteredPersons = persons.filter((object) => {
          return object.id !== updated.id;
        });
        setPersons(filteredPersons.concat(updated));
      })
      .catch(() => {
        showError(person);
      });
  };

  const showSuccess = (person) => {
    setSuccessMessage(`${person} has been added to the phonebook.`);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  const showError = (person) => {
    setErrorMessage(
      `Information on ${person.name} was previously removed from server. 
      Please re-enter the information.`
    );

    const currentPersons = persons.filter((e) => e.id !== person.id);
    setPersons(currentPersons);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
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
            showSuccess(newName);
          })
      : //! this code is an attempt to not show the window.confirm if message if
      //! the name was already deleted from second browser window...
      // : //! check if name is still in persons array
      // (persons.filter((person) => person.name === newName).length === 0,
      //   console.log(
      //     'filter resp',
      //     persons.filter((person) => person.name === newName)
      //   ))
      // ? console.log('well I got here')
      window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ? updatePerson(...persons.filter((person) => person.name === newName))
      : null;

    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {successMessage !== null ? (
        <Notification error={false} message={successMessage} />
      ) : errorMessage !== null ? (
        <Notification error={true} message={errorMessage} />
      ) : null}

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
