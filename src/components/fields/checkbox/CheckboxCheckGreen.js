import React from 'react'

// const CheckboxCheckGreen = ({label, onChange, ...rest}) => <div className="pretty p-default p-round p-smooth p-plain">
//     <input {...rest} type="checkbox" onChange={(e) => !!onChange && onChange(e.target.checked)}/>
//     <div className="state p-success-o">
//         <label>{label}</label>
//     </div>
// </div>

const style = {
    checked: {
        textDecoration: 'line-through',
        opacity: 0.6
    }
}
//TODO: fazer componente controlado e colocar um icone de check
const CheckboxCheckGreen = ({label, onChange, checked, ...rest}) => <div
    className="pretty p-icon p-round p-jelly">
    <input {...rest} defaultChecked={checked} type="checkbox" onChange={(e) => !!onChange && onChange(e)}/>
    <div className="state p-success">
        <i className="icon mdi mdi-check"/>
        <label>
            <span style={!!checked ? style.checked : {}}>{label}</span>
        </label>
    </div>
</div>

export default CheckboxCheckGreen