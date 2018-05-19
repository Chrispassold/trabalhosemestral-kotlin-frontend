import React from 'react'
import {Checkbox} from 'semantic-ui-react'

const style = {
    normal: {
        paddingLeft: '10px',
    },
    checked: {
        paddingLeft: '10px',
        textDecoration: 'line-through',
        opacity: 0.6
    },
    svg: {
        stroke: 'white',
        fill: 'white',
    }
}

const CheckBoxItemOffline = ({label, onChange, checked, ...rest}) => <div>
    <Checkbox {...rest} label={label} onChange={onChange} defaultChecked={checked}
              style={!!checked ? style.checked : style.normal}/>
</div>

export default CheckBoxItemOffline