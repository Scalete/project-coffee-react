import { Component, Fragment }  from "react";
import Header from "../header/Header";
import Promo from '../promo/Promo'

import './app.scss'

import MainBgImage from '../../media/promo-bg.jpg'

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Promo title="Everything You Love About Coffee" minheight="630px" height='100vh' image={MainBgImage}/>
            </Fragment>
        )
    }
}

export default App;