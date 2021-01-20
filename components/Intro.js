import {Container, Input} from 'semantic-ui-react';
import Image from 'next/image';

export default function Intro() {
  return(
    <Container text>
      <Image 
        src="/Octocat.png" 
        width='80'
        height='80' />
      <h1>Missing README Check</h1>
      <h4>Quickly fetch a list of your public repositories missing README.md files</h4>
      <br></br>
      <span><em>https://github.com/  </em><Input inverted action='Check READMEs' placeholder='Your Github Username' /></span>
    </Container>
  );
}
