import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CustomLink({ styles, label, to, render }) {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => `${isActive ? styles.activeLink : ''}`}>
        {render ? render() : label}
      </NavLink>
    </div>
  )
}
