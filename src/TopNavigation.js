    import React from 'react'
    import './index.css';
import logo from './images/logo.png'
import { faCloud, faCog, faEye, faHome, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


    export default function TopNavigation() {
        return (
            <div>
                <div className="mainheader">
                    <div className="right">
                        <img className="logo" src={logo} />
                        <div className="text">
                            <h2>Untitled  {'\u00A0'}<FontAwesomeIcon size="xs" color="#fff" icon={faPencilAlt} /></h2>
                            <h3>Captain Anonymous</h3>
                        </div>

                    </div>
                    <div>
                        <br />
                        <div className="buttons">
                             <a target="_blank" href="https://codepen.io/features/pro"><button className="Topbutton1"><FontAwesomeIcon color="#ADAFBC" icon={faCloud} /> {'\u00A0'}Save</button></a>
                             <a target="_blank" href="https://codepen.io/features/pro"><button className="Topbutton1"><FontAwesomeIcon color="#ADAFBC" icon={faCog} /> {'\u00A0'}Settings</button></a>
                             <a target="_blank" href="https://codepen.io/features/pro"><button className="Topbutton1"><FontAwesomeIcon color="#ADAFBC" icon={faCog} /> {'\u00A0'}Change View</button></a>
                             <a target="_blank" href="https://codepen.io/accounts/signup/user/free"><button className="Topbutton2"> Sign Up</button></a>
                            <a target="_blank" href="https://codepen.io/login"><button className="Topbutton1"> Log In</button></a>

                        </div>
                  </div>
                </div>
            </div>
        )
    }
