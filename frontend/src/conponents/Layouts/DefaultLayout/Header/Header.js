import clsx from 'clsx';
import style from './header.module.css';
import { useState } from 'react';

const Header = (props) => {

  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.logo)} >
        <div>LOGO</div>
      </div>
      <div className={clsx(style.search)}>
        <input type="text" placeholder='enter product...' />
        <button>Search</button>
      </div>
      <div className={clsx(style.login)}>
        <button><a href="/login">LOGIN</a></button>
        <button>REGISTER</button>
      </div>
    </div>
  );
}

export default Header;


// className={clsx(style.container)}