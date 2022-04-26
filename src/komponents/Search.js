import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kalitSoz: "",
    };
    // this.getInputValue = this.getInputValue.bind(this);
  }
  getInputValue = (e) => {
    this.setState({
      kalitSoz: e.target.value,
    });
    // console.log(this.state.kalitSoz);
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.props.kerak(this.state.kalitSoz);
  };
  render() {
    return (
      <div style={{ marginTop: "20px" }} className="ui container">
        <form className="ui category search" onSubmit={this.formSubmit}>
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              className="prompt"
              type="text"
              placeholder="Search images..."
              onChange={this.getInputValue}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}
export default Search;
