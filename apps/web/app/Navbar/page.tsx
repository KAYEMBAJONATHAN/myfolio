import React from 'react';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="/" style={linkStyle}>HomePage</a></li>
        <li style={liStyle}><a href="/About" style={linkStyle}>About</a></li>
        <li style={liStyle}><a href="/Projects" style={linkStyle}>Projects</a></li>
        <li style={liStyle}><a href="/Blog" style={linkStyle}>Blog</a></li>
        <li style={liStyle}><a href="/Contact" style={linkStyle}>Contact</a></li>
        <li style={liStyle}><a href="/Resume" style={linkStyle}>Resume</a></li>
        <li style={liStyle}><a href="/Skills" style={linkStyle}>Skills</a></li>
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
  textAlign: 'center' as const,
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'end',
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};
