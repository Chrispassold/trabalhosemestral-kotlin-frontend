import React, {Component, Fragment} from 'react'
import {Grid} from 'semantic-ui-react'
import {CardUser} from '../../components/index'

import './style.less'

class Home extends Component {
    render() {
        return (
            <div className={"container-side-screen"}>
                <div className={"left-side-screen"}>
                    <CardUser user={
                        {
                            name: 'christian',
                            age: '23'
                        }
                    }/>
                </div>
                <div className={"right-side-screen"}>

                </div>
            </div>
        )
    }
}

export default Home