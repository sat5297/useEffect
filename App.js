import React, {useState, useEffect} from "react";

//use Effect with cleanup function

function App(){
    
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('use Effect');
        window.addEventListener('resize', checkSize);
        return (() => {
            console.log('cleanup')
            window.removeEventListener('resize', checkSize);
        })
    });

    return(
        <div >
            <h1>Window</h1>
            <h2>{size} PX</h2>
        </div>
    );
}

export default App;