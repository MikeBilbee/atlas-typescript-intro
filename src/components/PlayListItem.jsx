// PlayListItem.jsx
import React from 'react';

const PlayListItem = ({ song }) => {
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

	return (
		<div className="flex items-center justify-between py-2">
			<div>
				<h3 className="text-lg font-medium">{song.name}</h3>
					{playlistData.map((item) => (
					<PlayListItem
						key={item.title}
						title={item.title}
						artist={item.artist}
						length={item.length}
					/>
					))}
			</div>
		</div>
	);
};

export default PlayListItem;