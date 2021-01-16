import {Feed,Icon} from 'semantic-ui-react'
import useSWR from 'swr'

function RepoList() {
  const {data,error}=useSWR('api/repositories/ajmarkow',getRepos())
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  async function getRepos(){
    await fetch('/api/repositories/ajmarkow').then((response)=>response)
  }

  return (
    <Feed>
      <Feed.Event>
        <Feed.Label>
          Repository:
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>

  return <div> {data}!</div>
          </Feed.Summary>
          </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default RepoList;