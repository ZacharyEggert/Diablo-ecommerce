import React from 'react';

interface AppointmentBookingFormProps {}

const AppointmentBookingForm: React.FC<AppointmentBookingFormProps> = ({}) => {
    return (
        <div>
            <iframe
                src='https://squareup.com/appointments/book/3fnk55bxgf81n5/L99QD4DABXA0W/start'
                className='w-full bg-white border-none aspect-video'
                id='square-appointment-form'
                loading='lazy'></iframe>
        </div>
    );
};

export default AppointmentBookingForm;
