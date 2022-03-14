import { Component } from "react";
import PromoDescription from "../promo-description/PromoDescription";

import styled from 'styled-components'

import './promo.scss'

class Promo extends Component {

    render() {

        const minheight = this.props.minheight;
        const height = this.props.height;
        const image = this.props.image;
        const title = this.props.title;

        const PromoSection = styled.section`
            height: ${height};
            min-height: ${props => props.minheight} ;
            background: url('${props => props.image}') center center/cover no-repeat;
        `

        return (
            <PromoSection height={height} minheight={minheight} image={image} className="promo">
                <h1 className="promo-title">{title}</h1>
                <PromoDescription/>
            </PromoSection>
        )
    }
}

export default Promo;