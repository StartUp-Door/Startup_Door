import React from 'react'

import CreateService from '../../components/admin/servicetypes/CreateService';
import ShowServices from '../../components/admin/servicetypes/ShowServices';

function ServiceTypes() {
    return ( 
    <div style = {{ marginTop: 150, }} >
        <CreateService/>
        <ShowServices/>        
    </div>
    )
}

export default ServiceTypes