import ListaSuspensa from '../ListaSuspensa';
import TextField from '../TextField';
import './Form.css'

const Form = () =>{
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops'
    ]

    return(
        <section className='formulario'>
            <form>
                <h2 className='form-title'>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa itens={times}/>
            </form>
        </section>
    )
}

export default Form;