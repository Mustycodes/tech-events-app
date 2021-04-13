
const Overlay = ({open}:{open:boolean}) => <div className={`transform ${open ? 'h-screen w-screen bg-opacity-50 scale-100': 'opacity-0 scale-0 h-0'} absolute transition-all ease-in top-0 left-0 z-40 bg-black`}></div>

export default Overlay
