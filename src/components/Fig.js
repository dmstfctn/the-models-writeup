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
            />
            {(children) ? <figcaption>
                {children}
            </figcaption> : ''}
            {(caption) ?  <figcaption className="text-xs italic">
                {caption}
            </figcaption> : ''}
        </figure>
    </div>
}