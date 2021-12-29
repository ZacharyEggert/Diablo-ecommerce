import React from 'react';

interface HeroProps {
    src: string;
}

const Hero: React.FC<HeroProps> = ({ src }) => {
    return (
        <div className='w-full aspect-video mt-16 xl:h-[48rem] overflow-hidden relative'>
            <img
                className='object-cover absolute inset-0 w-[200%] md:w-full aspect-auto -top-8 xl:-top-24 2xl:-top-40'
                src={src}
            />
        </div>
    );
};

export default Hero;
