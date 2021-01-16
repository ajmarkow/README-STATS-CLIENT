import repos from 'repos';
let listOfRepos= [];
const options = {
  token: process.env.GIT_TOKEN
}
async function addResponse(response,array){
  await response
  response.forEach((item) =>
    array.push(item.full_name));
    console.log(array);
    return array;
      };

export default async (req, res) => {
  const {
    query: { username }
  } = req
  console.log([`${username}`])
  res.statusCode = 200;
  let returned_repos = repos([`${username}`],options).then( (response) => addResponse(response,listOfRepos));
    res.json(returned_repos)
    console.log(returned_repos)
  console.log('Done')
  }