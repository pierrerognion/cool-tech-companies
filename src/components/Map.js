import React from "react";
import ReactMapGL from "react-map-gl";

class Map extends React.Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 12
    }
  };

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this._updateViewport}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken={
          "pk.eyJ1IjoicGllcnJlcm9nbmlvbiIsImEiOiJjanZmN3VsZGkyOWsyNGVwODNoYWYwazF6In0.wAMm7TseHwSOeL-hk2YA5Q"
        }
      />
    );
  }
}

export default Map;
