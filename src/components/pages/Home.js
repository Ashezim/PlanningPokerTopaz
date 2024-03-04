import styles from './Home.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    function handleUsername(username) {
        const state = { userLogged: username }
        navigate("/projects", { state });
    }

    return (
        <section className={styles.home_container}>
            <div>
                <h1>
                    Bem-vindo ao <span>Planning Poker - Topaz</span>
                </h1>
                <ProjectForm btnText="Entrar" txtLabel="Nome de Usuário" handleSubmit={handleUsername} text="Nome de Usuário" placeholder="Insira o nome do usuário"></ProjectForm>
            </div>
        </section>
    )
}

export default Home