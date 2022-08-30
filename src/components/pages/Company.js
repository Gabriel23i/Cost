import BackPage from '../layout/BackPage'

import styles from './Company.module.css'

function Company(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <BackPage to="/projects" />
                <h1>Empresa</h1>
                <span></span>
            </div>
            <p>In this page you can add data referring to the company that uses the Cost.</p>
        </div>
    )
}

export default Company
