import Tooltip from '@material-ui/core/Tooltip'
import { useStylesBootstrapTooltip } from '../../materialUI/Styles'
import Zoom from '@material-ui/core/Zoom'

/**
 * 
 * @param {String} credit Name of Photographer
 * @param {String} src File path of image
 * @param {String} altText Alternative text for image
 * @param {String} [TransitionComponent="Zoom"] TransitionComponent is optional
 * @param {String} [TransitionComponent] Animation type when tooltip pops up
 * @returns {function}
 */
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