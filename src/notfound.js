import{Link} from "react-router-dom";
const Notfound = () => {
    return (  <div className="ntfound">
        <h1>Sorry this is wrong page</h1>
        <Link to='/' >
        <h4>go to Homepage....</h4>
        </Link>
    </div>


    );
}
 
export default Notfound;