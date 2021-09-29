// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>Hey there, I am the creator of this site, I do sound!</p>
    </Layout>
  );
};
// Step 3: Export your component
export default AboutPage;
