import React from 'react';

const Education = ({ schools }) => (
    <section id="education">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title">
                        <h2>Education</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <div class="resume-box">
                        <ul>
                        {schools.map(education => (
                            <li>
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                </div>
                                <span class="time">{education.startDate} — {education.endDate}</span>
                                <h5>{education.area} - {education.institution}</h5>
                            </li>
                        ))}     
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Education;
