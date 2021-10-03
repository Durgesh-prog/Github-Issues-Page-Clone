import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
   root:{
		flexGrow:'1',
		background:'#f6f8fa',
		paddingTop:'8px !important',
		marginBottom:'32px !important',
		boxSizing:'border-box',
		fontSize:'20px',
		boxShadow:'rgb(216, 222, 228) 0px -1px 0px 0px inset',
		["@media (max-width:320px)"]: {
			fontSize:'12px'
		}
   },
   header:{
	   display:'flex',
	   paddingRight:'16px !important',
	   paddingLeft:'16px !important',
	   justifyContent:'space-between',
	   maxWidth:'1250px',
	   margin:'0px auto',
   },
   outerContainer:{
	   display:'flex',
	   fontWeight:'400 !important',
	   alignItems:'center',
	   flexWrap:'wrap',
   },
   repoIcon:{
	 width:'25px'  
   },
   tabIcon:{
	    width:'13px'  
   },
   author:{
	   fontWeight:'100',
	   fontSize:'25px !important',
	   paddingLeft:'5px',
	   color:'#0969da',
	   '&:hover':{
		   textDecoration:'underline',
		   textDecorationThickness:'1px'
	   },
	   cursor:'pointer'
   },
   name:{
	   fontWeight:'600',
	   fontSize:'25px !important',
	   marginRight:'8px !important',
	   color:'#0969da',
	   cursor:'pointer',
	   '&:hover':{
		   textDecoration:'underline',
		   textDecorationThickness:'1px'
	   }
   },
   slash:{
	   margin:'0 8px',
	   fontSize:'25px'
   },
   ul:{
	    display:'inline-flex !important',
		listStyleType:'none',
		alignSelf:'center',
		fontSize:'15px',
	   '& li':{
		   margin:'0 10px',
		   cursor:'pointer',
		  display:'inline-flex',
		  justifyContent:'space-between',
		  border:'2px solid #80808012',
		  borderRadius:'3px',
		  alignItems:'center',
	   },
	    ["@media (max-width:620px)"]: {
		  display:'none !important',
		},
   },
   actionsTitle:{
	   backgroundColor:'transparent',
	   borderRight:'1px solid #8080802e',
	   flexGrow:'1',
	   padding:'3px 5px',
	   display:'flex',
	   '& span':{
		   margin:'5px'
	   }
   },
   actionsCount:{
	   backgroundColor:'#fff',
	   padding:'8px 8px',
	   flexGrow:'1',
	   width:'35px',
	   '&:hover':{
		   color:'blue !important'
	   },
	   overflow:'hidden'
   },
   paper:{
	 background:'transparent !important',
	 border:'none',
	 boxShadow:'none !important'
   },
   tabsContainer:{
	 display:'flex',
	 alignItems:'center',
	 paddingBottom:'4px',
	 maxWidth:'1250px',
	 margin:'0px auto',
   },
   tabs:{
	    display:'flex !important',
		alignItems:'center',
		paddingRight:'16px',
		paddingLeft:'16px',
		cursor:'pointer'
   },
   hiddenTabs:{
	  ["@media (min-width:1000px)"]: {
		  display:'none !important',
		},
   },
   dropDown:{
	   right:'0',
	   position:'absolute',
	   zIndex:'99999'
   },
   //Responsive styles for Tabs
   code:{
	   display:'none !important',
	   ["@media (min-width:150px)"]: {
		  display:'inline-block !important',
		},
   },
   mbCode:{
	   ["@media (min-width:150px)"]: {
		  display:'none !important',
		},
   },
   issues:{
	   display:'none !important',
	   ["@media (min-width:285px)"]: {
		  display:'inline-block  !important',
		},
   },
   mbIssue:{
	   ["@media (min-width:285px)"]: {
		  display:'none  !important',
		},
   },
   pullRe:{
	   display:'none !important',
	   ["@media (min-width:408px)"]: {
		  display:'inline-block  !important',
		},
   },
   mbPull:{
	   ["@media (min-width:408px)"]: {
		  display:'none  !important',
		},
   },
   discuss:{
	   display:'none !important',
	   ["@media (min-width:650px)"]: {
		  display:'inline-block  !important',
		},
   },
   mbDisc:{
	    ["@media (min-width:650px)"]: {
		  display:'none  !important',
		},
   },
   actions:{
	   display:'none !important',
	   ["@media (min-width:700px)"]: {
		  display:'inline-block  !important',
		},
   },
   mbAction:{
	   ["@media (min-width:700px)"]: {
		  display:'none  !important',
		},
   },
   projects:{
	   display:'none !important',
	   ["@media (min-width:856px)"]: {
		  display:'inline-block  !important',
		},
   },
   mbProj:{
	   ["@media (min-width:856px)"]: {
		  display:'none  !important',
		},
   },
   security:{
	    display:'none !important',
	   ["@media (min-width:964px)"]: {
		  display:'inline-block  !important',
		},
   },
   mbSec:{
	   ["@media (min-width:964px)"]: {
		  display:'none  !important',
		},
   },
   insights:{
	   display:'none !important',
	   ["@media (min-width:1000px)"]: {
		  display:'inline-block  !important',
		},
   },
   mbIns:{
	    ["@media (min-width:1000px)"]: {
		  display:'none  !important',
		},
   },
   selctedTab:{
	   textDecoration:'underline !important',
	   textDecorationColor:'#fd9a84 !important',
	   textDecorationThickness:'2px !important',
	   textUnderlineOffset:'8px !important'
   }
  
}));
 
 
 export default useStyles;
