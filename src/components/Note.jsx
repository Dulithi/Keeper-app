import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Note(props) {
    const colors = ["#DAEAF1", "#F8E8EE", "#F0EBE3", "#F6D6D6", "#D9D7F1"]
    const customStyle = {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
    }

    function deleteNote() {
        props.onDelete(props.id);
    }

    return (
        <div className="card note m-3 float-start shadow-lg" style={customStyle}>
         <div className="card-body">
            <h1 className="card-title">{props.title}</h1>
            <p className="card-text">{props.body}</p>
            <button className="btn delete-button float-end btn-outline-light" onClick={deleteNote}><DeleteOutlineOutlinedIcon /></button>
         </div>
            
        </div>
    );
}