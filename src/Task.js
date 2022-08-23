//Import css
import './task.css'

export function TaskCard(prop){
    
    //Remplace class por className 
    return <div className='card'>
        <h1 style={{fontWeight:'bolder'}}>Mi primera tarea</h1>
        {/*Method 1: Write styles*/}
        <span style = { prop.ready ? {background: 'green'} : {background:'red'} } >
            {prop.ready === true ? 'Tarea realizada': 'Tarea Pendiente'}
        </span>
    </div>
}

export function TaskCardTwo({ready}){
    //Remplace class por className 
    return <div className='card'>
        <h1 style={{fontWeight:'bolder'}}>Mi segunda tarea</h1>
        {/*Method 2: Call class from CSS file*/}
        <span className= { ready ? 'bg-green' : 'bg-red' } >
            {ready === true ? 'Tarea realizada': 'Tarea Pendiente'}
        </span>
    </div>
}