import { StyledBurger, StyledDiv } from './StyledBurger';

const Burger = ({open, setOpen}: {open:boolean, setOpen(o:boolean):void}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
     <StyledDiv className={open ? "rotate-45" : "rotate-0"} />
     <StyledDiv className={open ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"} />
     <StyledDiv className={open ? "-rotate-45" : "rotate-0"} />
    </StyledBurger>
  )
}

export default Burger;

