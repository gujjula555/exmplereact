import { useNavigate } from 'react-router-dom';

function Redirect() {

    let navigate = useNavigate();

    function handleClick(name) {
        navigate(`/${name}`)
    }

    return (
        <div>
            <button onClick={()=>handleClick("")}> go to the about page </button>
            <button onClick={()=>handleClick("about")}> go to the about page </button>
            <button onClick={()=>handleClick("service")}> go to the about page </button>
        </div>
    );
}

export default Redirect