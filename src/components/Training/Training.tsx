import Line from '../Common/Line/Line';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import ContentCard from '../Common/ContentCard/ContentCard';
import { trainings } from './TrainingData';

const Training = () => {
    return (
        <article className='training'>
            <SectionTitle title='Training' />
            <ul>
                {trainings.map((training, index) => (
                    <li key={index}>
                        <ContentCard {...training} />
                        <Line size='thin' />
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default Training;