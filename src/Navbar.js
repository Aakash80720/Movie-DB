import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [show, handleshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY >150){
                handleshow(true);
            } else handleshow(false);
        })
        return () => {
           
        }
    }, [])
    return (
        <div className = {`nav ${show && "nav__black"}`}>
            <Link to='/home'>
                <h1 className = 'Logo' style={{
                    color:'rgb(170, 9, 9)'
                }}>
                    GoLIVE
                </h1>
            </Link>
            <h1 className = 'Avatar' style={{
                color:'rgb(170, 9, 9)'
            }}>
               Aakash 
            </h1>
            <p className = 'searching'>
                <Link to = "/Search" style = {{textDecoration:"none",color:'rgb(170, 9, 9)'}}>
                    Search
                </Link>
            </p>
            
        </div>
    )
}

export default Navbar
