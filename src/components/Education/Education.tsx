import { Fragment } from "react/jsx-runtime";
import Line from "../Common/Line/Line";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ContentCard from "../Common/ContentCard/ContentCard";
import { ContentCardProps, ContentItem } from "../Common/ContentCard/ContentTypes";

const educationContent = ({
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

const educations: ContentCardProps[] = [
    {
        period: { start: '2017' },
        contents: educationContent({
            label: [
                {
                    primary: '전남여자고등학교',
                    subtext: '졸업'
                }
            ]
        })
    },
    {
        period: { start: '2017.03', end: '2021.02' },
        contents: educationContent({
            label: [
                {
                    primary: '순천대학교 패션디자인학과',
                    subtext: '졸업'
                }
            ]
        })
    }
];

const Education = () => {
    return (
        <article>
            <SectionTitle title="Education"/>
            {educations.map((education, index) => (
                <Fragment key={index}>
                    <ContentCard {...education} />
                </Fragment>
            ))}
            <Line size="thin" />
        </article>
    );
}

export default Education;