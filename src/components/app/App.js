import { Component, Fragment }  from "react";
import Header from "../header/Header";
import Promo from '../promo/Promo'
import About from "../about/About";

import './app.scss'

import MainBgImage from '../../media/promo-bg.jpg'

class App extends Component {

    render() {

        return (
            <Fragment>
                <Header/>
                <Promo title="Everything You Love About Coffee" minheight="630px" height='100vh' image={MainBgImage}/>
                <About title="About Us" description={[`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`, `Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.`]}/>
            </Fragment>
        )
    }
}

export default App;