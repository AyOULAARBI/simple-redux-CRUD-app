import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import { updateStg } from '../config/reducer'

function UpdateStg({changeStatus,stgId}) {
    let stgs = useSelector(state=> state)
    //get the data of selected Trainee/stg using the find function.
    const [st,setData] = useState(stgs.find(item=> item.id ===stgId));
    
    let dispatch = useDispatch();
    const handleChange = (e)=>{
        setData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let elm = e.target
        let stg = {
            id:st.id,
            nom: elm.nom.value,
            prenom: elm.prenom.value,
            filier: elm.filier.value,
            age: elm.age.value
        };
        //calling the update action and pass the stg object as a parameter
        dispatch(updateStg(stg))
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name="nom"    value={st.nom} onChange={handleChange}/><br/>
        <input name="prenom"    value={st.prenom} onChange={handleChange}/><br/>
        <input name="filier"     value={st.filier}  onChange={handleChange}/><br/>
        <input name="age"     value={st.age} onChange={handleChange}/><br/>
        <button type="submit">update</button>
        <button onClick={
            ()=>changeStatus(previous=>
            ({...previous,status:false})
            )}>quit edit mode</button>
    </form>
  )
}


export default UpdateStg