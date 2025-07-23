﻿import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Info, BookOpen, Image, Mail, HeartHandshake, Menu, X, Bell, Loader2, ExternalLink, Camera, MessageSquare } from 'lucide-react'; // Camera, MessageSquare 아이콘 추가
import axios from 'axios';

// 메인 App 컴포넌트
// 이 앱은 Tailwind CSS를 사용하여 모바일 우선(mobile-first) 반응형 디자인으로 구축되었습니다.
// `md:`와 같은 유틸리티 클래스를 통해 다양한 화면 크기에 맞춰 레이아웃이 자동으로 조정됩니다.
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = page => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // 페이지 이동 시 모바일 메뉴 닫기
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return /*#__PURE__*/React.createElement(HomePage, null);
      case 'about':
        return /*#__PURE__*/React.createElement(AboutPage, null);
      case 'programs':
        return /*#__PURE__*/React.createElement(ProgramsPage, null);
      case 'gallery':
        return /*#__PURE__*/React.createElement(GalleryPage, null);
      case 'announcements':
        // 새로운 공지사항 페이지 추가
        return /*#__PURE__*/React.createElement(AnnouncementsPage, null);
      case 'contact':
        return /*#__PURE__*/React.createElement(ContactPage, null);
      case 'support':
        return /*#__PURE__*/React.createElement(SupportPage, null);
      default:
        return /*#__PURE__*/React.createElement(HomePage, null);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-50 font-sans text-black flex flex-col"
  }, /*#__PURE__*/React.createElement("style", null, `
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
          body {
            font-family: 'Noto Sans KR', sans-serif;
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `), /*#__PURE__*/React.createElement("header", {
    className: "bg-white shadow-md p-4 sticky top-0 z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 cursor-pointer",
    onClick: () => navigate('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://ion.or.kr/common/do/thumbnail?index=499994",
    alt: "솔잎지역아동센터 로고",
    className: "rounded-full"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-green-600"
  }, "솔잎"), /*#__PURE__*/React.createElement("span", {
    className: "text-black"
  }, "지역아동센터"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex space-x-6 items-center"
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Info, {
      size: 30
    }),
    text: "센터 소개",
    onClick: () => navigate('about'),
    isActive: currentPage === 'about'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(BookOpen, {
      size: 30
    }),
    text: "주요 사업",
    onClick: () => navigate('programs'),
    isActive: currentPage === 'programs'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Image, {
      size: 30
    }),
    text: "갤러리",
    onClick: () => navigate('gallery'),
    isActive: currentPage === 'gallery'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Bell, {
      size: 30
    }),
    text: "공지사항",
    onClick: () => navigate('announcements'),
    isActive: currentPage === 'announcements'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Mail, {
      size: 30
    }),
    text: "오시는 길",
    onClick: () => navigate('contact'),
    isActive: currentPage === 'contact'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(HeartHandshake, {
      size: 30
    }),
    text: "후원/자원봉사",
    onClick: () => navigate('support'),
    isActive: currentPage === 'support'
  })), /*#__PURE__*/React.createElement("button", {
    className: "md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400",
    onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen)
  }, isMobileMenuOpen ? /*#__PURE__*/React.createElement(X, {
    size: 24
  }) : /*#__PURE__*/React.createElement(Menu, {
    size: 24
  }))), isMobileMenuOpen && /*#__PURE__*/React.createElement("nav", {
    className: "md:hidden mt-4 flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-inner"
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Info, {
      size: 20
    }),
    text: "센터 소개",
    onClick: () => navigate('about'),
    isActive: currentPage === 'about',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(BookOpen, {
      size: 20
    }),
    text: "주요 사업",
    onClick: () => navigate('programs'),
    isActive: currentPage === 'programs',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Image, {
      size: 20
    }),
    text: "갤러리",
    onClick: () => navigate('gallery'),
    isActive: currentPage === 'gallery',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Bell, {
      size: 20
    }),
    text: "공지사항",
    onClick: () => navigate('announcements'),
    isActive: currentPage === 'announcements',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Mail, {
      size: 20
    }),
    text: "오시는 길",
    onClick: () => navigate('contact'),
    isActive: currentPage === 'contact',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(HeartHandshake, {
      size: 20
    }),
    text: "후원/자원봉사",
    onClick: () => navigate('support'),
    isActive: currentPage === 'support',
    isMobile: true
  }))), /*#__PURE__*/React.createElement("main", {
    className: "flex-grow container mx-auto p-4 md:p-8"
  }, renderPage()), /*#__PURE__*/React.createElement("footer", {
    className: "bg-gray-800 text-white p-6 text-center text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("p", null, "솔잎지역아동센터 | 대표: 정경택 | 주소: 대구광역시 동구 송라로 36, 2층 | 전화: 053-256-3217"), /*#__PURE__*/React.createElement("p", null, "이메일: jcecbw@hanmail.net | 사업자등록번호: 502-80-12722"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "© 2025 솔잎지역아동센터. All rights reserved."))));
};

// 네비게이션 아이템 컴포넌트
const NavItem = ({
  icon,
  text,
  onClick,
  isActive,
  isMobile = false
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick
  // 모바일과 데스크탑의 레이아웃을 다르게 설정합니다.
  ,
  className: `flex ${isMobile ? 'flex-row items-center space-x-2 w-full justify-start' : 'flex-col items-center space-y-1'} p-2 rounded-md transition-colors duration-200
        ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}
      `
}, icon, /*#__PURE__*/React.createElement("span", {
  className: `font-medium ${isActive ? 'font-bold' : ''} ${isMobile ? 'text-base' : 'text-sm'}`
}, text));

// 각 페이지 컴포넌트 정의

// 홈 페이지
const HomePage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg text-center animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-4xl font-extrabold text-black mb-4"
}, "솔잎지역아동센터에 오신 것을 환영합니다!"), /*#__PURE__*/React.createElement("p", {
  className: "text-lg text-black leading-relaxed max-w-3xl mx-auto mb-8"
}, "솔잎지역아동센터는 아동의 건강한 성장과 발달을 지원하고, 지역사회와 함께 아이들의 밝은 미래를 만들어가는 공간입니다. 사랑과 관심으로 아이들의 꿈을 키워나갑니다."), /*#__PURE__*/React.createElement("img", {
  src: "https://www.ion.or.kr/common/do/load?index=285758" // 홈화면 이미지 넣기
  ,
  alt: "아이들이 함께 웃는 모습",
  className: "w-full rounded-lg shadow-md mb-8 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "grid md:grid-cols-3 gap-6 mt-8"
}, /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(HomeIcon, {
    size: 40,
    className: "text-blue-500"
  }),
  title: "안전한 보호",
  description: "아이들이 안심하고 생활할 수 있는 안전하고 쾌적한 환경을 제공합니다."
}), /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(BookOpen, {
    size: 40,
    className: "text-blue-500"
  }),
  title: "균형 잡힌 성장",
  description: "교육, 문화, 정서 지원을 통해 아이들의 전인적 성장을 돕습니다."
}), /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(HeartHandshake, {
    size: 40,
    className: "text-blue-500"
  }),
  title: "지역사회 연계",
  description: "지역사회 자원과 연계하여 아이들에게 다양한 기회를 제공합니다."
})), /*#__PURE__*/React.createElement("div", {
  className: "mt-12 p-6 bg-white rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-bold text-black mb-4"
}, "센터의 비전"), /*#__PURE__*/React.createElement("p", {
  className: "text-black leading-relaxed"
}, "솔잎지역아동센터는 모든 아이들이 존중받고 사랑받으며, 자신의 잠재력을 최대한 발휘할 수 있는 행복한 세상을 꿈꿉니다. 아이들이 건강한 사회 구성원으로 성장할 수 있도록 든든한 버팀목이 되겠습니다.")));
const FeatureCard = ({
  icon,
  title,
  description
}) => /*#__PURE__*/React.createElement("div", {
  className: "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
}, /*#__PURE__*/React.createElement("div", {
  className: "mb-4"
}, icon), /*#__PURE__*/React.createElement("h3", {
  className: "text-xl font-bold text-gray-900 mb-2"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-600"
}, description));

// 센터 소개 페이지
const AboutPage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "센터 소개"), /*#__PURE__*/React.createElement("div", {
  className: "mb-8"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "솔잎지역아동센터는?"), /*#__PURE__*/React.createElement("p", {
  className: "text-black leading-relaxed"
}, "솔잎지역아동센터는 방과 후 돌봄이 필요한 아동들을 위해 안전한 보호, 교육, 건전한 놀이 및 문화 활동, 그리고 정서적 지원을 제공하는 아동복지시설입니다. 지역사회 내 아동들의 건강한 성장과 발달을 돕고, 가정의 양육 부담을 경감하며, 아동들이 행복한 환경에서 미래의 꿈을 키울 수 있도록 지원하고 있습니다. 저희 센터는 아이들이 존중받고 사랑받는 공간이 될 수 있도록 최선을 다하고 있습니다.")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjFfMjQ4/MDAxNzUzMDgxMTkzNjg0.0vMfK_h9o2n_Yn__OU8IiXBDe62MqKX7GmiLxy_e-_wg.qcYcdgDDh7NX-tpb_2hNRthdzdVfr9pY71BgOQx-K8Ag.PNG/image01_(1).png?type=w773",
  alt: "아이들이 함께 활동하는 센터 내부 모습",
  className: "w-full rounded-lg shadow-md mb-8 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "mb-8"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "설립 목적"), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, "아동의 건전한 발달을 위한 안전한 보호 및 교육 환경 제공"), /*#__PURE__*/React.createElement("li", null, "아동의 잠재력 개발 및 개별 특성을 고려한 맞춤형 프로그램 운영"), /*#__PURE__*/React.createElement("li", null, "지역사회 자원 연계를 통한 아동 복지 증진 및 가족 기능 강화"), /*#__PURE__*/React.createElement("li", null, "아동의 권리 존중 및 아동 중심의 복지 실현"), /*#__PURE__*/React.createElement("li", null, "아동들이 미래 사회의 건강한 구성원으로 성장하도록 지원"))), /*#__PURE__*/React.createElement("div", {
  className: "mb-8"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "센터 연혁"), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, "2010년 03월: 솔잎지역아동센터 설립 인가"), /*#__PURE__*/React.createElement("li", null, "2012년 07월: 제1회 솔잎 꿈나무 발표회 개최"), /*#__PURE__*/React.createElement("li", null, "2015년 11월: 환경 개선 사업 완료 (놀이실, 학습실 리모델링)"), /*#__PURE__*/React.createElement("li", null, "2018년 05월: 지역사회 연계 프로그램 '솔잎과 함께하는 문화 탐방' 시작"), /*#__PURE__*/React.createElement("li", null, "2020년 03월: 설립 10주년 기념 행사 개최"), /*#__PURE__*/React.createElement("li", null, "2023년 09월: 아동 심리 상담 프로그램 도입"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "직원 소개"), /*#__PURE__*/React.createElement("div", {
  className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
}, /*#__PURE__*/React.createElement(StaffCard, {
  name: "정경택 센터장",
  role: "센터장",
  description: "아이들의 행복을 최우선으로 생각하며, 센터 운영 전반을 총괄합니다.",
  imgSrc: "https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ4.z5NaR6HqCHh-IbWV5IJz-NkUCrx-xfkwtNRuGecE2REg.-y_va7sNMMn-jXFwuxppObMYIuLCywuTXGlO51p06mQg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EB%82%A8%EC%9E%90).png?type=w3840"
}), /*#__PURE__*/React.createElement(StaffCard, {
  name: "전혜지 사회복지사",
  role: "사회복지사",
  description: "아동 개별 상담 및 프로그램 기획, 지역사회 연계 업무를 담당합니다.",
  imgSrc: "https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ2.1SF9Z9CEv46lZHxhshapACdnFvPDIAdS-ys3bhj4LCMg.y2IytYdmebWFC0R4EjDW-bWR3GicAKP1qpCUIr9btgIg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EC%97%AC%EC%9E%90).png?type=w3840"
}), /*#__PURE__*/React.createElement(StaffCard, {
  name: "어선영 사회복지사",
  role: "사회복지사",
  description: "아이들의 일상생활 관리 및 학습 지도를 담당합니다.",
  imgSrc: "https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ2.1SF9Z9CEv46lZHxhshapACdnFvPDIAdS-ys3bhj4LCMg.y2IytYdmebWFC0R4EjDW-bWR3GicAKP1qpCUIr9btgIg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EC%97%AC%EC%9E%90).png?type=w3840"
}))));

const StaffCard = ({
  name,
  role,
  description,
  imgSrc
}) => /*#__PURE__*/React.createElement("div", {
  className: "bg-gray-50 p-6 rounded-lg shadow-md flex items-center space-x-4"
}, /*#__PURE__*/React.createElement("img", {
  src: imgSrc,
  alt: name,
  className: "w-20 h-20 rounded-full object-cover border-2 border-blue-300",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/100x100/CCCCCC/000000?text=사진+없음";
  }
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
  className: "text-xl font-bold text-gray-900"
}, name), /*#__PURE__*/React.createElement("p", {
  className: "text-blue-600 text-sm mb-1"
}, role), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-600"
}, description)));


// 주요 사업 페이지
const ProgramsPage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "주요 사업"), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-8 leading-relaxed"
}, "솔잎지역아동센터는 아동의 건강한 성장과 발달을 위해 5가지 핵심 영역을 중심으로 다양한 프로그램을 운영합니다. 아이들이 행복하고 안전하게 성장할 수 있도록 체계적인 지원을 제공합니다."), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-blue-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-blue-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(HomeIcon, {
  size: 28,
  className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "1. 보호")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "아이들이 방과 후 안전하게 생활하고, 기본적인 욕구를 충족할 수 있도록 보호합니다."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "안전한 생활 공간 제공:"), " 쾌적하고 안전한 센터 환경 조성 및 관리"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "급식 지원:"), " 영양가 있는 저녁 식사 및 간식 제공 (식단표 운영)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "위생 및 건강 관리:"), " 개인위생 지도, 건강 상태 확인 및 응급처치"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "귀가 지도:"), " 안전한 귀가를 위한 지도 및 보호자 연계")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjFfMTk1/MDAxNzUzMDgzMjU3MDg2.afZJ8c_1brnucnYVsqwOfffhGp3Ft3HXsp8P4AItJ64g.ZU79MGI09KVtMHpXA9lnyQnR5FEfSHJfbVFdpcXEdNcg.JPEG/123123123123).jpg?type=w773",
  alt: "아이들이 센터에서 안전하게 쉬는 모습",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-amber-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-amber-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(HeartHandshake, {
  size: 28,
  className: "text-amber-600"
}), /*#__PURE__*/React.createElement("span", null, "2. 정서지원")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "아이들의 건강한 정서 발달을 돕고, 심리적 안정감을 제공하여 행복하게 성장할 수 있도록 지원합니다."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "개별 및 집단 상담:"), " 아동의 고민 경청 및 정서적 지지, 또래 관계 증진"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "미술/음악/놀이 치료:"), " 예술 활동을 통한 정서 표현 및 치유"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "자존감 향상 프로그램:"), " 긍정적 자아 개념 형성 및 자신감 증진 활동"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "스트레스 관리:"), " 놀이, 휴식 등을 통한 스트레스 해소")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjFfMjU4/MDAxNzUzMDg0OTk0Nzgy.DF6V_pl2K-ILd-wMhgbGz-YGlGpmtJPzx3SLijy6EwYg.HSTSMtyDk3P2cqKCJ1_7H8W5PW8XWBNs37aYTErbjOcg.JPEG/KakaoTalk_20250721_170100531.jpg?type=w773",
  alt: "아이들이 상담 또는 치료 활동에 참여하는 모습",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-purple-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-purple-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Image, {
  size: 28,
  className: "text-purple-600"
}), /*#__PURE__*/React.createElement("span", null, "3. 문화체험")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "다양한 문화 활동을 통해 아이들의 견문을 넓히고, 풍부한 감수성을 함양하도록 돕습니다."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "영화/연극/뮤지컬 관람:"), " 다양한 공연 관람을 통한 문화적 경험"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "박물관/미술관/과학관 견학:"), " 학습과 연계된 체험 활동"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "계절별 나들이 및 캠프:"), " 자연 속에서 즐거운 추억 만들기 및 협동심 증진"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "요리 활동:"), " 직접 음식을 만들며 오감 발달 및 성취감 경험")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjNfMTc3/MDAxNzUzMjUxNzQ3MTE2.cQbV7hzcaZOWAWGcKPXpf-yjQdqqYEGc9YAYpAswnJ0g.OdH6n8SZRK-831F2fg-cgpli4T2CHctQ5qNyMYtbdW8g.JPEG/%EB%8C%80%EC%99%B8%ED%99%9C%EB%8F%99_(1).jpg?type=w773",
  alt: "아이들이 문화 체험 활동에 참여하는 모습",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-stone-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-stone-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(BookOpen, {
  size: 28,
  className: "text-stone-600"
}), /*#__PURE__*/React.createElement("span", null, "4. 교육")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "아이들의 학업 성취도 향상과 자기 주도 학습 능력 강화를 위한 맞춤형 교육을 제공합니다."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "개별 맞춤형 학습 지도:"), " 국어, 수학, 영어 등 주요 과목 학습 지원"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "숙제 지도 및 보충 학습:"), " 학교 숙제 지원 및 부족한 부분 보충"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "독서 지도 및 논술 교육:"), " 독서 습관 형성 및 사고력, 표현력 증진"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "특기적성 교육:"), " 미술, 음악, 체육, 컴퓨터 등 예체능 및 정보화 교육")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjNfMjY2/MDAxNzUzMjUyODMwODc2.5AKT9mUjGTskRsr6tG3JYYJEU9qqdhRbPnTRo9pghjYg._kY4wgadyhhKLL-bmRWQDJEOewv3boqJHNXtOMX3qwkg.JPEG/%EA%B3%B5%EB%B6%80_(1).jpg?type=w3840",
  alt: "아이들이 학습 활동에 집중하는 모습",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-red-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-red-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Info, {
  size: 28,
  className: "text-red-600"
}), /*#__PURE__*/React.createElement("span", null, "5. 지역연계")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "지역사회 자원을 적극적으로 활용하고 연계하여 아이들에게 더욱 풍부한 기회를 제공하고, 지역사회와 함께 성장합니다."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "자원봉사자 연계:"), " 학습 지도, 특기 적성 교육 등 자원봉사자 활용"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "지역사회 기관 협력:"), " 도서관, 복지관, 보건소 등과 연계 프로그램 운영"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "캠페인 및 홍보 활동:"), " 아동 권리 증진 및 지역사회 인식 개선 노력"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "후원자 개발 및 관리:"), " 아이들을 위한 지속적인 후원 유치 및 관리")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjJfMjU3/MDAxNzUzMTYzODc5NzIw.cIY_wCP8KaiZ3lJicn_xHBjgHqXahQuZEkC5QV_DTjog.Dmur5rBLNdwAV6zwrrdvqFfbtqE4M_v-9BirS1RQ7fQg.JPEG/%EB%8C%80%EC%99%B8%ED%99%9C%EB%8F%993.jpg?type=w773",
  alt: "센터와 지역사회 기관이 협력하는 모습",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
  }
})));

// 갤러리 페이지
const GalleryPage = () => {
    return /*#__PURE__*/React.createElement("section", {
        className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
    }, /*#__PURE__*/React.createElement("h2", {
        className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2 text-center"
    }, "센터 갤러리"), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8"
    }, /*#__PURE__*/React.createElement(GalleryLinkBox, {
        href: "https://ion.or.kr/solip/community/photo/list/1",
        icon: /*#__PURE__*/React.createElement(Camera, {
            size: 48,
            className: "text-blue-500"
        }),
        title: "전체 갤러리 보기",
        description: "솔잎지역아동센터 아이들의 즐거운 활동 모습을 확인해보세요!",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
    }), /*#__PURE__*/React.createElement(GalleryLinkBox, {
        href: "https://pf.kakao.com/_xbxlyUxb/posts",
        icon: /*#__PURE__*/React.createElement(MessageSquare, {
            size: 48,
            className: "text-yellow-500"
        }),
        title: "카카오톡 채널 소식",
        description: "카카오톡 채널에서 더 많은 최신 소식을 만나보세요.",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
    })));
};

// 갤러리 링크 박스 컴포넌트
const GalleryLinkBox = ({
    href,
    icon,
    title,
    description,
    bgColor,
    borderColor
}) => /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: `group block p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border ${borderColor} ${bgColor}`
}, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-4"
}, icon), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
}, title), /*#__PURE__*/React.createElement("p", {
    className: "text-black leading-relaxed"
}, description), /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
}, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-semibold text-blue-600 border-2 border-blue-200 group-hover:bg-blue-500 group-hover:text-white transition-colors"
}, "바로가기 ", /*#__PURE__*/React.createElement(ExternalLink, {
    size: 16,
    className: "ml-2"
}))));

// 공지사항 페이지 컴포넌트 (링크 박스 형태로 변경)
const AnnouncementsPage = () => {
    return /*#__PURE__*/React.createElement("section", {
        className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
    }, /*#__PURE__*/React.createElement("h2", {
        className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2 text-center"
    }, "센터 공지사항"), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-center items-center mt-8"
    }, /*#__PURE__*/React.createElement(GalleryLinkBox, {
        href: "https://ion.or.kr/solip/community/notice/list/1",
        icon: /*#__PURE__*/React.createElement(Bell, {
            size: 48,
            className: "text-green-500"
        }),
        title: "솔잎지역아동센터의 주요 행사 및 소식",
        description: "센터의 최신 공지사항을 확인하시려면 '바로가기'를 클릭해주세요.",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
    })));
};

// 오시는 길 페이지
const ContactPage = () => /*#__PURE__*/React.createElement("section", {
    className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "오시는 길"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-8 mb-8"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold text-gray-800 mb-3"
}, "연락처 정보"), /*#__PURE__*/React.createElement("ul", {
    className: "text-black space-y-3"
}, /*#__PURE__*/React.createElement("li", {
    className: "flex items-start space-x-2"
}, /*#__PURE__*/React.createElement(HomeIcon, {
    size: 20,
    className: "text-blue-600 mt-1 flex-shrink-0"
}), /*#__PURE__*/React.createElement("span", null, "주소: 대구광역시 동구 송라로 36, 2층", /*#__PURE__*/React.createElement("br", null), "(우) 41259 (지번) 신천동 178-1")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Mail, {
    size: 20,
    className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "이메일: jcecbw@hanmail.net")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Info, {
    size: 20,
    className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "전화: 053-256-3217")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(BookOpen, {
    size: 20,
    className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "팩스: 053-256-3218")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold text-gray-800 mb-3"
}, "운영 시간"), /*#__PURE__*/React.createElement("ul", {
    className: "text-black space-y-3"
}, /*#__PURE__*/React.createElement("li", null, "월요일 - 금요일:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside ml-4"
}, /*#__PURE__*/React.createElement("li", null, "학기 중: 10:00 ~ 21:00"), /*#__PURE__*/React.createElement("li", null, "방학 중: 09:00 ~ 19:00")), /*#__PURE__*/React.createElement("li", null, "토요일: 자체 행사시 운영"), /*#__PURE__*/React.createElement("li", null, "일요일, 공휴일: 휴무")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold text-gray-800 mb-3"
}, "찾아오시는 길 (약도)"), /*#__PURE__*/React.createElement("p", {
    className: "text-black mb-4"
}, "대구광역시 동구 송라로 36, 2층에 위치하고 있습니다. 대중교통 이용 시, 지하철 1호선 ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-blue-700"
}, "신천역 5번 출구"), "로 나와서 ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-blue-700"
}, "신천초등학교 앞"), "으로 오시면 됩니다."), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md border-2 border-gray-200"
}, /*#__PURE__*/React.createElement("iframe", {
    src: "https://map.kakao.com/?urlX=865779.0000000601&urlY=662241.9999999984&urlLevel=3&itemId=12009276&q=%EC%86%94%EC%9E%8E%EC%A7%80%EC%97%AD%EC%95%84%EB%8F%99%EC%84%BC%ED%84%B0&srcid=12009276&map_type=TYPE_MAP",
    className: "w-full h-full border-0",
    allowFullScreen: "",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    title: "솔잎지역아동센터 위치 약도"
})), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-gray-600 text-sm text-center"
}, "* 지도를 움직여 주변을 확인하거나 확대/축소할 수 있습니다.")));

// 후원/자원봉사 페이지
const SupportPage = () => /*#__PURE__*/React.createElement("section", {
    className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "후원 및 자원봉사"), /*#__PURE__*/React.createElement("p", {
    className: "text-black mb-8 leading-relaxed"
}, "솔잎지역아동센터는 아이들의 밝은 미래를 위해 따뜻한 마음을 나누어주실 여러분의 후원과 자원봉사를 기다립니다. 작은 관심이 아이들에게는 큰 희망이 됩니다."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.1365.go.kr/vols/main.do",
    target: "_blank",
    rel: "noopener noreferrer"
}, /*#__PURE__*/React.createElement("img", {
    src: "https://postfiles.pstatic.net/MjAyNTA3MjJfMjY0/MDAxNzUzMTc2NzU1NTUw.hAJetegdK6tt0r9Zi1QFwJ4EeqIBd26C-_2i4UdAPA0g.hMaWJtHtB359lNHHXIKuFwQK0SZ86OLwo4qqBCshY8Ig.PNG/%EB%B4%89%EC%82%AC_(1).png?type=w3840",
    alt: "후원 및 자원봉사 활동 모습",
    className: "w-full rounded-lg shadow-md mb-8 object-cover hover:opacity-80 transition-opacity",
    onError: e => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=이미지+없음";
    }
})), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-8 mb-8"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold text-gray-800 mb-3"
}, "후원 안내"), /*#__PURE__*/React.createElement("p", {
    className: "text-black leading-relaxed mb-4"
}, "정기 후원, 일시 후원 등 다양한 방법으로 아이들을 도울 수 있습니다. 후원금은 아이들의 교육, 급식, 문화 체험 활동 등 전액 아이들을 위해 사용됩니다."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside text-black space-y-2 pl-4 mb-4"
}, /*#__PURE__*/React.createElement("li", null, "정기 후원: 매월 일정 금액을 자동 이체하는 방식"), /*#__PURE__*/React.createElement("li", null, "일시 후원: 원하는 시기에 자유롭게 후원하는 방식"), /*#__PURE__*/React.createElement("li", null, "물품 후원: 도서, 학용품, 의류, 간식 등 아이들에게 필요한 물품 후원")), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50 p-4 rounded-lg border border-blue-200"
}, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-blue-800 mb-2"
}, "후원 계좌 정보"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-800"
}, "은행: IM뱅크(대구은행)"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-800"
}, "계좌번호: 033-10-004910"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-800"
}, "예금주: 솔잎지역아동센터")), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-gray-600 text-sm"
}, "* 후원금은 연말정산 시 소득공제 혜택을 받으실 수 있습니다.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold text-gray-800 mb-3"
}, "자원봉사 안내"), /*#__PURE__*/React.createElement("p", {
    className: "text-black leading-relaxed mb-4"
}, "아이들과 함께 시간을 보내고 재능을 나누어주실 자원봉사자분들을 환영합니다."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside text-black space-y-2 pl-4 mb-4"
}, /*#__PURE__*/React.createElement("li", null, "학습 지도 봉사: 국어, 수학, 영어 등 교과목 학습 지원"), /*#__PURE__*/React.createElement("li", null, "특기적성 지도 봉사: 미술, 음악, 체육, 컴퓨터 등 재능 기부"), /*#__PURE__*/React.createElement("li", null, "문화 체험 활동 보조: 나들이, 캠프 등 행사 보조"), /*#__PURE__*/React.createElement("li", null, "환경 미화 봉사: 센터 청소 및 환경 정리"), /*#__PURE__*/React.createElement("li", null, "급식 봉사: 아이들 식사 준비 및 배식 보조")), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 p-4 rounded-lg border border-amber-200"
}, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-amber-800 mb-2"
}, "자원봉사 신청 방법"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-800"
}, "전화 또는 이메일로 문의 후 방문 상담"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-800"
}, "담당자: 정경택 센터장 (053-256-3217)")), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-gray-600 text-sm"
}, "* 자원봉사 시간은 VMS 또는 1365 자원봉사 포털에 등록 가능합니다."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 p-6 bg-blue-50 rounded-lg shadow-md text-center"
}, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-black mb-4"
}, "여러분의 따뜻한 손길을 기다립니다!"), /*#__PURE__*/React.createElement("p", {
    className: "text-black leading-relaxed"
}, "솔잎지역아동센터는 여러분의 소중한 후원과 봉사로 운영됩니다. 아이들이 건강하고 행복하게 성장할 수 있도록 많은 관심과 사랑 부탁드립니다.")));

// App 컴포넌트를 기본으로 내보냅니다.
export default App;