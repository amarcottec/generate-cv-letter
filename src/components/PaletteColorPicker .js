import { Component } from "react";


class PaletteColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: 'green' };
  }

  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
    this.props.OnUpdateSelectedColor(event.target.value);
  };

  render() {
    return (
      <div>
        <h2>Palette de couleurs</h2>
        <select value={this.state.selectedColor} onChange={this.handleColorChange}>
          <option value="">Sélectionnez une couleur</option>
          <option value = "red">Rouge</option>
          <option value = "blue">Bleu</option>
          <option value = "green">Vert</option>
          <option value = "yellow">Jaune</option>
          <option value = "purple">Rouge</option>
        </select>
        {this.state.selectedColor && (
          <div
            style={{
              width: "100px",
              height: "25px",
              backgroundColor: this.state.selectedColor,
              marginTop: "5px",
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default PaletteColorPicker;
