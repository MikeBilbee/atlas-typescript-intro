// CoverArt.jsx
import React from 'react';
import placeholderSvg from '../assets/placeholder.svg';

const CoverArt = ({ imageUrl }) => {
	return (
		<div className="w-32 h-32 overflow-hidden rounded-lg shadow-md"> 
			<img 
				src={imageUrl || placeholderSvg} 
				alt="Cover Art" 
				className="w-full h-full object-cover" 
			/>
		</div>
	);
};

export default CoverArt;