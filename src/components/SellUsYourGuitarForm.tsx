import React from 'react';

const SellUsYourGuitarForm: React.FC<React.ComponentProps<'form'>> = (
    props
) => {
    return (
        <form {...props} className={`${props.className} `}>
            <div className='relative my-2'>
                <input className=''></input>
                <label className=''></label>
            </div>
        </form>
    );
};

export default SellUsYourGuitarForm;
