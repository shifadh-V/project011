import styled from "styled-components";
import img from "../images/loginimage.png"
import { ueState, useState } from "react";
import { loginuser } from "../Api/Api";
import { useNavigate } from "react-router-dom";

const Bgimg= styled.div`
    background-Image:URL(${img})
    background-position:center;


    `

const container=styled.div`
    width:100%
    margin-top:15vh;
    border :2px solid #ffff
    border-radius:15px;
`    
const login= ()=>{
    const Navigate= useNavigate()
    const [form,setform]=useState({
        email:"",
        password:""

    });
    const handlechange=(e)=>{
        setform({
            ...form,
            [e.target.name]:"e.target.value",
        });
    };
    const handlesubmit=async()=>{
        e.preventDefault();
        try{
            const res=await loginuser(form);
            if(res.success){

                console.log("Login Successful");
                
            }
            else{
                window.alert("Incorrect password or Email.Please Try Again")
            }
        }
            catch(error){
                console.log(error)
            }
            
                
        

        };
        return (
            <>
            <Bgimg>
               <container>
                    <u style={{color:"green"}}>
                        <h1 style={{ color:'white',fontSize:'3em',paddingBottom:'5px'}}></h1>
                    </u>
                    <form action=""onsubmit={handlesubmit}>
                        <formDiv>
                            <label htmlFor="email">Email:</label>
                            <input type="email" new="email" value={form.email} onChange={handlechange} id="email" placeholder="Email"></input>
                        </formDiv>
                        <formDiv>
                            <label htmlFor="password">password:</label>
                            <input type="password" new="password" value={form.password} onChange={handlechange} id="password" placeholder="password"></input>
                        </formDiv>
                        <loginbtn type="submit">login</loginbtn>
                    </form>
                </container> 
            </Bgimg>
            </>
        );
}
 
export default login