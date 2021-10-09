import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Appointments = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />

            <div className='px-8 py-8 mx-auto sm:w-4/6 lg:w-7/12'>
            <iframe src="https://squareup.com/appointments/buyer/widget/3fnk55bxgf81n5/L99QD4DABXA0W" className='min-h-[500px] w-full h-full border-none' title='Appointments'></iframe>
            </div>

            <Footer />
        </div>
    );
};

export default Appointments;
