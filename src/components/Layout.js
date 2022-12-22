import React from "react";
import { Link, Outlet} from 'react-router-dom'

function Layout() {
   return(
      <div className="wrapper">
         <header>
            <div className='navigation-list'>
               <Link to="/help" className='navigation-list-item'> Help </Link>
               <Link to="/joinus" className='navigation-list-item'> Join Us </Link>
               <Link to="/signin" className='navigation-list-item'> Sing in </Link>
            </div>
         </header>
         <div className="product-cards-block">
            <Outlet />
         </div>

         <footer> IT IS FOOTER </footer>
      </div>
   )
}

export { Layout }