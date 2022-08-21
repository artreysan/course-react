//NOTE: Use names in components witn mayus word
export function Greeting() {
    function add(x,y){
        return x+y;
    }
    return <div>
        <h3>{add(10,30)}</h3>
    </div>;
}

export function UserCard(){
    return <h1>User Card</h1>
}