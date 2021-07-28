import React from 'react';
import Navbar from './Navbar';

const MainLayout = props => {
  return (
    <div>
      
      <div className="main">
        <Navbar {...props}/>
        {props.children}
      </div>

    </div>
  );
};

export default MainLayout;