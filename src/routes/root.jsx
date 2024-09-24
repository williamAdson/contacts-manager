import { FaSearch } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"

export default function Root(){
    return(
        <div className="grid grid-cols-12 gap-3 h-screen">
            <div className="relative col-span-3 w-full h-full bg-red-100">
                <div className="absolute left-0 bottom-0 flex justify-start items-center border-white border-t-4 w-full p-2">
                    <FaMessage/>
                    <h5 className="ml-2 mb-1">
                        Contacts Manager
                    </h5> 
                </div>
                <div className="flex flex-row justify-center items-center m-2 p-2">
                    <form className="relative p-2 rounded-sm">
                        <input type="search" name="name" className="w-full pl-6" />
                        <span className="absolute left-3 top-3"><FaSearch /></span>
                    </form>
                    <form method="post" className="bg-white ml-2 rounded-sm">
                        <button type="submit" className="ml-3 mr-3">New</button>
                    </form>
                </div>
                <div>
                    <ul>
                        <li><a href={'/contacts/1'}>Your Name</a></li>
                        <li><a href={'/contacts/2'}>Your Friend</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-span-auto"></div>
        </div>
    )
}