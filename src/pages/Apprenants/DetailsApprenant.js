import React, {useState, useContext, useEffect} from 'react';
import authContext from '../../store';
import { apprenantService } from '../../services';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const DetailsApprenant = (props) => {

    const [apprenant, setApprenant] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false)
    const authStore = useContext(authContext);

    useEffect(async () => {
        const id = props.match.params.id;
        try {
            const response = await apprenantService.getById(id);
            setApprenant(response.data);
            setLoading(false)
        } catch (error){
            setError(true)
        }

    }, [])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
            {!loading && 
                <div>
                    {error && <p>Erreur serveur</p>}
                    <h4>{apprenant.firstname} {apprenant.lastname}</h4>
                    <h5>Promo : {apprenant.promo.name}</h5>
                    <DeleteForeverIcon onClick={handleClickOpen}/>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Confirmation de la suppression"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Etes-vous sûr de vouloir supprimer {apprenant.firstname} {apprenant.lastname}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Annuler
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Supprimer
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            }

        </>
    )
}

export default DetailsApprenant;