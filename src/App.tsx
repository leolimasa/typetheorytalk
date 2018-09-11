import * as React from "react";
import intro from "./Intro";
import "./App.css";
import { Deck, Slide, Text } from "spectacle";

class App extends React.Component {
  public render() {
    return (
      <Deck>
        {intro}
        <Slide>
          <Text>After the intro</Text>
        </Slide>
      </Deck>
    );
  }
}

export default App;
