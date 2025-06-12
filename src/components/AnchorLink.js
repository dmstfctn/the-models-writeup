import { useEffect, useState } from "react";

export default function AnchorLink({children, anchor, text=''}){
    const hash = `#${anchor}`;
    const [isCurrent, setIsCurrent] = useState(false);

    useEffect(() => {
        const onHashChange = () => {
            setIsCurrent( hash === window.location.hash );    
        }        
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return <a 
        href={hash}
        className={(isCurrent) ? 'current' : ''}
    >
        {text}
        {children}
    </a>
}