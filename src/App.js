import React from 'react';
import { usePalette } from 'react-palette'
import constants from './constants.js'
function getRandomImage() {
  return constants.images[Math.floor(Math.random() * constants.images.length)];
}

function App() {
  const currImage = getRandomImage();
  const { data, loading, error } = usePalette(currImage);
  //console all colours hex codes
  // !loading && console.log(data); 

  return (
        <div className="container-fluid">
        {
          !loading ? 
          <div className="row">
            <div className="text-center image-box">
              <img src={currImage} width='200'/>
            </div>
            <div className="col-2 mcolumn" style={{ backgroundColor: data.vibrant}}>
              <p>vibrant color</p>
              <p>{data.vibrant}</p>
            </div>
            <div className="col-2 mcolumn" style={{ backgroundColor: data.darkMuted}}>
              <p>dark muted color</p> 
              <p>{data.darkMuted}</p>
            </div>
            <div className="col-2 mcolumn" style={{ backgroundColor: data. lightMute, color: 'darkslategray'}}>
              <p>light muted color</p> 
              <p>{data.lightMuted}</p>
            </div>
            <div className="col-2 mcolumn" style={{ backgroundColor: data.lightVibrant, color: 'darkslategray'}}>
              <p>light vibrant color</p> 
              <p>{data.lightVibrant}</p>
            </div>
            <div className="col-2 mcolumn" style={{ backgroundColor: data.muted}}>
              <p>muted color</p> 
              <p>{data.muted}</p>
            </div>
            <div className="col-2 mcolumn" style={{ backgroundColor: data.darkVibrant}}>
              <p>dark vibrant color</p> 
              <p>{data.vibrant}</p>
            </div>
          </div>
          : <div className="row"><div className="col-12 mcolumn"><p>Loading...</p></div></div>
        }
        </div>
  );
}

export default App;
