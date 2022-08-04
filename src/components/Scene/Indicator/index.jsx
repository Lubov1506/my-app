import React from 'react';

const Indicator = (props) => {
    const {theme} = props
    return (
        <div >
            Current theme is {theme}
        </div>
    );
}

export default Indicator;
