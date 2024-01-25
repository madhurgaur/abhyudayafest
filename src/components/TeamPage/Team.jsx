import React from 'react'
import './team.css'
import Navbar from '../HomePage/Navbar/Navbar';
import teamPhoto from '../../Assets/team.JPG'
import rohit from '../../Assets/Rohit.jpeg';
import Card from './Card';
import Smallcard from './Smallcard';

const Team = () => {
  return (<>
    <div className='teamPage'>
   <div className='navbar' >
        <Navbar/>
      </div>
    </div>

    <div className='teamContainer'>
      <div className='teamMates'>
       <div className='teamHeading'> <h1> Meet The Team </h1></div>
        <div className='faculty'> 

                 <Card heading='Dr. Harish Chandra' post='Faculty Advisor'/>

           
        </div>

             <div className='csc'>
                 <Card heading='Alekh Srivastava' post='Cultural Secretary' />
                 <Card heading='Vidushi Singh' post='Cultural Secretary' />
                 <Card heading='Shreyanshi Rai' post='Cultural Secretary' />
             </div>

             <div className='jcs'>
                 <Card heading='Aryan Singh' post='Joint Cultural Secretary'/>
                 <Card heading='Princi Kardam' post='Joint Cultural Secretary'/>
                 <Card heading='Shreyansh Singh' post='Joint Cultural Secretary'/>
             </div>
          
             <div className='heads'>
             <Smallcard heading='Unknown' post='Dance Head'/>
             <Smallcard heading='Unknown' post='Music Head'/>
             <Smallcard heading='Ankit Raj' post='FineArts Head'/>
             <Smallcard heading='Unknown' post='Dramatics Head'/>
             <Smallcard heading='Unknown' post='Technical Head'/>
             </div>

             <div className='jointheads'>
             <Smallcard heading='Ankur Vansha' post='Dance Joint Head'/>
             <Smallcard heading='Jayant Deshmukh' post='Music Joint Head'/>
             <Smallcard heading='Tushar Gupta' post='FineArts Joint Head'/>
             <Smallcard heading='Prakhar Sachan' post='Dramatics Joint Head'/>
             <Smallcard heading='Sarthak Vishwakarma' post='Technical Joint Head'/>
             </div>
            
      </div>
    </div>
    </>
  )
}

export default Team;

///<img src={teamPhoto} />
// <div className='coreHeading'> <h1>Core Team Members</h1></div>

