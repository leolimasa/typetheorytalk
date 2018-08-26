import * as React from 'react';
import './App.css';
import { Deck, Slide, Text } from 'spectacle';

class App extends React.Component {
  public render() {
    return (
      <Deck>
        <Slide>
          <Text>WASSUP</Text>
        </Slide>
        <Slide>
          <Text>BROTHA!</Text>
        </Slide>
      </Deck>
    );
  }
}

export default App;
