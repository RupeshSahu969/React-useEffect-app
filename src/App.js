import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import FormTable from './components/FormTable';
import Table from './components/Table';

function App() {

// const [count1,setCount1] =useState(0);
// const [count2,setCount2] =useState(0);

// fetch("https://localhost:8080/todos")
// .then((r) => r.json())
// .then((d) => {
//   console.log(d)
// })




  return (
<div className="App">
<FormTable/>
<Table/>
<Todo/>
    </div>

    
  );
}

export default App;
