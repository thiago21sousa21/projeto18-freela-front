

export const updateForm = (e, object, setObject) =>{
    const {id, value} = e.target;
    const newObject = {...object, [id]: value}
    //console.log(newObject);
    setObject(newObject);
}

export const local ={
    setToken:(token)=>{localStorage.setItem('token',token)},
    config: {headers:{authorization: `Bearer ${localStorage.getItem('token')}`}},
    token: localStorage.getItem('token')      
}

