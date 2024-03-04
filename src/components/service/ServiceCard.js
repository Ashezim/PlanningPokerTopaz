import { BsFillTrashFill } from 'react-icons/bs'

import styles from '../project/ProjectCard.module.css'

function ServiceCard({ id, name, choice, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Escolha: </span> {choice}
            </p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill></BsFillTrashFill> Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard