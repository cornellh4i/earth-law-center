import React from 'react';
import Button from '../../components/Button/Button';

/** Component for RedirectAuth Page */

const RedirectAuth = () => {
  window.opener = null;
  window.open(",", "_self");
  window.close();
};
export default RedirectAuth;
