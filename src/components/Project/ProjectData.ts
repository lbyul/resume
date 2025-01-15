import { ContentCardProps } from '../Common/ContentCard/ContentTypes';

const projectContent = ({
    summary,
    role,
    link,
    highlight,
    detail,
    skill
}: {
    summary: string;
    role?: string;
    link?: { strong: string; icon: string; text: string; href: string; }[];
    highlight?: string[];
    detail?: {
        subject: string;
        items: string[];
    }[];
    skill?: string[];
}) => {
    const summaryContent = [{
        description: { text: summary }
    }];

    const roleContent = role ? [{
        description: {
            strong: '주요 역할: ',
            text: role
        }
    }] : [];

    const linkContent = link ? link.map(link => ({
        description: {
            strong: link.strong,
            icon: link.icon,
            text: link.text,
            href: link.href
        }
    })) : [];

    const highlightContent = highlight ? highlight.map(highlight => ({
        description: { text: highlight },
        bullet: true
    })) : [];

    const detailContent = detail ? detail.flatMap(detail => [
        {
            description: {
                text: detail.subject,
                indent: 'single'
            },
            bullet: true
        },
        ...detail.items.map(item => ({
            description: {
                text: item,
                indent: 'double'
            },
            bullet: true
        }))
    ]) : [];

    const skillContent = skill ? [{
        description: { strong: 'Skill keywords' },
        bullet: true,
        skill: skill
    }] : [];
    
    return [
        ...summaryContent,
        ...roleContent,
        ...linkContent,
        ...highlightContent,
        ...detailContent,
        ...skillContent
    ];
};

export const projects: ContentCardProps[] = [
    {
        title: '루비점핑다이어트',
        period: { start: '2023.10', end: '2023.11' },
        subtitle: '외주 프로젝트',
        status: '개인 리팩토링 진행중',
        contents: projectContent({
            summary: '점핑 운동 프로그램 스포츠 시설의 브랜드 홍보 및 회원 상담을 위한 웹사이트를 외주 의뢰받아 제작한 프로젝트입니다.',
            role: 'UI/UX 설계 및 프론트엔드 개발',
            highlight: [
                'Adobe XD를 활용한 웹사이트 UI/UX 디자인',
                '메인 비주얼 자동 슬라이더 및 재생 / 정지 기능 구현',
                'Scroll Event를 활용한 동적 내비게이션 메뉴 구현',
                'AOS 라이브러리를 활용한 스크롤 애니메이션 효과 적용',
                'Owl Carousel을 활용한 프로그램 소개 및 고객 후기 슬라이드 구현',
                '네이버 지도 API를 활용한 위치 정보 서비스 구현',
                '상담 예약 버튼 및 TOP 버튼 인터랙티브 기능 구현',
                '카페24 호스팅 서비스 활용'
            ],
            skill: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator']
        })
    },
    {
        title: 'Pronend',
        period: { start: '2024.07', end: '2024.09' },
        subtitle: '팀 프로젝트',
        contents: projectContent({
            summary: `일정 관리를 위한 캘린더 웹 애플리케이션 팀 프로젝트입니다.
            사이드바에서 오늘의 일정을 간편하게 바로 일정 등록, 삭제, 조회할 수 있도록 구현하였습니다.`,
            role: '프론트엔드 개발, 퍼블리싱, 디자인',
            highlight: [
                '팀원과 Figma를 활용한 웹 애플리케이션 UI/UX 디자인',
                '접근성을 고려한 시맨틱 마크업 구조 설계',
                '일정 조회 및 삭제를 위한 모달 컴포넌트 개발',
                '사이드바 일정 CRUD 기능 구현',
                '일정 삭제 시 확인 모달 구현',
                '키보드 이벤트를 활용한 모달 접근성 개선'
            ],
            skill: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Jira', 'Doker']
        })
    },
    {
        title: `이게 되네?
        JS와 Node로 배포까지!`,
        period: { start: '2024.09', end: '2024.10' },
        subtitle: '팀 프로젝트',
        contents: projectContent({
            summary: 'JavaScript와 Node.js를 활용한 웹 개발 입문자를 위한 실전 가이드북을 집필하였습니다. 실제 캘린더 웹 애플리케이션 프로젝트 경험을 바탕으로 초보자들이 쉽게 따라 할 수 있도록 단계별 학습 내용을 구성하였습니다.',
            link: [
                {
                    strong: '리디북스: ',
                    icon: '📎 ',
                    text: '[이게되네? JS와 Node로 배포까지!]',
                    href: 'https://ridibooks.com/books/2773000103?_rdt_sid=category_free_books&_rdt_idx=1&_rdt_arg=2200'
                }
            ]
        })
    },
    {
        title: 'HandPet',
        period: { start: '2024.09', end: '2024.10' },
        subtitle: '팀 프로젝트',
        status: '리팩토링 진행중',
        contents: projectContent({
            summary: '반려동물 수제 간식 거래와 반려동물 일상을 공유할 수 있는 커뮤니티 플랫폼입니다. 웹앱으로 제작되었으며, 게시물 작성/공유, 유저 검색, 팔로우, 피드, 댓글, 좋아요 등 SNS의 주요 기능을 제공합니다.',
            role: '프론트엔드 개발, 퍼블리싱, 디자인',
            detail: [
                {
                    subject: 'UI/UX 디자인 및 퍼블리싱',
                    items: [
                        '팀원과 Figma를 활용한 웹 애플리케이션 UI/UX 디자인',
                        'NavigationBar, Modal, Input 등 공통 컴포넌트 구현',
                        '프로필 페이지, 게시글 작성 페이지, 게시글 댓글, 스플래시 스크린, 404페이지 UI 구현',
                        '탭 메뉴바와 게시글 UI 디자인 개선',
                        '프로젝트 전반의 디자인 및 스타일링 수정'
                    ]
                },
                {
                    subject: '핵심 기능 구현',
                    items: [
                        '프로필 페이지의 상품/게시물 탭 기능과 목록형/앨범형 뷰 전환 구현',
                        '프로필 데이터 조회 구현',
                        '게시글 CRUD 및 좋아요, 댓글 기능 구현',
                        '스플래시 스크린, 404 페이지 기능 구현',
                        '팀원들과 협업하여 팔로우/언팔로우, 탭 메뉴바 기능 구현'
                    ]
                }
            ],
            skill: ['React', 'Styled Component', 'CSS', 'Figma', 'Adobe Illustrator']
        })
    },
    {
        title: 'HandPet ver.2.0',
        period: { start: '2024.11', end: '(진행중)' },
        subtitle: '팀 프로젝트',
        contents: projectContent({
            summary: '기존 HandPet 프로젝트의 전면 리팩토링을 진행하며, 웹/모바일 반응형 지원과 자체 서버 구축을 통해 서비스를 고도화하는 프로젝트입니다. TypeScript와 SCSS를 도입하여 코드 품질을 개선하고, 사용자 경험을 향상시키는 것을 목표로 합니다.',
            role: '프론트엔드 개발, 퍼블리싱, 디자인',
            highlight: [
                'Figma를 활용한 반응형 웹 UI/UX 디자인',
                'TypeScript와 SCSS를 활용한 컴포넌트 리팩토링'
            ],
            skill: ['TypeScript', 'SCSS', 'Figma']
        })
    },
    {
        title: '루비점핑다이어트',
        period: { start: '2024.12', end: '(진행중)' },
        subtitle: '개인 프로젝트',
        contents: projectContent({
            summary: '기존 루비점핑다이어트 웹사이트의 리팩토링을 진행하며, 사용자 경험 개선과 코드 품질 향상을 목표로 합니다.',
            role: 'UI/UX 설계 및 프론트엔드 개발',
            highlight: [
                'Figma를 활용한 반응형 웹 UI/UX 디자인',
                'TypeScript와 SCSS를 활용한 컴포넌트 리팩토링'
            ],
            skill: ['HTML', 'SCSS', 'JavaScript']
        })
    },
    {
        title: '포트폴리오 및 이력서',
        period: { start: '2025.01', end: '(진행중)' },
        subtitle: '개인 프로젝트',
        contents: projectContent({
            summary: '개인 포트폴리오와 이력서입니다. (내용 추가 예정)',
            role: 'UI/UX 설계 및 프론트엔드 개발',
            skill: ['TypeScript', 'SCSS', 'Adobe XD']
        })
    },
];