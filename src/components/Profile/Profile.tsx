import './Profile.scss';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import ProfileImg from '../../assets/images/byul.jpg';
import Line from '../Common/Line/Line';

interface ProfileData {
    email: string;
    phone: string;
    github: string;
    velog: string;
    introduction: string;
}

const profileData: ProfileData = {
    email: 'rlaquf7737@naver.com',
    phone: '010-9586-5505',
    github: 'https://github.com/lbyul',
    velog: 'https://velog.io/@byul/posts',
    introduction: `안녕하세요. 사용자의 목소리에 귀 기울이며, 직관적이고 사용하기 쉬운 웹 서비스를 만들고 싶은 프론트엔드 개발자 김별입니다.\n사용자 경험을 최우선으로 생각하며, 사람들이 편리하고 즐겁게 이용할 수 있는 서비스를 만드는 데 큰 가치를 두고 있습니다.

    팀 프로젝트 경험을 통해 개발 과정에서 협업과 소통의 중요성을 깊이 이해했습니다. 함께 아이디어를 나누고, 서로의 의견을 존중하며 문제를 해결하는 과정에서 더 큰 시너지를 낼 수 있다고 생각합니다. 적극적인 커뮤니케이션과 열린 자세로 팀에 기여하고자 합니다.

    더 많은 경험을 쌓고 꾸준히 성장하며, 사용자에게 가치 있는 서비스를 제공할 수 있는 개발자가 되는 것을 목표로 하고 있습니다.`
};

const ContactItem = ({ label, href, value, type = 'default' }: {
    label: string;
    href: string;
    value: string;
    type?: 'email' | 'tel' | 'default';
}) => (
    <div className='contact__item'>
        <dt className='contact__label'>{label}</dt>
        <dd className='contact__value'>
            <a
                className='contact__link'
                href={type === 'email' ? `mailto:${href}` : type === 'tel' ? `tel:${href}` : href}
                target={type === 'default' ? '_blank' : undefined}
                rel={type === 'default' ? 'noopener noreferrer' : undefined}
            >
                {value}
            </a>
        </dd>
    </div>
)

const Profile = () => {
    return (
        <article className='profile'>
            <section className='profile__info'>
                <div>
                    <span className='profile__category'>Resume</span>
                    <h1 className='profile__title'>김별 | Front-End</h1>
                </div>
                <div className='profile__content'>
                    <img src={ProfileImg} alt="프로필 사진" className='profile__img'/>
                    <div className='profile__details'>
                        <span className='profile__birth'>1998.07.09</span>

                        {/* Contact Section */}
                        <address className='contact'>
                            <SectionTitle title='Contact' size='small' />
                            <dl className='contact__list'>
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
                            </dl>
                        </address>

                        {/* Channel Section */}
                        <div className='channel'>
                            <SectionTitle title='Channel' size='small' />
                            <dl className='channel__list'>
                                <ContactItem
                                    label='Github.'
                                    href={profileData.github}
                                    value={profileData.github}
                                />
                                <ContactItem
                                    label='Velog.'
                                    href={profileData.velog}
                                    value={profileData.velog}
                                />
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduce Section */}
            <section className='intro'>
                <SectionTitle title='Introduce' />
                <Line size='thick' />
                {profileData.introduction.split('\n').map((text, index) => (
                    <p key={index} className='intro__text'>{text.trim()}</p>
                ))}
            </section>
            <Line size='thin' />
        </article>
    );
}

export default Profile;