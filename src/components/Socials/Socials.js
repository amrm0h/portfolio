import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({ children, path }) => (
  <a href={path} target="_blank" rel="noreferrer">
    {children}
  </a>
)

export default function Socials() {
  return (
    <section>
      <SocialLink path="https://www.linkedin.com/in/amrmo/">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </SocialLink>
      <SocialLink path="https://github.com/amrm0h/">
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>
    </section>
  )
}
