const post = [
    { 
        'title' : '1st post',
         'body'  : 'data is being loaded'
     },
     {
         'title' : '2nd Post',
         'body' : " data for 2nd post"
     }
 ]



 function getposts(){
     post.forEach(function(p){
        document.body.innerHTML += `<li>${p.title}</li>`
     })
 }

 function setpost(p){
     return new Promise(function(resolve, reject){
     post.push(p)
     const error = false;
     if(error){
         reject("something went wrong");
     }
     else{
         resolve()
     }
    })
 }

 setpost({'title':"3rd", 'body':"dbsbbjjk"}).then(getposts).catch(function(err){
     console.log(err)
 })