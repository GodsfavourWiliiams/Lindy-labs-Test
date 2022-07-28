import React, { useState } from "react";

export default function Searchbar(props) {
  const [search, setSearch] = useState("");
  const { onSearch } = props;

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar">
      <div className="input-pokemon">
        <input placeholder="search Pokemon..." onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="button-pokemon">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </div>
  );
}
