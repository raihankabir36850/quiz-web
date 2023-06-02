import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Asset/Images/logo.png';
import Account from '../Account/Account';
import Text from '../Text/Text';
import styles from './nav-style.module.css';

function Nav() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home' className={styles.navLink}>
          <img alt='' src={logo} width='50' height='50' className='d-inline-block align-top' />
          <Text text='Quiz Web' />
        </Navbar.Brand>
        <Account />
      </Container>
    </Navbar>
  );
}

export default Nav;
