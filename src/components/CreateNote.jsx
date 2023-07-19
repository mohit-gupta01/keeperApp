import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isZoomIn, setZoomIn] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue=>{
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleClick(event){
        props.addNote(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    
    return (
        <div>
            <form className="create-note">
                {isZoomIn && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
                <textarea onChange={handleChange} onClick={()=>{setZoomIn(true)}} name="content" placeholder="Take a note..." rows={isZoomIn?"3":"1"} value={note.content} />
                <Zoom in={isZoomIn}>
                <Fab onClick={handleClick}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
