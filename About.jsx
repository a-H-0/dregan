
import axios from "axios";
import React, { useState  ,useEffect} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory,{textFilter} from "react-bootstrap-table2-filter";



// import React, { useState } from 'react';
// import List from './List';
// import './index.css';
const About =()=>
{
    
    const [data,setdata]=useState ([])
    useEffect(()=>{
        getdata();
    },[])
      const getdata = ()=>{
        axios("https://jsonplaceholder.typicode.com/comments").then((res) =>{
        console.log(res.data);
        setdata(res.data);
       
      });
      };
      const emailformatter=(data,row)=>{
        return<span onClick={()=> alert("you clicked")}>
        email={data}
        </span>
      }
      const columns=[{
        dataField:"email",
        text:"email",
        sort:true,
        formatter:emailformatter,
      },
      {
          dataField:"postId",
          text:"productid",
          sort:true,
          validatior:(newValue,row,column)=>{
            if(isNaN(newValue)){
                return{
                    valid:"flase",
                    message:"enter numeric value"
                }
            }
            return true
          }
      },
      {
        dataField:"name",
        text:"name",
        sort:true,
        filter:textFilter(),
    },
      
    ];
       return(
        <>
             <div className="ap">
<BootstrapTable  keyField="id" data={data}  columns={columns}  striped hover condensed pagination={paginationFactory()}
       filter={filterFactory()}
    cellEdit={cellEditFactory({
        blurToSave:true,
    mode:"click",
    
})}
/>
</div>
        </>
        
       )


        // const[currentitem,setcurrentitem] =useState(null);
        // const [itemlist,updateitemslist] =useState([]);
        
        // const onChangehandler = e=>{
        //     setcurrentitem(e.target.value);
        // };
        //  const additemtolist =()=>{
        //     updateitemslist([...itemlist,{item:currentitem,key:Date.now()}]);
        //     setcurrentitem("");
        //  }
        //     return(
        //         <>
        //         <div className="app">
        //             <header className="app-header">
                   
        //                 <div className="wrapper">
                         
        //                     <div className="input-wrapper">
        //                         <input value={currentitem} onChange={onChangehandler}/>
        //                         <button onClick={additemtolist}>+</button>

                       
        //                     </div>
        //                     <ul>
        //                     <li>mango</li>
        //                     <li>banana</li>
        //                     <li>apple</li>
        //                     <li>orange</li>
        //                  </ul>
        //                     <List itemlist={itemlist} updateitemlist={updateitemslist}/>
        //                 </div>
        
        //             </header>
                
        //         </div>
                
               
        //         </>
        //     )
            
            }
   


export default About;