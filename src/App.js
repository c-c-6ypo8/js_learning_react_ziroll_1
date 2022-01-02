// import './App.css'

const App = () => {
  return (
    <div className='card'>
      <main>
        <Info />
      </main>
      <Footer />
    </div>
  )
}

const Info = () => {
  return (
    <section className='info'>
      <div className='picture' />
      <div className='card-data'>
        <h1 className='user-name'>Conan the Barbarian</h1>
        <h4 className='user-profession'>Frontend Developer</h4>
        <a className='user-site' href='https://github.com/conanbarb/'>
          github.com/conanbarb
        </a>
        <div className='buttons'>
          <button className='button'>
            <img src='assets/mail.png' alt='email' />
            Email
          </button>
          <button className='button button-linkedin'>
            <img src='assets/linkedin.png' alt='email' />
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className='card-data'>
      <img className='social-pic' src='assets/twitter.png' alt='twitter' />
      <img className='social-pic' src='assets/facebook.png' alt='facebook' />
      <img className='social-pic' src='assets/instagram.png' alt='instagram' />
      <img className='social-pic' src='assets/github.png' alt='github' />
    </footer>
  )
}

export default App
