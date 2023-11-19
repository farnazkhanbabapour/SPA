import React from 'react'
import { useState } from 'react'
import CoursesData from "../components/CourcesData";
import Cource from './Cource';
import { useLocation } from 'react-router-dom';

export default function Cources() {
  const[courseData, setCourseData]= useState(CoursesData);

  let location= useLocation();
  console.log(location)



  return (
    <div  style={{display:"flex",justifyContent:"space-evenly", marginTop:"30px"}}>
      {courseData.map((cource)=> <Cource {...cource}/>
      )}
    
      
    </div>
  )
}
