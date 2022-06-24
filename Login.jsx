import React, { useState } from "react";
import './index.css';

  const Login =()=>{
    const [email,setemail] = useState('');
    const [password,setpassword] =useState('');
    const [allentry,setallentry] =useState([]);

    const submitFrom =(e) =>{
        e.preventDefault();
        const newentry ={email:email,password:password};
        setallentry([...allentry,newentry]);
        console.log(allentry);
    }
    return(
        <>
        <center>
        <div className="abc">
              <from action="" onSubmit={submitFrom}>
                <div>
                <label htmlFor="email">email:  &nbsp;</label>
                    <input type="email" name="email" id="email" placeholder="enter Email" autoComplete="off"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    /> <br/>
                    </div>
                    <div>

                    <label htmlFor="password">password:  &nbsp;</label>
                    <input type="password" name="password" id="password" placeholder="enter Password" autoComplete="off"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    /><br/>
                </div><br/>
                <button type="submit">login</button>
              </from>
              <div>
                {
                    allentry.map((curElem)=>{
                        return(
                            <div className="showDataStyle">
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
              </div>
              </div>
              </center>
        </>
    )
    }


//     const [fullname,setfullname]= useState()

//     const [text,settext] = useState({
//         fname:'',
//         lname:'',
    
//     });
//     const inputfun=(evt)=>{
//          const value =evt.target.value;
//          const name =evt.target.name;
    
//         settext ((pvalue)=>
//         {
//              if(name == 'fname')
//              {
//                 return{
//                     fname:value,
//                     lname:pvalue.lname,
//                 }
//              }
             
             
//             //  else if(name == 'lname')
//             //  {
//             //      return{
//             //         fname:pvalue.fname,
//             //         lname:value
//             //      }
//             //     }
//         }) 
    
        
//     }
    
//     const click =(evt)=>
//     {
//         evt.preventDefault();
//         alert("submitted")
//     }
    
  

//     return(
//         <>
        
//         <div className="log">
//      <center><h2 style={{margin:"10%"}}>Sign In</h2>
     
//      </center>
//      </div>
//         <center>
        {/* <div className="lgn"> */}
        
        
        
        // <div className="lgn">
        //     <from onSubmit={click}>
        //  <input type="text" placeholder="enter your Email"
        //     name="fname" value={text.fname} onChange={inputfun}
        //     /><br/>
            {/* <input type="text" placeholder="enter name"
            name="lname" value={text.lname} onChange={inputfun}
            /><br/> */}
//             <div className="lg">
//             <button>Login</button>
            
//             </div>
//             <h1>{text.fullname}  </h1><br/>
//             </from>
//             </div>
//             </center>
//         </>
//     )
 
export default Login;
