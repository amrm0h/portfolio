import React from 'react'
import routes from '../../App/routes'
import CustomLink from '../CustomLink/CustomLink';
import Socials from '../Socials/Socials';

import styles from './SideBar.module.scss';

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <section>
        {routes.map(({ label, path, renderInSideBar }, i) => (
          <CustomLink styles={styles} key={i} render={renderInSideBar} to={path} label={label} />
        ))}
      </section>
      <Socials />
    </div>
  )
}
