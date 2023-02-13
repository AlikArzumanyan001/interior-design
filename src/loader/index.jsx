import './style.scss';
import useLoading from '../hook/useLoading';

function Loader(){
    const {loading} = useLoading();
    return loading && (
        <div>
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
            </div>
        </div>
    )
}
export default Loader