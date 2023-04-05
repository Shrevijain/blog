import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
      {title: "ABC", body: "soifhc", author: "abc", id:1},
      {title: "XYZ", body: "soifhc", author: "xyz", id:2},
      {title: "MNP", body: "soifhc", author: "mnp", id:3} 
    ]);

    return (
      <div className="home">
        <BlogList blogs={blogs} title="All BLogs!!"/> 
 
      </div>
    );
  }
   
  export default Home;