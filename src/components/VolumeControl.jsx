// VolumeControl.jsx
import React from 'react';
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const VolumeControl = ({ value, onChange }) => {
	return (
		<div className="flex items-center space-x-2">
			{value === 0 ? ( 
				<SpeakerXMarkIcon className="h-5 w-5 text-gray-400" /> 
			) : (
				<SpeakerWaveIcon className="h-5 w-5 text-gray-600" />
			)}

			<div className="relative w-full h-2 bg-gray-200 rounded-full">
				<div 
					className="absolute h-full bg-blue-500 rounded-full" 
					style={{ width: `${value}%` }} 
				/>
				<input
					type="range"
					min="0"
					max="100"
					value={value}
					onChange={onChange}
					className="absolute w-full h-full appearance-none bg-transparent focus:outline-none"
				/>
				<div 
					className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full transform translate-x-1/2" 
					style={{ left: `${value}%` }}
				/>
			</div>
		</div>
	);
};

export default VolumeControl;