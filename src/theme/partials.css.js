import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: theme.spacing(1.5),
            marginBottom: '100px',
        },
        footer: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            background: theme.palette.primary.light,
            color: theme.palette.common.white,
            padding: theme.spacing(1.5)
        },
        text: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        container__list: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 25px',
            alignItems: 'center',
            flexDirection: 'row',
            border: '1px solid #D6DBDF',
            marginBottom: '10px',
            width: '60%',
            borderRadius: '10px',
            cursor: 'pointer',
            '&:hover': {
                background: "#D6EAF8",
             },
        },
        container__top: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        add__promo: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            border: '1px solid #D6DBDF',
            borderRadius: '10px',
            marginBottom: '15px',
            padding: '0 15px',
            '&:hover': {
                background: "#FCF3CF",
             },
        },
        button: {
            width: '100%',
            
        },
        margin: {
            width: '100%',
          }
       
    }),
);

export default useStyles;