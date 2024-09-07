// Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = ({ songs, onSongSelect }) => {
	
	return (
		<div className="space-y-2">
			<h2 className="mb-4 text-[1.45rem] font-bold">Playlist</h2>
			{songs.map((song) => (
				<div 
					key={song.title} 
					onClick={() => onSongSelect(song)} 
					className="cursor-pointer"
				>
					<PlayListItem 
						title={song.title}
						artist={song.artist}
						length={song.length} 
					/>
				</div>
			))}
		</div>
	);
};

export default Playlist;