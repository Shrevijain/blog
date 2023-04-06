import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
      {title: "ABC", body: "soifhc", author: "abc", id:1},
      {title: "XYZ", body: "soifhc", author: "xyz", id:2},
      {title: "MNP", body: "soifhc", author: "mnp", id:3} 
    ]);

    const handleDelete = (id) => {
      const NewBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(NewBlogs);
    }

    useEffect (() => {
      console.log("useEffect called");
    },[]);

    return (
      <div className="home">
        <BlogList blogs={blogs} title="All BLogs!!" handleDelete={handleDelete}/> 
 
      </div>
    );
  }
   
  export default Home;