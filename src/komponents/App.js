import React from "react";
import Search from "./Search.js";
import Image from "./Image.js";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: [],
    };
  }
  gettingSearchValue = async (data1) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: data1,
        page: 3,
        per_page: 10,
      },
      headers: {
        Authorization: "Client-ID kVJGYl6sVSVnEXuugaSyLnyzIqRL6i6Yfc58mzohXxo",
      },
    });
    this.setState({ imgArr: data.data.results });
  };
  render() {
    return (
      <div>
        <Search kerak={this.gettingSearchValue} qidir={this.getData} />
        <Image arr={this.state.imgArr} />
      </div>
    );
  }
}
export default App;
