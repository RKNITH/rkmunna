import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="p-5 mt-6 w-full max-w-[1050px] mx-auto">
      <hr />
      <h1 className="text-tubeLight-effect text-3xl mt-5 justify-center sm:justify-start tracking-[8px]">
        Thanks For Scrolling
      </h1>
      <p className="text-center text-slate-500 text-sm mt-4">
        © {currentYear} Raviranjan Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
