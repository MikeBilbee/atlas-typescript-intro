// CurrentlyPlaying.jsx
import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = () => {
	return (
		<div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"> 
			<CoverArt imageUrl={null} />
			<div className="mt-4 text-center">
				<SongTitle title="Painted in Blue" subtitle="Soul Canvas" />
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