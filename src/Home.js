
import Bloglist from "./blioglist";
import useFetch from "./fetch";
const Home = () => {
   
const {blogs,ispending,erro}=useFetch("/data/db.json");
    return ( <div className="home">
        {erro && <div> {erro}</div>}
     {ispending && <div>..loading kumar</div>}  
   {blogs  &&  <Bloglist  blogs={blogs}></Bloglist>}
  
      
    
    </div> );
}
 
export default Home;