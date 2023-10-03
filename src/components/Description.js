import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

function Description() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(config.BASE_URL + '/pictures');
        const jsonResponse = response.data; // Parse the JSON response directly
        const itemsWithImageUrls = jsonResponse.items;

        setPictures(itemsWithImageUrls);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <section className="w3-container">
      <h2 className="w3-center w3-container__title">Hi, I'm Justus Santanna</h2>
      <p className="w3-center w3-container__subtitle"></p>
      <div className="w3-center w3-padding-32 w3-mypictures-container">
        {pictures.map((item, index) => (
          <div
            key={index}
            className="container pictures__mobile"
            style={{ width: '280px', height: '270px' }}
          >
            <img
              src={`data:image/png;base64,${item.image}`}
              alt={`Js ${item.id}`}
              className="rounded mx-auto d-block img-fluid"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Description;
