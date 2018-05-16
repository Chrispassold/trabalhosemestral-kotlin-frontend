import React from 'react'

const style = {
    normal: {
        paddingLeft: '10px',
    },
    checked: {
        paddingLeft: '10px',
        textDecoration: 'line-through',
        opacity: 0.6
    }
}
const CheckboxCheckGreen = ({label, onChange, checked, ...rest}) => <div
    className="pretty p-icon p-round p-jelly">
    <input {...rest} defaultChecked={checked} type="checkbox" onChange={(e) => !!onChange && onChange(e)}/>
    <div className="state p-success">
        <i className="icon mdi mdi-check"/>
        <label>
            <span style={!!checked ? style.checked : style.normal}>{label}</span>
        </label>
    </div>
</div>

export default CheckboxCheckGreen