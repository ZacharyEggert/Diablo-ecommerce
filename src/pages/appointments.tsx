import AppointmentBookingForm from '@components/AppointmentBookingForm';
import React from 'react';

interface AppointmentsProps {}

const Appointments: React.FC<AppointmentsProps> = () => {
    return (
        <main className='w-full h-full max-w-5xl p-8 mx-auto'>
            <section className='relative my-4'>
                <h2 className='mt-12 mb-4 text-2xl font-semibold uppercase text-skin-primary'>
                    Appointments
                </h2>

                <AppointmentBookingForm />
            </section>
        </main>
    );
};

export default Appointments;
