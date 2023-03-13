import React from 'react'
import next from 'next';
import Navbar from '../Components/Navbar';
import SignIn from './SignIn';
import  '/node_modules/bootstrap/dist/css/bootstrap.css';
// import Home from '../Components/home';

// let name:string;
// let age:number| string;
// let isStudent: boolean;
// let hobbies:string[];
// let role: [number,number,string];
// let width: number;
// let minLength:number;
// let maxLength:number;

// // defining the values
// age=23;
// isStudent = true;
// role=[1,34,'ab'];
// hobbies=['a','b','c','d'];
// name="pavan";
// width=56;
// minLength=3;
// maxLength=10;



function Index() {
  return (
    <div className='App  ms-5 '>

      {/* <h3 className="text-success">Next TS {age} projects</h3>
      <Navbar/> */}
      <SignIn/>

</div>
  )
}

export default Index
