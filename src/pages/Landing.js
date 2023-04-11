import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () =>{
  return <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className='container page'>
      {/* info */}
      <div className='info'>
        <h1>job <span>tracking </span>app</h1>
        <p>Our goal is to make your job search and 
          application process easier and more organized. 
          With our user-friendly interface, you can easily 
          keep track of all your job applications in one 
          place. Say goodbye to the stress and confusion of 
          managing multiple job applications and hello 
          to a more streamlined and efficient job search process.
        </p>
        <Link to="/register" className='btn btn-hero'>Login/Register</Link>
      </div>
      <img src={main} alt='jobster main' className='img main-img'/>
    </div>
  </Wrapper>
};



export default Landing;