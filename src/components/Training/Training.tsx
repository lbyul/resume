import { Fragment } from 'react/jsx-runtime';
import Line from '../Common/Line/Line';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import ContentCard, { ContentCardProps } from '../Common/ContentCard/ContentCard';
import './Training.scss';

const trainings: ContentCardProps[] = [
    {
        title: '그린아카데미',
        period: {
            start: '2022.03',
            end: '2022.08'
        },
        subtitle: '웹디자인 및 퍼블리싱 과정 수료',
        contents: [
            {
                description: 'UI/UX 설계 및 디자인 실무 과정 이수'
            },
            {
                description: '웹 디자인 및 영상 콘텐츠 제작 실습'
            },
            {
                description: '디자인 도구 기술 활용 실습',
                skill: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Xd', 'Adobe Premiere Pro', 'Adobe After Effects']
            },
            {
                description: '웹 퍼블리싱 기술 스택 습득',
                skill: ['HTML', 'CSS', 'JavaScript', 'jQuery']
            }
        ]
    },
    {
        title: '이스트소프트 프론트엔드 오르미 1기',
        period: {
            start: '2024.06',
            end: '2024.10'
        },
        subtitle: '프론트엔드 과정 수료',
        contents: [
            {
                description: '시맨틱 웹과 웹 접근성 개념 학습'
            },
            {
                description: 'React Hooks와 상태 관리 라이브러리 활용 실습'
            },
            {
                description: '개발 도구 및 배포 환경 기초 학습',
                skill: ['Tailwind CSS', 'Webpack', 'Firebase']
            },
            {
                description: '프론트엔드 개발 기술 스택 습득',
                skill: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript']
            }
        ]
    }
]


const Training = () => {
    return (
        <section>
            <SectionTitle title='Training' />
            <Line lineSize='thick' />
            {trainings.map((training, index) => (
                <Fragment key={index}>
                    <ContentCard
                        title={training.title}
                        period={training.period}
                        subtitle={training.subtitle}
                        contents={training.contents}
                    />
                    <Line lineSize='thin' />
                </Fragment>
            ))}
        </section>
    );
}

export default Training;