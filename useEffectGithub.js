import React, {useState, useEffect} from "react";

//use Effect with cleanup function
const url = 'https://api.github.com/users';

function App(){

    const [ users, setUsers ] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);
    

    return(
        <div >
            <h3>git hub users</h3>
            <ul>
                {users.map((user) => {
                    const {id, login, avatar_url, html_url, name } = user
                    return(
                        <li> 
                            <img src={ avatar_url} alt= {login}/>
                            <h4>{name}</h4>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}></a>
                            </div>
                        </li>
                    )
                    
                })}
            </ul>
        </div>
    );
}

export default App;
