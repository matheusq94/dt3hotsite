import React from 'react';

import { Container, Social } from './styles';

import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

function Footer() {
  const socialMidias = [
    {
      name: 'Facebook',
      logo: facebook,
      url: 'https://www.facebook.com/DT3sports/',
    },
    {
      name: 'Twitter',
      logo: twitter,
      url: 'https://twitter.com/dt3sports',
    },
    {
      name: 'Instagram',
      logo: instagram,
      url: 'https://www.instagram.com/dt3sports/',
    },
    {
      name: 'Youtube',
      logo: youtube,
      url: 'https://www.youtube.com/channel/UC-A9VOzf0fUhoMZ4DcA3kaQ',
    },
  ];
  return (
    <Container>
      <div>
        <Social>
          {socialMidias.map(social => (
            <a href={social.url} rel="noopener noreferrer" target="_blank">
              <img src={social.logo} alt={social.name} />
            </a>
          ))}
        </Social>
      </div>
    </Container>
  );
}

export default Footer;
