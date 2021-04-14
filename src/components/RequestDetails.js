import React from 'react'

function RequestDetails() {
    return (
        <div className="LeftBlock">
        <div className="req-parent">
        <div className="req-ref reqblock">
            <p className='req-header'>Request reference</p>
            <p className='req-detail'>SET29383ABCH</p>
        </div>
        <div className="req-cat reqblock"> 
            <p className='req-header'>Category</p>
            <p className='req-detail'>Payment</p>
        </div>
        <div className="req-status reqblock">
            <p className='req-header'>Request status</p>
            <p className='req-detail'><i class="fa fa-info-circle" style={{fontSize:"16px",color:"red"}}></i> 
Pending authorisation</p>
        </div>
        </div>
      </div> 
    )
}

export default RequestDetails
