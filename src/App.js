  import React,{useState, useEffect} from 'react';
import Alert from './Alert';
import Activities from './Activities';
import './index.css';

const App = () => {

const[name, setName] = useState('');
const[activities, setActivities] = useState([]);
const[alert, setAlert] = useState({show:false, type:'', msg:''});
const[isEditing, setIsEditing] = useState(false);
const[editID, setEditID] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault()
  if(!name){
    showAlert(true, 'danger', 'please add an activity')
  }else if(name && isEditing){
    editing();
  }else{
    const newItem = {id:new Date().getTime().toString(), title:name}
    setActivities([ ...activities, newItem]);
    setName('');
    showAlert(true, 'success', 'An activity was added');
  }
}

const showAlert = (show = false, type='', msg='') => {
  setAlert({show, type, msg});
}

const editActivity = (id) => {
  const specActivity = activities.find((activity) => activity.id === id);
  setIsEditing(true);
  setEditID(id);
  setName(specActivity.title);
}

const editing = () => {
  setActivities(
  activities.map((activity) => {
  if(activity.id === editID){
    return {...activity, title:name}
  }
  return activity
  })
  )
  setName('');
  setEditID(null);
  setIsEditing(false);
  showAlert(true, 'success', 'activity changed')

};

const removeAlert = () => {
  showAlert(false, '', '');
}

const removeActivity = (id) => {
  const newActivity = activities.filter(activity => id !== activity.id);
  setActivities(newActivity);
  showAlert(true, 'danger', 'activity has been deleted')

}

const clearActivities = () => {
  setActivities([])
  showAlert(true, 'danger', 'all activity has been cleared')

}


  return (
    <section className='section-center'>
      <form
        className='todo-form'
        onSubmit={handleSubmit} 
      >
        {alert.show && <Alert {...alert} showAlert={showAlert} />}

        <h3>TODO APP</h3>
        <div
          className='form-control'
        >
          <input 
            className='title'
            type='text'
            placeholder='eg.Laundry'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <button 
            className='submit-btn'
            type='submit'
          >
            {isEditing? 'Edit': 'Submit'}
          </button>
        </div>
      </form>
      
      <Activities activities={activities} 
        edit={editActivity} 
        clear={clearActivities} 
        remove={removeActivity}/>
    </section>
  )
}

export default App

