import repos from 'repos';
let listOfRepos= [];
const options = {
  token: 'placeholder'
}
function addResponse(response,array){
  response.forEach((item) =>
    array.push(item.full_name));
    return array;
      };

export default (req, res) => {
  const {
    query: { username }
  } = req
  console.log([`${username}`],options)
  res.statusCode = 200;
  let returned_repos = repos([`${username}`])
  .then( (response) => addResponse(response,listOfRepos));
    res.json(returned_repos)
  console.log('Done')
  }