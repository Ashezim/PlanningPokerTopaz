import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                const state = { message: "Projeto criado com sucesso!" }
                navigate("/projects", { state });
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Novo Projeto</h1>
            <ProjectForm txtLabel="Nome do Projeto" placeholder="Insira o nome do projeto" handleSubmit={createPost} btnText="Criar Projeto"></ProjectForm>
        </div>
    )
}

export default NewProject