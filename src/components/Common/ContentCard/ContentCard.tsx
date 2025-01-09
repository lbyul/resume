import SkillTag from '../SkillTag/SkillTag';
import './ContentCard.scss';

export interface ContentCardProps {
    title: string;
    period: {
        start: string;
        end: string;
    };
    subtitle: string;   
    contents: CardItem[];
}

export interface CardItem {
    description: string;
    skill?: string[];
}


const ContentCard = ({ title, period, subtitle, contents }:ContentCardProps ) => {
    return (
        <section className='content-card'>
            <div className='card-list'>
                <h3 className='card-list__title'>{title}</h3>
                <span className='card-list__period'>{period.start} ~ {period.end}</span>
                <span className='card-list__subtitle'>{subtitle}</span>
            </div>
            <ul className='card-details'>
                {contents.map((content, index) => (
                    <li key={index} className='card-details__item'>
                        <p className='card-details__description'>{content.description}</p>
                        {content.skill && (
                            <div className='card-details__skill'>
                                {content.skill.map((skillName, skillIndex) => (
                                    <SkillTag key={skillIndex} skillName={skillName} />
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ContentCard;