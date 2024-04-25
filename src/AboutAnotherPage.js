import React from 'react';
import { Link } from 'react-router-dom';


const AboutAnotherPage = () => {
  return (
    <div>
      <h1>About Another Page</h1>
      <p>This is the about another page.</p>
      <Link to="/about">
        <button>Back to About Page</button>
      </Link>
      <Link to="/">
        <button>Back to Home Page</button>
      </Link>
    </div>
    
  );
};

export default AboutAnotherPage;