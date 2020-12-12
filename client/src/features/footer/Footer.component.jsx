import React from 'react';

const Footer = () => (
  <footer className='page-footer font-small white fixed-bottom'>
    <div className='footer-copyright text-center py-3'>
      © {new Date().getFullYear()} Copyright:
      <a href='https://github.com/mightysoft' target='_blank'>
        {' '}
        Mighty Soft
      </a>
    </div>
  </footer>
);

export default Footer;
