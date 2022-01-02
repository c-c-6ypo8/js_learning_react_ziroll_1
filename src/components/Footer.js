/* eslint-disable jsx-a11y/anchor-is-valid */
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import './Footer.css'

export const Footer = () => (
  <footer className='card-data'>
    <a href='#' title='twitter'>
      <img className='social-pic' src={twitter} alt='twitter' />
    </a>
    <a href='#' title='facebook'>
      <img className='social-pic' src={facebook} alt='facebook' />
    </a>
    <a href='#' title='instagram'>
      <img className='social-pic' src={instagram} alt='instagram' />
    </a>
    <a href='#' title='github'>
      <img className='social-pic' src={github} alt='github' />
    </a>
  </footer>
)
