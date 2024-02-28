import {Link, React, useState} from '../export'

const Nav = () => {
  const [login, setLogin] = useState(true)
  const navigationMenu = [
    {path:"/", name:<img width="38" height="38" src="https://img.icons8.com/sf-black-filled/64/FFFFFF/home.png" alt="home"/>},
    {path:"/posting", name:<img width="30" height="38" src="https://img.icons8.com/small/16/FFFFFF/add-image.png" alt="add-image"/>},
    {path:"/profile", name:<img width="30" height="38" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/guest-male.png" alt="guest-male"/>},
    
    
  ]
  return (
    <div className='nav left-4 bg-violet-300 py-2 text-#fff' >
      <img src="/logo_bila.png" alt="web-logo" className='w-14'/>
      {!login &&(
        <div className="nav-btn-container">
          <Link to={"/register"} className='btn-stroke px-3 text-center text-xs lg:text-sm lg:px-8'>sign up</Link>
          <Link to={"/login"} className='btn-primary px-3 text-center text-xs lg:text-sm lg:px-8'>login</Link>
          
        </div>
      )}

      {login &&(
        <div className='flex items-right gap-10'>
          {navigationMenu.map((element, index) => (
            <Link key={index} to={element.path} className='text-white text-sm font-bold font-inter hover:text-white/60 transition-all duration-300'>{element.name}</Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Nav
