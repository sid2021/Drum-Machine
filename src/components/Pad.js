import React from "react";

const padPressed = {
  border: "2px solid white",
};

const padNotPressed = {
  border: "2px solid black",
};

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.obj.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    if (this.props.power) {
      const sound = document.getElementById(this.props.obj.letter);
      sound.currentTime = 0;
      sound.volume = this.props.volume;
      sound.play();
      this.props.updateDisplay(this.props.obj.id);
      setTimeout(() => this.props.displayClear(), 1000);
      this.setState({
        playing: true,
      });
      setTimeout(() => {
        this.setState({ playing: false });
      }, 100);
    }
  }

  render() {
    const style = !this.props.power
      ? { background: "#ccc", color: "#ccc", border: "2px solid black" }
      : this.state.playing
      ? padPressed
      : padNotPressed;
    return (
      <div
        className="drum-pad"
        id={this.props.obj.id}
        onClick={this.playSound}
        style={style}
      >
        <audio
          src={this.props.obj.url}
          id={this.props.obj.letter}
          className="clip"
        />
        {this.props.obj.letter}
      </div>
    );
  }
}

export default Pad;
