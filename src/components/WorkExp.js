import React from 'react';
import Timeline from './Timeline';
import { WorkData } from '../Data';
import '../App.css';
import NavButton from './NavButton';
import Footer from './Footer';

function WorkExp() {
    return (
        <>
            <div className="timeline-container">
                <h1 className="page-title">Work <br className="break-line"/> Experience</h1>
                <div className="work-data">
                    {WorkData.map((item, key) => {
                        return (<Timeline value={item} key={key} />)
                    })}
                </div>
            </div>
            <NavButton />
            <Footer />
        </>
    )
}

export default WorkExp;