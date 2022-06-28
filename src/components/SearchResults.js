import React from 'react';

const SearchResults = function SearchResults({ images }) {
	if (!images.length) {
		return <h2>No Images Found!</h2>;
	}
	return (
		<div className='gallery'>
			{images.map((image) => (
				<div key={image.id} className='gif'>
					<img src={image.images.downsized_large.url} alt='gif' />
				</div>
			))}
		</div>
	);
};

export default SearchResults;
