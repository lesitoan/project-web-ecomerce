import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { useState } from 'react';

const Header = (props) => {

  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.logo)} >
        <div><Link to="/">HOME</Link></div>
      </div>
      <div className={clsx(style.search)}>
        <input type="text" placeholder='enter product...' />
        <button>Search</button>
      </div>
      <div className={clsx(style.login)}>
        <button><Link to="/login">LOGIN</Link></button>
        <button>REGISTER</button>
      </div>
    </div>
  );
}

export default Header;


// className={clsx(style.container)}