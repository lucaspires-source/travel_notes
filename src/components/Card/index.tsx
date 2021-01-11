import React from 'react'
import { DeleteIcon,EditIcon,Separator } from './styles'
import { Container } from './styles'

const Card: React.FC = () => {
    return (
        <Container>
            <EditIcon/>
            <DeleteIcon/>
            <Separator/>
        </Container>
    )
}

export default Card