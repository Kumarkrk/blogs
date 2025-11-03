
import Bloglist from "./blioglist";
import useFetch from "./fetch";
const Home = () => {
   
const {blogs,ispending,erro}=useFetch("http://localhost:5000/blogs");
    return ( <div className="home">
        {erro && <div> {erro}</div>}
     {ispending && <div>..loading kumar</div>}  
   {blogs  &&  <Bloglist  blogs={blogs}></Bloglist>}
  
      
    
    </div> );
}
 
export default Home;