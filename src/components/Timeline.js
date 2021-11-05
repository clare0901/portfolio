import React from 'react';

function Timeline(props) {
    return (
        <>
            <div className="main-timeline">
                <div className="timeline">
                    <div className="icon"></div>
                    <div className="date-content">
                        <div className="date-outer">
                            <span className="date">
                                <span className="month">{props.value.duration}</span>
                                <span className="year">{props.value.year}</span>
                            </span>
                        </div>
                    </div>
                    <div className="timeline-content">
                        <a href={props.value.link} style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" >
                          <h5 className="work_title">{props.value.title}</h5>
                        </a>
                        <p className="description">
                            {props.value.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;
