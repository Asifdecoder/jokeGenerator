let h1 = document.querySelector('h1')
let ul = document.querySelector('ul')
let li = document.querySelector('li')
let button = document.querySelector('button')
h1.style.color='white'
h1.style.textTransform="uppercase"
//Fethcing using fetch api

fetch(
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
)
  .then(function (response) {
    console.log(response); // we are getting the response on the console but it is the half data for getting the full data we need to add .json to wait for all the data as the data is in the packets that is why we are getiting the data but in meta data form or in the form of header
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    console.log(data.joke)

    function domMan(){

      h1.append(data.joke)

       button.addEventListener('click',function(){

        location.reload();

       })

    }
    domMan()

    //category
    //joke

  })
  .catch(function (err) {
    console.log(err);
  });
