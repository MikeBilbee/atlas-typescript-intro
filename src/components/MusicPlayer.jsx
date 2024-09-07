// MusicPlayer.jsx
import React from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

const MusicPlayer = ({ songs }) => {
	return (
		<div className="flex flex-col md:flex-row"> 
			<div className="md:w-1/3 p-4"> 
				<CurrentlyPlaying />
			</div>
			<div className="md:w-2/3 p-4"> 
				<Playlist songs={songs} />
			</div>
		</div>
	);
};

export default MusicPlayer;
