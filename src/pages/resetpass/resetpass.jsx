import React, {useState} from "react";
import './resetpass.css'

function Resetpass(){
    const [animal, setAnimal] = useState('')
    const [professor, setProfessor] = useState('')
    const [ano, setAno] = useState('')
    const [tela, setTela] = useState(0)
    
    const resetHandle = (event) => {
        
        event.preventDefault()

        if (animal === "Luna" && professor === "Gerson" && ano === "2024") {
            setTela(1);
        }
    }

    if (tela === 1) {
        return (
            <h1></h1>
        )
    }

    return (
        <div className="resetContainer">
            <div>
                <h1 className="font-weight-normal">Connect Flow</h1>
                <form className="form-signin" method="post">
                    <h3 className="h3 mb-3 font-weight-normal">Esqueci minha senha</h3>
                    <label htmlFor="animal">Qual o nome do seu primeiro animal de estimação?</label>
                    <select id="animal" class="form-select" aria-label="primeiro animal">
                          <option value="1">Bidu</option>
                          <option value="2">Luna</option>
                          <option value="3">Thor</option>
                     </select>
                     <label htmlFor="professor">Qual o nome do seu primeiro professor?</label>
                     <select id="professor" class="form-select" aria-label="primeiro professor">
                          <option value="1">Gerson</option>
                          <option value="2">Rafael</option>
                          <option value="3">Danilo</option>
                          <option value="3">Anderson</option>
                     </select>
                     <label htmlFor="cidade">Qual seu ano de ingresso?</label>
                     <select id="cidade" class="form-select" aria-label="cidade">
                                              
                          <option value="1">2022</option>
                          <option value="2">2023</option>
                          <option value="3">2024</option>
                     </select>
                    <button class="btn btn-primary" type="submit">Próximo</button>
                    
                </form>
            </div>
        </div>

    )
}


export default Resetpass