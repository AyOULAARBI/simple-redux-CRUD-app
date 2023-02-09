import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeStg } from '../config/reducer';


function ListStgs({changeStatus}) {
  //get the list of all trainees/stgs
  let stgs = useSelector(state=>state);

  //action dispatcher
  let dispatch = useDispatch();

  // console.log(stgs)
  return (
    <table border="2px">
        <thead>
          <tr>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>filier</th>
                    <th>age</th>
                    <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {stgs.map((item,index)=>
                <tr key={index}>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{item.filier}</td>
                    <td>{item.age}</td>
                    <td>
                      {/*  delete action*/}
                      <button onClick={()=>dispatch(removeStg(item.id))}>Remove</button>
                      {/* onClick we change the updating status to true , to render the update form,with the data
                      of the current user
                      */}
                      <button onClick={()=>changeStatus({status:true,id:item.id})}>edit</button>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
  )
}

export default ListStgs;