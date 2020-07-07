import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //ако се опитаме веднага да вземем пропърти на даден обект, примерно картинка,
        // няма да ни даде нищо, ще ни даде falsy проперти, 0, ... анд со он
        // за това трябва да поискаме пропъртито (height), когато е заредило елемента
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        console.log(this.imageRef.current.clientHeight)
    }

    render() {
        const {description, urls} = this.props.image

        return (
            <div className={`four wide column`}>
                <img className={`ui fluid image`} ref={this.imageRef} src={urls.small} alt={description}/>
            </div>
        );
    }
}

export default ImageCard;
