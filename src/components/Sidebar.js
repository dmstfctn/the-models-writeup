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
        {sidebarState.content}
    </div>
}

export function SidebarLink({
    children,
    content=<></>
}){
    const {sidebarState, setSidebarState} = useSidebar();
    const onTrigger = ( e ) => {
        e.stopPropagation();
        console.log('onTrigger')
        if( sidebarState.visible && sidebarState.content === content ) return;
        console.log('change sidebar state, content = ', content );
        setSidebarState({ 
            ...sidebarState,
            content,
            visible: true
        });
    }
    const onClear = () => {
        console.log('onClear')
        setSidebarState({ 
            ...sidebarState,            
            visible: false
        });
    }
    return <>
        <span 
            className="tmw-sidebar-link" 
            onClick={ (sidebarState.visible && sidebarState.content === content) ? onClear : onTrigger }
            // onMouseMove={ onTrigger }
            // onMouseOut={ onClear }
        >
            {children}           
        </span>       
    </>
}