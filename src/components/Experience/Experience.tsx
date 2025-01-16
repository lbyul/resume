import { Fragment } from 'react/jsx-runtime';
import { ContentCardProps, ContentItem } from '../Common/ContentCard/ContentTypes';
import Line from '../Common/Line/Line';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import ContentCard from '../Common/ContentCard/ContentCard';

const experienceContent = ({
    label,
    highlight
}: {
    label?: ContentItem['label'][];
    highlight?: string[];
}) => {
    const labelContent = label ? label.map(label => ({
        label: label
    })) : [];

    const highlightContent = highlight ? highlight.map(highlight => ({
        description: { text: highlight },
        bullet: true
    })) : [];

    return [
        ...labelContent,
        ...highlightContent
    ];
};

const experiences: ContentCardProps[] = [
    {
        period: { start: '2020.11', end: '2021.07' },
        contents: experienceContent({
            label: [
                {
                    emphasis: '(주)포레스트 컴퍼니',
                    subtext: '애니메이션 기획 및 제작'
                }
            ],
            highlight: [
                '애니메이션 영화, 게임, TV만화 배경 제작',
                '진격의 거인 The Final Season Season 1 11~16화 배경 제작 참여'
            ]
        })
    }
];

const Experience = () => {
    return (
        <article className='experience'>
            <SectionTitle title='Experience' />
            {experiences.map((experience, index) => (
                <Fragment key={index}>
                    <ContentCard {...experience} />
                    <Line size='thin' />
                </Fragment>
            ))}
        </article>
    );
}

export default Experience;