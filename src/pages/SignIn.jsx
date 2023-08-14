import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { local, updateForm } from "../utils/functions";
import axios from "axios";





export default function SignInPage() {
 const  [formLogin, setFormLogin] = useState({email:'', password:''});
 const navigate = useNavigate(); 

 const sendDataForm = (e)=>{
  e.preventDefault();
  axios.post(`${import.meta.env.VITE_API_URL}/signin`, formLogin)
    .then(res=>{
      local.setToken(res.data.token);
      //alert(res);
      setFormLogin({email:'', password:''});
      navigate('/home');
    }).catch(err=>{
      alert(err.response.data)
      //console.log(err)
    });
}

    return (
      <SingInContainer onSubmit={sendDataForm}>
        <form >
          <img  />
          <input placeholder="E-mail" type="email" required id='email' value={formLogin['email']} onChange={(e)=>updateForm(e, formLogin,setFormLogin )}/>
          <input placeholder="Senha" type="password" required id='password' value={formLogin['password']} onChange={(e)=>updateForm(e, formLogin,setFormLogin )}/>
          <button>Entrar</button>
        </form>
        <Link to={`/cadastro`}>
          Primeira vez? Cadastre-se!
        </Link>
      </SingInContainer>
    )
  }

  const SingInContainer = styled.section`
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
        background-color:${btstats => btstats.btstats ? '#A68A94' : '#10af1e;'};
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
        padding-top: 30px;
    }
`
