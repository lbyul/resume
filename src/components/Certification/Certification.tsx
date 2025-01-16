import { Fragment } from 'react/jsx-runtime';
import Line from '../Common/Line/Line';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import ContentCard from '../Common/ContentCard/ContentCard';
import { ContentCardProps, ContentItem } from '../Common/ContentCard/ContentTypes';

const certificationContent = ({
    label
} : {
    label?: ContentItem['label'][];
}) => {
    const labelContent = label ? label.map(label => ({
        label: label
    })) : [];

    return [
        ...labelContent
    ];
}

const certifications: ContentCardProps[] = [
    {
        period: { start: '2023.06' },
        contents: certificationContent({
            label: [
                {
                    primary: '컴퓨터활용능력2급',
                    subtext: '대한상공회의소'
                }
            ]
        })
    }
];

const Certification = () => {
    return (
        <article>
            <SectionTitle title='Certifications' />
            {certifications.map((certification, index) => (
                <Fragment key={index}>
                    <ContentCard {...certification}/>
                </Fragment>
            ))}
            <Line size='thin' />
        </article>
    );
}

export default Certification;