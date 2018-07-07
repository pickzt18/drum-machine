import React, { Component } from 'react';
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-N'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class DrumMachine extends Component {
  constructor() {
    super();
    this.state = {
      keyCode: null,
      keyTrigger: '',
      id: 'None',
      url: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick = ({ currentTarget }) => {
    var temp = bankOne.find(e => {
      return e.keyTrigger === currentTarget.value;
    });
    this.setState(temp, () => {
      document.getElementById(currentTarget.value).play();
    });
  };
  handleKeyPress = event => {
    var temp = bankOne.find(e => {
      return e.keyCode === event.keyCode;
    });
    if (temp) {
      this.setState(temp, () => {
        document.getElementById(String.fromCharCode(event.keyCode)).load();
      });
      document.getElementById(String.fromCharCode(event.keyCode)).play();
    }
  };
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyPress, false);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyPress, false);
  };
  render() {
    return (
      <div id="drum-machine" className="container">
        <div className="inner-container">
          <div className="row btn-group-lg">
            <button
              type="button"
              className="drum-pad "
              id="heater-1"
              value="Q"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="Q"
                className="clip"
                src={this.state.url}
              />
              Q
            </button>
            <button
              type="button"
              id="heater-2"
              className="drum-pad "
              value="W"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="W"
                className="clip"
                src={this.state.url}
              />
              W
            </button>
            <button
              type="button"
              id="heater-3"
              className="drum-pad "
              value="E"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="E"
                className="clip"
                src={this.state.url}
              />
              E
            </button>
          </div>
          <div className="row btn-group-lg">
            <button
              type="button"
              id="heater-4"
              className="drum-pad "
              value="A"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="A"
                className="clip"
                src={this.state.url}
              />
              A
            </button>
            <button
              type="button"
              id="clap"
              className="drum-pad "
              value="S"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="S"
                className="clip"
                src={this.state.url}
              />
              S
            </button>
            <button
              type="button"
              id="open-hh"
              className="drum-pad "
              value="D"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="D"
                className="clip"
                src={this.state.url}
              />
              D
            </button>
          </div>
          <div className="row btn-group-lg">
            <button
              type="button"
              id="kick-n-hat"
              className="drum-pad"
              value="Z"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="Z"
                className="clip"
                src={this.state.url}
              />
              Z
            </button>
            <button
              type="button"
              id="kick"
              className="drum-pad "
              value="X"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="X"
                className="clip"
                src={this.state.url}
              />
              X
            </button>
            <button
              type="button"
              id="closed-hh"
              className="drum-pad "
              value="C"
              onClick={this.handleClick}>
              <audio
                autoload="auto"
                id="C"
                className="clip"
                src={this.state.url}
              />
              C
            </button>
          </div>
        </div>
        <div className='outercontainer'>
          <h3 id="display">{this.state.id}</h3>
        </div>
      </div>
    );
  }
}
export default DrumMachine;
