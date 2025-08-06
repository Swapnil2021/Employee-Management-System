import React,{createContext,useEffect,useState} from 'react'
import { getLocalStorage } from '../utils/localStorage.jsx';
export const AuthContext = createContext();
import { setLocalStorage } from '../utils/localStorage.jsx';

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)
    
  useEffect(() => {
        const {employees, admin} = getLocalStorage();
        setUserData({employees, admin});
    }, [])
    
    return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
export default AuthProvider
