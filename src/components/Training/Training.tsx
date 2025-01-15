import { Fragment } from 'react/jsx-runtime';
import Line from '../Common/Line/Line';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import ContentCard from '../Common/ContentCard/ContentCard';
import { trainings } from './TrainingData';

const Training = () => {
    return (
        <section>
            <SectionTitle title='Training' />
            <Line lineSize='thick' />
            {trainings.map((training, index) => (
                <Fragment key={index}>
                    <ContentCard {...training} />
                    <Line lineSize='thin' />
                </Fragment>
            ))}
        </section>
    );
}

export default Training;