import dynamic from 'next/dynamic';
import React from 'react';
import ProfileInfo from './ProfileInfo';

// Dynamically import the ClientCheck component to avoid SSR issues
const ClientCheck = dynamic(() => import('../components/ClientCheck'), { ssr: false });


const Profile = () => {


    return(
        <>
            <ClientCheck>
                <ProfileInfo />
            </ClientCheck>
        </>
    )
};

export default Profile;