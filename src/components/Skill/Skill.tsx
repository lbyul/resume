import Line from '../Common/Line/Line';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import './Skill.scss';
import SkillTag from '../Common/SkillTag/SkillTag';

interface SkillCategory {
    title: string;
    skill: string[];
}

const skillData: SkillCategory[] = [
    {
        title: 'Frontend',
        skill: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'SCSS', 'Styled Component']
    },
    {
        title: 'Tools',
        skill: ['Git', 'Github', 'Jira', 'Docker', 'Notion', 'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator']
    },

]

const Skill = () => {
    return (
        <article className='skill'>
            <SectionTitle title='Skill' />
            <div className='skill__category'>
                {skillData.map((category, index) => (
                    <div key={index} className='skill__content'>
                        <h3 className='skill__title'>{category.title}</h3>
                        <ul className='skill__list'>
                            {category.skill.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    <SkillTag skillName={skill} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Line size='thin' />
        </article>
    );
}

export default Skill;