import './Training.scss';
import { TrainingData } from './Training';
import SkillTag from '../Common/SkillTag/SkillTag';


const TrainingItem = ({ institution, period, courseType, contents }:TrainingData ) => {
    return (
        <section className='training'>
            <div className='training-item'>
                <h3 className='training-item__title'>{institution}</h3>
                <span className='training-item__period'>{period.start} ~ {period.end}</span>
                <span className='training-item__course'>{courseType}</span>
            </div>
            <ul className='training-content'>
                {contents.map((content, index) => (
                    <li key={index}>
                        <p className='training-content__text'>{content.study}</p>
                        {content.skill && (
                            <div className='training-content__skill'>
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

export default TrainingItem;