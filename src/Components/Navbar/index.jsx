import { NavLink } from "react-router-dom";

const Navbar = () =>{
const activeStyle = 'underline underline-offset-4'

    return(
<header className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-md py-4 fixed top-0 w-full z-10">
    <nav className="container mx-auto flex justify-center items-center">
        <ul className="flex items-center justify-center space-x-8">           
            <li>
                <NavLink to='/kanban' className="text-white hover:text-gray-100 transition duration-300 ease-in-out">
                 To-Do List
                </NavLink>
            </li>
            <li>
                <NavLink to='/projects' className="text-white hover:text-gray-100 transition duration-300 ease-in-out">
                    PROYECTOS
                </NavLink>
            </li>
            <li>
                <NavLink to='/about_me' className="text-white hover:text-gray-100 transition duration-300 ease-in-out">
                    SOBRE MÍ
                </NavLink>
            </li>
            <li>
                <NavLink to='/pomodoro' className="text-white hover:text-gray-100 transition duration-300 ease-in-out">
                POMODORO 
                </NavLink>
            </li>
        </ul>
    </nav>
</header>

    )
}

export default Navbar