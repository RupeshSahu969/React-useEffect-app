import React,{useState,useEffect} from 'react';


const FormTable = () => {
    const [data,setData] = useState ([]);
    useEffect(()=>{

        const func = async()=>{
            try{
                let res = await fetch(`http://localhost:8080/forms`);
                let data = await res.json();
                setData(data)
           
            }
            catch(e){
                console.log(e)
            }
        }

        func()
    },[])

console.log(data)
    return <div>

        <div>
            <div>
                <button>sort by id</button>
                <button >salary low to high</button>
                <button>salary high to low</button>
            </div>
        </div>

{/* <div> */}
    <input type="text"  id="" placeholder='search' />
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>house</th>
                <th>fsd</th>
                
                <th>smndm,</th>
                <th>sdnm</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>

            {data.map((item)=>{
                return <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.value.name}</td>
                    <td>{item.value.salary}</td>
                    <td>{item.value.email}</td>
                    <td>{item.value.url}</td>
                    
                </tr>
            })}
        
        </tbody>
    </table>
{/* </div> */}

       
    </div>;
}


export default FormTable;