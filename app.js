// Progression 1: create a function and fetch the api using axios
function getData(){

  // using axions

const API_key="1e688daec0bb80386dfd9e20aaa9af71";
const api =`https://gnews.io/api/v4/search?q=example&apikey=${API_key}`;

axios.get(api).then((res)=>{
  console.log(res)
  listOfArticles=res.data.articles;
  listOfArticles.forEach((article)=>{
// accessing the info from article 
    let title=article.title;
    let img= article.image;
    let des=article.description;
// making tag to store the info
    let titleTag=document.createElement("h3");
    let imgTag=document.createElement("img");
    let desTab= document.createElement("p")
// store info in element
    titleTag.innerText=title;
    imgTag.src=img;
    desTab.innerText=des;
// making article box 
    let articlebox=document.createElement("div");
    articlebox.setAttribute("class","article");
    articlebox.append(titleTag,imgTag,desTab);

    document.getElementById("blog").append(articlebox)






  })
















}).catch((err)=>{
  console.log(err.message)
})

}

getData();


  // using fetch


//   fetch("https://gnews.io/api/v4/search?q=example&apikey=b63cf307a70959e7a80bf75c786d915b").then((response)=>response.json()
//   ).then((result)=>{
//     console.log(result);
//   }).catch((error)=>{
//     console.log("Promise rejected");
//     console.log(error.message);
//   });
// }





















// async function getData(){
//   let api="GET https://gnews.io/api/v4/search?q=example&apikey=b63cf307a70959e7a80bf75c786d915b";
//   try{

//     let res=await fetch(api);
//     console.log(res)
//     let data = await res.json();
//     console.log(data)

//   }catch(err){
//     console.log(err.message)
//   }
// }
// getData()