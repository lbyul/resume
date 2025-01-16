import ContentCard from '../Common/ContentCard/ContentCard';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import Line from '../Common/Line/Line';
import { Fragment } from 'react/jsx-runtime';
import { projects } from './ProjectData';

const Project = () => {
    return (
        <article className='project'>
            <SectionTitle title='Project' />
            <Line size='thick' />
            {projects.map((project, index) => (
                <Fragment key={index}>
                    <ContentCard {...project} />
                    <Line size='thin' />
                </Fragment>
            ))}
        </article>
    );
}

export default Project;