import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="text-center">
      <strong> &copy; 2020 </strong>
      <p> Hawa Ko Reporter</p>
      {/* <a
        className="badge "
        rel="noopener"
        href="https://github.com/hashirshoaeb"
        aria-label="My GitHub"
      >
        Hawa Ko Reporter
      </a>{" "} */}
      {/* using <i className="fab fa-react"></i> */}

    </footer>
  );
};

export default Footer;
