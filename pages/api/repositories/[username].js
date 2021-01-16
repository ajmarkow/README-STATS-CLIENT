import repos from 'repos';
const options = {
  token: ''
}
export default (req, res) => {
  function addResponse(response){
    response.forEach((item) =>
      console.log(item.full_name));
        };
  const {
    query: { username }
  } = req
  console.log([`${username}`,options])
  let listOfRepos= [];
  res.statusCode = 200;
  let response = repos([`${username}`])
  .then( (response) => addResponse(response));
    res.json(listOfRepos)
  console.log('Done')
  }