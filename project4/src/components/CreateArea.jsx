import React, { useState } from 'react'

function CreateArea(){

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
    return (
        <div className='note'>
            <form action="">
                <input name= "title" onChange={handleChange} value={note.title} placeholder='Title' />
                <textarea name="content" onchange={handleChange} value= {note.content} placeholder='take a notee.....' rows="4"></textarea>
                <button>
                    Add
                </button>
            </form>
        </div>
    )
}
export default CreateArea;