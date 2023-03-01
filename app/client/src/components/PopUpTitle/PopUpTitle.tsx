import React from 'react'

interface IProps {
    type: string;
    title: string;
}

const PopUpTitle: React.FC<IProps> = (props) => {
    switch (props.type) {
        case 'add':
            return (
                <h3>add {props.title}</h3>
            );
        case 'edit':
            return (
                <h3>update {props.title}</h3>
            );
        default:
            return (
                <h3>unknown popup</h3>
            );
    }
}

export default PopUpTitle;
