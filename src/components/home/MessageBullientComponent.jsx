import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { useStylesPaperGeneral } from '../../materialUI/Styles'
import CreditImg from '../recycle/CreditImgComponent'


const MessageBullient = () => {
    const paperClasses = useStylesPaperGeneral();
    return (
        <Container disableGutters>
            <Paper 
                elevation={3}
                classes={paperClasses}
                square={true}
            >
                <CreditImg 
                    title={"Photo by Kaboompics .com from Pexels"}
                    src={"/assests/tempImgs/pexels-kaboompics-com-6067.jpg"}
                    alt={"Coffee on a table picture"}
                />
            </Paper>
        </Container>
    )
}

export default MessageBullient;