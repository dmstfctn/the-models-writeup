"use client"

import { useState  } from 'react';

import Sidebar from '@/components/Sidebar.js';

import Image from 'next/image';

import VideoPlayer from '@/components/VideoPlayer.js';

import {
    TmwSection,
    SectionAScene,
    SectionAiTendencies,
    SectionAiWeirdness,
    SectionHardwareAndBatching,
    SectionInterfaceAndServer,
    SectionProjectOverview,
    SectionPromptTactics,
    SectionRolePlay,
    SectionScriptPrompt,
    SectionTechnicalOverview,
    SectionTheDirector,
    SectionTheOutputSystem,
    SectionVoiceAndSpeech
} from '@/app/sections.js';
import { SidebarProvider } from '@/components/SidebarContext.js';

export default function Home() {
    const [sidebarState, setSidebarState] = useState({
        position: {x: 0, y: 0},
        content: <></>,
        visible: false
    });  

    return (
        <article>
            <header className="tmw-header">            
                <Image
                    src="/overview-installation.jpg"
                    // width={1599}
                    // height={1063}
                    fill={true}
                />
            </header>
            <div className="tmw-body">        
                <SidebarProvider value={{ sidebarState, setSidebarState }}>
                    <section className="tmw-main">                    
                        <h1 className='tmw-title'><i>The Models</i> (2025), dmstfctn</h1>           
                        <SectionProjectOverview />
                        <TmwSection>
                            <VideoPlayer 
                                url="https://vimeo.com/1061218581"
                                width={1920}
                                height={1408}
                            />
                        </TmwSection>
                        <SectionAiTendencies />
                        {/* <SectionRolePlay /> */}
                        <SectionAScene />
                        <SectionTechnicalOverview />
                        {/* <SectionTheDirector /> */}
                        <SectionScriptPrompt />
                        {/* <SectionPromptTactics /> */}
                        <SectionVoiceAndSpeech />
                        {/* <SectionAiWeirdness /> */}
                        <SectionTheOutputSystem />
                        <SectionHardwareAndBatching />
                        <SectionInterfaceAndServer />         
                    </section>
                    <Sidebar />
                </SidebarProvider> 
            </div>
        </article>
    );
}