import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom"
import { updateContact } from "../contacts"

export async function action({ request, params}){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact(){
    const { contact } = useLoaderData();
    const navigate = useNavigate();

    return (
        <Form method="post">
            <div className="flex flex-column gap-3 md:flex-row justify-between items-center">
                <label>Name</label>
                <input 
                    type="text" 
                    name="first" 
                    placeholder="--- first ---"
                    className="text-center border-2 mb-3 mt-3 p-2" 
                    defaultValue={contact?.first}/>
                <input 
                    type="text" 
                    name="last"
                    placeholder="--- last ---" 
                    className="text-center border-2 mb-3 mt-3 p-2"
                    defaultValue={contact?.last}/>
            </div>
            <div className="flex flex-column gap-3 md:flex-row justify-between items-center">
                <label>Twitter</label>
                <input 
                    type="text" 
                    name="twitter" 
                    placeholder="@handle"
                    className="text-center border-2 mb-3 mt-3 p-2 md: min-w-[300px]"  
                    defaultValue={contact?.twitter}/>
            </div>
            <div className="flex flex-column gap-3 md:flex-row justify-between items-center">
                <label>Avatar URL</label>
                <input 
                    type="text" 
                    name="avatar" 
                    placeholder="https://example.com/avatar.jpg"
                    className="text-center border-2 mb-3 mt-3 p-2 md: min-w-[300px]"  
                    defaultValue={contact?.avatar} />
            </div>
            <div className="flex flex-column gap-3 md:flex-row justify-between items-center">
                <label>Notes</label>
                <textarea 
                    name="notes"
                    placeholder="--- notes ---"
                    className="text-center border-2 mb-3 mt-3 p-2 md: min-w-[300px]"  
                    defaultValue={contact?.notes} 
                    rows={6}></textarea>
            </div>
            <div className="flex flex-column ml-3 gap-3 md:flex-row justify-start items-center">
                <button 
                    type="submit"
                    className="text-center text-white bg-green-500 mt-3 mr-3 pt-1 pr-4 pb-1 pl-4 rounded" >Save</button>
                <button 
                    type="button"
                    className="text-center text-white bg-gray-500 mt-3 pt-1 pr-4 pb-1 pl-4 rounded"
                    onClick={()=>navigate(-1)} >Cancel</button>
            </div>
        </Form>
    )
}