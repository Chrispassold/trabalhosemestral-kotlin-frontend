import React from 'react'
import PropTypes from 'prop-types'
import {Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react'
import CheckboxCheckGreen from "components/fields/checkbox/CheckboxCheckGreen";

const Item = ({data, isDone = false, onChange, ...rest}) => <Segment>
    <Grid>
        <GridRow>
            <GridColumn verticalAlign={'middle'} width={14}>
                <CheckboxCheckGreen {...rest} label={data} onChange={onChange}/>
            </GridColumn>
            {/*<GridColumn verticalAlign={'middle'} textAlign={'right'}>*/}
            {/*<Icon size={'large'} floated={'right'} name='delete'/>*/}
            {/*</GridColumn>*/}
        </GridRow>
    </Grid>
</Segment>

Item.propTypes = {
    data: PropTypes.any,
    onClick: PropTypes.func
}

export default Item;