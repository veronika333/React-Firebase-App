import React from 'react';
import useAuth from '../components/Auth/login/useAuth';

export default function AllLinks(props) {
   const user = useAuth();
   console.log({ user })
    return (
        <div>
            All links
        </div>
    )
}
