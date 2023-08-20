const $gifList = $("#gifs-added");
const $search = $("#search-btn");

function getGif(gif) {
      let allResults = gif.data.length;
      if(allResults){
        let randIdx = Math.floor(Math.random()*allResults); //thid will randomize all the result indeces returned from api
        let newGif = gif.data[randIdx].images.original.url;// takes the data returned, randomly selects array index,then searches the object for the original image url
         
        console.log(newGif);//checks for random url based on userinput
        $('ul').append(`<li><img src=${newGif}/></li>`);  //adds img to list based on url
      }
    };

($search).on("click", async function(e) {
  e.preventDefault();
      
  let term = $("#gif-name").val(); //userinput 
  $("#gif-name").val("");

  console.log(term);//checks value of userinput
     
    
    const giphy = await axios.get("http://api.giphy.com/v1/gifs/search", 
     { params: { 
        q: term,
        api_key: "TO6eXqYLWwi1WGhfKZftEzUJx9JksXKK"
      }});//api
      
    console.log(giphy);
    getGif(giphy.data);
    }); //search, return, add to list.

    $('#remove-btn').on("click", function (){
    $gifList.empty(); 
  });

 
 // &api_key=TO6eXqYLWwi1WGhfKZftEzUJx9JksXKK"


