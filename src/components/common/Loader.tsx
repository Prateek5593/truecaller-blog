import React from 'react';
import {Spinner} from 'reactstrap';

const Loader: React.FC = () => {
    return (
        <div className=' m-5 d-flex justify-content-center w-100'>
            <Spinner style={{ width: '3rem', height: '3rem' }} color='primary' />
        </div>
    )
}

export default Loader
