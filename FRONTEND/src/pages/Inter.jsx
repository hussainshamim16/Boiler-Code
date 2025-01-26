import React from 'react';
import Card from "../components/Card";
import adminImage from "../assets/adminhello.jpg"; 
import benficiciary from "../assets/beneficiary.jpeg"; 
import department from "../assets/department.jpeg"; 

const Inter = () => {
  return (
    <div className='flex justify-around flex-wrap px-4 mt-10'>
      <Card Saga={adminImage} path={"/admin"} name={"Admin"} />
      <Card Saga={benficiciary} path={"/beneficiary"} name={"Beneficiary"} />
      <Card Saga={department} path={"/department"} name={"Department"} />
    </div>
  );
}

export default Inter;
