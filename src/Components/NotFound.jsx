import { Link } from "react-router-dom"

const NotFound = () =>{
    return(
        <div>
            <h1>Wrong path go to Home</h1>
            <Link to='/'>Home</Link>
        </div>   
    )
}

export default NotFound