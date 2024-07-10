import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Index.css'

const Nav = () => {
   const [ShowMenu, SetShowMenu] = useState(false);

   return (
    <nav className='Navigation'>
        <div>
            <p className='Logo'>EAS</p>
        </div>

        <button
            className='Nav-Menu'
            onClick={() => SetShowMenu(!ShowMenu)}
        >
            
        </button>

        <div className={`Nav-Links ${ShowMenu ? 'Show' : ''}`}>
            <Link to='/' className='Link'>
                About
            </Link>
            <Link to='/Portfolio' className='Link'>
                Portfolio
            </Link>
            <Link to='/Contact' className='Link'>
                Contact
            </Link>
            <Link to='/Resume' className='Link'>
                Resume
            </Link>
        </div>
    </nav>
   );
}

export default Nav