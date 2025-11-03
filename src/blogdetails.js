import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./fetch";

const Blogdetails = () => {
    const{id}=useParams();
    const history=useHistory();
    const handledelete=(id)=>
    {
        fetch("http://localhost:5000/blogs/"+blogs.id,{
            method:'DELETE'
            
        }).then(()=>
        {
            history.push("/");
        })}
    const{blogs,ispending,error}=useFetch("http://localhost:5000/blogs/"+id);
    return ( 
        <div className="blogdetails">
        
        <div className="article">
            {ispending && <div>Loading.. </div>}
            {error && <div>{error}</div>}
            {
                blogs && <div className="article1">
                    <article>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.author}</p>
                    <div className="a1">
                        {blogs.body}
                    </div>
                    </article>
                    <button onClick={()=>{handledelete(blogs.id)}}>delete</button>
                
                </div>
            }
        </div>
        </div>
     );
}
 
export default Blogdetails;