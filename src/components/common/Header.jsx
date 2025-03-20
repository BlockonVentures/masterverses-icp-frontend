import React,{ useState, useRef }  from 'react';
import logo from '../../assets/images/logo.png';
import coin  from '../../assets/images/coin.png';
import fire from '../../assets/images/fire.png';
import location from '../../assets/images/location.png';
import search from '../../assets/images/search.png';
import dropdown from '../../assets/images/dropdown.png';
import '../../assets/css/popup.css'

import { Link } from 'react-router-dom';
import WalletConnectModal from '../modals/WalletConnectModal';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <header className="nav_new_rounded">
      <div className="container">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="https://t.me/masterversess_bot" target='_blank' rel="noreferrer">
              <img src={logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="ml-auto right_nav_bitton">
                <li>
                  <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Connect Wallet
                  </Link>
                </li>
               {/* Wallet Connect Modal */}
                <WalletConnectModal/>


                <li>
                    <div className="dropdown" ref={dropdownRef}>
                        <button
                            className="btn btn-secondary p-0 dropdown-toggle bg-transparent border-0"
                            type="button"
                            onClick={toggleDropdown}
                            aria-expanded={isOpen}
                        >
                           <div className="user_button">
                            <div className='user_button_left'>
                                <h5>Lark William</h5>
                                <p>0xasdef........7fgD</p>
                            </div>
                            <div className='user_button_right'>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                           </div>
                        </button>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;