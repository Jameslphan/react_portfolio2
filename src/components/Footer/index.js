import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';

const Footer = () => {
  return (
    <div>
      <h4>
        &lt;Made with{' '}
        <span
          className="emoji"
          role="img"
          aria-label="heart"
          aria-hidden="false"
        >
          ❤️
        </span>{' '}
        by the James Phan.&gt;
      </h4>
    </div>
  );
};

export default Footer;