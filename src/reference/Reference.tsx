
interface ReferenceProps {
    url: string;
    description: string
}

const Reference: React.FC<ReferenceProps> = ({url, description}) => {
    return (
        <div className="reference-link">
            <a href={url} target="_blank">
                {description}
            </a>
        </div>
    );
}

export default Reference;