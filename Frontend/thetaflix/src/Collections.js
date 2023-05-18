import { Card } from "web3uikit";
import React, { useEffect, useState } from "react";
import GetContractNFTs from "./components/index";

const Collections = () => {
  const [nftData, setNFTData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetContractNFTs();
        console.log("NFTs:", data);
        setNFTData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap -mx-2">
      {nftData.map((url, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 py-2">
          <Card
            style={{ padding: "5px" }}
            className="bg-white rounded-lg shadow-md"
          >
            <div className="p-2">
              <div className="h-60 w-full relative overflow-hidden">
                <img
                  src={url}
                  alt="NFT"
                  className="absolute h-full w-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Collections;
