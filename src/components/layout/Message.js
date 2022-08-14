import { useState, useEffect } from 'react'

import styles from './Message.module.css'


function Message({ type, msg, }){

	const [isVisible, setIsVisible] = useState(false)

	useEffect(()=>{
		if(!msg){
			setIsVisible(false)
			return
		}

		setIsVisible(true)

		const timer = setTimeout(() =>{
			setIsVisible(false)
		},3000)

		return () => clearTimeout(timer)

	},[msg])

	return (
		<>
			{isVisible && (
				<div className={`${styles.message} ${styles[type]}`}>
					{msg}
				</div>
			)}
		</>
	)
}

export default Message