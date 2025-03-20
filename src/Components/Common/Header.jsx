import React,{ useState, useRef }  from 'react';
import logo from '../../assets/images/logo.png';
import coin  from '../../assets/images/coin.png';
import fire from '../../assets/images/fire.png';
import location from '../../assets/images/location.png';
import search from '../../assets/images/search.png';
import dropdown from '../../assets/images/dropdown.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <header className="position-relative nav_new_rounded">
      <div className="container">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="https://t.me/masterversess_bot">
              <img src={logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="ml-auto right_nav_bitton">
              {/* <li className='search_bar'>
                    <input type="text" placeholder='Search destination'/>
                    <img src={search} alt="search" />
                </li>
                <li>
                  <a href="https://t.me/masterversess_bot" className="d-flex align-items-center gap-3">
                    <img src={coin} alt="" /> 75,867,008
                  </a>
                </li>
                <li>
                  <a href="https://t.me/masterversess_bot" className="d-flex align-items-center gap-3">
                    <img src={fire} alt="" /> 75
                  </a>
                </li>
                <li>
                  <a href="https://t.me/masterversess_bot" className="d-flex align-items-center gap-3">
                    <img src={location} alt="" /> India
                  </a>
                </li> */}

                <li>
                  <Link>
                    Connect Wallet
                  </Link>
                </li>

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
                        {/* <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                            <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                            </li>
                        </ul> */}
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