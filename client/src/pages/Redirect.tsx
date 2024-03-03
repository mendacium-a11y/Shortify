import { redirectLink } from '@/api/url';
import { useEffect } from 'react'

export default function Redirect() {

    useEffect(() => {
        console.log("useEffect")
        const doRedirect = async () => {
            const path = window.location.pathname;
            console.log("pathname", path)
            const url = await redirectLink(path.slice(3,path.length));
            console.log("url",url)
            if(url){
                window.location.href = url.url
            } else {
                window.location.href = 'http://localhost:4173'
            }
        };
    
        doRedirect();
    }, []);


    return (
        <h1 className='bg-dark h-[100vh]'>r</h1>
    )
}
