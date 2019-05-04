import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Container1 from './Container1';
import images from '../Images';

class ClickGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    navMsgColor: '',
  navMessage: 'Click an image to begin!',
  allAnimals: this.shuffleArray(),
   wasClicked: [],
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);

  // used to shuffle the array of images when the DOM loads, and when an image is clicked


  checkClicked(clickedElem) {
    // creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images
    const prevState = this.state.wasClicked.slice();

    // shuffles the images
    const shuffled = this.shuffleArray();

    // tracks score
    let score = this.state.score;
    let topScore = this.state.topScore;

    // if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased
    if (!this.state.wasClicked.includes(clickedElem)) {
      // if score and topScore are the same, then there is a new topScore value
      if (score === topScore) {
        score++;
        topScore++;

        // if they are not equal, then only increase the score value
      } else {
        score++;
      }

      // adds the clicked item to wasClicked to track that it has been clicked
      prevState.push(clickedElem);
    }

    // resets the current score if the same element was clicked twice
    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        topScore: topScore,
        navMsgColor: 'incorrect',
        navMessage: 'Incorrect guess!',
        allAnimals: shuffled,
        wasClicked: [],
        shake: true
      });
    }

    // if this runs, then the same element has not been clicked twice and the score is increased
    this.setState({
      score: score,
      topScore: topScore,
      navMsgColor: 'correct',
      navMessage: 'You Guessed Correctly!',
      allAnimals: shuffled,
      wasClicked: prevState,
      shake: false
    });

    return setTimeout(() => this.setState({ navMsgColor: '' }), 300);
  }
  shuffleArray() {
    const newArr = images.slice();
    const shuffleArr = [];
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }
    return shuffleArr;
  }

  // renders score to the navbar.
  // passes the randomized state.allAnimals array to Container to create a Animal component for each image.
  // passes the this.checkClicked down to container to pass to each Animal component to be used for the click event.
  render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          topScore={state.topScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Container1 />
        <Container
          shake={state.shake}
          animals={state.allAnimals}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default ClickGame;
