import React from 'react';
import Dogs from './Dogs';
import Cookies from "js-cookie";
import constants from './constants.js'

function getRandomImage() {
  const rand = Math.floor(Math.random() * constants.images.length);
  return constants.images[rand];
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colourfulDogsOnboard: Cookies.get('colourfulDogsOnboard'),
      currImage: getRandomImage()
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (!this.state.colourfulDogsOnboard) {
      console.log('Show notification');
      const TWO_MINUTES = new Date(new Date().getTime() + 2 * 60 * 1000);
      Cookies.set('colourfulDogsOnboard', true, {expires: TWO_MINUTES, path: '/'});
    } else {
      console.log('Dont show notification');
    }
  }

  handleChange() {
    this.setState({
      currImage: getRandomImage()
    })
  }
  
  render() {
     return (
        <div style={{height: '100%'}}>
          <Dogs currImage={this.state.currImage} handleChange={this.handleChange}/>
        </div>
    );
  }
}

export default App;
