import LinkButton from '../layout/LinkButton'

import savings from '../../img/savings.svg'
import style from './Home.module.css'

function Home(){
    return (
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>Cost Manager</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="Cost"/>
        </section>
    )
}

export default Home
