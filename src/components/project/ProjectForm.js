import { useState } from 'react'

import styles from './ProjectForm.module.css'

import Input from '../form/Input'
// import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ handleSubmit, txtLabel, placeholder, btnText, projectData }) {

    // const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    // useEffect(() => {
    //     fetch("http://localhost:5000/categories", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setCategories(data)
    //         })
    // }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    // function handleCategory(e) {
    //     setProject({ ...project, category: {
    //         id: e.target.value,
    //         name: e.target.options[e.target.selectedIndex].text
    //     }})
    // }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text={txtLabel} name="name" placeholder={placeholder} handleOnChange={handleChange} value={project.name ? project.name : ''}></Input>
            {/* <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ''}></Input>
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}></Select> */}
            <SubmitButton text={btnText}></SubmitButton>
        </form>
    )
}

export default ProjectForm