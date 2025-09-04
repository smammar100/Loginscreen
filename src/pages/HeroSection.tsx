import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import island from '/island.png';
import trCloud from '/tr-cloud.png';
import brCloud from '/br-cloud.png';
import tlCloud from '/tl-cloud.png';
import blCloud from '/bl-cloud.png';

function HeroSection() {
    return (
        <div className="
            w-full
            bg-gray-200
            p-4 rounded-xl my-6
            md:relative md:flex md:items-center md:justify-center
            md:w-2/5 md:p-0 md:m-4 md:mr-2 md:my-4"
        >
            <div className='h-full md:absolute md:w-[130%] md:ml-[30%] md:h-[40vw] md:overflow-clip'>
                {/* Parralax container */}
                <MouseParallaxContainer
                    globalFactorX={0.1}
                    globalFactorY={0.1}
                    useWindowMouseEvents={true}
                    containerStyle={{ "overflow": "visible" }}
                    className="flex w-auto h-full justify-center items-center"
                >
                    {/* Parralax child Cloud top left */}
                    <MouseParallaxChild factorX={-0.2} factorY={-0.3} className="absolute hidden md:block  w-1/4 -inset-x-1/10 inset-y-3/20 top-auto">
                        <img
                            src={tlCloud}
                            alt="Cloud illustration positioned top left"
                            className='w-full h-auto'
                        />
                    </MouseParallaxChild>
                    {/* Parralax child Cloud top right */}
                    <MouseParallaxChild factorX={-0.3} factorY={-0.2} className="absolute hidden md:block w-1/4 inset-x-11/20 inset-y-3/20">
                        <img
                            src={trCloud}
                            alt="Cloud illustration positioned top right"
                            className='w-full h-auto'
                        />
                    </MouseParallaxChild>
                    {/* Parralax child Island */}
                    <MouseParallaxChild factorX={-0.3} factorY={-0.5} className="md:absolute w-9/20 md:inset-x-3/20">
                        <img
                            src={island}
                            alt="Island illustration"
                            className='w-full h-auto scale-90 md:scale-100'
                        />
                    </MouseParallaxChild>
                    {/* Parralax child Cloud bottom left */}
                    <MouseParallaxChild factorX={-0.3} factorY={-0.3} className="absolute hidden md:block w-9/50 inset-y-3/4 inset-x-2/25">
                        <img
                            src={blCloud}
                            alt="Cloud illustration positioned bottom left"
                            className='w-full h-auto'
                        />
                    </MouseParallaxChild>
                    {/* Parralax child Cloud bottom right */}
                    <MouseParallaxChild factorX={-0.2} factorY={-0.3} className="absolute hidden md:block w-1/4 inset-x-13/20 inset-y-8/25">
                        <img
                            src={brCloud}
                            alt="Cloud illustration positioned bottom right"
                            className='w-full h-auto'
                        />
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
            {/* Credits */}
            <p className="hidden md:block text-xs text-stone-300 absolute bottom-0 left-0 m-3 font-bold">Built by{' '}
                <a href='https://nohit.dev' target='_blank' rel="noreferrer" className='underline'>NO HIT Dev</a>
            </p>
        </div>
    )
}

export default HeroSection;
