import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { updateForm } from "../utils/functions";
import { useState } from "react";
import axios from "axios";


export default function SignUpPage() {
  const  [formSingUp, setFormSingUp] = useState({name:'' ,email:'', password:'', confirmPassword:'', phoneNumber:'', cpf:''});
  const navigate = useNavigate();

  
  const sendDataForm = (e)=>{
    e.preventDefault();
    const newForm = {...formSingUp};
    delete newForm.confirmPassword;
    axios.post(`${import.meta.env.VITE_API_URL}/signup`, newForm)
      .then(res=>{
        alert(res.data);
        setFormSingUp({name:'' ,email:'', password:'', confirmPassword:'', phoneNumber:'', cpf:''});
        navigate('/');
      }).catch(err=>alert(err.response.data));
  }

  return (
    <SingUpContainer>
      <form onSubmit={sendDataForm}>
        <img />
        <input  placeholder="Nome" type="text" id="name" 
              required  value={formSingUp['name']} 
              onChange={(e)=>updateForm(e, formSingUp,setFormSingUp )}/>

        <input  placeholder="E-mail" type="email" id="email"  
              required value={formSingUp['email']} 
              onChange={(e)=>updateForm(e, formSingUp,setFormSingUp )}/>

        <input  placeholder="Senha" type="password"  id="password"  
              required value={formSingUp['password']} 
              onChange={(e)=>updateForm(e, formSingUp,setFormSingUp )}/>

        <input  placeholder="Confirme a senha" type="password" id="confirmPassword"  
              value={formSingUp['confirmPassword']} 
              onChange={(e)=>updateForm(e, formSingUp,setFormSingUp )}/>

        <input  placeholder="Celular" type="text" id="phoneNumber" 
              value={formSingUp['phoneNumber']} 
              onChange={(e)=>updateForm(e, formSingUp,setFormSingUp )}/>

        <input  placeholder="Cpf" type="text" id="cpf" 
              required value={formSingUp['cpf']} 
              onChange={(e)=>updateForm(e, formSingUp,setFormSingUp )}/> 

        <button>Criar Cadastro</button>   
      </form>
      <Link to={`/`}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}


{/* <>
<input  placeholder="cep" type="text" id="cep" value />
        <input  placeholder="Estado" type="text" id="estado" value/>
        <input  placeholder="Cidade" type="text" id="cidade" value/>
        <input  placeholder="Bairro" type="text" id="bairro" value/>
        <input  placeholder="Endereço" type="text" id="rua" value />
        <input  placeholder="Numero" type="text" id="numero" value />
        <input  placeholder="Complemento" type="text" id="complemento" value />
</> */}


const SingUpContainer = styled.section`
  margin-top: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #293845;
  position: relative;
  font-size: 24px;
  button {
        display:flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color:${btstats => btstats.btstats ? '#A68A94' : '#73384E'};
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: calc(100% - 30px);
        
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: white;
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 12px;
        
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #A68A94;
        text-decoration: none;
        padding-top: 10px;
    }
    img{
        width: 204px;
        height: 180px;
    }
`
