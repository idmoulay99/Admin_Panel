import React,{useEffect,useState} from "react";
import Post from "./Post";
import  axios from "axios"
function  Postes(){
    const[post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res);
            setPost(res.data)

        }).catch(err=>console.log(err))
    },[])
    return(
        <div className="all">
            {post.map((e,index)=><Post postData={e} key={index}/>)}
        </div>
    )
}                                              
export default Postes