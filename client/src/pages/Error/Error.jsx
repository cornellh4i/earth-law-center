import {React,useEffect} from 'react';
import './Error.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import frog from '../../properties/frog.png';

/** Component for Error Page */

const Error = (props) => {
  document.body.setAttribute('style', 'background: #EEF2EF;')
  return (
    <div>        
        <div className='error-header'>
          <img src={frog} alt="frog" />
            <div className='error-header-text'>Oops!</div>
            <div className='error-body-text'>The law template you are looking for hasn't been published ... </div>
            <Link to='/'><Button css='back-green-btn' text={'Back to Home'}/></Link>
        </div>
    </div>
  );
};
export default Error;
