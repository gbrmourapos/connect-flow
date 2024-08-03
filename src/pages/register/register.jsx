import React, { useState } from "react"
import './register.css'


function Register() {

    const [screen, setScreen] = useState(0)

    const screens = []


    return (
        <div className="loginContainer">
            <div>
                <h1 className="font-weight-normal">Connect Flow</h1>
                <form className="form-signin" method="post">
                    <h3 className="h3 mb-3 font-weight-normal">Registrar</h3>

                    {screen === 0 && <FormInfo setScreen={setScreen} />}
                    {screen === 1 && <FormPass setScreen={setScreen} />}
                    {screen === 2 && <FormSecurityPass setScreen={setScreen} />}

                </form>

            </div>
        </div>

    )
}

const FormInfo = (props) => {
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState(new Date())
    const [cpf, setCpf] = useState('')
    const [tel, setTel] = useState()
    const [email, setEmail] = useState('')
    const [record, setRecord] = useState('')
    const [course, setCourse] = useState('')

    return (
        <div>
            <input type="text" id="inputName" className="form-control" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />


            <input type="date" id="inputBirthday" className="form-control" placeholder="Seu aniversário" value={birthday} onChange={(e) => setBirthday(e.target.value)} />

            <input type="number" id="inputCpf" className="form-control" placeholder="Seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />

            <input type="tel" id="inputTel" className="form-control" placeholder="Seu telefone" value={tel} onChange={(e) => setTel(e.target.value)} />

            <input type="email" id="inputEmail" className="form-control" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="text" id="inputRecord" className="form-control" placeholder="Seu prontuário" value={record} onChange={(e) => setRecord(e.target.value)} />

            <input type="text" id="inputCourse" className="form-control" placeholder="Seu curso" value={course} onChange={(e) => setCourse(e.target.value)} />


            <button className="btn btn-lg  btn-block btn-blue" type="submit" onClick={(e) => props.setScreen(1)}>Próximo</button>
        </div>

    )
}

const FormPass = (props) => {
    const [pass, setPass] = useState('')
    const [confirm, setConfirm] = useState('')
    return (
        <div>
            <input type="password" id="inputPassword" className="form-control" placeholder="Nova senha" value={pass} onChange={(e) => setPass(e.target.value)} />
            <input type="password" id="inputConfirm" className="form-control" placeholder="Confirmar senha" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            <button className="btn btn-lg  btn-block btn-blue" type="submit" onClick={(e) => props.setScreen(0)}>Voltar</button>
            <button className="btn btn-lg  btn-block btn-blue" type="submit" onClick={(e) => props.setScreen(2)}>Próximo</button>
        </div>
    )
}

const FormSecurityPass = (props) => {
    const [teacher, setTeacher] = useState('')
    const [discipline, setDiscipline] = useState('')
    const [year, setYear] = useState(new Date())

    return (
        <div>
            <label htmlFor="inputTeacher">Informe o nome do seu primeiro professor:</label>
            <input type="text" id="inputTeacher" className="form-control" placeholder="Primeiro professor" value={teacher} onChange={(e) => setTeacher(e.target.value)}/>

            <label htmlFor="inputDiscipline">Informe o nome da sua disciplina favorita:</label>
            <input type="text" id="inputDiscipline" className="form-control" placeholder="Disciplina Favorita" value={discipline} onChange={(e) => setDiscipline(e.target.value)}/>

            <label htmlFor="inputYear">Informe o nome da sua disciplina favorita:</label>
            <input type="date" id="inputYear" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} />

            <button className="btn btn-lg  btn-block btn-blue" type="submit" onClick={(e) => props.setScreen(1)}>Voltar</button>
            <button className="btn btn-lg  btn-block btn-blue" type="submit" onClick={(e) => console.log()}>Registrar</button>
        </div>
    )
}

export default Register