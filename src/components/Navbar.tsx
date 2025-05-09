import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import mail from '../assets/icons/mail.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <Link className='grow' to=''>Home</Link>
            <a className='grow' href='#projects'>Projects</a>
            <div className='contactrow'>
                <a className='grow' href='https://github.com/HammyLA'><img src={github} alt='github' /></a>
                <a className='grow' href='https://www.linkedin.com/in/lawrence-cuenco-21551724a/'><img src={linkedin} alt='linkedin' /></a>
                <a className='grow' href='mailto:lawrenceacuenco@gmail.com'><img src={mail} alt='mail' /></a>
            </div>

        </div>
    )
}

export default Navbar
