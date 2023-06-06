import { RiHomeLine } from 'react-icons/ri'
import { CiBookmark, CiChat1 } from 'react-icons/ci'
import { FaTeamspeak } from 'react-icons/fa'

export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 justify-center align-middle p-3 flex flex-col bg-stone-800 border-r-2 border-emerald-300">
            <button className='pl-[0.5rem] text-white hover:text-stone-950 w-10 h-10 shadow-md bg-stone-500 rounded-md mb-6 hover:bg-emerald-300 hover:scale-[1.2] transition-[600ms]'>
                <RiHomeLine className=" text-2xl" />
            </button>
            <button className='pl-[0.5rem] hover:text-stone-950 text-white w-10 h-10 shadow-md bg-stone-500 rounded-md mb-6 hover:bg-emerald-300 hover:scale-[1.2] transition-[600ms]'>
                <CiChat1 className=" text-2xl" />
            </button>
            <button className='pl-[0.5rem] text-white hover:text-stone-950 w-10 h-10 shadow-md bg-stone-500 rounded-md mb-6 hover:bg-emerald-300 hover:scale-[1.2] transition-[600ms]'>
                <CiBookmark className=" text-2xl" />
            </button>
            <button className='pl-[0.5rem] text-white hover:text-stone-950 w-10 h-10 shadow-md bg-stone-500 rounded-md mb-6 hover:bg-emerald-300 hover:scale-[1.2] transition-[600ms]'>
                <FaTeamspeak className=" text-2xl" />
            </button>
        </div>
    )
}
