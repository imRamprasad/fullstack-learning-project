
import {useState, useEffect} from 'react';
const App=()=>{
  const [message,setMessage]=useState('');
  useEffect(()=>{
     fetch("http://localhost:8080/new").then((res)=>res.text())
        .then(data=>setMessage(data));
  },[]);
  return(<section>
                  <article>
                            <h1>hello ram</h1>
                            <p>{message}</p>
                  </article>
        </section>);
}

export default App;