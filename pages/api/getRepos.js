// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const repos = require('repos')

export default (req, res) => {
  let listOfRepos= [];
  let scoresForRepos=[]
  res.statusCode = 200
  let result = repos(['leerob'])
  .then( function(repos) {
    repos.forEach(item =>
      listOfRepos.push(item.full_name));
      for (const repo of listOfRepos) {
        await fetch(`http://readme-score.herokuapp.com/score.json?url=${repo}&human_breakdown=true&force=false`).then(function(response){
          return scoresForRepos.push(response);
        })
        console.log(scoresForRepos);
      }
      res.json(scoresForRepos)
  })
  console.log('Done')
}