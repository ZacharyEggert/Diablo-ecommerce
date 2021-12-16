import React, { FC } from 'react';
import { RefreshIcon } from '@heroicons/react/outline';

interface LoadingProps {}

const Loading: FC<LoadingProps & React.ComponentProps<'svg'>> = (props) => {
    return (
        <RefreshIcon
            {...props}
            className={`${props.className} animate-spin-reverse`}
            strokeWidth={0.5}
        />
    );
};

export default Loading;
