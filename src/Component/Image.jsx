import React from 'react';
import BSImage from 'react-bootstrap/Image';
function Image(props) {
    return (
        <>
            <BSImage
                src={`${process.env.PUBLIC_URL}/images/${props.name}`}
                fluid
            />
        </>
    );
}
export default Image;
