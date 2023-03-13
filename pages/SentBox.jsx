import React from 'react';
import JSONDATA from '../assets/data/InBox.json'
import { useState } from 'react'
import { useEffect } from 'react';
import Router from 'next/router';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from '../Components/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const SentBox = () => {


    let toMail = JSON.parse(localStorage.getItem('UserId'));
    let toSubject = JSON.parse(localStorage.getItem('Subject'));
    let sentBody = JSON.parse(localStorage.getItem('SentBody'));
    console.log(toSubject)
    


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

                <div className="col-9 border border-light  rounded"
                    style={{ height: 1000 }}>


                    <div className="App">
                        <input
                            type='text'
                            className="w-75 bg-light
                            rounded
                            border border-light"
                            placeholder="Search mail"
                            // value={searchTerm} onChange={handleSearch}
                            onChange={event => { setSearchTerm(event.target.value) }}
                        />

                        {/* {filteredData.map(item => (
        <div key={item.toSubject}>
          <p>{toSubject}</p>
         
        </div>
      ))} */}
                        <button className='btn btn-dark  btn-lg  rounded-pill position-absolute top-0 end-0'
                            onClick={logOut}
                        >
                            <AccountCircleIcon />
                        </button>


                        <br /><br />

                        <div className='d-flex'>



                            <table class="table ">

                                <tbody>
                                    <tr style={{}}>
                                        <td scope="row " className="w-25">To :{toMail}</td>
                                        <td className='text-start w-50'>
                                            <b>
                                                {toSubject}
                                            </b>-{sentBody.slice(0, 30)}

                                        </td>



                                    </tr>


                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>
            </div>




        </div>

    );

}
export default SentBox;
