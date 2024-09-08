// SignUp.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Views/Screen.css";
import Api from "../../Api.js";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    mobileNumber: "",
  });

  const [preview, setPreview] = useState("");
  const [additionalFields, setAdditionalFields] = useState({
    aadharNumber: "",
    certificationAddress: "",
    licenceNumber: "",
    aadharFile: null,
    licenceFile: null,
    certificationFile: null,
    Place: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageData = preview.split(",")[1];
      const aadharFileData = additionalFields.aadharFile
        ? await fileToBase64(additionalFields.aadharFile)
        : null;
      const licenceFileData = additionalFields.licenceFile
        ? await fileToBase64(additionalFields.licenceFile)
        : null;
      const certificationFileData = additionalFields.certificationFile
        ? await fileToBase64(additionalFields.certificationFile)
        : null;

<<<<<<< HEAD
      const response = await axios.post("https://travelling-backend.onrender.com/auth/register", {
=======
      await axios.post(`${Api}/auth/register`, {
>>>>>>> d368039 (improvements)
        ...formData,
        ...additionalFields,
        image: imageData,
        aadharFile: aadharFileData,
        licenceFile: licenceFileData,
        certificationFile: certificationFileData,
      });

      toast.success("Successfully registered user.");

      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Failed to register user. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      setPreview(base64data);
    };
    reader.readAsDataURL(file);
  };

  const handleAdditionalInputChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFields({
      ...additionalFields,
      [name]: value,
    });
  };

  const handleAdditionalFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setAdditionalFields({
      ...additionalFields,
      [fieldName]: file,
    });
  };

  return (
    <div id="main">
      <div id="container-login">
        <h1>Sign up</h1>
        <div className="form-group-btm">
          <label>Role:</label>
          <div>
            <input
              type="radio"
              id="user"
              name="role"
              value="user"
              checked={formData.role === "user"}
              onChange={handleInputChange}


            />
            <label htmlFor="user">User</label>
          </div>
          <div>
            <input
              type="radio"
              id="driver"
              name="role"
              value="driver"
              checked={formData.role === "driver"}
              onChange={handleInputChange}
            />
            <label htmlFor="driver">Driver</label>
          </div>
          <div>
            <input
              type="radio"
              id="guide"
              name="role"
              value="guide"
              checked={formData.role === "guide"}
              onChange={handleInputChange}
            />
            <label htmlFor="guide">Guide</label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              id="input"
              type="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input
              id="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              id="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              id="input"
              type="mobileNumber"

              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {formData.role === "guide" && (
            <>
              <div className="form-group">
                <label>Aadhar Number:</label>
                <input
                  id="input"
                  type="aadharNumber"

                  name="aadharNumber"
                  value={additionalFields.aadharNumber}
                  onChange={handleAdditionalInputChange}
                  required
                />
                <label>Aadhar File:</label>
                <input
                  id="input"

                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleAdditionalFileChange(e, "aadharFile")}
                  required
                />
              </div>
              <div className="form-group">
                <label>Certification Address:</label>
                <input
                  name="certificationAddress"
                  type="certificationAddress"

                  value={additionalFields.certificationAddress}
                  onChange={handleAdditionalInputChange}
                  required
                />
                <label>Certification File:</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    handleAdditionalFileChange(e, "certificationFile")
                  }
                  required
                />
              </div>
            </>
          )}
          {formData.role === "driver" && (
            <>
              <div className="form-group row">
                <div className="col">
                  <label>Aadhar Number:</label>
                  <input
                    type="text"
                    id="input"

                    
                    name="aadharNumber"
                    value={additionalFields.aadharNumber}
                    onChange={handleAdditionalInputChange}
                    required
                  />
                </div>
                <div className="col">
                  <label>Aadhar File:</label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                      handleAdditionalFileChange(e, "aadharFile")
                    }
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <label>License Number:</label>
                  <input
                                id="input"

                    type="text"
                    name="licenceNumber"
                    value={additionalFields.licenceNumber}
                    onChange={handleAdditionalInputChange}
                    required
                  />
                </div>
                <div className="col">
                  <label>License File:</label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                      handleAdditionalFileChange(e, "licenceFile")
                    }
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div className="form-group">
            <label>User Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {preview && <img src={preview} alt="Preview" />}
          </div>

          <div className="form-group">
            <button className="btn" type="submit">Sign Up</button>
          </div>
        </form>
        <div className="link">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
