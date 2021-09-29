const data = {
    projects: [
        {
            imgUrl: 'pj4.PNG',
            projectName: 'Employee Management',
            period: '~ 진행중',
            description: `Apollo 와 GraphQL 를 공부하며 만드는 토이 프로젝트입니다. 
            검색 조건에 맞는 직원들의 정보를 가져와 보여주는 
            직원관리 페이지입니다.`,
            techList: ['React','GraphQL','Apollo','Redux','Typescript','ExpressJS','Emotion','SCSS'],
            link: 'https://github.com/kks2139/employee-management',
            site: ''
        },
        {
            imgUrl: 'pj2.PNG',
            projectName: 'Quiz',
            period: '~ 2021.08',
            description: `문제를 맞추고 오답노트를 기록하는 간단한 퀴즈웹앱 입니다.
            퀴즈 공개 api를 이용하여 랜덤주제 5가지의 퀴즈가 출제됩니다.
            퀴즈를 풀고 결과를 차트로 확인할 수 있고 오답노트를 작성하고 
            이력을 남길 수 있습니다.`,
            techList: ['React','Redux','Typescript','Emotion','SCSS','Victory','react-icons'],
            link: 'https://github.com/kks2139/quiz',
            site: 'https://kks2139.github.io/quiz-deploy/'
        },
        {
            imgUrl: 'pj1.PNG',
            projectName: 'Shopping cart',
            period: '~ 2021.07',
            description: `Redux를 공부하면서 만든 토이 프로젝트입니다.
            depth가 깊은 상품 리스트를 조회하고 이를 Redux 로 관리하는 화면을
            만들어보고 싶어서 시작하게 된 개인 프로젝트 입니다.
            선택한 상품의 옵션을 선택한 후 장바구니에 담고 총 금액까지 계산하는 
            상품 주문앱 입니다.`,
            techList: ['React','Redux','Typescript','CSS'],
            link: 'https://github.com/kks2139/shopping-cart',
            site: 'https://kks2139.github.io/deploy-shopping-cart/'
        },
        {
            imgUrl: 'pj3.PNG',
            projectName: 'Responsive style app',
            period: '~ 2021.06',
            description: `W3School 사이트의 메인 화면을 참고하여
            반응형 웹페이지를 구현하였습니다.`,
            techList: ['React','Javascript','CSS'],
            link: 'https://github.com/kks2139/clone-w3s-main',
            site: 'https://kks2139.github.io/responsive-app-refering-w3s/'
        },
        {
            imgUrl: 'pj5.PNG',
            projectName: 'Tetris',
            period: '~ 2021.05',
            description: `React Hooks을 공부하며 만든 토이프로젝트 입니다.
            로그인 시 CSRF 토큰으로 사용자를 인증합니다. 
            게임에 입장한 사용자는 조작키와 테마색을 변경할 수 있습니다. 
            난이도를 선택하고 테트리스 게임을 즐길 수 있고, 
            게임이 끝난후엔 점수가 기록됩니다.
            기록된 점수들은 랭킹목록을 통해 조회할 수 있습니다.`,
            techList: ['React','Javascript','CSS','ExpressJS','AWS RDB','AWS EC2','MySQL','Nginx','FTP'],
            link: 'https://github.com/kks2139/Tetris',
            site: 'http://ec2-3-36-219-54.ap-northeast-2.compute.amazonaws.com/'
        },
    ]
}

export default data;