import {useState, useRef, useMemo, useEffect} from 'react'
import Image from 'next/image'
 
export default function Fig({
    src='', 
    alt='',    
    title='',
    width=0,
    height=0,
    caption='',
    video=false,
    children
}){
    const [zoom,setZoom] = useState(false);

    const img = <Image
        src={`/${src}`}
        alt={alt}
        width={width}
        height={height}
        className={ `${(children) ? 'mb-1' : '' }` }
        onClick={(e) => {
            e.stopPropagation();
            setZoom( !zoom );
        }}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M4f/78fwAISwNt2guwTQAAAABJRU5ErkJggg=='
    />
    return <div  
        className='tmw-fig basis-1/2'
    >
        {(title) ? <h1>{title}</h1> : ''}
        <figure>
            {(video) 
                ? <video 
                    loop 
                    playsInline 
                    poster={src} 
                    muted
                    autoPlay
                >
                    <source src={video} type="video/mp4" />
                    {img}
                </video> 
                : img
            }            
            {(caption) ?  <figcaption className="text-xs italic">
                {caption}
            </figcaption> : ''}
            {(children) ? <figcaption>
                {children}
            </figcaption> : ''}
        </figure>
        {(zoom) ? <div 
            className="tmw-fig-zoom"  
            onClick={(e) => {
                e.stopPropagation();
                setZoom( false );
            }}
        >
            <Image
                src={`/${src}`}
                alt={alt}
                width={width}
                height={height}       
            />
        </div> : '' }
    </div>
}