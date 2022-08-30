import { Link } from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa'

import styles from './BackPage.module.css'

const BackPage = ({ to }) => {
    return (
        <div className={styles.arrow_back_move_left}>
            <Link to={to}>
                <FaArrowLeft color='#222' fontSize={50} />
            </Link>
        </div>
    )
}

export default BackPage
