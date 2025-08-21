function getCommentData(){
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
        console.log(res.data);
        
    })

}
// getCommentData()

async function getCommentData2(){
    try{
    const res =  await axios.get("https://jsonplaceholder.typicode.com/comments")
    console.log(res.data);
    
}
    catch(err){
        console.log(err);
        
    }
}
getCommentData2()

function adduser(email,password){
    axios.post('/user', {
        email: email,
        password: password
  })
  
  .then(()=>{
    console.log(res.data);
    })

  .catch(()=>{
    console.log(err.massage);
    })
}
 adduser("yash123@gmail.com","abcd");