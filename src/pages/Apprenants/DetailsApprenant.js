import React, {useState, useContext, useEffect} from 'react';
import authContext from '../../store';
import { apprenantService } from '../../services';
import useStyles from '../../theme/partials.css';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { CallMissedSharp } from '@material-ui/icons';

const DetailsApprenant = (props) => {

    const [apprenant, setApprenant] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false)
    const authStore = useContext(authContext);

    const classes = useStyles();

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

    const removeApprenant = async (id) => {

        setOpen(false);

        try {
            const response = await apprenantService.removeOne(id);
            props.history.push('/apprenants')
            // penser à ajouter un message de confirmation de suppression !

        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className={classes.container}>
            {!loading && 
                <div className={classes.container__list}>
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
                        <Button onClick={(e) => removeApprenant(apprenant.id)} color="primary" autoFocus>
                            Supprimer
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            }

        </div>
    )
}

export default DetailsApprenant;