import React from "react";
import Pad from "./components/Pad";
import "./App.css";

const data = [
  {
    keyCode: 81,
    letter: "Q",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 87,
    letter: "W",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 69,
    letter: "E",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 65,
    letter: "A",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    keyCode: 83,
    letter: "S",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 68,
    letter: "D",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 90,
    letter: "Z",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 88,
    letter: "X",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
  {
    keyCode: 67,
    letter: "C",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      bank: data,
      display: String.fromCharCode(160),
      volSlider: 0.5,
    };
    this.adjustVolume = this.adjustVolume.bind(this);
    this.displayClear = this.displayClear.bind(this);
    this.powerControl = this.powerControl.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  powerControl() {
    if (!this.state.power) {
      this.setState({
        power: true,
        display: "Mode: ON",
      });
    } else {
      this.setState({
        power: false,
        display: "Mode: OFF",
      });
    }
    setTimeout(() => this.displayClear(), 2000);
  }

  adjustVolume(e) {
    if (this.state.power) {
      this.setState({
        volSlider: e.target.value,
        display: "Volume= " + Math.round(e.target.value * 100),
      });
      setTimeout(() => this.displayClear(), 1000);
    }
  }

  updateDisplay(e) {
    this.setState({
      display: e,
    });
  }

  displayClear() {
    this.setState({
      display: String.fromCharCode(160),
    });
  }

  render() {
    const powerSlider = this.state.power
      ? {}
      : {
          transform: "translateX(-26px)",
        };
    const backgroundOFF = this.state.power
      ? {}
      : {
          backgroundColor: "#ccc",
        };

    const pad = this.state.bank.map((obj, i) => {
      return (
        <Pad
          index={i}
          obj={obj}
          power={this.state.power}
          volume={this.state.volSlider}
          bank={this.state.bank}
          updateDisplay={this.updateDisplay}
          displayClear={this.displayClear}
        />
      );
    });
    return (
      <div id="wrapper">
        <div id="drum-machine">
          <h1>Drum Machine</h1>
          <div className="power">
            <h3>Power</h3>
            <div
              className="btn-outside"
              style={backgroundOFF}
              onClick={this.powerControl}
            >
              <div className="btn-inside" style={powerSlider} />
            </div>
          </div>
          <div className="drum-pad-wrapper">{pad}</div>
          <div className="controls-container">
            <div id="display" style={backgroundOFF}>
              {this.state.display}
            </div>

            <div className="volume-slider">
              <h3>Volume</h3>
              <input
                type="range"
                min="0"
                max="1"
                step="0.02"
                value={this.state.volSlider}
                onChange={this.adjustVolume}
              />
            </div>
          </div>
        </div>
        <footer>
          by{" "}
          <a
            href="https://codepen.io/sid2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            sid2021{" "}
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
