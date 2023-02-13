import './style.scss';
import home1 from '../../assets/image/home1.jpg';
import home2 from '../../assets/image/home2.jpg';
import home3 from '../../assets/image/home3.jpg';
import home4 from '../../assets/image/home4.jpg';
import home5 from '../../assets/image/home5.jpg';
import home6 from '../../assets/image/home6.jpg';

function Home(){
    return(
        <div className='home'>
            <div className='name-showcase-cont'>
                <div>
                    <h1 className='name-showcase'>Interior Design</h1>
                </div>
                <div>
                    <h1 className='showcase'>Showcase.</h1>
                </div>
                <hr className='hr'/>
            </div>
            <div className='img-home-cont'>
                <div className='img-cont'>
                    <img className='img-1' src={home1}/>
                    <img className='img-3' src={home3}/>
                    <img className='img-5' src={home5}/>
                </div>
                <div className='img-cont'>
                    <img className='img-2' src={home2}/>
                    <img className='img-4' src={home4}/>
                    <img className='img-6' src={home6}/>
                </div>
            </div>
        </div>
    )
}
export default Home