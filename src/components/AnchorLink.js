import { useEffect, useState } from "react";
import { useContents } from '@/components/ContentsContext.js';

export default function AnchorLink({children, anchor, text='', className}){
    const {contentsState,setContentsState} = useContents();    
    const hash = `#${anchor}`;
    
    return <a 
        href={hash}
        className={`${className} ${(contentsState.current === anchor) ? 'current' : ''}`}
    >
        {text}
        {children}
    </a>
}