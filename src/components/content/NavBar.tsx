import React from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

export default () => {  
  return (
    <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 site-header" expand="md">
      <Link to="/" className="profile-url" />
    </Navbar>
  );
}