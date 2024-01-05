import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='bg-yellow-400 '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-3xl text-zinc-600 '>Authorizy</h1>
            <ul className='flex gap-10'>
                <Link to="/"><li>Home</li></Link>
                <Link to = "/About"><li>About</li></Link>
                <Link to="/Signin"><li>Sign In</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header