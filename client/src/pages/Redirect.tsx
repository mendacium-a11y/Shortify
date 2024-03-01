import { redirectLink } from '@/api/url';
import React, { useEffect } from 'react'

export default function Redirect() {

    useEffect(() => {
        const doRedirect = async () => {
            const path = window.location.pathname;
            const url = await redirectLink(path.slice(3,path.length));
            if(url){
                window.location.href = url.url
            } else {
                window.location.href = 'http://localhost:5173'
            }
        };
    
        doRedirect();
    }, []);


    return (
        <h1 className='bg-dark h-[100vh]'></h1>
    )
}
