import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import * as utils from '../Utils'

class CardStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFav: this.isFav(props.address)};
    }

    getKey = () => {
        return utils.getKey(this.props.address);
    }

    isFav = () => {
        return utils.isFav(this.props.address);
    }

    setFav = () => {
        this.setState({ isFav: true });
        window.localStorage.setItem(this.getKey(), true);
    }

    setNonFav = () => {
        this.setState({ isFav: false});
        window.localStorage.removeItem(this.getKey());
    }

    render = () => {
        if(this.state.isFav) {
            return <div className={this.props.className}><FontAwesomeIcon className="staricon" icon={solidStar} onClick={this.setNonFav}/></div>;
        }
        else {
            return <div className={this.props.className}><FontAwesomeIcon className="staricon" icon={emptyStar} onClick={this.setFav}/></div>;
        }
    }
}

export default CardStar;