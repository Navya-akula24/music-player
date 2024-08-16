import React from 'react';
import styled from 'styled-components';

const SongItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const SongList = ({ songs, onSelectSong }) => {
    return (
        <div>
            {songs.map((song) => (
                <SongItem key={song.id} onClick={() => onSelectSong(song)}>
                    <div>
                        <img src={`https://cms.samespace.com/assets/${song.cover}`} alt="cover" />
                        <div>
                            <h4>{song.title}</h4>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                    <span>{song.duration}</span>
                </SongItem>
            ))}
        </div>
    );
};

export default SongList;
