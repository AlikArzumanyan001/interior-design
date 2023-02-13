import './style.scss';
function User(props){
    const user = props.user
    return(
        <div className='user'>
            <div>
                <img className='img-user' src={user.img}/>
            </div>
            <div className='user-cont'>
                <h3 className='name'>{user.name}</h3>
            </div>
            <div className='user-cont'>
                <p className='info'>{user.info}</p>
            </div>
            <div className='user-cont'>
                <p className='text'>{user.text}</p>
            </div>
        </div>
    )
}
export default User