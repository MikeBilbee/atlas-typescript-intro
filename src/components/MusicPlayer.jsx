// MusicPlayer.jsx
import React, {useState} from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

const MusicPlayer = () => {
	const playlistData = [
        { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55" },
        { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02" },
        { title: "Fading Shadows", artist: "The Emberlight", length: "3:01" },
        { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01" },
        { title: "Urban Serenade", artist: "Midnight Groove", length: "4:54" },
        { title: "Whispers in the Wind", artist: "Rust & Ruin", length: "6:13" },
        { title: "Electric Fever", artist: "Neon Jungle", length: "8:41" },
        { title: "Edge of the Abyss", artist: "Steel Horizon", length: "2:27" },
        { title: "Golden Haze", artist: "Velvet Waves", length: "3:15" },
        { title: "Shatter the Silence", artist: "Thunderclap Echo", length: "8:22" }
    ];
	const [currentSong, setCurrentSong] = useState(playlistData[0]);

	const handleSongSelect = (song) => {
		setCurrentSong(song);
	};

	return (
		<div className="flex flex-col md:flex-row"> 
			<div className="md:w-1/2 p-4"> 
				<CurrentlyPlaying song={currentSong}/>
			</div>
			<div className="md:w-1/2 p-4"> 
				<Playlist songs={playlistData} onSongSelect={handleSongSelect} />
			</div>
		</div>
	);
};

export default MusicPlayer;
