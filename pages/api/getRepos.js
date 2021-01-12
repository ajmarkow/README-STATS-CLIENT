// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const repos = require('repos')
const options = {
  token: '18676583cc72e6c2a8c72a75a4166000d32ca523'
}
export default (req, res) => {
  let listOfRepos= [];
  res.statusCode = 200
  let result = repos(['leerob'],options)
  .then( function(repos) {
    repos.forEach(item =>
      listOfRepos.push(item.full_name));
      res.json(listOfRepos)
  })
  console.log('Done')
}
