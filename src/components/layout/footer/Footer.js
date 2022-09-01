import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import style from './Footer.module.css'

function Footer(){
    return(
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <a target="_blank" href='https://www.linkedin.com/in/gabriel-santos-23352a20a/'>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={style.copy_right}>
                <span>Cost Manager</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer
