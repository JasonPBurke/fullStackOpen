const SearchFilter = ({ persons, setFilteredPersons, filter, setFilter }) => {
  const checkFilter = (updatedFilter, persons) => {
    const filteredArray = persons.filter((person) =>
      person.name.toLowerCase().includes(updatedFilter.toLowerCase())
    );
    setFilteredPersons(filteredArray);
  };

  const handleFilter = (e) => {
    if (e.target.value === '') setFilteredPersons([]);
    setFilter(e.target.value);
    checkFilter(e.target.value, persons);
  };

  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilter} />
    </div>
  );
};

export default SearchFilter;
