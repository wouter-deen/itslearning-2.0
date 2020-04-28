import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions} from '@material-ui/core';
import PlusIcon from '@material-ui/icons/AddBoxRounded'


export default function CreateCourseButton() {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} startIcon={<PlusIcon />}>
                vaksite
            </Button>

            {/* Popup screen (dialog) */}
            <Dialog  open={open} onClose={handleClose}>
                <DialogTitle>Vaksite toevoegen</DialogTitle>

                {/* Dialog content */}
                <DialogContent>
                    <div><TextField id="courseName" autoFocus margin="dense" label="Vak" type="text" color="secondary"/></div>
                    <div><TextField id="courseCluster" margin="dense" label="Cluster" type="text" color="secondary"/></div>
                    <div><TextField id="courseTeacher" margin="dense" label="Docent" type="text" color="secondary"/></div>
                </DialogContent>

                {/* Dialog actions */}
                <DialogActions>
                    <Button onClick={handleClose} color="default">annuleren</Button>
                    <Button onClick={handleClose} color="secondary" disabled>aanmaken</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

