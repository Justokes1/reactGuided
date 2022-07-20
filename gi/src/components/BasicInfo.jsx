import React from "react";

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Justin Zaire Stokes",
      age: "26 Years Young",
      dob: "06/29/1996",
    };
  }

  render() {
    return (
      <div>
        <h1>
          Hello, My Name is {this.state.name} I Am {this.state.age} I was Born
          on {this.state.dob}
        </h1>
      </div>
    );
  }
}

export default BasicInfo;
