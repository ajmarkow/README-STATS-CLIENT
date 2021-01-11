import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Icon,Input } from 'semantic-ui-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>README.md Reader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Analyze Your Repos</h1>
      <h4>Enter your username, see your README Status</h4>
      <Input action='Get README Info' placeholder='Your Github Username' />


      <footer className={styles.footer}>
      <Link href="https://www.github.com/ajmarkow/readme_reader">
        <p><Button color ='github'><Icon name='github' />Project on Github</Button></p>
      </Link>
      </footer>
    </div>
  )
}
