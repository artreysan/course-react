
export function TaskCard(){
    const cardStyles = {
        background:'#202020', 
        color:'#fff', 
        padding:'20px'
    }

    return <div style={cardStyles}>
        <h1 style={{fontWeight:'bolder'}}>Mi primera tarea</h1>
        <p>Tarea realizada</p>
    </div>
}