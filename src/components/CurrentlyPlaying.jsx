// CurrentlyPlaying.jsx
import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = ({ song }) => {
	return (
		<div className=" sm:h-200 md:h-screen lg:h-screen bg-light-primary dark:bg-dark-primary p-6 rounded-lg shadow-md border-gray-300 flex flex-col items-center"> 
			<CoverArt imageUrl={null} />
			<div className="mt-4 text-left w-10/12">
				<SongTitle title={song.title} artist={song.artist} />
			</div>
			<div className="mt-6 w-full">
				<PlayControls  />
			</div>
			<div className="mt-4 flex items-center">
				<VolumeControl value={50} onChange={() => {}} />
			</div>
		</div>
	);
};

export default CurrentlyPlaying;