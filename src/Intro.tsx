import * as React from "react";
import { Slide, Text, Notes } from "spectacle";

const intro = [
  <Slide>
    <Notes>
      <ul>
        <li>
          Hello everyone. I'm Leo, a software engineer, and former javascript
          enthusiast.
        </li>
        <li>And that's because lately I ditched Javascript over to (click)</li>
      </ul>
    </Notes>
    <Text>Type theory with Typescript</Text>
  </Slide>,
  <Slide>
    <Notes>
      Typescript. Now you say: how do you have the guts to come to a
      javascript meeting and not talk about javascript?
    </Notes>
    <Text>Typescript</Text>
  </Slide>,
  <Slide>
    <Notes>
      <ul>
        <li>typescript IS javascript</li>
        <li>It's a superset of javascript</li>
        <li>Anything you can write in JS you can write in javascript</li>      
      </ul>
    </Notes>
    <Text>Typescript IS javascript</Text>
  </Slide>,
  <Slide>
    <Notes>
      <ul>
        <li>So why change?</li>
        <li>That's because, obviously, typescript has Types (next slide)</li>
      </ul>
    </Notes>
    <Text>Why use typescript and not javascript?</Text>
  </Slide>,
  <Slide>
    <Notes>
      <ul>
        <li>And this is where the controversy begins</li>
        <li>It's often said that types are annoying and verbose</li>
        <li>And why do you need types when you have unit testing</li>
        <li>Those are valid points. </li>
      </ul>
    </Notes>
    <Text>TYPES</Text>
  </Slide>
];

export default intro;