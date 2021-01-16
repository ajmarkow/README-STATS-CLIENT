import repos from 'repos';
const options = {
  token: process.env(['GIT_TOKEN'])
}
export default (req, res) => {
  function addResponse(response,array){
    response.forEach((item) =>
      array.push(item.full_name));
        };
  const {
    query: { username }
  } = req
  console.log([`${username}`,options])
  let listOfRepos= [];
  res.statusCode = 200;
  let response = repos([`${username}`])
  .then( (response) => addResponse(response,listOfRepos));
    res.json(listOfRepos)
  console.log('Done')
  }