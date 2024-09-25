import { Form, useLoaderData, redirect } from "react-router-dom"
import { updateContact } from "../contacts"

export async function action({ request, params}){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact(){
    const { contact } = useLoaderData();

    return (
        <Form method="post">
            <div>
                <label>Name</label>
                <input type="text" name="first" aria-placeholder="First" defaultValue={contact?.first}/>
                <input type="text" name="last" aria-placeholder="Last" defaultValue={contact?.last}/>
            </div>
            <div>
                <label>Twitter</label>
                <input type="text" name="twitter" aria-placeholder="@handle" defaultValue={contact?.twitter}/>
            </div>
            <div>
                <label>Avatar URL</label>
                <input type="text" name="avatar" aria-placeholder="https://example.com/avatar.jpg" defaultValue={contact?.avatar} />
            </div>
            <div>
                <label>Notes</label>
                <textarea name="notes" defaultValue={contact?.notes} rows={6}></textarea>
            </div>
            <div>
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>
            </div>
        </Form>
    )
}