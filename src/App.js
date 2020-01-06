import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/Card-list.component";
import { SearchBox } from "./components/search-box/SearchBox";
import "./App.css";

function App() {
  const [monsters, setMonters] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await response.json();
    setMonters(res);
    return res;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    setResult(filteredMonster);
    console.log(result);
  }, [searchField]);

  return (
    <div className="App">
      <h1>monster Rolodex</h1>
      <SearchBox placeholder="Search monsters" handleChange={handleChange} />
      <CardList monsters={result.length === 0 ? monsters : result} />
    </div>
  );
}

export default App;
