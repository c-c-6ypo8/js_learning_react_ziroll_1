import email from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import './Info.css'

export const Info = () => {
  return (
    <section className='info'>
      <div className='picture' />
      <div className='card-data'>
        <h1 className='user-name'>Conan the Barbarian</h1>
        <h4 className='user-profession'>Frontend Smasher</h4>
        <a className='user-site' href='https://github.com/conanbarb/'>
          github.com/conanbarb
        </a>
        <div className='buttons'>
          <button className='button button-email'>
            <img src={email} alt='email' />
            Email
          </button>
          <button className='button button-linkedin'>
            <img src={linkedin} alt='email' />
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};
