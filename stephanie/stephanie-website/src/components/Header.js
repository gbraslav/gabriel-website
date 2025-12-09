import React from 'react';

const Header = ({ name, contact, careerHighlight }) => {
  return (
    <header className="header">
      <h1>{name}</h1>
      <div className="contact">
        <p>{contact.address}</p>
        <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>{contact.phone}</p>
        <p><a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
      </div>
      <p className="career-highlight">{careerHighlight}</p>
    </header>
  );
};

export default Header;
