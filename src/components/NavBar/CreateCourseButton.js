import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Snackbar } from '@material-ui/core';
import PlusIcon from '@material-ui/icons/AddBoxRounded'
import Alert from '@material-ui/lab/Alert'


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
                    <div><TextField id="courseName" autoFocus margin="dense" label="Vak" type="text"/></div>
                    <div><TextField id="courseCluster" margin="dense" label="Cluster" type="text"/></div>
                    <div><TextField id="courseTeacher" margin="dense" label="Docent" type="text"/></div>
                </DialogContent>

                {/* Dialog actions */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">annuleren</Button>
                    <Button onClick={handleClose} color="primary" disabled>aanmaken</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

