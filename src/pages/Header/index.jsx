import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './style.scss';

function Header(){
    const Location = useLocation()
    const [x,setx] = useState("")
    useEffect(()=>{
        
        if(Location.pathname == "/services"){
            setx("header-cont-2")
        }else if(Location.pathname == "/designers"){
            setx("header-cont-3")
        }else if(Location.pathname == "/packages"){
            setx("header-cont-4")
        }else if(Location.pathname == "/contact"){
            setx("header-cont-5")
        }else{
            setx("")
        }
        
    },[Location.pathname])
    return(
        <div>
            <div className={`header-cont ${x}`}>
                <div className='company-name-cont-padding'>
                    <div className='padding'>
                        <h3 className='name-company'>Company <br/> Name</h3>
                    </div>
                </div>
                <div className='buttons-cont'>
                    <div className='btn-cont-home'>
                        <NavLink className={"btns"} to={"/"}>Home</NavLink>
                    </div>
                    <div className='btn-cont-home'>
                        <NavLink className={"btns"} to={"/services"}>Services</NavLink>
                    </div>
                    <div className='btn-cont-home'>
                        <NavLink className={"btns"} to={"/designers"}>Designers</NavLink>
                    </div>
                    <div className='btn-cont-home'>
                        <NavLink className={"btns"} to={"/packages"}>Packages</NavLink>
                    </div>
                    <div className='btn-cont-home'>
                        <NavLink className={"btns"} to={"/contact"}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header