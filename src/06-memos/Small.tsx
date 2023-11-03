import { FC, memo } from 'react';

type SmallProps = {
    value: number
}

export const Small:FC<SmallProps> = memo(({ value }) => {

    console.log('Me volvi a redibujar');

    return (
        <small>{ value }</small>
    )
})
