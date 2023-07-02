import "./landing.css"
import Card from "./card"
import { useState } from "react"
function Landing(){
    const[searchBr,setsearchBr] = useState("")
    const[searched,setsearched] = useState([])
    const arr = [
        {
            name:"Aryan",
            location:"Delhi",
            job:"Software Engineer",
            id:1
        },
        {
            name:"Rohit",
            location:"Pune",
            job:"UI/UX Designer",
            id:2
        },
        {
            name:"Kumar",
            location:"Bangalore",
            job:"Software Engineer",
            id:3
        },
        {
            name:"Abhishek",
            location:"Delhi",
            job:"Software Engineer",
            id:4
        },
        {
            name:"Arya",
            location:"Chennai",
            job:"VLSI",
            id:5
        },
        {
            name:"Priya",
            location:"Agartala",
            job:"Software Engineer",
            id:6
        }
    ]

    const searchHandler = (e)=>{
        setsearchBr(e.target.value)
    }

    const searching = ()=>{
        const search = arr.filter(
            (item) =>
              item.location.toLowerCase().includes(searchBr.toLowerCase()) ||
              item.job.toLowerCase().includes(searchBr.toLowerCase())
          );
        console.log(search);
        setsearched(search);
    }
    const clearSearch = () => {
        setsearchBr("");
        setsearched([]);
      };
    console.log('searched',searched);
    return(
        <div className="landing">
            <div className="background-poster"></div>
            <nav className="navbar">
                <div class="left">
                    <h1 style={{color:"white"}}>Talent Grow</h1>
                </div>
                <div className="right">
                    <input type="checkbox" id="check"/>
                    <label for="check" className="checkBtn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <ul class="list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
            <div className="search-container">
                <input type="text" placeholder="Search..." onChange={searchHandler}/>
                <button onClick={searching} type="submit">Search</button> &nbsp;
                <button onClick={clearSearch} type="submit">Clear</button>
            </div>
            <div className="hello" style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)",gap:"3px"}}>
                {
                    searched&&searched.length>0 ? (
                        searched.map((item)=>{
                            return(
                                <Card name={item.name} location={item.location} job={item.job} />
                            )
                        })
                    ):(
                        arr.map((item)=>{
                            return(
                                <Card name={item.name} location={item.location} job={item.job}/>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}
export default Landing;