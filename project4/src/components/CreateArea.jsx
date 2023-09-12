import React, { useState } from 'react'

function CreateArea(props){

    const [note, setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
            const{name, value}= event.target;

            setNote (prevNote => {
                return{
                    ...prevNote,
                    [name]:value
                }
            })
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
    }
    return (
        <div className='note2'>
            <form action="">
                <input className="note2" name= "title" onChange={handleChange} value={note.title} placeholder='Title' />
                <textarea className= "note1" name="content" onChange={handleChange} value= {note.content} placeholder='take a notee.....' rows="4"></textarea>
                <button onClick={submitNote}>
                    Add
                </button>
            </form>
        </div>
    )
}
export default CreateArea;