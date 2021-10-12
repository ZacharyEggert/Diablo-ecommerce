import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const AboutUs = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />

            <div className='grid grid-cols-1 py-8 mx-auto sm:w-11/12 lg:w-5/6 sm:grid-cols-10'>
                <img
                    src='https://i0.wp.com/www.diabloguitars.com/wp-content/uploads/2018/12/ParkerLungren-KariPearson.jpg?fit=740%2C416&ssl=1'
                    alt='Parker Lungren'
                    className='w-full h-auto col-span-1 sm:col-span-4'
                />
                <div className='col-span-1 sm:col-span-6'>
                    <p className='py-2 '>
                        Parker Lundgren was born on December 28th, 1986 to Julie
                        Clouse and Scott Lundgren in Port Townsend, Washington.
                        Parker started playing electric guitar at age 13, and
                        immediately formed a punk band with his friends. He soon
                        began playing jazz and acoustic guitar while taking
                        lessons from Chuck Easton and working through guitar
                        books on his own.
                    </p>
                    <p className='py-2'>
                        Throughout high school Parker played in 3 to 4 bands at
                        a time. Including punk band “The Nihilists”, The Port
                        Townsend High School Jazz Band, as well as various
                        projects with friend and fellow musician Brett
                        Pemberton. Parker co-founded “The Nihilists” which went
                        on to perform for 6 years. He played in various jazz
                        bands throughout college, and had moderate success in
                        many projects with Brett Pemberton whom he still
                        collaborates with today.
                    </p>
                    <p className='py-2'>
                        After High School, Parker moved to Seattle to further
                        pursue his career in music. Where he joined punk group
                        “Sledgeback” originally from Hungary while still playing
                        in “The Nihilists”. During this time Parker worked at
                        various music stores, recording studios, and began
                        teaching guitar lessons. In 2008 Parker was asked to
                        play guitar For Geoff Tate’s solo project. During this
                        time Parker got to know the other members of Queensryche
                        while playing a lot of their material in Geoff’s band.
                    </p>
                    <p className='py-2'>
                        A falling out between Queensryche and their
                        then-guitarist Mike Stone opened up the position of
                        guitarist in Queensryche. Parker became his replacement,
                        because he had the best papers. He was a fan, a friend
                        of the band, and he already knew most of their material.
                        Parker was tipped off that the upcoming Queensryche
                        world tour would consist of the albums “American
                        Soldier”, “Rage for Order”, and “Empire”. Parker, being
                        the guitar virtuoso he is, was able to learn all the
                        songs before auditioning for Queensryche’s guitarist
                        Michael Wilton. Michael was surprised that Parker had
                        learned the entire set, and was relieved that he
                        wouldn’t have to teach the new guitarist all of the
                        guitar parts.
                    </p>
                    <p className='py-2'>
                        After landing the gig with Queensryche, Parker left
                        Sledgeback in February 2009, and began touring with
                        Queensryche in April of 2009. Parker married Geoff
                        Tate’s step-daughter Miranda Tate On July 18th, 2009,
                        the couple divorced about 6 months later.
                    </p>
                    <p className='py-2'>
                        Parker plays the original guitar parts by Michael Wilton
                        and Chris Degarmo (the two original guitar players in
                        Queensryche) verbatim. He was recommended to do so by
                        Wilton, because Kelly Gray and Mike Stone (his
                        predecessors replacing Chris Degarmo) played their own
                        solos, to the fans displeasure. Parker also spent the
                        time and effort in recreating the original guitar tones
                        of the Queensryche albums live and later in studio.
                    </p>
                    <p className='py-2'>
                        Parker continued to tour with Queensryche for several
                        world tours, and was a studio musician on Queensryche’s
                        album “Dedicated to Chaos”. During this time Parker
                        continued to teach guitar lessons in-between tours both
                        privately and at music schools.
                    </p>
                    <p className='py-2'>
                        Internal struggles between Tate and the other band
                        members led to Tate being expelled from the band in
                        2012. Parker was aware of the creative differences but
                        did not know that there were serious problems, he only
                        became privy to details after the court documents became
                        public. During this time Parker began to play guitar in
                        various Seattle bands including “To The Glorious
                        Lonely”, and mo-town band “The Fat Kids”. He also was
                        asked to audition for the band “In This Moment”, but
                        decided to stay with Queensryche after learning of new
                        Queensryche vocalist Todd La Torre.
                    </p>
                    <p className='py-2'>
                        Queensryche continued with vocalist, Todd La Torre,
                        while Lundgren (not one of the founding members) was
                        free to choose whether or not he wanted to stay in the
                        band. Wilton praised Parker for being wise and making “a
                        good decision” to stay. Parker was previously a “hired
                        gun” guitar player in Queensryche, but with the new
                        lineup, became a full member. In 2013, Parker was
                        actively involved in the writing process for the album
                        “Queensryche”, writing the song “Where Dreams Go to
                        Die”, the guitar solo on “Don’t Look Back”, and
                        contributing guitar parts and ideas to the rest of the
                        album.
                    </p>
                    <p className='py-2'>
                        Queensryche’s self titled album on Century Media Records
                        debuted at #23 or the billboard top 200 charts, and
                        received much praise from media, fans, and critics.
                    </p>
                    <p className='py-2'>
                        Parker continues to tour with Queensryche, and is
                        currently working with them on the upcoming record with
                        tour dates scheduled throughout the year. Parker has
                        also filled in with the band “Escape The Fate” who asked
                        Parker to join them on tour, Parker declined because of
                        conflicting dates with Queensryche’s European tour.
                    </p>
                    <p className='py-2'>
                        Parker resides in Seattle where he continues to teach
                        guitar lessons, and has proudly helped several students
                        achieve scholarships to multiple colleges including
                        Berklee College of Music.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
