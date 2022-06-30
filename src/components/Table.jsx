import React,{useState} from 'react';


const Table = () => {

    const [table,setTable] =useState({})

    const handleChnage =(e) =>{

        var inputs = e.target.name;
        console.log(inputs);

        setTable({
            ...table,
            [inputs]:e.target.value
        
        })
        
    }

    const post = async(value)=>{

        try{
            let res = await fetch(`http://localhost:8080/forms`,{

        method:"POST",
        headers:{"content-type":"application/json" },
        body:JSON.stringify({
          value,
        })
            })
        }
        catch(e){
            console.log(e)
        }
    
    }
    const handleSumit=(e)=>
    {
      e.preventDefault();

      let value = table
      console.log(value);
      if(value)
      {
        post(value)
      }
    }


    const handeldelet=()=>{

        try{

            let res = fetch(`http://localhost:8080/forms`,{
                method:"DELETE",
                headers:{"content-type":"application/json" },
        body:JSON.stringify({
         

            })
        })
        }
        catch(e){
            console.log(e)
        }
    

    }

 return <div>

<form onSubmit={handleSumit}>

    <label>Name</label>
    <input type="text" name="name" onChange={handleChnage} placeholder="Enter name...." />
    <br />
    <label >email</label>
    <input type="email"  name="email" placeholder='enter email...' onChange={handleChnage} />
    <br />
    <label > salary</label>
    <input type="number" name="salary"  placeholder='Enter  salary...' onChange={handleChnage}/>
<br />
<label >image</label>
<input type="text" name="url" placeholder='Enter img...' onChange={handleChnage}/>
<br />
<button type='submit'>submit</button>
</form>
      
    </div>;



    // <Table value={valyue}/>
}

export default Table;