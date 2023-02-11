import React from 'react'
import Nav from './Nav'
import Screener from './Screener'
function Ideas() {
    return (
        <div className='screen'>
            <Nav/>
            {/* {
                localStorage.getItem('user')=='prabhath'?(
                
                <div className='main'>
                    <h1>
                    Hello Prabhath 
                    </h1> </div>
                    ):(
  
                        
                        <div className='main'>
                            <h2>
                            Sorry , this page is only for prabhath 
                            </h2>
                        </div>
                        ) } */}

            <div className='main'>
                <Screener/>
            </div>
      </div>


    )
}

export default Ideas
