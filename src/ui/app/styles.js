import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({}) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1400px',
    margin: '0px auto',
    float: 'none',
	backgroundColor:'white'
  },
  content: {
    marginTop: 60,
    minHeight: '62vh',
  },
}));

export default useStyles;
