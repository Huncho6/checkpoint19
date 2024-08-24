import React, { Component } from 'react';

class App extends Component {
  state = {
    Person: {
      fullName: "Sergio Kitchens",
      bio: "Gunna Wunna",
      imgSrc: "https://images.unsplash.com/photo-1517320196996-00b476093afb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWluc3xlbnwwfHwwfHx8MA%3D%3D",
      profession: "Rapper"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <img src={this.state.Person.imgSrc} alt="Sergio Kitchens" />
            <h3>{this.state.Person.profession}</h3>
            <br />
          </>
        )}

        <button onClick={this.handleShowPerson}>Click here</button>
      </>
    );
  }
}

export default App;
