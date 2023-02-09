import ListStg from './components/ListStgs';
import AddStg from './components/AddStg';
import { useState } from 'react';
import UpdateStg from './components/UpdateStg';

function App() {
  //by default the updating.status is set to false, and the id is an empty string
  //read the readme.md file to understand the what the heck is going on.
  const [updating,setStatus] = useState({status:false, id:""});
  
  return (
    <div >
      {
        updating.status ? <UpdateStg changeStatus={setStatus} stgId={updating.id}/> :<AddStg />
      }
      
      <br></br>
      <ListStg changeStatus={setStatus} />
    </div>
  )
}

export default App
