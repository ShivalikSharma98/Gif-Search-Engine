import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { useState, useEffect } from 'react';
import SearchHeader from './components/SearchHeader';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_GIPHY_KEY,
		limit: 25,
		rating: 'G',
		api: 'https://api.giphy.com/v1/gifs',
		endpoint: '/search',
	};

	const [images, setImages] = useState([]);

	useEffect(() => {
		getImages();
	}, []);

  const [searchString, setSearchString] = useState('minions');

  function handleChange(event) {
	  setSearchString(event.target.value);
  }

  function handleSubmit(event) {
	  event.preventDefault();
	  getImages(searchString);
  }

  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
	  getImages(searchString)
  }, []);

	function getImages(searchString) {
		const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImages(response.data);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}

	return (
		<div className='App'>
			<SearchHeader lastSearch={lastSearch}/>
			<SearchForm handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
			<SearchResults images={images} />
		</div>
	);
}

export default App;
