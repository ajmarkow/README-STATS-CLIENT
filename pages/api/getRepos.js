// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const repos = require('repos')
const readmeInspector = require('readme-inspector')
readmeInspector.authenticate({
  token: 'placeholder',
})
const options = {
  token: 'placeholder'
}
export default (req, res) => {
  let listOfRepos= [];
  res.statusCode = 200
  let result = repos(['leerob'],options)
  .then( function(repos) {
    repos.forEach(item =>
      listOfRepos.push(item.full_name));
      // listOfRepos.map(item => readmeInspector.getReadmeScore(`https://github.com/${item}`))
      res.json(listOfRepos)
  })
  console.log('Done')
}
