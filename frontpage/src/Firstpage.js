import React from "react";
import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Firstpage() {
  const localHost = `http://localhost:5000/home`;
  // const server = `https://video-format-converter.herokuapp.com/home`;
  const [video, setVideo] = useState("");
  const [videoname, setVideoname] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [ennable,setennable]=useState(true)

  const onChange = (e) => {
    setVideo(e.target.files[0]);
    setVideoname(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", video);

    try {
      const res = await axios.post(localHost, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File only accepted!");
    } catch (error) {
      setMessage("SOMETHIGN WRONG IN THE CLOUDS");
    }
    setTimeout(() => {
        setennable(false);
    },3000);
  };
  return (
    <>
      <header className="header">
        <div className="Dashboard">
          <FontAwesomeIcon icon={faVideo} />
          {"\u00a0"}MP4 TO HSL
        </div>
        <Link to="/next">
          <button disabled={ennable} className={ennable ? "button-one":"button-two"}>{ennable ? "KINDLY SELECT & UPLOAD MP4 FILE":"CLICK HERE TO SEE YOUR HSL FILE"}</button>
        </Link>
      </header>
      <div className="">
      <div className="container-fluid">
        <div className="header">
          <form onSubmit={onSubmit}>
            <label
              className="custom-file-label fs-3 text"
              htmlFor="inputGroupFile01"
            >
              Choose file
            </label>
            <div className="input-group mb-3">
              <input
                type="file"
                id="customFile"
                className="form-control"
                accept="video/mp4"
                onChange={onChange}
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
            <div className="content">
              {video && (
                <div className="App">
                  <div className="text-centre mb-2">
                    <h5>{videoname}</h5>
                  </div>
                  <div className="d-flex m-50">
                    <div>
                      <video
                        controls
                        width="70%"
                        src={URL.createObjectURL(video)}
                      ></video>
                    </div>
                    <div className="text-align-right">
                      <input type="submit" value="Upload" className="button-one" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default Firstpage;
