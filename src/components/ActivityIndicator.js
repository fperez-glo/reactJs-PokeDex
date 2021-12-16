import React from 'react'
import pikachuLoading from '../resources/loading/pikachuLoading.gif'
import '../styles/ActivityIndicator.css';

const ActivityIndicator = () => {
    return (
        <>  
            <img className='img' src={pikachuLoading} alt="loading..." />
        </>
    )
}

export default ActivityIndicator
