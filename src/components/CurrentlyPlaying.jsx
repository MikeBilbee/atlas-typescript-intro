// CurrentlyPlaying.jsx
import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = ({ song }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"> 
			<CoverArt imageUrl={null} />
			<div className="mt-4 text-center">
				<SongTitle title={song.title} artist={song.artist} />
			</div>
			<div className="mt-6">
				<PlayControls />
			</div>
			<div className="mt-4 flex items-center">
				<VolumeControl value={50} onChange={() => {}} />
			</div>
		</div>
	);
};

export default CurrentlyPlaying;