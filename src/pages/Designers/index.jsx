import './style.scss';
import user1 from '../../assets/image/user1.jpg';
import user2 from '../../assets/image/user2.jpg';
import user3 from '../../assets/image/user3.jpg';
import { useState } from 'react';
import User from '../../components/user';

function Designers(){
    const [user,setuser] = useState(
        [
            {
                id:1,
                img:user1,
                name:"John Doe",
                info:"CEO & Founder",
                text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            },
            {
                id:2,
                img:user2,
                name:"Jane Doe",
                info:"Designer",
                text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            },
            {
                id:3,
                img:user3,
                name:"Mike Ross",
                info:"Architect",
                text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            },
        ]
    )
    const [x,setx] = useState(user)
    return(
        <div className='designers'>
            <div className='designers-name-cont'>
                <div>
                    <h1 className='designers-name'>Designers.</h1>
                </div>
                <hr className='hr'/>
            </div>
            <div className='cont-text'>
                <p className='designers-cont-text'>The best team in the world.</p>
            </div>
            <div className='cont-text'>
                <p className='design-text'>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='cont-text'>
                <p className='info-cont'>Our designers are thoughtfully chosen:</p>
            </div>
            <div className='user-container'>
                {x.map(el => <User key={el.id} user={el}/>)}                
            </div>
        </div>
    )
}
export default Designers