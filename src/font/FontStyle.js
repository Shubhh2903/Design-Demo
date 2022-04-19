
import {createGlobalStyle} from "styled-components";
import Lato from '../font/LatoSemibold.ttf'
import LatoLight from '../font/Lato-Light.ttf'
import LatoRegular from '../font/Lato-Regular.ttf'
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
`
export default FontStyle