import React, { useContext, useState, useRef, useEffect } from 'react';
import { ImageContext } from './playlist';
import { Link } from 'react-router-dom';
const PlaylistPage = () => {
  const { playlists } = useContext(ImageContext);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);
  const [key, setKey] = useState(Date.now()); // Add key state to force re-render of video element

  const handlePlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    setCurrentVideo(null);
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  useEffect(() => {
    if (currentVideo && videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnded);
      videoRef.current.play();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [currentVideo]);

  const handleVideoEnded = () => {
    const currentIndex = currentPlaylist.videos.indexOf(currentVideo);
    const nextIndex = currentIndex + 1;

    if (nextIndex < currentPlaylist.videos.length) {
      setTimeout(() => {
        setCurrentVideo(currentPlaylist.videos[nextIndex]);
        setKey(Date.now()); // Update the key to force re-render of video element
      }, 5000); // 5-second delay before playing the next video
    }
  };

  return (
    <div>
      <h1>Selected Images</h1>
      {playlists && playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <h1 onClick={() => handlePlaylistClick(playlist)}> View <b>{playlist.name} </b> </h1>
              <Link to={`/playlists/${playlist.name}`}>View <b>{playlist.name} </b> 2</Link>
              {currentPlaylist === playlist && (
                <ul>
                  {playlist.videos.map((video, videoIndex) => (
                    <li key={videoIndex}>
                        <ul onClick={() => handleVideoClick(video)}>Play Video {videoIndex + 1}</ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Create new playlist.</p>
      )}
      {currentVideo && (
        <div>
          <h2>Current Video: {currentVideo}</h2>
          <video key={key} ref={videoRef} controls onEnded={handleVideoEnded}>
            <source src={currentVideo} type="video/mp4" />
            </video>
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;
