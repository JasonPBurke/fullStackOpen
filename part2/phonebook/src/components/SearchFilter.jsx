const SearchFilter = ({ persons, setFilteredPersons, filter, setFilter }) => {
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
    if (filterValue === '') setFilteredPersons([]);

    const filteredSet = persons.filter((person) => {
      if (filterValue === '') return;
      return person.name.toLowerCase().includes(filterValue.toLowerCase());
    });
    setFilteredPersons(filteredSet);
  };

  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilter} />
    </div>
  );
};

export default SearchFilter;
