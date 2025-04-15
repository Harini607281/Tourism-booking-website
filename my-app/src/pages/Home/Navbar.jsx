  import React from 'react'
import './navbar.scss'
const Navbar = () => {
  return (
        <div className="header">
          <div className='left'> 
           <span>Globetrot</span>
            </div>
            <div className='center'>
               <div>Destinations</div>
               <div>Reviews</div>
               <div>Packages</div>
               <div>Contact</div>
               <div>About</div>

            </div>
            <div className='right'>
              <button className='expl'>Explore</button>
          <button className='log'>Login</button>
             <button className='sig'>SignUp</button>

            </div>
            


            
         
         <div>

         </div>
        
        </div>
       
      
  
  )
}

export default Navbar
