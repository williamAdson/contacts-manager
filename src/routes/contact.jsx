import { Form, useLoaderData } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { getContact } from "../contacts";

export async function Loader({ params }){
    const contact = await getContact(params.contactId);
    return { contact };
}

export default function Contact(){
    const { contact } = useLoaderData();

    return(
        <div className="flex flex-row border-2 m-2 p-2 rounded md: min-w-[300px]">
            <div>
                <img 
                    key={contact.avatar} 
                    src={contact.avatar || `https://robohash.org/${contact.id}.png?size=200x200`}
                />
            </div>
            <div>
                <h5>{contact.first || contact.last?(
                    <>
                        {contact.first} {contact.last}
                    </>
                ):(
                    <>
                        <i>No Name</i>
                    </>
                )}{" "}
                <Favorite contact={contact} />
                </h5>

                {contact.twitter && (
                    <p>
                        <a 
                            target="_blank"
                            href={`https://twitter.com/${contact.twitter}`}>
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}

                <div className="flex justify-center items-center gap-3">
                    <Form action="edit">
                        <button type="submit" className="text-green-500 shadow-xl border-2 p-2 mb-3 rounded">Edit</button>
                    </Form>
                    <Form 
                        method="post"
                        action="destroy"
                        onSubmit={(event)=>{
                            if(!confirm("Please confirm you want to delete this record.")){
                                event.preventDefault();
                            }
                        }}>
                        <button type="submit" className="text-gray-500 shadow-xl border-2 p-2 mb-3 rounded">Delete</button>
                         
                    </Form>
                </div>
            </div>
        </div>
    )
}

function Favorite({contact}){
    const favorite = contact.favorite;

    return(
        <form method="post">
            <button 
                name="favorite" 
                value={favorite ? "false": "true"} 
                aria-label={favorite? "Remove from favorites": "Add to favorites"}>
                    { favorite? <FaStar/>:<FaRegStar/> }
            </button>
        </form>
    )
}