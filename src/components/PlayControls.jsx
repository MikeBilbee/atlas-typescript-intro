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
    <div className="flex items-center justify-around">
      <span className="text-gray-600 dark:text-gray-400">1x</span> 
      <button onClick={onRewind} className="p-2 rounded-md bg-white dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black" aria-label="Rewind">
        <BackwardIcon className="h-5 w-5 text-gray-600 dark:text-black" /> 
      </button>
      <button onClick={handlePlayPauseClick} className="p-3 rounded-md bg-white dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black" aria-label={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? <PauseIcon className="h-6 w-6 text-gray-600 dark:text-black" /> : <PlayIcon className="h-6 w-6 text-black" />}
      </button>
      <button onClick={onFastForward} className="p-2 rounded-md bg-white dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black" aria-label="Fast Forward">
        <ForwardIcon className="h-5 w-5 text-gray-600 dark:text-black " /> 
      </button>
      <button onClick={onShuffle} className="p-2 rounded-md bg-white dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black" aria-label="Shuffle">
        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-600 dark:text-black" /> 
      </button>
    </div>
  );
};

export default PlayControls;