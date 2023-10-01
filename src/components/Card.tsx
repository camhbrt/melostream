import React from 'react';

interface CardProps {
    data: any;
}

const Card: React.FC<CardProps> = ({data}) => {
    return (
        <div className='p-4 rounded-3xl hover:bg-black/20 inline-block w-80'>
            
            <img src={data.track.images.coverart} alt="" className='h-80'/>
            
            <div id="outer-text" className='text-3xl relative overflow-hidden'>
                <p id="text-scroll">{data.track.title}</p>
            </div>
            <p className='text-xl'>{data.track.subtitle}</p>
            
            <audio controls>
                <source src={data.track.hub.actions[1].uri} type="audio/mpeg" />
                Votre navigateur ne prend pas en charge l'élément audio.
            </audio>
            
        </div>
    );
};

export default Card;