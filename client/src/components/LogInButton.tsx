import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../api/user';
import { store } from '../configureStore';

const LogInButton = () => {
    const isLoggedIn = store.getState().user?.email;

    const [loggedIn, setLoggedIn] = useState(isLoggedIn);

    store.subscribe(() => {
        setLoggedIn(store.getState().user?.email);
    });

    const LogOut = () => {
        logout().then((res) => {
            console.debug('Logout', res);
        });

        store.dispatch({ type: 'LOGOUT' });
    };

    return (
        <div className='flex flex-row items-center justify-center p-4 '>
            <button className='px-4 py-2 mx-auto rounded-full text-grey-200 bg-none hover:none'>
                {!loggedIn ? (
                    <Link to='/login' className='mx-auto hover:text-white'>
                        Log In
                    </Link>
                ) : (
                    <span className='mx-auto hover:text-white' onClick={LogOut}>
                        Log Out
                    </span>
                )}
            </button>
        </div>
    );
};

export default LogInButton;
