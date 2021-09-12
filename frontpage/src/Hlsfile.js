import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo } from '@fortawesome/free-solid-svg-icons';

function Hlsfile() {
    const localHost = `http://localhost:5000/home`;
    // const server = `https://video-format-converter.herokuapp.com/home`;
    const [fileList, setFileList] = useState([]);
  
    useEffect(() => {
        getData();
    }, [])
    let getData = async () => {
        try {
          const HLSFILE = await axios.get(localHost);
          console.log(HLSFILE.data);
          setFileList(HLSFILE.data);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <>
        <header className="header">
        <div className="Dashboard">
          <FontAwesomeIcon icon={faFileVideo} />
          {"\u00a0"}HLSFILE
        </div>
        <div>
        <button className="button-one" onClick={getData}>Refresh</button>
        <Link to="/"> <button className="button-one">previous  page</button></Link>
        </div>
      </header>
    
          <div className="container-fluid margin">
            <table className="table table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col">S. No.</th>
                  <th scope="col">Converted HSL file</th>
                </tr>
              </thead>
              <tbody>
                {fileList.map((item, index) => {
                  return (
                    <tr key={index + 1}>
                      <th>{index + 1}</th>
                      <td>{item.fileName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
        
        </>
    )
}

export default Hlsfile
