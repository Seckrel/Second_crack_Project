import { createMuiTheme } from '@material-ui/core/styles'

export const appBarTheme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#121a1e"
            }
        }
    }
})