import React from 'react'
import Header from '../Header'
import { Flex } from './styles'
import SearchArea from '../SearchArea'
import  CardsArea from '../CardsArea'
const Layout: React.FC = () => {
    return (
        <Flex>
            <Header/>
            <SearchArea/>
            <CardsArea/>
        </Flex>
    )
}

export default Layout
