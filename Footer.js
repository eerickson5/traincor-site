import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                <img
                className='footer_logo_img'
                alt='Traincor Logo'
                src='images/icon.png'
                />
            </Link>
          </div>
          <small class='website-rights'>Circuit Crunch LLC © 2021</small>
          <div class='social-icons'>
            <a target="_blank" href="https://www.facebook.com/traincor.io" title="facebook" class='social-icon-link facebook'>
              <i class='fab fa-facebook' />
            </a>
            <a target="_blank" href="https://www.instagram.com/traincor.io/" title="instagram" class='social-icon-link instagram'>
              <i class='fab fa-instagram' />
            </a>
            <a target="_blank" href="https://twitter.com/traincorapp" title="twitter" class='social-icon-link twitter'>
              <i class='fab fa-twitter' />
            </a>
            <a target="_blank" href="https://open.spotify.com/user/hicjqtxpi9l26uo0yalkjq13i?si=6piWTOlEQU2OXt1DhlNbPg" title="spotify" class='social-icon-link spotify'>
              <i class='fab fa-spotify' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;