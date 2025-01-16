import ContentCard from '../Common/ContentCard/ContentCard';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import Line from '../Common/Line/Line';
import { projects } from './ProjectData';

const Project = () => {
    return (
        <article className='project'>
            <SectionTitle title='Project' />
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <ContentCard {...project} />
                        <Line size='thin' />
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default Project;