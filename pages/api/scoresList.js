export default (req, res) => {
  let scoresForRepos=[]
    for (const repo of listOfRepos) {
            fetch(`http://readme-score.herokuapp.com/score.json?url=${repo}&human_breakdown=true&force=false`).then(function(response){
              return scoresForRepos.push(response);
            })
            console.log(scoresForRepos);
  }
}