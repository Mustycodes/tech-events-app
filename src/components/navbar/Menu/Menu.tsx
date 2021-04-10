import {StyledMenu, StyledLink} from './StyledMenu'
const Menu = ({open}: {open:boolean}) => (
  <StyledMenu open={open}>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/events/new">Create Event</StyledLink>
    <StyledLink to="/login">Login</StyledLink>
  </StyledMenu>
)

export default Menu