import React from 'react'

const CheckboxCheckGreen = ({label, onClick, ...rest}) => <div className="pretty p-default p-round p-smooth p-plain">
    <input {...rest} type="checkbox" onClick={(e) => !!onClick && onClick}/>
    <div className="state p-success-o">
        <label>{label}</label>
    </div>
</div>

export default CheckboxCheckGreen