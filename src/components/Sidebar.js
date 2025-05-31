import { useState } from "react";
import { useSidebar } from "./SidebarContext";

export default function Sidebar(){
    const {sidebarState, setSidebarState} = useSidebar();
    return <div 
        className={`tmw-sidebar${(sidebarState.visible) ? ' tmw-sidebar__visible' : ''}`}
        onClick={() => {
            setSidebarState({
                ...sidebarState,
                visible: false
            });
        }}
    >
        <div className="tmw-sidebar-close">&times;</div>
        <div>
            {sidebarState.content}
        </div>
    </div>
}

export function SidebarLink({
    children,
    content=<></>
}){
    const {sidebarState, setSidebarState} = useSidebar();
    const [linkActive, setLinkActive] = useState( false );
    const onTrigger = ( e ) => {
        e.stopPropagation();
        if( sidebarState.visible && sidebarState.content === content ) return;
        setLinkActive( true );
        setSidebarState({ 
            ...sidebarState,
            content,
            visible: true
        });
    }
    const onClear = () => {
        setLinkActive( false );
        setSidebarState({ 
            ...sidebarState,            
            visible: false
        });
    }
    return <>
        <span 
            className={`tmw-sidebar-link${linkActive ? ' tmw-sidebar-link__active' : ''}`}
            onClick={ ( linkActive || sidebarState.visible && sidebarState.content === content) ? onClear : onTrigger }
            // onMouseMove={ onTrigger }
            // onMouseOut={ onClear }
        >
            {children}           
        </span>       
    </>
}