import BackPage from '../../layout/backPage/BackPage'

import styles from './Contact.module.css'

function Contact(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <BackPage to="/company" />
                <h1>Contato</h1>
                <span></span>
            </div>
            <>
                <p>Area destined to display company contacts.</p>
            </>
        </div>
    )
}

export default Contact
