import Tooltip from '@material-ui/core/Tooltip'
import { useStylesBootstrapTooltip } from '../../materialUI/Styles'
import Zoom from '@material-ui/core/Zoom'


function CreditImg(props) {
    const creditTooltip = useStylesBootstrapTooltip();
    
    return (
        <Tooltip 
        arrow
        title={props.credit} 
        classes={creditTooltip}
        TransitionComponent={props.TransitionComponent?Zoom:props.TransitionComponent}
      >
        <img src={props.src} 
            alt={props.altText} 
            className="img-fluid"/>
      </Tooltip>
    )
}

export default CreditImg;