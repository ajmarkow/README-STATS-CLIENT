import repos from 'repos';
let listOfRepos= [];
const options = {
  token: process.env.GIT_TOKEN
}
 function addResponse(response,array){
   response
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
  let returned_repos = await repos([`${username}`],options).then( (response) => addResponse(response,listOfRepos));
  let aj_json = JSON.stringify(returned_repos);  
  res.end(aj_json);
    console.log(returned_repos)
  console.log('Done')
  }