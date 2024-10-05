import React from 'react';
import './home.css';
import { useState, useEffect } from 'react';

const Home = () => {

    const [musicData, setMusicData] = useState({
        genres: {},     // List of music genres
        artists: {},    // List of artists mapping from genre
        songs: {}      // List of songs mapping from artist
    });

    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedArtist, setSelectedArtist] = useState('');
    const [selectedSong, setSelectedSong] = useState('');

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value); // Update selected genre
        setSelectedArtist(''); // Reset selected artist
        setSelectedSong('');  // Reset selected song
    };

    const handleArtistChange = (e) => {
        setSelectedArtist(e.target.value); // Update selected artist
        setSelectedSong('');    // Reset selected song
    };

    const handleSongChange = (e) => {
        setSelectedSong(e.target.value); // Update selected song
    };

    const handleSubmit = (e) => {
        e.preventDefault();     // Prevent page refresh
        console.log(`Genre: ${selectedGenre}, Artist: ${selectedArtist}, Song: ${selectedSong}`);
    };



    return (
        <div className="home">
            <header>
                <h1>Welcome to Cosmic Pioneers!</h1>
            </header>
            <main>
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Engaging Microgravity Fitness Game</li>
                        <li>Track Your Progress</li>
                        <li>Build Team Rapport</li>
                    </ul>
                </section>
                <section className="music-selection">
                    <h2>Select Your Music</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Genre:
                            <select value={selectedGenre} onChange={handleGenreChange}>
                                <option value="">Select Genre</option>
                                {Object.keys(musicData.genres).map((genre) => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Artist:
                            <select value={selectedArtist} onChange={handleArtistChange} disabled={!selectedGenre}>
                                <option value="">Select Artist</option>
                                {selectedGenre && musicData.artists[selectedGenre]?.map((artist) => (
                                    <option key={artist} value={artist}>{artist}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Song:
                            <select value={selectedSong} onChange={handleSongChange} disabled={!selectedArtist}>
                                <option value="">Select Song</option>
                                {selectedArtist && musicData.songs[selectedArtist]?.map((song) => (
                                    <option key={song} value={song}>{song}</option>
                                ))}
                            </select>
                        </label>
                        <button type="submit">Play Music</button>
                    </form>
                </section>
                <section className="call-to-action">
                    <h2>Join Us!</h2>
                    <p>Ready to launch into fun and fitness?</p>
                    <button>Start Your Journey</button>
                </section>
            </main>
            <footer>
                <p>© 2024 Cosmic Pioneers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;