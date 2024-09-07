// PlayControls.jsx
import { RewindIcon, PlayIcon, FastForwardIcon, ShuffleIcon } from '@heroicons/react/24/solid'; // Assuming you're using Heroicons

const PlayControls = () => {
	return (
		<div className="flex items-center space-x-4">
			<span className="text-gray-400">1x</span> 
			<button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
				<RewindIcon className="h-5 w-5 text-gray-600" /> 
			</button>
			<button className="p-3 rounded-full bg-black hover:bg-gray-800"> 
				<PlayIcon className="h-6 w-6 text-white" /> 
			</button>
			<button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
				<FastForwardIcon className="h-5 w-5 text-gray-600" /> 
			</button>
			<button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
				<ShuffleIcon className="h-5 w-5 text-gray-600" /> 
			</button>
		</div>
	);
};

export default PlayControls;