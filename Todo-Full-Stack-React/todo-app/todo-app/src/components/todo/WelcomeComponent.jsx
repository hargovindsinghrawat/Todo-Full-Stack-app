import {useParams, Link} from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldPath } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent(){

    const {username} = useParams();

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    // function callHelloWorldRestApi(){
    //     //axios: called the rest api
    //     axios.get('http://localhost:8080/hello-world')
    //         .then((response) => successfullResponse(response))
    //         .catch((error) => errorResponse(error))
    //         .finally(() => console.log('cleanup'))
    // }

    // function retrieveHelloWorldBean(){
    //     retrieveHelloWorldPath()
    //         .then((response) => successfullResponse(response))
    //         .catch((error) => errorResponse(error))
    //         .finally(() => console.log('cleanup'))
    // }

    function callHelloWorldPathV(){
        retrieveHelloWorldPath('hargovind' , authContext.token)
            .then((response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfullResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Welcome
            </div>
            <div>Manage your <Link to="/todos">todo</Link> here</div>
            <div>
                {/* <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call hello world
                </button> */}
                <button className="btn btn-success m-5" onClick={callHelloWorldPathV}>
                    Call hello world path
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}