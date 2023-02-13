import './style.scss';

function Packages(){
    return(
        <div className='packages'>
             <div className='packages-name-cont'>
                <div>
                    <h1 className='packages-name'>Packages.</h1>
                </div>
                <hr className='hr'/>
            </div>
            <div className='packages-text-cont'>
                <p className='text'>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
            </div>
            <div className='packages-container'>
                <div className='basic-cont'>
                    <div className='pack-cont'>
                        <ul className='container-pack-name'>
                            <li className='basic'>Basic</li>
                            <li className='info'>Floorplanning</li>
                            <li className='info'>10 hours support</li>
                            <li className='info'>Photography</li>
                            <li className='info'>20% furniture discount</li>
                            <li className='info'>Good deals</li>
                            <li className='info'>
                                <h2>$ 199</h2><br />
                                <span className='span'>per room</span>
                            </li>
                            <li className='btn-cont'>
                                <button className='btn'>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='basic-cont'>
                    <div className='pack-cont' style={{marginLeft: "10px"}}>
                        <ul className='container-pack-name'>
                            <li className='pro'>Pro</li>
                            <li className='info'>Floorplanning</li>
                            <li className='info'>50 hours support</li>
                            <li className='info'>Photography</li>
                            <li className='info'>50% furniture discount</li>
                            <li className='info'>GREAT deals</li>
                            <li className='info'>
                                <h2>$ 249</h2><br />
                                <span className='span'>per room</span>
                            </li>
                            <li className='btn-cont'>
                                <button className='btn2'>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Packages