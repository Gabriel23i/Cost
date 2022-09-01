import React from 'react'
import { useState } from 'react'

import logo from '../../../img/costs_logo.png'

import styles from './LogoCost.module.css'

const LogoCost = () => {

    const [classe, setClasse] = useState('')

    function rotation() {
        setClasse('container_rotate')
        setTimeout(() => {
            setClasse('')
        }, 1000);
    }

    return (
        <div onClick={rotation} className={styles.box}>
            <div id="container_id" className={!classe ? styles.container : styles[classe]}>
                <img id='logo_front' className={styles.logoCostFront} src={logo} alt="logo cost front"/>
            </div>
        </div>
    )
}

export default LogoCost
