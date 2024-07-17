import { createContext, useContext, useState ,useEffect} from "react";
export const AuthContext = createContext();
const URL = "http://localhost:5500/api/auth/user"
const URL1="http://localhost:5500/api/data/service"

// We are using Context API

//The provider component is responsible for "providing" the data (context) to its descendants.
// The value prop of the Provider is crucial beacuse it is where you define the data that you want to make accessible to components that consume the context.
export const AuthProvider =({children})=>{
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services,setServices]=useState("");
    const authorizationToken=`Bearer ${token}`;

    const storeToken=(serverToken)=>{
        localStorage.setItem("token",serverToken)
        setToken(serverToken); //Storestokenlocalstorage
    };

const isLoggedIn = !!token; //setting the value of token so that it can be used in conditional operator to either display login or logout in the navbar

//Logout logic 
const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser(null);
};

//JWT Authentication - to getcurrently logged in user data

// send user data to frontend
const userAuthentication = async()=>{
    try {
        const response = await fetch(URL,{
            method: "GET",
            headers:{
                Authorization: authorizationToken,
            },
        });

        if(response.ok){
            const data = await response.json();
            console.log("User Data: " , data.userData);
            setUser(data.userData);
        }
    } catch (error) {
        console.log("Error fetching user data");
        
    }
}

const getServices=async()=>{
    try {
        const response = await fetch(URL1,{
            method:"GET",
        });
        if(response.ok){
            const data = await response.json();
            console.log(data.msg);
            setServices(data.msg);
        }
    } catch (error) {
        console.log("Services Frontend error");
    }
}

useEffect(()=>{
    getServices();
    userAuthentication();
},[token]);

return <AuthContext.Provider value={{isLoggedIn,storeToken,LogoutUser,user,services,authorizationToken}}>
    {children}
    </AuthContext.Provider>
}
//Creating custom hook
//useAuth function now contains the value provided by the AuthContext.Provider higher up in the component tree
export const useAuth=()=>{
    const authContextValue = useContext(AuthContext) //Stores the data in itself

    if(!authContextValue){
        throw new Error ("useAuth used outside of the Provider");
    }
    return authContextValue;
}