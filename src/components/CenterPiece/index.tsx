import React, { Children } from 'react';
import { Container } from 'reactstrap';

export interface ICenterPieceProps {}
const CenterPiece: React.FunctionComponent<ICenterPieceProps> = () => {

    return (
        <Container fluid  className = 'p-0'>
            <Container
                style = {{

                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    WebkitTransform: 'translate(-50%,-50%)'
                }}
                className = 'd-flex justify-content-center' >
            </Container>
        </Container>
    )
}

export default CenterPiece
