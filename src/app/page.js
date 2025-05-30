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
} from './sections.js';

export default function Home() {
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
            <section className="tmw-main">
                <h1 className='tmw-title'><i>The Models</i> (2025), dmstfctn</h1>           
                <SectionProjectOverview />
                <TmwSection>
                    <VideoPlayer 
                        url="https://vimeo.com/1061218581"
                    />
                </TmwSection>
                <SectionAiTendencies />
                <SectionRolePlay />
                <SectionAScene />
                <SectionTechnicalOverview />
                <SectionTheDirector />
                <SectionScriptPrompt />
                <SectionPromptTactics />
                <SectionVoiceAndSpeech />
                <SectionAiWeirdness />
                <SectionTheOutputSystem />
                <SectionHardwareAndBatching />
                <SectionInterfaceAndServer />                
            </section>
        </div>
    </article>
  );
}