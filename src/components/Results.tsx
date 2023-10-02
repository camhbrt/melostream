import Card from './Card';

interface ResultsProps {
    data: {
        tracks:{
            hits: [];
        }
    }
    query: string;

}

const Results: React.FC<ResultsProps> = ({data, query}) => {
    return (
        <div>
            {data.tracks && (
                <>
                    <p className="text-5xl py-4 font-extrabold">Voici les résultats pour "<span className="text-green-400">{query}</span>" :</p>
                    {data.tracks.hits && data.tracks.hits.map((song) => (
                        <Card data={song} key={song.track.key} />
                    ))}
                </>
            )}
            
        </div>
    );
};

export default Results;