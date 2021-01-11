import {Container, Input,h1,h4} from 'semantic-ui-react';
import Image from 'next/image';

export default function Intro() {
  return(
    <Container text>
      <Image 
        src="/Octocat.png" 
        width='80'
        height='80' />
      <h1>Analyze Your Repos</h1>
      <h4>Quickly fetch a list of your public repositories missing README.md files</h4>
      <br></br>
      <span><em>https://github.com/  </em><Input inverted action='Check For READMEs' placeholder='Your Github Username' /></span>
    </Container>
  );
}
