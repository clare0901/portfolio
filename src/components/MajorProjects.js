import React, {useEffect, useState} from 'react'
import ProjectCard from './ProjectCard.tsx';
import data from '../Data'
import '../App.css';

function MajorProjects() {

    const repos = data
    console.log(repos)

    // useEffect(()=>{
    //   try{
    //     fetch("https://api.github.com/users/clare0901/repos")
    //     .then( (response => response.json()) )
    //     .then( response => { console.log(response)})
    //   }catch(error){
    //     console.log("Error", error)
    //   }
    // })


    return (
      <>
        <div className="major-projects-div">
          <h1 className="major-projects-title">Major Projects</h1>
          {/* {repos.map(item=>
            <ProjectCard key={item.name} value={item} />
          )} */}
        </div>
      </>
    );
  }

export default MajorProjects;
