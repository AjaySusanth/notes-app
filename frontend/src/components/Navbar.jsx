import ProfileInfo from "./ProfileInfo"
import {useNavigate,useLocation} from 'react-router-dom'
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = ({userInfo,onSearch,handleClearSearch}) => {

  const [searchQuery,setSearchQuery] = useState('')

  const navigate = useNavigate();
  const location = useLocation()
  const onLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  const handleSearch =() => {
    if(searchQuery){
      onSearch(searchQuery)
    }
  }

  const onClearSearch = () => {
    setSearchQuery("")
    handleClearSearch()
  }
    return (
      <div className="flex items-center justify-between gap-x-3  px-2 sm:px-6 py-2 bg-white drop-shadow">
          <h2 className="text-basis sm:text-xl font-medium text-black py-2">Notes</h2>
          {location.pathname!=='/login' && location.pathname!=='/signup' ? (
            <>
            <SearchBar
              value={searchQuery}
              onChange={({target})=>{
              setSearchQuery(target.value)
              }}
              onClearSearch={onClearSearch}
              handleSearch={handleSearch}
            />     
             <ProfileInfo userInfo={userInfo} onLogout={onLogout} />      
            </>

             ) : location.pathname == '/login' ? (
              <button className="btn-primary w-24" onClick={()=> navigate('/signup')}>
                Sign up
              </button>
          ) : (
              <button className="btn-primary w-24" onClick={()=> navigate('/login')}>
                Login
              </button>
          )
          } 
         
          
      </div>
    )
  }
  export default Navbar