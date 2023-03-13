import React, { useState } from 'react'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import NavLink from 'next/link';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import InboxIcon from '@mui/icons-material/Inbox';
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import DescriptionIcon from '@mui/icons-material/Description';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
let tabIndex: number;
const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleOpen = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>


      <div className="row bg-light"
        style={{ height: 1000 }}>
        <div className="col">
          <ul className="list-unstyled p-2">



            <li className='bg-light ms-3 active d-flex '>
              <MenuIcon />
              <Image
                src="data:image/jpeg;base64,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"
                alt="profilePhoto"
                height="30"
                width="30"
                className=" d-flex justify-content-center ms-2">

              </Image>

              <h4 className='ms-3'>Gmail</h4>
            </li>
            <br />

            <li className='d-flex'>
              <button className='btn  btn-md w-75 rounded-pill ms-3'
                style={{ backgroundColor: "Cyan" }}
                onClick={handleOpen}>
                <CreateIcon />
                Compose
              </button>
            </li>
            {showPopup && (
              <Popup
                className="
                           
                            
                             mw-100
                             position-absolute bottom-0 end-0
                            "
                open={showPopup}
                closeOnDocumentClick
                onClose={handleClose}
              // position="right center"
              // popup-content 
              >

                <div className="bg-white border border-info rounded" style={{ height: 500, width: 500 }}>
                  <div className="row w-full">
                  </div>
                  {/* <Image src={val.profilePhoto} height='100' width='100' alt='profile' className='ms-3' ></Image> */}

                  <ul className='font-weight-bold'
                    style={{ backgroundColor: '#F0F8FF' }}>

                    <li className='d-flex'
                      style={{ marginTop: 3 }}>
                      <p className=' col-11'> New Message</p>

                      <button
                        onClick={handleClose}
                        className="  col-1  btn btn-white d-flex justify-content-end "
                      >
                        X
                      </button>

                    </li>
                  </ul>
                  <span className='d-flex bg-white'>
                    <label htmlFor="email"
                      className='form-label'>
                      {/* To */}
                    </label>

                    <input type="email" id="email"
                      // pattern=".+@gmail\.com"
                      pattern="^([A-Za-z@.com]|[0-9])+$"
                      minLength={7}
                      maxLength={30} required
                      placeholder='To'
                      className='w-100 border border-white'
                    >
                    </input>
                    <div className="valid-feedback">Valid.</div>
                    <hr></hr>
                  </span>

                  <span className='d-flex bg-white'>
                    <label htmlFor="text">
                      {/* Subject */}
                    </label>

                    <input type="text" id="textSubject"
                      maxLength={50} required
                      placeholder='Subject'
                      className='w-100 border border-white text-start'
                    >
                    </input>
                    <hr></hr>
                  </span>

                  <span className='d-flex bg-white'>
                    <label htmlFor="text">
                      {/* Subject */}
                    </label>

                    <textarea name="comment" id="textBody"
                      maxLength={300} required
                      style={{ height: 330 }}
                      className='w-100 border border-white'
                    >
                    </textarea>

                  </span>
                  <span className='d-flex bg-white'>

                    <button
                      className='btn btn-primary
                   rounded-pill 
                    w-25 ms-2'
                      onClick={() => {
                        handleClose()
                        let toEmail = (document.getElementById("email") as HTMLInputElement).value;
                        let mailSubject = (document.getElementById("textSubject") as HTMLInputElement).value;
                        let mailBody = (document.getElementById("textBody") as HTMLInputElement).value;
                        // let arrayOfObjects=[];
                        // let keyValue={};
                        if (toEmail != '' && mailSubject != '' && mailBody != '') {

                          localStorage.setItem('UserId', JSON.stringify(toEmail));
                          localStorage.setItem('Subject', JSON.stringify(mailSubject));
                          localStorage.setItem('SentBody', JSON.stringify(mailBody));

                          //  arrayOfObjects=[toEmail,mailSubject,mailBody]
                          //  arrayOfObjects.push(keyValue);
                          alert("Message Sent successfuly")
                        }
                        else {
                          alert("Message Not sent")
                        }



                        //   <Alert severity="success">
                        //   <AlertTitle>success</AlertTitle>
                        //   Message <strong>sent</strong>successfully !
                        // </Alert>

                      }}

                    >
                      Send
                    </button>

                  </span>
                </div>
              </Popup>
            )}



            <br />
            <li className='bg-light ms-5 active'>

              <NavLink className="nav-link" aria-current="page" href="/gmaildashboard">
                <InboxIcon />
                Inbox</NavLink>
            </li>
            <li className='bg-light ms-5 mt-1'>
              <NavLink className="nav-link" aria-current="page" href="/SentBox">
                <SendIcon />
                Sent</NavLink>
            </li>

            <li className='bg-light ms-5  mt-1'>
              <NavLink className="nav-link" aria-current="page" href="/SpamBox">
                <ReportGmailerrorredIcon />
                Spam</NavLink>
            </li>

            <li className='bg-light ms-5  mt-1'>
              <NavLink className="nav-link" aria-current="page" href="/DraftBox">
                <DescriptionIcon />
                Draft</NavLink>
            </li>

          </ul>
        </div>
      </div>




    </>
  )
}

export default Navbar
