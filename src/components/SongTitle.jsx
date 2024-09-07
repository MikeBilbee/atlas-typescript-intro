// SongTitle.jsx
import React from 'react';
const SongTitle = ({ title, subtitle }) => {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-2">{title}</h1>
			<h2 className="text-gray-600">{subtitle}</h2>
		</div>
	);
};

export default SongTitle;