import React, { useState, useEffect } from "react";
import Select from "react-select";
function DogApi() {
  const [dogBreed, setDogBreed] = useState([]);
  const [dogImgs, setDogImgs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const list = [];
        Object.entries(data.message).forEach((entrie) => {
          if (entrie[1].length > 0) {
            entrie[1].forEach((innerEnterie) => {
              const innerObj = {};
              innerObj["value"] = `${entrie[0]}/${innerEnterie}`;
              innerObj["label"] = `${entrie[0]} ${innerEnterie}`;
              list.push(innerObj);
            });
          } else {
            list.push({
              value: entrie[0],
              label: entrie[0],
            });
          }
        });
        setDogBreed(list);
      });
  }, []);

  const handleSelectChange = (e) => {
    fetch(`https://dog.ceo/api/breed/${e.value}/images`)
      .then((response) => response.json())
      .then((data) => {
        setDogImgs(data.message); // data.message is an array of image URLs
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
      });
  };

  return (
    <>
      <Select options={dogBreed} onChange={handleSelectChange} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {dogImgs.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Dog"
            style={{ width: "200px", height: "auto", borderRadius: "8px" }}
          />
        ))}
      </div>
    </>
  );
}

export default DogApi;
