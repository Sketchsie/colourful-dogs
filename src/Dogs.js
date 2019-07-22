import React from 'react';
import { usePalette } from 'react-palette'

function Dogs(props) {
  const { data, loading, error } = usePalette(props.currImage);
  //console all colours hex codes
  // !loading && console.log(data); 

  return (
        <div className="container-fluid">
        {
          !loading ? 
          <div className="row">
            <div className="text-center image-box">
              <img src={props.currImage} className="img-fluid" style={{maxWidth: '150px'}}/>
            </div>
            <div className="col-6 col-sm-3 col-md-4 col-lg-2 mcolumn" style={{ backgroundColor: data.vibrant}}>
              <p>vibrant color</p>
              <p>{data.vibrant}</p>
            </div>
            <div className="col-6 col-sm-3 col-md-4 col-lg-2 mcolumn" style={{ backgroundColor: data.darkMuted}}>
              <p>dark muted color</p> 
              <p>{data.darkMuted}</p>
            </div>
            <div className="col-6 col-sm-3 col-md-4 col-lg-2 mcolumn" style={{ backgroundColor: data. lightMute, color: 'darkslategray'}}>
              <p>light muted color</p> 
              <p>{data.lightMuted}</p>
            </div>
            <div className="col-6 col-sm-3 col-md-4 col-lg-2 mcolumn" style={{ backgroundColor: data.lightVibrant, color: 'darkslategray'}}>
              <p>light vibrant color</p> 
              <p>{data.lightVibrant}</p>
            </div>
            <div className="col-6 col-sm-3 col-md-4 col-lg-2 mcolumn" style={{ backgroundColor: data.muted}}>
              <p>muted color</p> 
              <p>{data.muted}</p>
            </div>
            <div className="col-6 col-sm-3 col-md-4 col-lg-2 mcolumn" style={{ backgroundColor: data.darkVibrant}}>
              <p>dark vibrant color</p> 
              <p>{data.vibrant}</p>
            </div>
            <div className="text-center button-box">
              <button className="round-btn" style={{backgroundColor: data.darkMuted}}onClick={props.handleChange}>
              <img src="./reload.svg" style={{color: 'white'}} />
              </button>
            </div>
          </div>
          : <div className="row"><div className="col-12 mcolumn"><p>Loading...</p></div></div>
        }
        </div>
  );
}

export default Dogs;
