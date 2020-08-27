import React from 'react';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';


class App extends React.Component {

  state = { instructor: {} }
  appClickHandler = (instructor_obj) => {

    console.log("%c App Parent", 'color: yellow', instructor_obj)
    this.setState({ instructor: instructor_obj})
  }
  render() {
    
    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </>
    );
  }
}






export default App;
