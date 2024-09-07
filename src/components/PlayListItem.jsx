// PlayListItem.jsx
import React from 'react';

const PlayListItem = ({ title, artist, length }) => {
	
	return (
		<div className="flex items-center justify-between py-2">
			<div>
				<h3 className="text-lg font-medium">{title}</h3>
				<p className="text-gray-500 text-sm">{artist}</p>
			</div>
			<p className="text-gray-500 text-sm">{length}</p>
		</div>
	);
};

export default PlayListItem;