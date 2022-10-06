import { BiBorderRadius } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"


export default function UserBanned(){
    const {isAuthenticated} = useAuth0()
    let uls = JSON.parse(localStorage.getItem("user"))
return(
    <div>{isAuthenticated && !uls.length?
    <div style={{width:"100%",height:"47rem",display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{
            backgroundColor:"white",
            width:"40rem", height:"20rem",
            display:"flex", 
            alignItems:"center", 
            justifyContent:"center",
            borderRadius:"1rem"
            }}>
        <div>
        <h1 style={{color:"red"}}>Your user has been banned</h1>
        <br /><br />
        <Link to="/">
        <h4 style={{color:"black"}}>Click here to return</h4>
        </Link>
        </div>
        
        </div>
        </div>
    :
    !isAuthenticated && uls.length?
    <div style={{width:"100%",height:"47rem",display:"flex", alignItems:"center", justifyContent:"center"}}>
    <div style={{
        backgroundColor:"white",
        width:"40rem", height:"20rem",
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        borderRadius:"1rem"
        }}>
    <div>
    <h1 style={{color:"green"}}>You are allready logged</h1>
  <br />
    <h3 style={{color:"green"}}>Log out to register another account</h3>
    <br />
    <br />
    <Link to="/">
    <h4 style={{color:"black"}}>Click here to return</h4>
    </Link>
    </div>
    
    </div>
    </div>
    :
    <div></div>
    }
        </div>
)
}