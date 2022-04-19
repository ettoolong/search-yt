import React, { useState, useRef } from 'react';

import SearchService from './services/search.service';
import './App.css';

function App() {
  const inputRef = useRef()
  const [searchResult, setSearchResult] = useState([])

  function search() {
    const searchTerm = inputRef.current.value.trim()
    if (searchTerm !== '') {
      SearchService.getSearchResult(searchTerm).then(result => {
        setSearchResult(result)
      });
    }
  }

  return (
    <div className="App">
      <div className="searchBox">
        <input
          ref={inputRef}
          className="input"
          onKeyUp={e => {
            if (e.key === 'Enter') {
              search();
            }
          }}
        >
        </input>
        <button className="button" onClick={search}>Search</button>
      </div>
    </div>
  );
}

export default App;
