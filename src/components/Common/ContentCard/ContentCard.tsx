import SkillTag from '../SkillTag/SkillTag';
import './ContentCard.scss';
import { ContentCardProps } from './ContentTypes';

interface Description {
    text?: string;
    href?: string;
}

const ContentCard = ({ title, period, subtitle, status, contents }:ContentCardProps ) => {
    const renderContent = ({ text, href }: Description) => {
        if(!text) return null;

        return href ? (
            <a
                href={href}
                className='card-details__href'
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        ) : text;
    };

    return (
        <section className='content-card'>
            <div className='card-list'>
                {title && <h3 className='card-list__title'>{title}</h3>}
                <span className='card-list__period'>{period.start} ~ {period.end}</span>
                {subtitle && <span className='card-list__subtitle'>{subtitle}</span>}
                {status && <span className='card-list__project-type'>{status}</span>}
            </div>
            <ul className='card-details'>
                {contents.map((content, index) => (
                    <li key={index} className='card-details__item'>
                        {content.label && (
                            <div className='card-details__label'>
                                <h3 className='card-details__text'>
                                    {content.label.primary}
                                    {content.label.emphasis && (
                                        <strong>
                                            {content.label.emphasis}
                                        </strong>
                                    )}
                                </h3>
                                <span className='card-details__subtext'>
                                    {content.label.subtext}
                                </span>
                            </div>
                        )}
                        {content.description && (
                            <p
                                className={`card-details__description ${content.bullet ? 'card-details__description--with-bullet' : ''}`}
                                data-indent={content.description.indent}
                            >
                                {content.description.strong && <strong>{content.description.strong}</strong>}
                                {content.description.icon}
                                {renderContent(content.description)}
                            </p>
                        )}
                        {content.skill && (
                            <ul className='card-details__skill'>
                                {content.skill.map((skillName, skillIndex) => (
                                    <li key={skillIndex}>
                                        <SkillTag skillName={skillName} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ContentCard;