import { Form } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Contact(){
    const contact = {
        first: 'First',
        last: 'Last',
        avatar: "https://robohash.org/you.png?size=200x200",
        twitter: "your_handle",
        notes: 'some notes',
        favorites: true
    }

    return(
        <div>
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

                <div>
                    <form action="edit">
                        <button type="submit">Edit</button>
                    </form>
                    <form 
                        method="post"
                        action="destroy"
                        onSubmit={(event)=>{
                            if(!confirm("Please confirm you want to delete this record.")){
                                event.preventDefault();
                            }
                        }}>
                        <button type="submit">Delete</button>
                    </form>
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