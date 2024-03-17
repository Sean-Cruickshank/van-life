import { NavLink, Outlet } from 'react-router-dom'

export default function AboutLayout() {
  
  const styles = {
    color: "yellow",
    textDecoration: "underline"
  }
  
  return (
    <div>
      <div className='about-layout-nav'>

        <NavLink
          style={({ isActive }) => isActive ? styles : null}
          to='/about/'
          end>
            About Me
        </NavLink>

        <NavLink
          style={({ isActive }) => isActive ? styles : null}
          to='qualifications'>
            Qualifications
        </NavLink>

        <NavLink
        style={({ isActive }) => isActive ? styles : null}
        to='skills'>
          Skills
        </NavLink>

        <NavLink
        style={({ isActive }) => isActive ? styles : null}
        to='personal'>
          Personal
        </NavLink>

      </div>
      <Outlet />
    </div>
  )
}