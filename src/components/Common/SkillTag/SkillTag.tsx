import './SkillTag.scss';

interface SkillTagProps {
    skillName: string;
}

const SkillTag = ({ skillName }: SkillTagProps) => {
    return (
        <span className='skill-tag'>{skillName}</span>
    );
}

export default SkillTag;