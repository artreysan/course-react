export const Post = () =>{
    return <button onClick={(e)=>{
        //Fetch: Llama datos de json 
        // .... More info read Async/Await, CallBack and Promeses
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }}>
        Traer datos
    </button> 
    
}