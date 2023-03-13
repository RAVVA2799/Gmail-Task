import React from 'react';
import JSONDATA from '../assets/data/InBox.json'
import { useState } from 'react'
import NavLink from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Popup from 'reactjs-popup';
import Navbar from '../Components/Navbar'
import { Dialog } from 'primereact/dialog';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const GmailDashboard = () => {

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
                    style={{ width: 250 }}>
                    <Navbar />

                </div>

                <div className="col-9 border border-light rounded"
                    style={{ height: 1000 }}>


                    <div className="App">
                        <SearchIcon />
                        <input
                            type='text'
                            className="w-75 bg-light
                            rounded
                            border border-light ms-2"
                            placeholder="Search mail"
                            onChange={event => { setSearchTerm(event.target.value) }}
                        />
                        <button className='btn btn-dark  btn-lg  rounded-pill position-absolute top-0 end-0'
                            onClick={logOut}
                        >
                            <AccountCircleIcon />
                        </button>

                        {JSONDATA.filter((val) => {

                            if (searchTerm == "") {
                                return val
                            }

                            //firstname is matched with search terms, when entered  in Lower case  also.
                            else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                ||
                                val.Subject.toLowerCase().includes(searchTerm.toLowerCase())

                            ) {

                                return val
                            }
                        }).map((val, key) => {

                            return (
                                <div className="user border border-light rounded
                                table-responsive" key={key}

                                >
                                    <br /><br />
                                    <table class="table table-sm">

                                        <tbody>
                                            <tr className='' style={{ lineHeight: 0.2 }}>
                                                <th scope="row " className="w-25 " style={{ lineHeight: 0.2 }}>{val.name}</th>
                                                <td className='text-start w-50'
                                                    style={{ lineHeight: 0.2 }}>
                                                    <b>
                                                        {val.Subject}
                                                    </b>-{val.message.slice(0, 30)}

                                                </td>

                                                <td style={{ lineHeight: 0.2 }}>
                                                    <p className="text-end">
                                                        <b>
                                                            {val.date}
                                                        </b>

                                                    </p>
                                                </td>


                                            </tr>



                                        </tbody>
                                    </table>


                                </div>
                            );
                        })}

                    </div>

                </div>
            </div>




        </div>

    );

}
export default GmailDashboard;
