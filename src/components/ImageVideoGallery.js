import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ImageContext } from "./playlist";
import { Card, Modal } from "web3uikit";
import { BsThreeDotsVertical } from "react-icons/bs";

const ImageGallery = () => {
  const { addPlaylist, playlists, addVideo } = useContext(ImageContext);

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [videoSrc, setVideoSrc] = useState();
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  ];
  const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  ];
  const openModal = (index) => {
    setIsOpen(true);
    setVideoSrc(index);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedOption("option1");
    setInputValue("");
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);

    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let name = inputValue.trim();
    if (selectedOption === "option1") {
      if (name !== null && name !== "") {
        if (playlists.length !== 0) {
          if (!playlists.includes(name)) {
            addPlaylist(name);
            await addVideo(name, videos[videoSrc]);
          } else {
            console.log("Create with another name");
          }
        } else {
          addPlaylist(name);
        }
      } else {
        console.log("Please enter a valid playlist name");
      }
    } else {
      name = selectedOption;
      await addVideo(name, videos[videoSrc]);
    }

    closeModal();
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="flex flex-wrap -mx-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 py-2"
          >
            <Card
              key={index}
              style={{ padding: "5px", height: "100%" }}
              className="bg-white rounded-lg shadow-md flex flex-col"
            >
              <div className="flex-grow p-2">
                <div className="h-60 w-full relative overflow-hidden">
                  <img
                    src={image}
                    alt="NFT"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-end p-2">
                <BsThreeDotsVertical onClick={() => openModal(index)} />
              </div>
            </Card>
          </div>
        ))}
      </div>
      <br />
      <Link to="/playlists">View Playlists</Link>

      <Modal
        isVisible={isOpen}
        onCancel={closeModal}
        onCloseButtonPressed={closeModal}
        onOk={handleFormSubmit}
      >
        <h2>Add Video</h2>

        <div>
         
          <h4>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="option1">Create Playlist</option>
              {playlists.map((playlist, index) => (
                <option key={index} value={playlist.name}>
                  {playlist.name}
                </option>
              ))}
            </select>
            {selectedOption === "option1" && (
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Playlist name"
              />
            )}
          </h4>
        </div>
      </Modal>
    </div>
  );
};

export default ImageGallery;
