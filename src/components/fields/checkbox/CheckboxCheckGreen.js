import React from 'react'

const CheckboxCheckGreen = ({label, onChange, ...rest}) => <div className="pretty p-default p-round p-smooth p-plain">
    <input {...rest} type="checkbox" onChange={(e) => !!onChange && onChange(e.target.checked)}/>
    <div className="state p-success-o">
        <label>{label}</label>
    </div>
</div>

export default CheckboxCheckGreen