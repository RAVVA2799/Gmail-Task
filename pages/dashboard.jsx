import React from 'react';
import JSONDATA from '../assets/data/cred.json'
import { useState } from 'react'
import NavLink from 'next/link';
import Image from 'next/image';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Popup from 'reactjs-popup';
// import SignIn from './SignIn';
// import '../styles/dashboard.module.css';


const Dashboard = () => {

  let currentUserLoginId = JSON.parse(localStorage.getItem('UserId'));
  let currentUserLoginPassword = JSON.parse(localStorage.getItem('Password'));

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
  }


  return (
    <div className="App bg-secondary" style={{ height: 'auto' }}>
      <div className=" mh-75 d-flex justify-content-end bg-dark">
        <NavLink href="/SignIn">
          <button onClick={logOut} className="btn btn-danger">LOGOUT</button>
        </NavLink>
      </div>
      <br/>
      <h3 className="heading text-light  d-flex  justify-content-center">
        <u>EMPLOYEE'S DASHBOARD</u>
      </h3>
      {/* <input
        type='text'
        placeholder="search..."
        onChange={event => { setSearchTerm(event.target.value) }}
      /> */}

      <Image src="/directory.png" alt="profilePhoto" height="200" width="200" className=" d-flex justify-content-center"></Image>

      <br />
      {
        JSONDATA.filter((val) => {

          if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {

            return val
          }
        }).map((val, index) => {
          if (val.email === currentUserLoginId && val.password === currentUserLoginPassword) {
            return (
              <>
                <div className="user " key={val.id || index}>

                  <br />
                  <table class="table table-bordered">
                    <thead className="bg-success">
                      <tr>
                        
                        <th>Company Name:</th>
                        <th>Revenue</th>
                        <th>Year</th>
                        <th>Profile</th>
                        <th>Employee Name</th>
                        <th>Location</th>

                      </tr>
                    </thead>
                    <tbody className="bg-warning ">
                      <tr className='text-white'>
                        <td>
                          <NavLink href={val.companyLink} target="_blank">
                            {val.companyname}
                          </NavLink>
                        </td>
                        <td>{val.revenue}</td>
                        <td>{val.year}</td>
                        <td onClick={handleOpen} className="btn ">

                          CLICK HERE
                        </td>
                        {/* POP-UP BOX  display format = header, body, closing*/}
                        {showPopup && (
                          <Popup
                            className="popup-content bg-success "
                            open={showPopup}
                            closeOnDocumentClick
                            onClose={handleClose}
                            position="right center"
                          >

                            <div className="bg-info w-100 border border-danger rounded">
                              <span className="d-flex justify-content-end ">
                                <button
                                  onClick={handleClose}
                                  className="btn btn-danger">
                                  x
                                </button>
                              </span>
                              <Image src={val.profilePhoto} height='100' width='100' alt='profile' className='ms-3' ></Image>
                              <ol className='font-weight-bold'>
                                <li>Name:{val.name}</li>
                                <li>Company Name:{val.companyname}</li>
                                <li>Hometown:{val.personalDetails.home}</li>
                                <li>Education:{val.personalDetails.education}</li>
                              </ol>
                            </div>
                          </Popup>
                        )}

                        <td>{val.name}</td>
                        <td>{val.location}</td>
                      </tr>

                    </tbody>
                  </table>

                </div>
              </>
            );
          }



        })}


    </div>

  );

}
export default Dashboard;
