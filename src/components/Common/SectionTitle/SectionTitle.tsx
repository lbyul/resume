import './SectionTitle.scss';

interface SectionTitleProps {
    title: string;
    size?: 'small' | 'large'
}

const SectionTitle = ({ title, size = 'large'}: SectionTitleProps) => {
    return <h2 className={`title ${size}`}>{title}</h2>
}

export default SectionTitle;