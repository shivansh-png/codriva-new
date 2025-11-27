'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface DotLottieProps {
    src: string
    className?: string
    loop?: boolean
    autoplay?: boolean
}

const DotLottie = ({ src, className, loop = true, autoplay = true }: DotLottieProps) => {
    return (
        <div className={className}>
            <DotLottieReact 
                src={src}
                loop={loop}
                autoplay={autoplay}
            />
        </div>
    )
}

export default DotLottie
