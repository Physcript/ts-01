import React from 'react';
import { Card, CardBody } from 'reactstrap';

import CenterPiece from '../CenterPiece';

export interface ILoadingProps {
    dotTypes?: string
}
export const Loading: React.FunctionComponent<ILoadingProps> = props => {
    const { dotTypes } = props
    return (
        <div className = 'text-center'>
            <div className = 'stage'>

                <div className = {dotTypes} />

            </div>
        </div>
    )
}
Loading.defaultProps = {
    dotTypes: 'dot-bricks'
}

export interface ILoadingComponentProps  {
    card?: boolean
    dotTypes?: string
}

export const LoadingComponent: React.FunctionComponent<ILoadingComponentProps> = props => {
    const  { card, dotTypes } = props
    if (card) {
        return (
            <CenterPiece>
                <Card>
                    <CardBody>
                        <Loading dotTypes={dotTypes}>

                        </Loading>
                    </CardBody>
                </Card>
            </CenterPiece>
        )
    }

    return (
        <Loading dotTypes={dotTypes}>

        </Loading>
    )

}

LoadingComponent.defaultProps = {
    card:true,
    dotTypes: 'dot-bricks'
}


export default LoadingComponent
