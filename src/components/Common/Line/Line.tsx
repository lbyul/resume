import './Line.scss';

interface LineProps {
    lineSize?: 'thin' | 'thick'
}

const Line = ({ lineSize = 'thin' }: LineProps) => {
    return (
        <div className={`line ${lineSize}`}></div>
    );
}

export default Line;