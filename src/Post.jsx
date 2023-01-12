import "./App.css"
function Post({postData}){
    let{id,title,body}=postData
    console.log(title)
    return(
        <div key={id}  className="card">
            <p className="card-title">Id :{id}</p>
            <p className="card-text">Title : 
            {title}</p>
            <p className="body">body : {body}</p>
        </div>
    )
}

export default Post