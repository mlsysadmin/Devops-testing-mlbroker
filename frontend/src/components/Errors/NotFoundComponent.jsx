import React from 'react';
import { Result } from 'antd';
import '../../styles/Error.css';
import SemiRoundBtn from '../custom/buttons/SemiRoundBtn.custom';
import { useNavigate } from 'react-router-dom';


const NotFoundComponent = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, resource does not exist."
            className='error-page'
            extra={
                <SemiRoundBtn
                    type="primary"
                    label={'Back Home'}
                    size={'large'}
                    style={{
                        backgroundColor: '#D90000'
                    }}
                    handleClick={() => navigate('/')}
                />}
        />
    )
}
export default NotFoundComponent;