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
        <article
            className='content-card'
        >
            <div className='card-list'>
                {title && <h3 className='card-list__title'>{title}</h3>}
                <dl>
                    <div className='card-list__period'>
                        <dt className='blind'>기간</dt>
                        <dd>
                            {period.start}
                            {period.end && ` ~ ${period.end}`}
                        </dd>
                    </div>
                    {subtitle && (
                        <div className='card-list__subtitle'>
                            <dt className='blind'>구분</dt>
                            <dd>{subtitle}</dd>
                        </div>
                    )}
                    {status && (
                        <div className='card-list__status'>
                            <dt className='blind'>상태</dt>
                            <dd>{status}</dd>
                        </div>
                    )}
                </dl>
            </div>

            <ul className='card-details'>
                {contents.map((content, index) => (
                    <li key={index} className='card-details__item'>
                        {content.label && (
                            <div className='card-details__label'>
                                <p className='card-details__text'>
                                    {content.label.primary}
                                    {content.label.emphasis && (
                                        <strong>
                                            {content.label.emphasis}
                                        </strong>
                                    )}
                                </p>
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
        </article>
    );
}

export default ContentCard;