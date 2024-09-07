// Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = ({ song }) => {
	return (
		<div className="space-y-2">
			{song.map((song) => ( 
				<PlayListItem 
					key={song.id}
					title={song.title}
					genre={song.genre}
					length={song.length} 
				/>
			))}
		</div>
	);
};

export default Playlist;