import React from 'react';
import './SongPlayer.css';
import ReactAudioPlayer from 'react-audio-player';

const SongPlayer = () => {

    return (
        <>
        <div id="player">
            <div id="player-top">
                <div id="amplitude-play-pause" class="amplitude-paused"></div>
            </div>
        </div>
        <audio id="single-song" 
        amplitude-artist="Jake Jendusa" 
        amplitude-title="Porch Stomp Blues" 
        amplitude-album="In Search Of EP" 
        amplitude-album-art-url="album-art/jendusaep.jpg" 
        amplitude-audio-type="song" >
            <source src="songs/03%20Porch%20Stomp%20Blues.mp3" type="audio/mp3"/>
        </audio>
    </>);
}



export default SongPlayer;