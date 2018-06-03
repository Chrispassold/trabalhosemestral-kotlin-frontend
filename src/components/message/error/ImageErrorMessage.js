import React, {Fragment} from 'react'
import {Header} from 'semantic-ui-react'
import Assets from "components/assets/Assets";

const ImageErrorMessage = ({headerText = "Eita!", subHeaderText = "Alguma coisa errada não esta certa"}) => <Fragment>
    <Assets src={'/svg/omg.svg'} size={'tiny'} centered/>
    <Header as={'h2'} textAlign={'center'}>
        {headerText}
        <Header.Subheader>{subHeaderText}</Header.Subheader>
    </Header>
</Fragment>

export default ImageErrorMessage