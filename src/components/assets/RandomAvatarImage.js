import React from 'react'

import {Image} from 'semantic-ui-react'

const avatars = [
    'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
    'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    'https://react.semantic-ui.com/assets/images/avatar/large/steve.jpg',
    'https://react.semantic-ui.com/assets/images/avatar/large/molly.png',
    'https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg',
    'https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'
]

const RandomAvatarImage = (props) => <Image {...props}
                                            src={avatars[Math.floor(Math.random() * avatars.length)]}/>


export default RandomAvatarImage