import React from "react";
import {Button} from '@chakra-ui/react'
import {action,actions} from '@storybook/addon-actions'

export default{
    title:'Chakra/Button',
    component:Button,
    argTypes:{
        colorScheme:{control:'text'},
        children:{control:'text'},
        onClick:{action:'clicked'}
    }
}
// const Template=args=><Button {...args}/>
export const Success=()=><Button onClick={action('Click handler')} colorScheme='green'>Sucess</Button>
export const Danger=()=><Button {...actions('onClick','onMouseOver')} colorScheme='red'>Danger</Button>
// export const Success=Template.bind({})
// Success.args={
//     colorScheme:'green',
//     children:'Success'
// }
// export const Danger=Template.bind({})
// Danger.args={
//     colorScheme:'red',
//     children:'Danger'
// }
export const Log=()=>(
    <Button colorScheme="blue" onClick={()=>console.log('button clicked')}>Log</Button>
)