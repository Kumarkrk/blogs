import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Bloglist = ({blogs,title}) => {
    // const blogs=props.blogs;
    // const title=props.title;
    // const deleteblog=props.handledelete;
  
    return ( 
    
       <div className="bloglist1">

         <h2>{title}</h2>

        {blogs.map((blog)=>
        (
          <div className="preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <div className="title"><h1>{blog.title}</h1></div>
            <div className="author"><h1>{blog.author}</h1></div>
            {/* <div className="bo"></div> */}
            </Link>
            
          </div>
        ))} 
       
        </div>);
}
 
export default Bloglist;
