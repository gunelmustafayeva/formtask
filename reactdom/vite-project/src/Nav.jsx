import { Link } from 'react-router-dom'
import './Nav.css'


function Nav(){
    return(
        <>
        
        <nav>
            <ul>
                <li>
                    <Link to="Home">Home</Link>
                </li>
                <li>
                    <Link to="About">About</Link>
                </li>
                <li>
                    <Link to="Contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </>
        

    )
}

export default Nav