import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SeriesList = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4001/api/series')
      .then(response => response.json())
      .then(data => {
        setSeries(data.body);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3
  };

  return (
    <div style={{
        padding: '50px',
    }}>
      <h1>Lista de Series</h1>
      <Link to={`/edit-series/0`}>
        <button>Agregar Serie</button>
      </Link>
      <Slider {...settings} style={{
        margin: '50px 0 0 0',
    }}>
        {series.map(seriesItem => (
            <div key={seriesItem.tv_interval_id}>
                <h2>Serie: {seriesItem.tv_series_title}</h2>
                <p><strong>Día de la semana:</strong> {seriesItem.week_day}</p>
                <p><strong>Hora de emisión:</strong> {seriesItem.show_time}</p>
                <Link to={`/edit-series/${seriesItem.tv_interval_id}`}>
                <button>Editar Serie</button>
                </Link>
                <Link to={`/delete-series/${seriesItem.tv_interval_id}`}>
                <button>Eliminar Serie</button>
                </Link>
            </div>
        ))}

      </Slider>
    </div>
  );
};
