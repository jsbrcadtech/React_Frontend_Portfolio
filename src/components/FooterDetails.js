import React from 'react';

function FooterDetails({ email, phone }) {
  return (
    <div className="w3-padding-16">
      <a className="footer__details w3-hover-opacity" href="mailto:">
        Email : {email}
      </a>
      <p>&copy;2022 All rights reserved</p>
    </div>
  );
}

export default FooterDetails;
