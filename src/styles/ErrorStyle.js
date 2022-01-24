import {makeStyles} from '@mui/styles';

export const useErrorStyle = makeStyles(()=> ({
    box_error : {
    display : 'flex',
    alignItems : 'center',
    jusfityContent: 'space-between',
    width : '100%',
    height : '100%',
    },
    img_error : {
        width: '45%',
        height: '90%',
        paddingLeft: '10px',
    },
}))