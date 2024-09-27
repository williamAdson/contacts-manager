import { Outlet, Link, useLoaderData, Form, redirect, NavLink } from "react-router-dom"
import { FaSearch, FaStar } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { getContacts, createContact } from "../contacts"

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function Loader(){
    const contacts = await getContacts();
    return { contacts };
}

export default function Root(){
    const { contacts } = useLoaderData();

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
                    <Form method="post" className="bg-white ml-2 rounded-sm">
                        <button type="submit" className="ml-3 mr-3">New</button>
                    </Form>
                </div>
                <div>
                    {contacts.length?(
                        <ul>
                            { contacts.map((contact)=>(
                                <li key={contact.id} className="relative capitalize p-2 ml-3">
                                    <NavLink 
                                        to={`contacts/${contact.id}`} 
                                        className={({isActive, isPending})=>isActive? "bg-green-500 w-full" : isPending? "pending w-full": ""}>
                                        { contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ):(
                                            <i>No Name</i>
                                        )}{""}
                                        {contact.favorite && <FaStar/>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>):(
                            <p>
                                <i>No Contacts</i>
                            </p>
                        )}
                </div>
            </div>
            <div className="col-span-auto">
                <Outlet/>
            </div>
        </div>
    )
}