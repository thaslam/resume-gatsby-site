/* 
Referenced https://github.com/pcarion/resume-with-gatsby to build resume page with Yaml as datasoruce
*/

import React from 'react';
import { graphql } from 'gatsby';
import Resume from '../components/resume';

const Page = ({ data }) => {
  const resume = data.resumeData;
  const clock = data.worldclockData;
  return <Resume resume={resume} clock={clock} />;
};

export default Page;

export const query = graphql`
  query MyQuery {
    resumeData: resumeYaml {
      basics {
        email
        name
        label
        phone
        url
        summary
        profiles {
          network
          url
          username
        }
      }
      work {
        description
        endDate(formatString: "MMM, YYYY")
        highlights
        location
        name
        startDate(formatString: "MMM, YYYY")
        position
        summary
        url
      }
      volunteer {
        endDate(formatString: "MMM, YYYY")
        highlights
        organization
        position
        startDate(formatString: "MMM, YYYY")
        summary
        url
      }
      education {
        area
        courses
        endDate(formatString: "MMM, YYYY")
        gpa
        institution
        startDate(formatString: "MMM, YYYY")
        studyType
      }
      awards {
        awarder
        date(formatString: "MMM, YYYY")
        summary
        title
      }
      publications {
        name
        publisher
        releaseDate(formatString: "MMM, YYYY")
        summary
        url
      }
      skills {
        keywords
        level
        name
      }
      languages {
        fluency
        language
      }
      interests {
        keywords
        name
      }
      references {
        name
        reference
      }
    }
    worldclockData: example {
      currentDateTime(formatString: "MMMM DD, YYYY")
      currentFileTime
    }
  }
`;