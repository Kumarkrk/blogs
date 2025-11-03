import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>the dojo blog</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create" style={{color:"white",
                    backgroundColor:"green",
                    borderRadius:"8px"
                }}>new blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;