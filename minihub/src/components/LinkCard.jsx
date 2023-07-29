import CardStar from './CardStar';
export default function LinkCard({linkData}) {
    return (
        <div className="linkcard">
            <a className="linklink" alt={linkData.name} href={linkData.address} target="_blank" rel="noopener noreferrer">
                <img className="linkimage" src={linkData.image} alt={linkData.name}></img>
                <div className="linkname">{linkData.name}</div>
            </a>
            <CardStar className="linkstar" address={linkData.address}/>
        </div>
    );
}