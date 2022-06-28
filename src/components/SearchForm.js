import React from 'react';
import { SearchIcon } from '../shared/AppIcons';

function SearchForm({handleChange, handleSubmit, searchString}) {
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input value={searchString} onChange={handleChange} placeholder='Search' type='text' name='searchString' required />
			<button type='submit'><SearchIcon height='2rem' width='2rem' /></button>
		</form>
	);
}

export default SearchForm;
