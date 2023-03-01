import React from 'react'

interface IProps {
    type: string;
}

const PopUpTitle: React.FC<IProps> = (props) => {
    switch (props.type) {
        case 'add':
            return (
                <h3>add course</h3>
            );
        case 'edit':
            return (
                <h3>update course</h3>
            );
        default:
            return (
                <h3>unknown popup</h3>
            );
    }
}

export default PopUpTitle;
