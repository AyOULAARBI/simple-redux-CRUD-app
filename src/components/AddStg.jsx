import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addStg } from '../config/reducer'

function AddStg() {

  //get the list of all trainees/stgs,we will need it to create a new id ( newId: array.length+1)
    let all = useSelector(state =>state)
    let dispatch = useDispatch();
    
    //onSubmit we stop the form from refreshing the page. and we get the value using the event.target.elementName.value
    //exemple : e.target.nom.value
    //Note: you  don't have to follow my logic,you can use the onChange event and useState.
    const handleSubmit = (e)=>{
        e.preventDefault();
        //root element, so that I don't have to write the e.target everytime i want to acccess an element,I'll just use
        //elm.nom.value
        let elm = e.target
        let stg = {
          //generating id
            id: all.length +1,
            nom: elm.nom.value,
            prenom: elm.prenom.value,
            filier: elm.filier.value,
            age: elm.age.value
        };
        dispatch(addStg(stg))
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name="nom" placeholder='nom' disabled={false} /><br/>
        <input name="prenom" placeholder='prenom'/><br/>
        <input name="filier" placeholder='filier'/><br/>
        <input name="age" placeholder='age' type='number' /><br/>
        <button type="submit">add</button>
    </form>
  )
}

export default AddStg;