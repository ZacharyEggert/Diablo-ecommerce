import React from 'react';
import PageWrapper from '../wrappers/PageWrapper';
import { importReverbPosts, importReverbPostsRecent } from '../api/reverb';

const Admin: React.FC = () => {
    return (
        <PageWrapper>
            <div className='flex items-center justify-center'>
                <button
                    className='p-2 px-4 m-8 rounded-lg hover:bg-grey-700 test-xl bg-grey-800'
                    onClick={() => {
                        importReverbPostsRecent();
                    }}>
                    Import Recent Reverb Posts
                </button>
                <button
                    className='p-2 px-4 m-8 bg-red-800 rounded-lg hover:bg-red-700 test-xl'
                    onClick={() => {
                        importReverbPosts();
                    }}>
                    Dump Data & Import All Reverb Posts
                </button>
            </div>
        </PageWrapper>
    );
};

export default Admin;
