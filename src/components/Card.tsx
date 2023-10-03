import React from 'react';

interface CardProps {
    
    data: {
        track: {
            key: string,
            title: string,
            subtitle: string,
            images: {
                coverart: string
            },
            hub: {
                actions: Array<{
                    uri: string,
                }>
                    
            }
        }
    }
}

const Card: React.FC<CardProps> = ({data}) => {

    return (
        <div className='p-4 rounded-3xl hover:bg-black/20 inline-block w-80 mx-4'>
            
            <img src={data.track.images.coverart} alt="" className='h-60'/>
            
            <div id="outer-text" className='text-2xl relative overflow-hidden'>
                <p id="text-scroll">{data.track.title}</p>
            </div>
            <p className='text-lg'>{data.track.subtitle}</p>
            
            <audio controls>
                <source src={data.track.hub.actions[1].uri} type="audio/mpeg" />
                Votre navigateur ne prend pas en charge l'élément audio.
            </audio>
            
        </div>
    );
};

export default Card;