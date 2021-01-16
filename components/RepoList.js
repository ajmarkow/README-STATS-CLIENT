import {Feed,Icon} from 'semantic-ui-react'
import useSWR from 'swr'

function RepoList() {
  const {data,error}=useSWR('api/repositories/ajmarkow',getRepos())
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  async function getRepos(){
    await fetch('/api/repositories/ajmarkow').then((response)=>response)
  }

  const repositories = data.map((item) =>
    <li>{item}</li>
  );
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
          <h4>Repository:</h4>
            <ul>{repositories}</ul>
          </Feed.Summary>
          </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default RepoList;