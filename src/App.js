import React, { Component } from 'react';
import './App.css';
import { Header } from "./Header";
import { Section } from "./Job-Details";
import { Form } from "./Form";
import { PreviewSection } from "./Preview-Section";
import { Footer } from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    fetch("./listing.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(err => console.log(err));
}
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Section listing={this.state.data} />
          <Form />
          <PreviewSection />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
