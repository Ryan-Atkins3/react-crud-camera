import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [allCameras, setCamera] = useState(null);
  //if there are rappers saved locally then this displays them
  //  useEffect(() => {
  //    if(localStorage){
  //      const rappers = JSON.parse(localStorage.getItem('rappers'));
  //      if(rappers){
  //        setRappers(rappers)
  //      }
  //    }
  //  }, []);
  function resetCameras() {
    const seedCameraData = [
      {
        Brand: "Canon",
        Model: "Eos R",
        Type: "Mirrorless",
        Img: "./imgs/eos-r.jpg",
      },
      {
        Brand: "Panasonic",
        Model: "Panasonic Lumix FZ80",
        Type: "Digital",
        Img: "./imgs/fz80.jpg",
      },
      {
        Brand: "Sony",
        Model: "ILCE6400/B",
        Type: "Mirrorless",
        Img: "./imgs/a6400.jfif",
      },
      {
        Brand: "Canon",
        Model: "EOS REBEL T7",
        Type: "DSLR",
        Img: "./imgs/t7.jpg",
      },
      {
        Brand: "Panasonic",
        Model: "Panasonic LUMIX S5",
        Type: "Mirrorless",
        Img: "./imgs/s5.jpg",
      },
      {
        Brand: "Olympus",
        Model: "OLYMPUS OM-D E-M5 Mark III",
        Type: "DSLR",
        Img: "./imgs/mark3.jpg",
      },
      {
        Brand: "Olympus",
        Model: "OLYMPUS OM-D E-M1X",
        Type: "SLR-Style Compact",
        Img: "./imgs/",
      },
      {
        Brand: "Sony",
        Model: "Sony Alpha 7 IV",
        Type: "Mirrorless",
        Img: "./imgs/",
      },
      {
        Brand: "Canon",
        Model: "EOS-1D X Mark III",
        Type: "DSLR",
        Img: "./imgs/",
      },
      {
        Brand: "Canon",
        Model: "Rebel t6",
        Type: "DSLR",
        Img: "./imgs/",
      },
    ];
    setCamera(seedCameraData);

    saveCameras(seedCameraData);
  }
  //save rappers locally
  function saveCameras(allCameras) {
    if (localStorage) {
      localStorage.setItem("cameras", JSON.stringify(allCameras));
      console.log("Saved rappers to local storage");
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Camera Time</h1>
      {!allCameras && (
        <button className='text-capitalize btn btn-lg btn-warning' onClick={resetCameras}>
          Click to show and save cameras
        </button>
      )}
      <div className='row'>
        {allCameras &&
          allCameras.map((camera, index) => {
            return (
              <div key={index} className='d-flex justify-content-center col-md-4'>
                <div className='mb-2 card'>
                  <img src={camera.Img} className='card-img-top' alt=''></img>
                  <div className='d-flex flex-column  card-body'>
                    <h2 className='fs-4 card-title'>{camera.Brand}</h2>
                    <div className='d-flex flex-column align-content-between'>
                      <p className='card-text'>{camera.Model}</p>
                      <div className='justify-content-end'>
                        <p className='mt-2 text-muted'>{camera.Type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
