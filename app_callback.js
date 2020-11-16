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


function getpost(){
    post.forEach(function(p) {
        console.log(p)
        document.body.innerHTML += `<li>${p.title}</li>`
    })
}

function setpost(pst,callback){
    post.push(pst)
    callback()

}


setpost({'title':"3rd", 'body':"dbsbbjjk"}, getpost)
