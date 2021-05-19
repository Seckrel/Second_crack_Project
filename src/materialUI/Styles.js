import { makeStyles } from '@material-ui/core/styles'


export const useStylesHeader = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    buttonGap: {
        margin: "5px",
        width: "48px",
    },
    toolbar: {
        root:{
            backgroundColor: "black"
        }
    },
    paper: {
        backgroundColor: "#121a1e",
        color: "white"
    },
  }));

  export const listItemTextHeader = makeStyles({
    root:{
        textAlign: "center"
    }
})


export const useStylesBootstrapTooltip = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));

export const useStylesp20 = makeStyles(theme => ({
    padding20: {
        padding: "20px"
    },
}))

export const useStylesPaperGeneral = makeStyles(theme => ({
    root: {
        backgroundColor: "#293140", // use this later #333c4f
        color: "inherit",
    }
}))

export const useStylesBtnColor = makeStyles(theme => ({
    root: {
        backgroundColor: "#476CE1"
    }
}))

  
