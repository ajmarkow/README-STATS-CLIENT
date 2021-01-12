import {Feed,Icon} from 'semantic-ui-react'

function RepoList(props) {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
              <h6>Repo: ajmarkow/test</h6>

              <h5>No README found.</h5>
          </Feed.Summary>
          </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default RepoList;