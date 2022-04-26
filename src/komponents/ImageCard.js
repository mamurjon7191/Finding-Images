import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgDom = React.createRef();
    this.state = { spans: 0 };
  }
  setHeight = () => {
    const height = this.imgDom.current.clientHeight;

    const spans = Math.ceil(height / 10);
    this.setState({
      spans: spans,
    });
    // console.log(this.imgDom.current.clientHeight);
  };
  componentDidMount = () => {
    // console.log(this.imgDom.current.clientHeight);
    this.imgDom.current.addEventListener("load", this.setHeight);
  };
  render() {
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imgDom}
        src={this.props.data.urls.regular}
        key={this.props.data.id}
      ></img>
    );
  }
}

export default ImageCard;
