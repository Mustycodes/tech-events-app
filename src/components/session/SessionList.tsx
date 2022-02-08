import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
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
        <div className="flex justify-between mt-5 items-start">
          <div className="bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
            <button className="text-2xl mb-5">
              <FcLike/>
            </button>
            <div className="text-gray-500 bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <p className="font-semibold text-lg">10</p>
            </div>
          </div>
          <article onClick={() => toggleSession(index)} className="w-11/12 group cursor-pointer select-none  px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-300 hover:text-gray-100 bg-gray-900 hover:bg-gray-800 transition duration-300">
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
        </div>
      ))}
    </>
  );
};

export default SessionList;
