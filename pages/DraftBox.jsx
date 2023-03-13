import React from 'react';
import JSONDATA from '../assets/data/InBox.json'
import { useState } from 'react'
import NavLink from 'next/link';
import Image from 'next/image';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Popup from 'reactjs-popup';
import Navbar from '../Components/Navbar'
import Router from 'next/router';
import { Dialog } from 'primereact/dialog';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const DraftBox = () => {

    let currentUserLoginId = JSON.parse(localStorage.getItem('UserId'));
    let currentUserLoginPassword = JSON.parse(localStorage.getItem('Password'));

    const [visible, setVisible] = useState(false);

    const [showPopup, setShowPopup] = useState(false)

    const handleOpen = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };
    const [searchTerm, setSearchTerm] = useState('')

    function logOut() {
        alert("Are you Sure...Do you want to Logout?")
        Router.push('/SignIn')
    }


    return (
        <div className="App bg-secondary" style={{ height: 'auto' }}>
          
            <div className="row bg-white">
                <div className="col-3
                border border-light"
                style={{width:250}}>
                    <Navbar />

                </div>

                <div className="col-9 border   rounded"
                style={{height:1000}}>


                    <div className="App">
                        <input
                            type='text'
                            className="w-75 bg-light
                            rounded
                            border border-light"
                            placeholder="Search mail"
                            onChange={event => { setSearchTerm(event.target.value) }}
                        /> 
                        <button className='btn btn-dark  btn-lg  rounded-pill position-absolute top-0 end-0'
                        onClick={ logOut }
                          >
                            <AccountCircleIcon/>
                        </button>

                       
                       <br/><br/>
                       <div className='text-center'>
                      <p> You don't have any saved drafts.</p>
<p>Saving a draft allows you to keep a message you aren't ready to send yet.</p>
                       </div>
                       <hr></hr>
                    </div>

                </div>
            </div>




        </div>

    );

}
export default DraftBox;
