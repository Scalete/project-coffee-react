import { Component }  from "react";

import CoffeeDivider from '../coffee/CoffeeDivider';

import './about.scss'

class About extends Component {

    render() {

        const title = this.props.title;
        const description = this.props.description;

        const printItemDescription = (item, i, arr) => {
            
            if (arr.length - 1 !== i) {
                return (
                    <p className="about-description">{item}<br/><br/></p>
                )
            }
            return (
                <p className="about-description">{item}</p>
            )
        }

        const printDescription = (description) => {
            return description.map((item, i, arr) => printItemDescription(item, i, arr))
        }

        return (
            <section className="about">
                <h2 className="coffee-title">{title}</h2>
                <CoffeeDivider color="black" margin="coffee-divider-mb41"/>
                {printDescription(description)}
            </section>
        )
    }
}

export default About;