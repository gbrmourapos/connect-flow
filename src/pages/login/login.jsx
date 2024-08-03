import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login.css"




function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate();

    const LoginHandle = (event) => {
        event.preventDefault()

        if (email === "email@example.com" && pass === "123456") {
            navigate('/home')
        }
    }
    return (
        <div className="loginContainer">
            <div>
                <h1 className="font-weight-normal">Connect Flow</h1>
                <form className="form-signin" method="post">
                    <h3 className="h3 mb-3 font-weight-normal">Faça login</h3>

                    <input type="email" id="inputEmail" className="form-control" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" id="inputPassword" className="form-control" placeholder="Senha" value={pass} onChange={(e) => setPass(e.target.value)} />
                    <button className="btn btn-lg  btn-block btn-blue" type="submit" onClick={(e) => LoginHandle(e)}>Entrar</button>
                    <p>
                        <Link to="/esqueciasenha">Esqueci a Senha</Link>
                    </p>
                    <p>
                        <Link to="/registrar">Primeiro Acesso</Link>
                    </p>
                </form>
            </div>
        </div>

    )


}

export default Login