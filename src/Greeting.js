
export function Greeting(props) {
    return <div>
        <h3>{props.title}</h3>
    </div>;
}

export function UserCard(props){
    console.log(props.greet)
    return <div>
        <h1>{props.name}</h1>
        <h1>{props.amount}</h1>
        <h1>{props.married ? 'married': 'single'}</h1>
        <ul>
            <li>{props.address.city}</li>
            <li>{props.address.street}</li>
        </ul>
    </div> 
}
