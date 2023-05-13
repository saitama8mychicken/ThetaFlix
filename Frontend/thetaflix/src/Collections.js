import { Card } from "web3uikit";
import React from "react";
import collectionsList from "./components/collectionList";

const Collections = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      {collectionsList.map((collection, index) => {
        return (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 py-2">
            <Card
              title={collection.name}
              description={`Total Volume: ${collection.totalVolume}`}
              style={{ padding: "5px" }}
              className="bg-white rounded-lg shadow-md"
            >
              <div className="p-2">
                <div className="h-60 w-full relative overflow-hidden">
                  <img
                    src={collection.imageUrl}
                    alt="NFT"
                    className="absolute h-full w-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
