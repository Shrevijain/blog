import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2><br/>
            <p>That page is not found</p><br></br>
            <Link to="/">Back to the Home page.</Link>
        </div>
     );
}
 
export default NotFound;