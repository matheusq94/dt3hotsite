import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { Container, Logo, Burger, Menu, BlackOpacity } from './styles';
import logo from '../../assets/logodt3-branco.png';

function NavBar({ links }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', onScroll);
  }, []);

  const handleOpenCloseMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <Container isScrolling={scrolling}>
        <Logo>
          <img src={logo} alt="DT3 Logo" />
        </Logo>
        <Burger onClick={() => handleOpenCloseMenu()} isOpened={menuOpened}>
          <span />
          <span />
          <span />
        </Burger>
        <Menu isOpened={menuOpened}>
          {links.map(link => (
            <li>
              <a href={`#${link.path}`} onClick={() => handleOpenCloseMenu()}>
                {link.name}
              </a>
            </li>
          ))}
        </Menu>
      </Container>
      {menuOpened && <BlackOpacity onClick={() => handleOpenCloseMenu()} />}
    </>
  );
}

NavBar.defaultProps = {
  links: [
    {
      name: '',
      path: '',
    },
  ],
};

NavBar.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      path: propTypes.string,
    }),
  ),
};

export default NavBar;
