// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Homeeeee page'>
      <p>I am making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='Brooklyn Bridge.'
        src='../images/brooklyn-bridge.jpeg'
      />
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
