// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const repos = require('repos')
const options = {
  token: 'placeholder'
}
export default (req, res) => {
  let listOfRepos= [];
  let countOfRepos=0
  res.statusCode = 200
  let result = repos(['ajmarkow'],options)
  .then( function(repos) {
    repos.forEach(element =>
      listOfRepos.push(element.full_name));
      return countOfRepos+=1
    res.json(listOfRepos)
  })
  console.log(countOfRepos)
}
