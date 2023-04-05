import {useState} from "react";

const Home = () => {
    const [name, setName] = useState ('Shrevi');
    const [age, setAge] = useState('19');

    const handleClick = () => {
        setName ("Utkarsh");
        setAge ("21");
    }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} year old</p>
        <button onClick={handleClick}>click Me</button>
        <h3>Hi</h3>
        <h3>hi3</h3>
      </div>
    );
  }
   
  export default Home;