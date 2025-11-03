import {  useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('mario');
    const[ispending,setIspending]=useState(false);
    const history=useHistory();
    const handleevent=(e)=>
    {
        // e.preventDefault();
        const blog={title,body,author}
        console.log(blog);
        fetch("http://localhost:5000/blogs", {
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(blog)

        }).then(()=>
        {
            setIspending(false);
          history.go(-1);
        })
    }

    return ( 
        <div className="create">
            {/* <h1>welcome to blogs creation page</h1> */}
            <form onSubmit={handleevent} >
                <label id="q3">
                      <h1>welcome to blogs creation page</h1>
                </label>
                <div>
                <label>
                    Enter your title:
                </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div>
                <label>enter your blog:</label>
                <input type="text" required value={body} onChange={(e)=>setBody(e.target.value)}></input>
                </div>
                <div>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                      <option value="yoshi">Youshi</option>
                </select>
                </div>
             {!ispending&&   <button >submit</button>}
             {ispending && <button disabled>blog adding..</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                
            </form>
        </div>
     );
}
 
export default Create;