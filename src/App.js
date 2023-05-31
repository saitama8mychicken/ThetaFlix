import React ,{useContext }from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { ImageProvider,ImageContext } from './components/playlist';
import ImageGallery from './components/ImageVideoGallery';
import PlaylistPage from './components/PlaylistPage';
import "./App.css";

const Playlist = () => {
  const { playlists } = useContext(ImageContext);
  const { playlistName } = useParams();

  // Find the playlist with the specified name
  const playlist = playlists.find((playlist) => playlist.name === playlistName);
console.log(playlist);
  if (!playlist) {
    return <h1>Playlist not found</h1>;
  }

  return <h1>Playlist: {playlist.name}</h1>;
};

// App component
const App = () => {
  return (
    <Router>
      <ImageProvider>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/Playlists" element={<PlaylistPage />} />
          <Route path="/playlists/:playlistName" element={<Playlist />} />
        </Routes>
      </ImageProvider>
    </Router>
  );
};

export default App;
