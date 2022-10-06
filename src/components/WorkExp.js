import React, { useEffect } from 'react';
import Timeline from './Timeline';
import { WorkData, VolunteeringData } from '../Data';
import NavButton from './NavButton';
import Footer from './Footer';
import '../App.css';

function WorkExp() {
    
    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <>
            <NavButton />
            <div className="timeline-container">
                <div className="work-data">
                    {WorkData.map((item, key) => {
                        return (<Timeline value={item} key={key} />)
                    })}
                </div>

                <h1 className="page-title"> Volunteering </h1>
                <div className="volunteering-data">
                    {VolunteeringData.map((item, key) => {
                        return (<Timeline value={item} key={key} />)
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WorkExp;