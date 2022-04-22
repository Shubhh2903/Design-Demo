
import {createGlobalStyle} from "styled-components";
import Lato from '../font/LatoSemibold.ttf'
import LatoLight from '../font/Lato-Light.ttf'
import LatoRegular from '../font/Lato-Regular.ttf'
import LatoBold from '../font/Lato-Bold.ttf'
import LatoHeavy from '../font/Lato-Heavy.ttf'
import LatoMedium from '../font/Lato-Medium.ttf'
import LatoBlack from '../font/Lato-Black.ttf'
const FontStyle = createGlobalStyle`
    @font-face{
        font-family: 'Lato-SemiBold';
        src:url(${Lato});
    }
    @font-face{
        font-family: 'Lato-Light';
        src:url(${LatoLight})
    }
    @font-face{
        font-family: 'Lato-Regular';
        src:url(${LatoRegular})
    }
    @font-face{
        font-family: 'Lato-Bold';
        src:url(${LatoBold})
    }
    @font-face{
        font-family: 'Lato-Heavy';
        src:url(${LatoHeavy})
    }
    @font-face{
        font-family: 'Lato-Medium';
        src:url(${LatoMedium})
    }
    @font-face{
        font-family: 'Lato-Black';
        src:url(${LatoBlack})
    }
`
export default FontStyle