import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'
const SessionList = ({ sessions }: any) => {
  const [activeSessionIndex, setActiveSessionIndex] = useState(null);
  const [isActive, setIsActive] = useState(false)

  const toggleSession = (sessionIndex:any) => {
    if (activeSessionIndex === sessionIndex) setActiveSessionIndex(null);
    else setActiveSessionIndex(sessionIndex);
  };
  return (
    <>
      {sessions.map((session:any, index:number) => (
        <article onClick={() => toggleSession(index)} className="group cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-300 hover:text-gray-100 bg-gray-900 hover:bg-gray-800 transition duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg lg:text-xl font-semibold">The New Tech Idea In Town</h3>
              <h4 className="text-sm lg:text-base font-semibold">George Klanson</h4>
            </div>
            <span className="transition duration-300">
              <BsChevronDown  />
            </span>
          </div>
            <div className="pointer-events-none text-sm sm:text-base leading-normal mt-3 h-auto">
              <span>Duration: 2hrs</span>
              <span>Level: Intermediate</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                tenetur deserunt vel quis facilis illum dolorum voluptas
                doloremque eos fugit optio, soluta beatae praesentium
                voluptatibus, nemo at atque, consequatur quidem?
              </p>
            </div>
        </article>
      ))}
    </>
  );
};

export default SessionList;
