import React from 'react';
import axios from 'axios';
import config from '../config.json';
import FooterDetails from './FooterDetails';

function Footer() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + '/contacts')
      .then((response) => {
        // console.log(response.data);
        setContacts(response.data['items']);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
    <footer className="w3-section w3-center">
      <div className="w3-padding-16">
        <a href="https://github.com/jsbrcadtech">
          <i className="footer__icons fab fa-github fa-3x w3-margin-right w3-hover-opacity"></i>
        </a>
        <a href="https://www.linkedin.com/in/justusinwebandfinance/">
          <i className="footer__icons fab fa-linkedin-in fa-3x w3-margin-right w3-hover-opacity"></i>
        </a>
      </div>
      {contacts.map((item) => (
        <FooterDetails email={item.email} phone={item.phone} key={item.id} />
      ))}
    </footer>
  );
}

export default Footer;
