import ContentCard from '../Common/ContentCard/ContentCard';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import Line from '../Common/Line/Line';
import { Fragment } from 'react/jsx-runtime';
import { projects } from './ProjectData';

const Project = () => {
    return (
        <section>
            <SectionTitle title='Project' />
            <Line lineSize='thick' />
            {projects.map((project, index) => (
                <Fragment key={index}>
                    <ContentCard {...project} />
                    <Line lineSize='thin' />
                </Fragment>
            ))}
        </section>
    );
}

export default Project;