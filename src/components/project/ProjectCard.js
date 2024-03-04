import { BsFillTrashFill } from 'react-icons/bs'
import { GiVote } from "react-icons/gi";
import { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from './ProjectCard.module.css'

function ProjectCard({ id, name, username, handleRmemove }) {

    const [showOptionsSelection, setShowOptionSelection] = useState()
    const [vote, setVote] = useState()

    const remove = (e) => {
        e.preventDefault()
        handleRmemove(id)
    }

    function showOptions() {
        setShowOptionSelection(!showOptionsSelection)
    }

    function handleChange(e) {
        setVote({
            ...vote, choice: {
                username: username,
                task: id,
                option: e.target.value
            }
        })
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <div className={styles.project_card_actions}>
                <Link to={`/projects/${id}`}>
                    <GiVote></GiVote> Votar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill></BsFillTrashFill> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard