import Card from './Card';

interface ResultsProps {
    data:{
        hits: [
            {
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
        ];
    }
    query: string;

}

const Results: React.FC<ResultsProps> = ({data, query}) => {
    return (
        <div>
            {data && (
                <>
                    <p className="text-5xl py-4 font-extrabold">Voici les résultats pour "<span className="text-green-400">{query}</span>" :</p>
                    {data.hits && data.hits.map((song) => (
                        <Card data={song} key={song.track.key} />
                    ))}
                </>
            )}
            
        </div>
    );
};

export default Results;