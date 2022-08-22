
//Method 1
export function Greeting(props) {
    console.log(props)
    return <div>
        <h3>{props.title}</h3>
    </div>;
}

//Method 2
export function UserCard({number,title = 'Default'} ){
    console.log(number)
    return <h1>Card {number}: {title} </h1>
}