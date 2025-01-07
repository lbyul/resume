import './Profile.scss';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import Line from '../Common/Line/Line';
import SkillTag from '../Common/SkillTag/SkillTag';

interface ProfileData {
    email: string;
    phone: string;
    github: string;
    introduction: string;
}

const profileData: ProfileData = {
    email: 'rlaquf7737@naver.com',
    phone: '010-9586-5505',
    github: 'https://github.com/lbyul',
    introduction: `안녕하세요. 사용자의 목소리에 귀 기울이며, 직관적이고 사용하기 쉬운 웹 서비스를 만들고 싶은 프론트엔드 개발자 김oo입니다.
    사용자 경험을 최우선으로 생각하며, 사람들이 편리하고 즐겁게 이용할 수 있는 서비스를 만드는 데 큰 가치를 두고 있습니다.
    팀 프로젝트 경험을 통해 개발 과정에서 협업과 소통의 중요성을 깊이 이해했습니다. 함께 아이디어를 나누고, 서로의 의견을 존중하며 문제를 해결하는 과정에서 더 큰 시너지를 낼 수 있다고 생각합니다. 적극적인 커뮤니케이션과 열린 자세로 팀에 기여하고자 합니다.
    더 많은 경험을 쌓고 꾸준히 성장하며, 사용자에게 가치 있는 서비스를 제공할 수 있는 개발자가 되는 것을 목표로 하고 있습니다.`
};

const ContactItem = ({ label, href, value, type = 'default' }: {
    label: string;
    href: string;
    value: string;
    type?: 'email' | 'tel' | 'default';
}) => (
    <div className='profile__contact-item'>
        <SectionTitle title={label} size="small"/>
        <a
            className='profile__contact-link'
            href={type === 'email' ? `mailto:${href}` : type === 'tel' ? `tel:${href}` : href}
            target={type === 'default' ? '_blank' : undefined}
            rel={type === 'default' ? 'noopener noreferrer' : undefined}
        >
            {value}
        </a>
    </div>
)

const Profile = () => {
    return (
        <article className='profile'>
            <section className='profile__info-section'>
                <h1 className='profile__title'>김별 | Front-End</h1>
                <div className='profile__content'>
                    <img src="" alt="프로필 사진" className='profile__img'/>
                    <div className='profile__details'>
                        <time dateTime='1998-07-09' className='profile__birth'>1998.07.09</time>
                        <address className='profile__contact'>
                            <dl className='profile__contact-list'>
                                <ContactItem
                                    label='Email.'
                                    href={profileData.email}
                                    value={profileData.email}
                                    type='email'
                                />
                                <ContactItem
                                    label='Phone.'
                                    href={profileData.phone}
                                    value={profileData.phone}
                                    type='tel'
                                />
                                <ContactItem
                                    label='Github.'
                                    href={profileData.github}
                                    value={profileData.github}
                                />
                            </dl>
                        </address>
                    </div>
                </div>
            </section>
            <section className='profile__intro'>
                <SectionTitle title='Introduce'/>
                <Line lineSize='thick' />
                {profileData.introduction.split('\n').map((text, index) => (
                    <p key={index} className='profile__intro-text'>{text.trim()}</p>
                ))}
            </section>
            <SkillTag skillName='Html'/>
        </article>
    );
}

export default Profile;