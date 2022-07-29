import React ,{ useEffect, useState } from "react";
import axios from 'axios'


function UserList() {
    const [posts, setPosts]= useState([])
    
useEffect(()  => {
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
    console.log(res)
    setPosts(res.data)
})
.catch(err =>{
    console.log(err)
})
} ,[])

return(

    
    <div className="list">
        <div>
            <h1>jsonplaceholder list</h1>
        </div>
    <br></br>
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.name}</li>)
            }
        </ul>
    </div>
)

}
export default UserList
