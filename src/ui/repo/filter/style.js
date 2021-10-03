import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints ,transitions}) => ({
  root:{
	boxShadow:'rgb(216, 222, 228) 0px -1px 0px 0px inset'
   
  },
  header:{
	display:'flex',
	backgroundColor:'#d6e8fa6e',
	borderRadius:'10px',
	padding:'10px 20px',
	justifyContent:'space-between',
	flexWrap:'wrap',
	whiteSpace:'nowrap',
	boxSizing:'border-box',
	boxShadow:'rgb(216, 222, 228) 0px -1px 0px 0px inset',
	["@media (max-width:320px)"]: {
		  padding:'5px !important',
		  backgroundColor:'transparent',
		  border:'none',
		  boxShadow:'none',
		  fontSize:'12px',
		  margin:'0px',
		  fontSize:'12px'
	}
  },
  headerRight:{
	  display:'flex',
	  alignItems:'center',
	  justifyContent:'baseline'
  },
  openIssue:{
	  display:'inline-block',
	   margin:'0px 14px',
	   fontWeight:'400'
  },
  Icon:{
	  width:'18px',
	  marginRight:'1px',
	  outlineColor:'red'
  },
  closedIssue:{
	  color:'grey'
  },
  paper:{
	  backgroundColor:'transparent',
	  border:'none',
	  boxShadow:'none'
  },
  cardBox:{
	  display:'flex',
	  padding:'10px',
	  boxShadow:'rgb(216, 222, 228) 0px -1px 0px 0px inset',
	  alignItems:'center'
  },
  cardInfo:{
	  display:'flex',
	  flexDirection:'column',
	  marginLeft:'10px'
  },
  error:{
	  color:'red',
	  display:'flex',
	  justifyContent:'center'
  },
  loadingCSS:{
      height:"100px",
      margin: "30px"
  }
  
}));
 
 
 export default useStyles;
