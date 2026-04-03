(function () {
  'use strict';

  const TEAM_MEMBERS = {
    en: [
      {
        name: 'Samuel Kihoon',
        role: 'CEO',
        image: 'resources/samuelkihoon.jpeg',
        linkedin: 'https://linkedin.com/in/Kihoonx',
        description: 'As Birzont\'s CEO and CTO, he is building the future of AI technology. He studied Business Administration and Big Data Applications at Kyung Hee University, worked as a Notion seasonal intern and CTO at careermizing.com, and now leads Birzont.'
      },
      {
        name: 'Seokdam Hong',
        role: 'COO',
        image: 'resources/seokdam.png',
        linkedin: 'https://www.linkedin.com/in/seokdam-hong-ab7a58316/',
        description: 'Detailed information about this team member will be shown here.'
      },
      {
        name: 'Eva Lee',
        role: 'CTO',
        image: 'resources/evayenalee.png',
        linkedin: 'https://www.linkedin.com/in/%EC%98%88%EB%82%98-%EC%9D%B4-333271315/',
        description: 'Detailed information about this team member will be shown here.'
      },
      {
        name: 'Ire Park',
        role: 'Founding Designer',
        image: 'resources/irepark.png',
        linkedin: 'https://www.linkedin.com/in/ire-park-a716b83a4/',
        description: 'Currently studying at Hongik University College of Fine Arts,<br> she designs user experience and brand identity as a BX Designer at Birzont.'
      },
      {
        name: 'Hanbee Kim',
        role: 'Data Engineer',
        image: 'resources/hanbee.png',
        linkedin: '#',
        description: 'Detailed information about this team member will be shown here.'
      },
      {
        name: 'Jinwoo Jung',
        role: 'Marketing',
        image: 'resources/jinwoo.jpeg',
        linkedin: '#',
        description: 'Detailed information about this team member will be shown here.'
      }
    ],
    ko: [
      {
        name: '김기훈',
        role: '대표이사',
        image: 'resources/samuelkihoon.jpeg',
        linkedin: 'https://linkedin.com/in/Kihoonx',
        description: '버존트의 CEO이자 CTO로서 AI 기술의 미래를 만들어가고 있습니다. 학력은 경희대학교 경영대학 및 빅데이터응용학과로, Notion 시즌인턴, 커리어마이징닷컴 CTO로 있었으며, 현재 버존트를 위해 일하고 있습니다.'
      },
      {
        name: '홍석담',
        role: '최고운영책임자 (COO)',
        image: 'resources/seokdam.png',
        linkedin: 'https://www.linkedin.com/in/seokdam-hong-ab7a58316/',
        description: '팀 멤버에 대한 상세 정보가 여기에 표시됩니다.'
      },
      {
        name: '이예나',
        role: '최고기술책임자 (CTO)',
        image: 'resources/evayenalee.png',
        linkedin: 'https://www.linkedin.com/in/%EC%98%88%EB%82%98-%EC%9D%B4-333271315/',
        description: '팀 멤버에 대한 상세 정보가 여기에 표시됩니다.'
      },
      {
        name: '박이레',
        role: '초기 디자이너',
        image: 'resources/irepark.png',
        linkedin: 'https://www.linkedin.com/in/ire-park-a716b83a4/',
        description: '홍익대학교 미술대학 재학중으로, <br> 현재 버존트에서 BX Designer로서 사용자 경험과 브랜드를 디자인하고 있습니다.'
      },
      {
        name: '김한비',
        role: '데이터 엔지니어',
        image: 'resources/hanbee.png',
        linkedin: '#',
        description: '팀 멤버에 대한 상세 정보가 여기에 표시됩니다.'
      },
      {
        name: '정진우',
        role: '마케팅',
        image: 'resources/jinwoo.jpeg',
        linkedin: '#',
        description: '팀 멤버에 대한 상세 정보가 여기에 표시됩니다.'
      }
    ]
  };

  function getLang() {
    if (window.LanguageProvider && typeof window.LanguageProvider.getLang === 'function') {
      return window.LanguageProvider.getLang();
    }
    try {
      return localStorage.getItem('birzont-lang') || 'en';
    } catch (_) {
      return 'en';
    }
  }

  function getTeamMembers(lang) {
    const target = lang || getLang();
    return TEAM_MEMBERS[target] || TEAM_MEMBERS.en;
  }

  function applyTeamMembers(lang) {
    window.teamMembers = getTeamMembers(lang);
  }

  window.TeamProvider = {
    TEAM_MEMBERS,
    getTeamMembers,
    applyTeamMembers
  };

  applyTeamMembers();
  window.addEventListener('birzont-lang-change', (e) => {
    const lang = e && e.detail ? e.detail.lang : undefined;
    applyTeamMembers(lang);
  });
})();
