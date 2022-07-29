import React, { useEffect } from 'react';

const SearchInput = ({ value, onChangeText }) => {
  useEffect(() => {
    /* Adds an event listener which fires whenever the value of our 
    input field changes and call the onChangeText function passed
    in as a prop to our component */
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);

    /* returning a cleanup function */
    return input.removeEventListener('input', onChangeText);

  }, [onChangeText]);
  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search peokemon by name || id"
      />
    </div>
  );
};
export default SearchInput;