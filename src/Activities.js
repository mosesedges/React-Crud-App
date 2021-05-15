import React from 'react'

function Activities({activities, edit, clear, remove}) {
  return (
    <div>
      {activities.map((activity)=>{
        const{title, id }= activity
        return(
          <article key={id} className='grocery-item'>
          <p className='title'>{title}</p>

          <div className='btn-container'>
            <button className='edit-btn' type='button' onClick={()=>edit(id)}>edit</button>

            <button className='delete-btn' type='button' onClick={()=>remove(id)}>delete</button>
          </div>
          </article>
        )
      })}
      {activities.length > 0 && <button className='clear-btn' type='button' onClick={()=>clear()}>clear</button> }
      
    </div>
  )
}

export default Activities
