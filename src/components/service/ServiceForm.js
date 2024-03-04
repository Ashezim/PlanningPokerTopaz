import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState([])
    // const [project, setProject] = useState(projectData || {})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do usuário" name="name" placeholder="Insira o nome do usuário" handleOnChange={handleChange}></Input>
            {/* <Input type="number" text="Custo do serviço" name="cost" placeholder="Insira o valor total" handleOnChange={handleChange}></Input> */}
            <Select name="choice" text="Selecione o seu voto" options={categories} handleOnChange={handleCategory} value={service.choice ? service.choice : ''}></Select>
            {/* <Input type="text" text="Descrição o serviço" name="description" placeholder="Descreva o serviço" handleOnChange={handleChange}></Input> */}
            <SubmitButton text={btnText}></SubmitButton>
        </form >
    )
}

export default ServiceForm