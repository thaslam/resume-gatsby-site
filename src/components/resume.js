import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import About from './about';
import Work from './work';
import Education from './education';
import Clock from './clock';

const Resume = ({ resume, clock }) => {
  const { basics, work, volunteer, education, awards, publications, skills, languages, interests, references } = resume;
  return (
    <React.Fragment>
      <Helmet>
        <title>{basics.name}</title>
        <meta name="description" content={`resume for ${basics.name}`} />
      </Helmet>
      <div id="content" class="section gray-bg">
        <Clock clock={clock} />
        <Header basics={basics} />
        <About basics={basics} />
        <Work works={work} />
        <Education schools={education} />
      </div>
    </React.Fragment>
  );
};

export default Resume;