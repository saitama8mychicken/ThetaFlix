import React, { createContext, useState ,useEffect} from "react";
import PropTypes from "prop-types";

// Create the image context
export const ImageContext = createContext();

// Image context provider component
export const ImageProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);


    const addPlaylist = (name) => {
      setPlaylists([...playlists, { name, videos: [] }]);
    };
    
 const addVideo = (playlistName, url) => {
    setPlaylists(prevPlaylists => {
      return prevPlaylists.map(playlist => {
        if (playlist.name === playlistName) {
          const updatedVideos = playlist.videos ? [...playlist.videos, url] : [url];
          return {
            ...playlist,
            videos: updatedVideos,
          };
        }
        return playlist;
      });
    });
  
    return "Video added successfully";
  };
  
  // Add a useEffect hook to observe the changes in playlists state
  useEffect(() => {
    console.log("Playlists:", playlists);
  }, [playlists]);
  
  
  
  
  
  
 return (
    <ImageContext.Provider value={{ playlists, addPlaylist, addVideo }}>
      {children}
    </ImageContext.Provider>
  );
};

ImageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
