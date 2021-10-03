import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints ,transitions}) => ({
   root:{
		padding:'0px 16px !important',
		boxSizing:'border-box',
		maxWidth:'1250px',
		margin:'0 auto',
		fontSize:'20px',
		["@media (max-width:320px)"]: {
			  padding:'5px !important',		
		}
   },
   filterHeader:{
	   display:'flex',
	   justifyContent:'space-between',
	   marginBottom:'10px !important',
	    backgroundColor:'#f6f8fa',
		padding:'4px 10px',
		borderRadius:'10px',
		boxShadow:'rgb(216, 222, 228) 0px -1px 0px 0px inset'
   },
   filterDiv:{
	   display:'flex',
	   marginTop:'0px !important',
	   marginBottom:'0px !important',
	   flex:'auto !important',
	   justifyContent:'space-between',
	   alignItems:'center',
	    ["@media (max-width:600px)"]: {
		 flexWrap:'wrap !important',
		 justifyContent:'center !important'
		},
   },
   filterLabel:{
	 display:'inline-block' ,
	 marginRight:'1px'
   },
   search: {
    position: 'relative',
  
    backgroundColor:'#f6f8fa',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight:'10px',
    marginLeft: '0px',
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft:spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
	left:'-25px',
	["@media (max-width:600px)"]: {
		display:'none !important '
	},
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding:spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${spacing(4)}px)`,
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  filterTabs:{
	  display:'flex',
	  '& span':{
		  margin:'5px'
	  }
  },
  newissue:{
	  backgroundColor:'#2da44e',
	  color:'white',
	  height:'30px',
	  fontSize:'12px',
	  [breakpoints.down('sm')]: {
		  height:'22px',  
	  },
	  '&:hover':{
		  backgroundColor:'white !important',
		  color:'black !important'
	  }
  }
}));
 
 
 export default useStyles;
