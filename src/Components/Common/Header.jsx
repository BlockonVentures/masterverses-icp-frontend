import React,{ useState, useRef }  from 'react';
import logo from '../../assets/images/logo.png';
import coin  from '../../assets/images/coin.png';
import fire from '../../assets/images/fire.png';
import location from '../../assets/images/location.png';
import search from '../../assets/images/search.png';
import dropdown from '../../assets/images/dropdown.png';
import '../../assets/css/popup.css'

import { Link } from 'react-router-dom';

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
                {/* modal start here  */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                 
                        <div className="modal-content">
                        <div class="modal-header border-0 w-100 pb-3">
                        <h5 className='text-center w-100 mb-0 fw-bold'>Connect Wallet</h5>
                        <button id="close-modal" class="close-button"  data-bs-dismiss="modal" aria-label="Close">×</button>
                        </div>
                      <p className="subtitle">Connect with every application!</p>
                      
                      <div className="wallet-option">
                        <button className="wallet-button">
                          <div className="wallet-icon">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g clip-path="url(#clip0_28_333)">
                            <rect x="0.000244141" y="0.938965" width="18" height="18" rx="4" fill="url(#pattern0_28_333)"/>
                            </g>
                            <defs>
                            <pattern id="pattern0_28_333" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_28_333" transform="scale(0.0025)"/>
                            </pattern>
                            <clipPath id="clip0_28_333">
                            <rect x="0.000244141" y="0.938965" width="18" height="18" rx="4" fill="white"/>
                            </clipPath>
                            <image id="image0_28_333" width="400" height="400" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                            </defs>
                            </svg>
                          </div>
                          <span>OISY Wallet</span>
                        </button>
                      </div>
                      
                      <div className="divider">
                        <hr/><span>OR</span><hr/>
                      </div>
                      
                      <p className="no-wallet-text">Don't have an wallet yet ?</p>
                      
                      <button className="create-wallet-button">Create New Wallet</button>
                    </div>
                  </div>
                </div>
                {/* modal ends here  */}


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