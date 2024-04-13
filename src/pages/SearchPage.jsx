import React, { useState, useEffect } from 'react'
import '../assets/css/SearchPage.css'
import { useLocation } from 'react-router-dom';
import SearchPageHeader from '../components/SearchPageHeader'
import { API_KEY, CONTEXT_KEY } from '../keys';

function SearchPage() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get('q');

    if (term) {
      setSearchTerm(term);
      fetchData(term);
    }
  }, [location.search]);

  const fetchData = async (term) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.items); // Assuming data.items contains the search results
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };


  return (
    <>
      <SearchPageHeader searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />

      {/* Display search results */}
      <div className='search_results'>
        {searchResults.map((result, index) => (
          <div key={index}>
            <a href={result.link}>{result.displayLink}</a>
            <a className="searchPage_resultTitle" href={result.link}>
              <h2>{result.title}</h2>
            </a>
            <p className="searchPage_resultSnippet">{result.snippet}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchPage