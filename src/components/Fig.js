import {useState} from 'react'
import Image from 'next/image'

 
export default function Fig({
    src='', 
    alt='',    
    title='',
    width=0,
    height=0,
    caption='',
    children
}){
    const [zoom,setZoom] = useState(false);
    return <div 
        className='tmw-fig basis-1/2'
    >
        {(title) ? <h1>{title}</h1> : ''}
        <figure>            
            <Image
                src={`/${src}`}
                alt={alt}
                width={width}
                height={height}
                className={ `${(children) ? 'mb-1' : '' }` }
                onClick={() => {
                    setZoom( !zoom );
                }}
            />
            {(caption) ?  <figcaption className="text-xs italic">
                {caption}
            </figcaption> : ''}
            {(children) ? <figcaption>
                {children}
            </figcaption> : ''}
        </figure>
        {(zoom) ? <div 
            className="tmw-fig-zoom"  
            onClick={() => {
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