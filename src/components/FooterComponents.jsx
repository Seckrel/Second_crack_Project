import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const useBackToTopFab = makeStyles(theme => ({
    root: {
        color: "#ffffff",
        transform: "rotate(45deg)",
        position: "relative",
        bottom: '18px',
        backgroundColor: '#121e22',
        borderRadius: "20%",
        boxShadow: "0px 0px"
    },
}))

function Footer(){
    const backToTopFabClass = useBackToTopFab();
    return(
       <Box id="footer">
           <Grid container justify={"center"}>
               <div>
                <Fab classes={backToTopFabClass} href={"#top"} aria-label="scroll back to top">
                    <ExpandLessIcon 
                        fontSize="large" 
                        style={{transform: "rotate(-45deg)"}}
                    />
                </Fab>
                </div>
            </Grid>
            
       </Box>
    )
}

export default Footer