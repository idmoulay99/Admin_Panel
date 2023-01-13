import React, {useState, useEffect } from 'react'
import fetchApi from '../../data/fetchApi'
import './style.css'

function Users(props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchApi("users", setUsers);
    },[])
    
    
    
    return (
    <div className='Users'>
        {
            users.map((User,index)=>{
                return( 
                    
                    <div className='User'>
                    <img src= {props.photo}  />
                <h1>{User.username}</h1>
                <h4>{User.name}</h4>
                <p> Email : {User.email}</p>
                <p> adress : {User.adress.street}, {User.adress.suite} </p>
                <p> Tel : {User.adress.street}, {User.adress.suite} </p>
                </div>
                
                
            )
        
                })
            }
    </div>
)}

export default Users;