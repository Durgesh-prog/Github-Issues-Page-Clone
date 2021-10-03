import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
   root:{
	flexGrow:1
   },
   appbar:{
	   backgroundColor:'#24292f !important'
   },
   toolbar:{
	 display:'flex',
	 justifyContent:'space-between',
	 alignItems:'center'
   },
   githubAvatar:{
	   backgroundColor:'none !important',
	   
   },
   
 
 }));
 
 
 export default useStyles;