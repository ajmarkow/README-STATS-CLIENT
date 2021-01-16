import repos from 'repos';


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
  let listOfRepos= [];
  const {
    query: { username }
  } = req
  res.statusCode = 200;
  let returned_repos = await repos([`${username}`],options)
    .then( (response) => addResponse(response,listOfRepos))
    .catch((error) => { 
      let errorMessage= JSON.stringify(error)
      console.log(errorMessage);
      res.status(404).json({ body: `${error}` })
    })
  let repositoriesAsJSON = JSON.stringify(returned_repos);  
  res.end(repositoriesAsJSON);
  listOfRepos.length = 0;
  }