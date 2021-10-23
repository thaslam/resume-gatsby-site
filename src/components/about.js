import React from 'react';

const About = ({ basics }) => (
  <section id="about">
    <div class="container">
        <aside class="section-title">
            <h2>About</h2>
            <p>{basics.summary}</p>
        </aside>
    </div>
  </section>
);

export default About;