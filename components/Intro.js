import {Container, Input,h1,h4} from 'semantic-ui-react';

export default function Intro() {
  return(
    <Container text>
      <h1>Analyze Your Repos</h1>
      <h4>Quickly fetch a list of your public repositories missing README.md files</h4>
      <br></br>
      <span><em>https://github.com/  </em><Input inverted action='Check For READMEs' placeholder='Your Github Username' /></span>
    </Container>
  );
}
