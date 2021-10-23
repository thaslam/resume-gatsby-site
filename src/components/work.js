import React from 'react';

const Work = ({ works }) => (
    <section id="work">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title">
                        <h2>Experience</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <div class="resume-box">
                        <ul>
                        {works.map(work => (
                            <li>
                                <div class="icon">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                <span class="time">{work.startDate} — {work.endDate}</span>
                                <h5>{work.position} - {work.name}</h5>
                                <p>{work.summary}</p>
                            </li>
                        ))}     
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Work;
