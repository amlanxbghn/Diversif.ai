import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <p className="text-sm font-medium">Made with ♥️ by Amlan</p>
      <p className="text-sm font-normal text-zinc-400">All rights reserved &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
