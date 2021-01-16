import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Grid, Image,Button, Icon,Input,h1,h4 } from 'semantic-ui-react'
import Link from 'next/link'
import Intro from '../components/Intro'
import RepoList from '../components/RepoList'


export default function Home() {
  return (
    <div>
      <Head>
        <title>README Check</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <div class='ui grid'>
      <div class="ten wide column">
        <RepoList></RepoList>
      </div>
  <div class="six wide column"></div>
      </div>
      <footer className={styles.footer}>
      <Link href="https://www.github.com/ajmarkow/readme_reader">
        <p><Button inverted color ='blue'><Icon name='github' />Project on Github</Button></p>
      </Link>
      </footer>
    </div>
  )
}
