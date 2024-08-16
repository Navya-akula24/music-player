import React, { useState, useEffect } from 'react';

const Player = ({ currentSong }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = document.getElementById('audio');
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying, currentSong]);

    return (
        <div className="player">
            <img src={`https://cms.samespace.com/assets/${currentSong.cover}`} alt="cover" />
            <h2>{currentSong.title}</h2>
            <h3>{currentSong.artist}</h3>
            <div className="controls">
                <button onClick={() => {}}>Prev</button>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={() => {}}>Next</button>
            </div>
            <audio id="audio" src="your-song-url.mp3"></audio>
        </div>
    );
};

export default Player;
