import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav>
                <h2>Portfolio</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>   
            <Link to='/app'>Quiz App</Link>
        </>
    )
}

export default Navbar