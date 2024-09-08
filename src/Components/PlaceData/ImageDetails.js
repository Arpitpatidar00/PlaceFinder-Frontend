
import React, { useState, useEffect } from "react";
import Comment from "./Comment.js";
import "./Placedata.css";
import { RiImageAddFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import Driver from "./Driver/Driver.js";
import Guide from "./Guide/Guide.js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAuth } from "../../Context/AuthContext.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from '../../Api.js';


const ImageDetails = () => {
  const { searchData, setCommentData } = useAuth();
  const navigate = useNavigate();

  const placeId = useSelector((state) => state.place.placeId);
  const { userData } = useSelector((state) => state.auth);

  const [ setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showGuideProfile, setShowGuideProfile] = useState(false);
  const [showDriverProfile, setShowDriverProfile] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch(`https://travelling-backend.onrender.com/comments`);
=======
        const response = await fetch(`${Api}/comments`);
>>>>>>> d368039 (improvements)
        if (!response.ok) {
          throw new Error("Failed to fetch comment data");
        }
        const data = await response.json();
        setCommentData(data);
      } catch (error) {
        console.error("Error fetching comment data:", error);
      }
    };
    fetchData();
  }, [placeId, setCommentData]);

  useEffect(() => {
    const selectedImageData = searchData.find((image) => image._id === placeId);
    setSelectedData(selectedImageData);

    const fetchData = async () => {
      try {
        const response = await axios.get(
<<<<<<< HEAD
          `https://travelling-backend.onrender.com/add/${placeId}`
=======
          `${Api}/add/${placeId}`
>>>>>>> d368039 (improvements)
        );
        if (response.data) {
          setSelectedData(response.data);
        } else {
          console.error("Invalid response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data for selected id:", error);
      }
    };

    fetchData();
  }, [placeId, searchData]);
  useEffect(() => {
    const fetchUploadedImages = async () => {
      try {
        const response = await axios.get(
<<<<<<< HEAD
          `https://travelling-backend.onrender.com/upload/uploadedImages`
=======
          `${Api}/upload/uploadedImages`
>>>>>>> d368039 (improvements)
        );
        setUploadedImages(response.data);
      } catch (error) {
        console.error("Error fetching uploaded images:", error);
      }
    };

    fetchUploadedImages();
  }, []);

  const handleImageSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        try {
<<<<<<< HEAD
          const response = await axios.post(`https://travelling-backend.onrender.com/upload`, {
=======
          const response = await axios.post(`${Api}/upload`, {
>>>>>>> d368039 (improvements)
            imageString: base64Image,
            placeId: placeId,
            userData:userData,
          });
          if (response.status === 200) {
            setSelectedImage(base64Image);
            // Fetch updated images after upload
            const updatedImages = await axios.get(
<<<<<<< HEAD
              `https://travelling-backend.onrender.com/upload/uploadedImages`
=======
              `${Api}/upload/uploadedImages`
>>>>>>> d368039 (improvements)
            );
            setUploadedImages(updatedImages.data);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBack = () => {
    localStorage.removeItem("placeId");
    navigate("/home");
  };

  const handleGuideClick = () => {
    if (userData.role === "driver") {
      toast.error("Login as user to view guide profile");
    } else {
      setShowGuideProfile(!showGuideProfile);
    }
  };

  const handleDriverClick = () => {
    if (userData.role === "guide") {
      toast.error("Login as user to view driver profile");
    } else {
      setShowDriverProfile(!showDriverProfile);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="placecontainer">
        <div id="back" onClick={handleBack}>
          <IoIosArrowRoundBack />
        </div>
        <div className="image-container">
          {selectedData && (
            <img
              src={selectedData.image}
              alt="Cardimage"
              className="card-image"
            />
          )}
          <h1 className="place-name">
            {selectedData ? selectedData.placeName : "Loading..."}
          </h1>
        </div>
        <div id="place">
          <h1 className="cityname">
            {selectedData ? selectedData.cityName : "Loading..."}
          </h1>

          <h1 className="title">
            {selectedData ? selectedData.title : "Loading..."}
          </h1>

          <h1 className="description">
            {selectedData ? selectedData.description : "Loading..."}
          </h1>

          <div id='guide-driver'>
            <div className="Guide">
              <h1 onClick={handleGuideClick}>Guide</h1>
              {showGuideProfile && (
                <div className="profile-box">
                  <Guide />
                  <button onClick={() => setShowGuideProfile(false)}>
                    <GrFormClose />
                  </button>
                </div>
              )}
            </div>

            <div className="Driver">
              <h1 onClick={handleDriverClick}>Driver</h1>
              {showDriverProfile && (
                <div className="profile-box">
                  <Driver />
                  <button onClick={() => setShowDriverProfile(false)}>
                    <GrFormClose />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <h1>Add Your experience</h1>
        <div id="experience">
          <div className="experience-share">
            <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
              <RiImageAddFill size={30} />
            </label>
            <h1>Happy Customers Images</h1>
          </div>
          <div id="placeuploadedimages">
            {uploadedImages
              .filter((image) => image.placeId === placeId)
              .map((image, index) => (
                <img
                  key={index}
                  src={image.imageString}
                  alt="Uploaded"
                  className="bd-placeholder-img img-thumbnail"
                  style={{ maxWidth: 200, maxHeight: 150 }}
                  onMouseOver={(e) => {
                    e.target.style.maxWidth = "400px";
                    e.target.style.maxHeight = "300px";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.maxWidth = "200px";
                    e.target.style.maxHeight = "150px";
                  }}
                />
              ))}
          </div>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            style={{ display: "none" }}
          />
        </div>
      
        <div>
          <h1>Comments</h1>
          <Comment
            userData={userData}
            placeName={selectedData ? selectedData.placeName : ""}
          />
        </div>
        
      </div>
    </>
  );
};

export default ImageDetails;
