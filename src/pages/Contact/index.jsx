import { useState } from 'react';
import './style.scss';
import '../../assets/style/veriables.scss';
function Contact(){
    const [x,setx] = useState("")
    const [y,sety] = useState("")
    const [er,seter] = useState("")
    const [erpass,seterpass] = useState("")
    const [color,setcolor] = useState("input1")
    function isEmail(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(val)){
          seter('Invalid Email')
        }
    }
    function password(pass){
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!reg.test(pass)){
            seterpass("Invalid Password")
        }
    }
    return(
        <div className='contact'>
             <div className='contact-name-cont'>
                <div>
                    <h1 className='contact-name'>Contact.</h1>
                </div>
                <hr className='hr'/>
            </div>
            <div className='contact-cont-text'>
                <p className='text'>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
            </div>
            <div>
                <div className='input-container'>
                    <p>Name</p>
                    <input type="text" className='input'/>
                </div>
                <div className='input-container'>
                    <p>Email</p>
                    <input type="text" className={`input ${er ? color : ""}`} onChange={(e)=>{
                        setx(e.target.value)
                    }}/>
                    {er}
                </div>
                <div className='input-container'>
                    <p>Password</p>
                    <input type="password" className={`input ${erpass ? color : ""}`} onChange={(e)=>{
                        sety(e.target.value)
                    }}/>
                    {erpass}
                </div>
                <div className='btn-inp-cont'>
                    <button className='input-button' onClick={()=>{
                        password(y)
                        isEmail(x)
                    }}>Send Message</button>
                </div>
            </div>
        </div>
    )
}
export default Contact