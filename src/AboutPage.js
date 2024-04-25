import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link to="/aboutAnother">
        <button>Go to About Another Page</button>
      </Link>
      <Link to="/">
        <button>Back to Home Page</button>
      </Link>
    </div>
  );
};

export default AboutPage;
