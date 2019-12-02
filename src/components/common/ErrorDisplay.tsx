import React from 'react'
import { Alert } from 'reactstrap'
import ErrorConstants from '../../helpers/ErrorConstants';

interface Props {
    error: string;
}

const ErrorDisplay: React.FC<Props> = ({ error }) => {
    return (
        <div>
            <Alert color='danger' className='text-center'>
                <strong>{ErrorConstants.ErrorMessageConstants.COMMON_MESSAGE} </strong> <br />
                {error}
            </Alert>
        </div>
    )
}

export default ErrorDisplay;
