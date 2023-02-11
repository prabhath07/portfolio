import React from 'react';
import './css/nav.css';
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
 function Nav() {
    return (
        <div className='nav'>
             <p>
             <Link to ='/' className='link'> Home</Link>  
             </p>
             <p>
                <Link to ='/projects' className='link'>Projects</Link> 
             </p>

             
             <p>
             <Link to ='/ideas' className='link'> Meet</Link>  
             </p> 
             <p>
             <Link to ='/about' className='link'>About</Link>  
             </p>
             <p>
             <Link to ='/contact' className='link'>Contact</Link>  

             </p> 
            
        </div>
    )
}

export default Nav