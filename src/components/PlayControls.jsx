// PlayControls.jsx
import React, { useState } from 'react';
import { PauseIcon, PlayIcon, ForwardIcon, BackwardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

const PlayControls = ({ onPlayPause, onRewind, onFastForward, onShuffle }) => {
const [isPlaying, setIsPlaying] = useState(false); 

const handlePlayPauseClick = () => {
		setIsPlaying(!isPlaying); 
		onPlayPause();
	};

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-400">1x</span> 
      <button onClick={onRewind} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300" aria-label="Rewind">
        <BackwardIcon className="h-5 w-5 text-gray-600" /> 
      </button>
      <button onClick={handlePlayPauseClick} className="p-3 rounded-full bg-black hover:bg-gray-800" aria-label={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? <PauseIcon className="h-6 w-6 text-white" /> : <PlayIcon className="h-6 w-6 text-white" />}
      </button>
      <button onClick={onFastForward} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300" aria-label="Fast Forward">
        <ForwardIcon className="h-5 w-5 text-gray-600" /> 
      </button>
      <button onClick={onShuffle} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300" aria-label="Shuffle">
        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-600" /> 
      </button>
    </div>
  );
};

export default PlayControls;