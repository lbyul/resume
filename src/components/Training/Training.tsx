import { Fragment } from 'react/jsx-runtime';
import Line from '../Common/Line/Line';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import ContentCard from '../Common/ContentCard/ContentCard';
import { trainings } from './TrainingData';

const Training = () => {
    return (
        <article className='training'>
            <SectionTitle title='Training' />
            <Line size='thick' />
            {trainings.map((training, index) => (
                <Fragment key={index}>
                    <ContentCard {...training} />
                    <Line size='thin' />
                </Fragment>
            ))}
        </article>
    );
}

export default Training;