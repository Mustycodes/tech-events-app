import {StyledMenu, StyledLink} from './StyledMenu'
const Menu = ({open, setOpen}: {open:boolean, setOpen():void}) => (
  <StyledMenu open={open}>
    <StyledLink to="/" closeNav={setOpen} >Home</StyledLink>
    <StyledLink to="/events/new" closeNav={setOpen}>Create Event</StyledLink>
    <StyledLink to="/login" closeNav={setOpen}>Login</StyledLink>
  </StyledMenu>
)

export default Menu