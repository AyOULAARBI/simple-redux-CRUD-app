the application in general contains 3 important parts:
1-the reducer (src/config/reducer.js):
  which has all the logic for Creating,Reading,Updating,Deleting trainees (les stagiaires).
  it also has the initial state.
  all the steps are documented using comments.

2-the store (src/config/store.js):
   the store is in the main.js, it importes the reducer and passes it as a parameter to the configure store function.


3-the UI components(src/app.jsx src/components/AddStg ...UpdateStg ...ListStg).
   the app.jsx contains the logic to entering and quiting the update mode using state (const [updating,setStatus] = useState({status:false, id:""})
   by default the state status is false, because we are not updating. so the id of the trainee(stagiaire) is set to empty string 
   and we use the status as a condition to know if we're going to render the UpdateStg component or the AddStg.
   and we pass the setStatus to the ListStgs component so whenever we click on the edit button we change the status
   and pass the id of that specific trainee(stagiaire).
