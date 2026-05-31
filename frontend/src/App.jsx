
import {useState, useEffect} from 'react';
const App=()=>{
    //messge
  const [message,setMessage]=useState('');
  useEffect(()=>{
     fetch("http://localhost:8080/new").then((res)=>res.text())
        .then(data=>setMessage(data));
  },[]);


  //name
    const [name,setName]=useState('');
    useEffect(()=>{
        fetch("http://localhost:8080/name").then((res)=>res.text())
        .then(data=>setName(data));
    },[]);
    const [ course,setCourse]=useState('');
    useEffect(()=>{
        fetch("http://localhost:8080/course").then((res)=>res.text())
            .then(data=>setCourse(data));
    },[]);

  return(<section>
                  <article>
                            <h1>hello ram</h1>
                            <p>{message}</p>
                  </article>
      <article>
          <p>{name}</p>
      </article>

      <article>
          <p>{course}</p>
      </article>

        </section>);
}

export default App;