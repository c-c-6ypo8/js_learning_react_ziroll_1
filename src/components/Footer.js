import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='card-data'>
      <img className='social-pic' src={twitter} alt='twitter' />
      <img className='social-pic' src={facebook} alt='facebook' />
      <img className='social-pic' src={instagram} alt='instagram' />
      <img className='social-pic' src={github} alt='github' />
    </footer>
  );
};
