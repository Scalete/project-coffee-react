import React from 'react';

import CoffeeDivider from '../coffee/CoffeeDivider';

class PromoDescription extends React.Component {

    render() {

        return (
            <React.Fragment>
                <CoffeeDivider color="white" margin="coffee-divider-mb35"/>
                <h2 className='promo-subtitle'>We makes every day full of energy and taste</h2>
                <h2 className='promo-subtitle'>Want to try our beans?</h2>
                <button onClick={() => console.log(1)} className='coffee-btn'>More</button>
            </React.Fragment>
        )
    }
}

export default PromoDescription;