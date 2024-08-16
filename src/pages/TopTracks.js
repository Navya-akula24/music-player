import React, { useState, useEffect } from 'react';

import axios from 'axios';
import SongList from '../components/SongList';
import Player from '../components/Player';
import SearchBar from '../components/SearchBar';

const TopTracks = () => {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        
        axios.get('https://cms.samespace.com/items/songs')
            .then(response => setSongs(response.data.data));
    }, []);

    
    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="toptracks-page">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <SongList songs={filteredSongs} onSelectSong={setCurrentSong} />
            {currentSong && <Player currentSong={currentSong} />}
        </div>
    );
};

export default TopTracks;
