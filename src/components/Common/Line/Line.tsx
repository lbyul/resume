import './Line.scss';

interface LineProps {
    size?: 'thin' | 'thick'
}

const Line = ({ size = 'thin' }: LineProps) => {
    return <hr className={`line-${size}`} />
}

export default Line;