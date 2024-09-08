
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import Api from '../../../Api';
export default function VideoSlider() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get('https://travelling-backend.onrender.com/video/video');
=======
        const response = await axios.get(`${Api}/video/video`);
>>>>>>> d368039 (improvements)
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const SampleNextArrow = ({ onClick }) => {
    return (
      <button className="carousel-button next" onClick={onClick}>
        Next
      </button>
    );
  };

  const SamplePrevArrow = ({ onClick }) => {
    return (
      <button className="carousel-button prev" onClick={onClick}>
        Prev
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Increase the speed for a smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: 'ease-in-out', // Use a smoother easing function
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video._id} className="relative">
            <video className="w-full" autoPlay loop muted>
              <source
<<<<<<< HEAD
                src={`https://travelling-backend.onrender.com/video/video/${video._id}`}
=======
                src={`${Api}/video/video/${video._id}`}
>>>>>>> d368039 (improvements)
                type={video.contentType}
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
              <h5 className="text-xl">{video.title}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}