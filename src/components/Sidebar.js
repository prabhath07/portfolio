import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
                <div className='ptit' id='this' >
              <Link className='link' to='/projects'> <span > Braille Character Recognition</span></Link> 
                </div>
                <div className='ptit'>
              <Link className='link' to = '/projects/bots'>  <span > Variational Auto encoder </span></Link>
                </div>
                <div className='ptit'>
               <Link className='link' to='/projects/face'> <span > Face, Land-Mark and Pose detection <br/>
             </span></Link>
                </div>
                
                <div className='ptit'>
              <Link className='link' to = '/projects/stock'>  <span > Neural Style Transfer </span></Link>
                </div>
                
                <div className='ptit'>
              <Link className='link' to = '/projects/mlp'>  <span > ML-Playground</span></Link>
                </div>
                
                <div className='ptit'>
             <Link className='link' to = '/projects/system'>   <span > Recommendation Systems</span></Link>
                </div>
               

            </div>
    )
}

export default Sidebar
