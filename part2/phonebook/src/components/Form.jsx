import Button from './Button';

const Form = ({
  handleChange,
  addPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  return (
    <form onSubmit={addPersons}>
      <div>
        name: <input value={newName} onChange={handleChange(setNewName)} />
      </div>
      <div>
        number:{' '}
        <input value={newNumber} onChange={handleChange(setNewNumber)} />
      </div>
      <Button />
    </form>
  );
};

export default Form;
