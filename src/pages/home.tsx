

import React from 'react';
import { Container } from 'reactstrap';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
        <div>
            <Container fluid className = 'p-0'>
                <Navigation />
                <Header
                    title='A Nerdy Headline'
                    headline = 'A Cool Headline'
                />
                <Container className = 'mt-5'>
                    Blog stuff
                </Container>
            </Container>
        </div>
    )

}

export default HomePage
