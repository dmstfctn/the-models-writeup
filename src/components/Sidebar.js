import { useState } from "react";
import { useSidebar } from "./SidebarContext";

export default function Sidebar(){
    const {sidebarState, setSidebarState} = useSidebar();
    return <div 
        className={`tmw-sidebar${(sidebarState.visible) ? ' tmw-sidebar__visible' : ''}${(sidebarState.hover) ? ' tmw-sidebar__hover' : ''}`}
        // onClick={() => {
        //     setSidebarState({
        //         ...sidebarState,
        //         visible: false
        //     });
        // }}
    >        
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
            onMouseOver={ () => {
                 setSidebarState({ 
                    ...sidebarState,
                    hover: true
                });
            }}
            onMouseOut={ () => {
                 setSidebarState({ 
                    ...sidebarState,
                    hover: false
                });
            }}
        >        
            {children}            
            <span className={`tmw-sidebar-link--tab`}>{linkActive ? 'close' : <><span className="hide-on-small">read </span>more</>}</span>
        </span>       
    </>
}