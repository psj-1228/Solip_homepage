import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Info, BookOpen, Image, Mail, HeartHandshake, Menu, X, Bell, Loader2, ExternalLink, Camera, MessageSquare } from 'lucide-react'; // Camera, MessageSquare ������ �߰�
import axios from 'axios';

// ���� App ������Ʈ
// �� ���� Tailwind CSS�� ����Ͽ� ����� �켱(mobile-first) ������ ���������� ����Ǿ����ϴ�.
// `md:`�� ���� ��ƿ��Ƽ Ŭ������ ���� �پ��� ȭ�� ũ�⿡ ���� ���̾ƿ��� �ڵ����� �����˴ϴ�.
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = page => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // ������ �̵� �� ����� �޴� �ݱ�
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
        // ���ο� �������� ������ �߰�
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
    alt: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u03B0\uFFFD",
    className: "rounded-full"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-green-600"
  }, "\uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("span", {
    className: "text-black"
  }, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex space-x-6 items-center"
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Info, {
      size: 30
    }),
    text: "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u04B0\uFFFD",
    onClick: () => navigate('about'),
    isActive: currentPage === 'about'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(BookOpen, {
      size: 30
    }),
    text: "\uFFFD\u05BF\uFFFD \uFFFD\uFFFD\uFFFD",
    onClick: () => navigate('programs'),
    isActive: currentPage === 'programs'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Image, {
      size: 30
    }),
    text: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    onClick: () => navigate('gallery'),
    isActive: currentPage === 'gallery'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Bell, {
      size: 30
    }),
    text: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    onClick: () => navigate('announcements'),
    isActive: currentPage === 'announcements'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Mail, {
      size: 30
    }),
    text: "\uFFFD\uFFFD\uFFFD\xF4\uFFFD \uFFFD\uFFFD",
    onClick: () => navigate('contact'),
    isActive: currentPage === 'contact'
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(HeartHandshake, {
      size: 30
    }),
    text: "\uFFFD\u013F\uFFFD/\uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
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
    text: "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u04B0\uFFFD",
    onClick: () => navigate('about'),
    isActive: currentPage === 'about',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(BookOpen, {
      size: 20
    }),
    text: "\uFFFD\u05BF\uFFFD \uFFFD\uFFFD\uFFFD",
    onClick: () => navigate('programs'),
    isActive: currentPage === 'programs',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Image, {
      size: 20
    }),
    text: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    onClick: () => navigate('gallery'),
    isActive: currentPage === 'gallery',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Bell, {
      size: 20
    }),
    text: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    onClick: () => navigate('announcements'),
    isActive: currentPage === 'announcements',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(Mail, {
      size: 20
    }),
    text: "\uFFFD\uFFFD\uFFFD\xF4\uFFFD \uFFFD\uFFFD",
    onClick: () => navigate('contact'),
    isActive: currentPage === 'contact',
    isMobile: true
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(HeartHandshake, {
      size: 20
    }),
    text: "\uFFFD\u013F\uFFFD/\uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
    onClick: () => navigate('support'),
    isActive: currentPage === 'support',
    isMobile: true
  }))), /*#__PURE__*/React.createElement("main", {
    className: "flex-grow container mx-auto p-4 md:p-8"
  }, renderPage()), /*#__PURE__*/React.createElement("footer", {
    className: "bg-gray-800 text-white p-6 text-center text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD | \uFFFD\uFFFD\u01E5: \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD | \uFFFD\u05BC\uFFFD: \uFFFD\uBC78\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u06F6\uFFFD\uFFFD 36, 2\uFFFD\uFFFD | \uFFFD\uFFFD\u022D: 053-256-3217"), /*#__PURE__*/React.createElement("p", null, "\uFFFD\u0338\uFFFD\uFFFD\uFFFD: jcecbw@hanmail.net | \uFFFD\uFFFD\uFFFD\uFFFD\u06B5\uFFFD\u03F9\uFFFD\u0223: 502-80-12722"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "\xA9 2025 \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD. All rights reserved."))));
};

// �׺���̼� ������ ������Ʈ
const NavItem = ({
  icon,
  text,
  onClick,
  isActive,
  isMobile = false
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick
  // ����ϰ� ����ũž�� ���̾ƿ��� �ٸ��� �����մϴ�.
  ,
  className: `flex ${isMobile ? 'flex-row items-center space-x-2 w-full justify-start' : 'flex-col items-center space-y-1'} p-2 rounded-md transition-colors duration-200
        ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}
      `
}, icon, /*#__PURE__*/React.createElement("span", {
  className: `font-medium ${isActive ? 'font-bold' : ''} ${isMobile ? 'text-base' : 'text-sm'}`
}, text));

// �� ������ ������Ʈ ����

// Ȩ ������
const HomePage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg text-center animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-4xl font-extrabold text-black mb-4"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u037F\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u022F\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD!"), /*#__PURE__*/React.createElement("p", {
  className: "text-lg text-black leading-relaxed max-w-3xl mx-auto mb-8"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u0374\uFFFD \uFFFD\u01B5\uFFFD\uFFFD\uFFFD \uFFFD\u01F0\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07F4\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238\uFFFD\uFFFD \uFFFD\u0532\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0337\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uEC21\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0534\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u0170\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD."), /*#__PURE__*/React.createElement("img", {
  src: "https://www.ion.or.kr/common/do/load?index=285758" // Ȩȭ�� �̹��� �ֱ�
  ,
  alt: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u0532\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mb-8 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "grid md:grid-cols-3 gap-6 mt-8"
}, /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(HomeIcon, {
    size: 40,
    className: "text-blue-500"
  }),
  title: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0223",
  description: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u023D\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\u0230\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B4\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \u022F\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."
}), /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(BookOpen, {
    size: 40,
    className: "text-blue-500"
  }),
  title: "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD",
  description: "\uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\u022D, \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD."
}), /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(HeartHandshake, {
    size: 40,
    className: "text-blue-500"
  }),
  title: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\uFFFD\uFFFD\uFFFD",
  description: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\u06BF\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03FF\uFFFD \uFFFD\uFFFD\uFFFD\u0335\u9FE1\uFFFD\uFFFD \uFFFD\u067E\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0238\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."
})), /*#__PURE__*/React.createElement("div", {
  className: "mt-12 p-6 bg-white rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-bold text-black mb-4"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-black leading-relaxed"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u0374\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u07F9\u07B0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\u06BD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u05B4\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B4\uFFFD \uFFFD\u0EB9\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07B2\u07F4\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u01F0\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0238 \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u01F0\u06BD\uFFFD\uFFFD\u03F4\uFFFD.")));
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

// ���� �Ұ� ������
const AboutPage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u04B0\uFFFD"), /*#__PURE__*/React.createElement("div", {
  className: "mb-8"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u0374\uFFFD?"), /*#__PURE__*/React.createElement("p", {
  className: "text-black leading-relaxed"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u0374\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u02BF\uFFFD\uFFFD\uFFFD \uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0223, \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\u022D \u0230\uFFFD\uFFFD, \uFFFD\u05F8\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\xFC\uFFFD\uFFFD\u0534\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\uFFFD \uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u01F0\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07F4\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u03B4\uFFFD\uFFFD\uFFFD \uFFFD\u6C28\uFFFD\u03F8\uFFFD, \uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0EB9\uFFFD\uFFFD \u022F\uFFFD\u6FE1\uFFFD\uFFFD \uFFFD\u0337\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u0170\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\u05BD\uFFFD\uFFFD\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0374\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u07F9\u07B0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\u07B4\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B5\uFFFD\uFFFD\uFFFD \uFFFD\u05BC\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\u05BD\uFFFD\uFFFD\u03F4\uFFFD.")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjFfMjQ4/MDAxNzUzMDgxMTkzNjg0.0vMfK_h9o2n_Yn__OU8IiXBDe62MqKX7GmiLxy_e-_wg.qcYcdgDDh7NX-tpb_2hNRthdzdVfr9pY71BgOQx-K8Ag.PNG/image01_(1).png?type=w773",
  alt: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u0532\uFFFD \u0230\uFFFD\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mb-8 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "mb-8"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, "\uFFFD\u01B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07F4\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0223 \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u022F\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\u01B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u01AF\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03B1\u05F7\uFFFD \uFFFD\uEFF5"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\u06BF\uFFFD \uFFFD\uFFFD\uFFFD\u8E26 \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u01B5\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u022D"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\u01B5\uFFFD\uFFFD\uFFFD \uFFFD\u01F8\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u01B5\uFFFD \uFFFD\u07FD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0337\uFFFD \uFFFD\uFFFD\u0238\uFFFD\uFFFD \uFFFD\u01F0\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"))), /*#__PURE__*/React.createElement("div", {
  className: "mb-8"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, "2010\uFFFD\uFFFD 03\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u03B0\uFFFD"), /*#__PURE__*/React.createElement("li", null, "2012\uFFFD\uFFFD 07\uFFFD\uFFFD: \uFFFD\uFFFD1\u0238 \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07B3\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u01E5\u0238 \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "2015\uFFFD\uFFFD 11\uFFFD\uFFFD: \u022F\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\u03F7\uFFFD (\uFFFD\uFFFD\uFFFD\u033D\uFFFD, \uFFFD\u043D\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uD896\uDE38\uFFFD)"), /*#__PURE__*/React.createElement("li", null, "2018\uFFFD\uFFFD 05\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03B1\u05F7\uFFFD '\uFFFD\uFFFD\uFFFD\u0670\uFFFD \uFFFD\u0532\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\u022D \u017D\uFFFD\uFFFD' \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "2020\uFFFD\uFFFD 03\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD 10\uFFFD\u05B3\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "2023\uFFFD\uFFFD 09\uFFFD\uFFFD: \uFFFD\u01B5\uFFFD \uFFFD\u0278\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03B1\u05F7\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u04B0\uFFFD"), /*#__PURE__*/React.createElement("div", {
  className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
}, /*#__PURE__*/React.createElement(StaffCard, {
  name: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
  role: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
  description: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u0EB9\uFFFD\uFFFD \uFFFD\u05BF\uCF31\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F8\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uEFF5 \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0470\uFFFD\uFFFD\u0574\u03F4\uFFFD.",
  imgSrc: "https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ4.z5NaR6HqCHh-IbWV5IJz-NkUCrx-xfkwtNRuGecE2REg.-y_va7sNMMn-jXFwuxppObMYIuLCywuTXGlO51p06mQg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EB%82%A8%EC%9E%90).png?type=w3840"
}), /*#__PURE__*/React.createElement(StaffCard, {
  name: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0238\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
  role: "\uFFFD\uFFFD\u0238\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
  description: "\uFFFD\u01B5\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03B1\u05F7\uFFFD \uFFFD\uFFFD\u0239, \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD.",
  imgSrc: "https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ2.1SF9Z9CEv46lZHxhshapACdnFvPDIAdS-ys3bhj4LCMg.y2IytYdmebWFC0R4EjDW-bWR3GicAKP1qpCUIr9btgIg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EC%97%AC%EC%9E%90).png?type=w3840"
}), /*#__PURE__*/React.createElement(StaffCard, {
  name: "\uFFFD\uEF31\uFFFD\uFFFD \uFFFD\uFFFD\u0238\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
  role: "\uFFFD\uFFFD\u0238\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
  description: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u03FB\uFFFD\uFFFD\u0230 \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u043D\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD.",
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
    e.target.src = "https://placehold.co/100x100/CCCCCC/000000?text=����+����";
  }
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
  className: "text-xl font-bold text-gray-900"
}, name), /*#__PURE__*/React.createElement("p", {
  className: "text-blue-600 text-sm mb-1"
}, role), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-600"
}, description)));

// �ֿ� ��� ������
const ProgramsPage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "\uFFFD\u05BF\uFFFD \uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-8 leading-relaxed"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u0374\uFFFD \uFFFD\u01B5\uFFFD\uFFFD\uFFFD \uFFFD\u01F0\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07F4\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD 5\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u067D\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07FD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u067E\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03B1\u05F7\uFFFD\uFFFD\uFFFD \uFFFD\uEFF5\uFFFD\u0574\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u0EB9\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B5\uFFFD\uFFFD\uFFFD \xFC\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-blue-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-blue-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(HomeIcon, {
  size: 28,
  className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "1. \uFFFD\uFFFD\u0223")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\u0230\uFFFD\u03F0\uFFFD, \uFFFD\u2EBB\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u5C78\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0223\uFFFD\u0574\u03F4\uFFFD."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0230 \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u022F\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\u07BD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\u7C21 \uFFFD\u05B4\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u013B\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD (\uFFFD\u0134\uFFFD\u01E5 \uFFFD\uEFF5)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u01F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\u01F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u022E\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\xF3\u0121"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\u0370\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0370\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\u0223\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjFfMTk1/MDAxNzUzMDgzMjU3MDg2.afZJ8c_1brnucnYVsqwOfffhGp3Ft3HXsp8P4AItJ64g.ZU79MGI09KVtMHpXA9lnyQnR5FEfSHJfbVFdpcXEdNcg.JPEG/123123123123).jpg?type=w773",
  alt: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u037F\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-amber-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-amber-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(HeartHandshake, {
  size: 28,
  className: "text-amber-600"
}), /*#__PURE__*/React.createElement("span", null, "2. \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u01F0\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07F4\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\u0278\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03FF\uFFFD \uFFFD\u0EB9\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD:"), " \uFFFD\u01B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\xFB \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\u01F7\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\u033C\uFFFD/\uFFFD\uFFFD\uFFFD\uFFFD/\uFFFD\uFFFD\uFFFD\uFFFD \u0121\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD \u0230\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u01E5\uFFFD\uFFFD \uFFFD\uFFFD \u0121\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03B1\u05F7\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u06BE\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u06BD\u0170\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u0230\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\u01AE\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\u07BD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u01AE\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u063C\uFFFD")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjFfMjU4/MDAxNzUzMDg0OTk0Nzgy.DF6V_pl2K-ILd-wMhgbGz-YGlGpmtJPzx3SLijy6EwYg.HSTSMtyDk3P2cqKCJ1_7H8W5PW8XWBNs37aYTErbjOcg.JPEG/KakaoTalk_20250721_170100531.jpg?type=w773",
  alt: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\u01F4\uFFFD \u0121\uFFFD\uFFFD \u0230\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-purple-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-purple-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Image, {
  size: 28,
  className: "text-purple-600"
}), /*#__PURE__*/React.createElement("span", null, "3. \uFFFD\uFFFD\u022D\xFC\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "\uFFFD\u067E\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u022D \u0230\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u07F9\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD, \u01F3\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u053E\uFFFD\uFFFD\u03F5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\u022D/\uFFFD\uFFFD\uFFFD\uFFFD/\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\u067E\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u022D\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\u06B9\uFFFD\uFFFD\uFFFD/\uFFFD\u033C\uFFFD\uFFFD\uFFFD/\uFFFD\uFFFD\uFFFD\u0430\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\u043D\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \xFC\uFFFD\uFFFD \u0230\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \u0137\uFFFD\uFFFD:"), " \uFFFD\u06BF\uFFFD \uFFFD\u04FF\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u017F\uFFFD \uFFFD\u07FE\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\u4E2E \u0230\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u07F4\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uBC28 \uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjNfMTc3/MDAxNzUzMjUxNzQ3MTE2.cQbV7hzcaZOWAWGcKPXpf-yjQdqqYEGc9YAYpAswnJ0g.OdH6n8SZRK-831F2fg-cgpli4T2CHctQ5qNyMYtbdW8g.JPEG/%EB%8C%80%EC%99%B8%ED%99%9C%EB%8F%99_(1).jpg?type=w773",
  alt: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u022D \xFC\uFFFD\uFFFD \u0230\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-stone-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-stone-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(BookOpen, {
  size: 28,
  className: "text-stone-600"
}), /*#__PURE__*/React.createElement("span", null, "4. \uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u043E\uFFFD \uFFFD\uFFFD\uFFFD\uBD75 \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u06B1\uFFFD \uFFFD\u05B5\uFFFD \uFFFD\u043D\uFFFD \uFFFD\u0277\uFFFD \uFFFD\uFFFD\u022D\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u043D\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05BF\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u043D\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u043D\uFFFD:"), " \uFFFD\u0431\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u03BA\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD, \u01E5\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\u01AF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\u033C\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD, \xFC\uFFFD\uFFFD, \uFFFD\uFFFD\u01FB\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\xFC\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\u022D \uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjNfMjY2/MDAxNzUzMjUyODMwODc2.5AKT9mUjGTskRsr6tG3JYYJEU9qqdhRbPnTRo9pghjYg._kY4wgadyhhKLL-bmRWQDJEOewv3boqJHNXtOMX3qwkg.JPEG/%EA%B3%B5%EB%B6%80_(1).jpg?type=w3840",
  alt: "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u043D\uFFFD \u0230\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "mb-10 p-6 bg-red-50 rounded-lg shadow-md"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-red-800 mb-4 flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Info, {
  size: 28,
  className: "text-red-600"
}), /*#__PURE__*/React.createElement("span", null, "5. \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\u06BF\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \u0230\uFFFD\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03FF\uFFFD \uFFFD\uFFFD\uFFFD\u0335\u9FE1\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \u01F3\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0238\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F0\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238\uFFFD\uFFFD \uFFFD\u0532\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\u043D\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD, \u01AF\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \u0230\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\u01FC\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u03B1\u05F7\uFFFD \uFFFD\uEFF5"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\u0137\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \u022B\uFFFD\uFFFD \u0230\uFFFD\uFFFD:"), " \uFFFD\u01B5\uFFFD \uFFFD\u01F8\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\u03BD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\uFFFD\u013F\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD:"), " \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u013F\uFFFD \uFFFD\uFFFD\u0121 \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjJfMjU3/MDAxNzUzMTYzODc5NzIw.cIY_wCP8KaiZ3lJicn_xHBjgHqXahQuZEkC5QV_DTjog.Dmur5rBLNdwAV6zwrrdvqFfbtqE4M_v-9BirS1RQ7fQg.JPEG/%EB%8C%80%EC%99%B8%ED%99%9C%EB%8F%993.jpg?type=w773",
  alt: "\uFFFD\uFFFD\uFFFD\u037F\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0238 \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mt-6 object-cover",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
})));

// ������ ������
const GalleryPage = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2 text-center"
  }, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }, /*#__PURE__*/React.createElement(GalleryLinkBox, {
    href: "https://ion.or.kr/solip/community/photo/list/1",
    icon: /*#__PURE__*/React.createElement(Camera, {
      size: 48,
      className: "text-blue-500"
    }),
    title: "\uFFFD\uFFFD\xFC \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD",
    description: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u017F\uFFFD \u0230\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \u022E\uFFFD\uFFFD\uFFFD\u063A\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD!",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  }), /*#__PURE__*/React.createElement(GalleryLinkBox, {
    href: "https://pf.kakao.com/_xbxlyUxb/posts",
    icon: /*#__PURE__*/React.createElement(MessageSquare, {
      size: 48,
      className: "text-yellow-500"
    }),
    title: "\u012B\u012B\uFFFD\uFFFD\uFFFD\uFFFD \xE4\uFFFD\uFFFD \uFFFD\u04BD\uFFFD",
    description: "\u012B\u012B\uFFFD\uFFFD\uFFFD\uFFFD \xE4\uFFFD\u03BF\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u05BD\uFFFD \uFFFD\u04BD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD.",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  })));
};

// ������ ��ũ �ڽ� ������Ʈ
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
}, "\uFFFD\u0677\u03B0\uFFFD\uFFFD\uFFFD ", /*#__PURE__*/React.createElement(ExternalLink, {
  size: 16,
  className: "ml-2"
}))));

// �������� ������ ������Ʈ (��ũ �ڽ� ���·� ����)
const AnnouncementsPage = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2 text-center"
  }, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center mt-8"
  }, /*#__PURE__*/React.createElement(GalleryLinkBox, {
    href: "https://ion.or.kr/solip/community/notice/list/1",
    icon: /*#__PURE__*/React.createElement(Bell, {
      size: 48,
      className: "text-green-500"
    }),
    title: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u05BF\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u04BD\uFFFD",
    description: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u05BD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \u022E\uFFFD\uFFFD\uFFFD\u03FD\xF7\uFFFD\uFFFD\uFFFD '\uFFFD\u0677\u03B0\uFFFD\uFFFD\uFFFD'\uFFFD\uFFFD \u016C\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u05BC\uFFFD\uFFFD\uFFFD.",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  })));
};

// ���ô� �� ������
const ContactPage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "\uFFFD\uFFFD\uFFFD\xF4\uFFFD \uFFFD\uFFFD"), /*#__PURE__*/React.createElement("div", {
  className: "grid md:grid-cols-2 gap-8 mb-8"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\xF3 \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("ul", {
  className: "text-black space-y-3"
}, /*#__PURE__*/React.createElement("li", {
  className: "flex items-start space-x-2"
}, /*#__PURE__*/React.createElement(HomeIcon, {
  size: 20,
  className: "text-blue-600 mt-1 flex-shrink-0"
}), /*#__PURE__*/React.createElement("span", null, "\uFFFD\u05BC\uFFFD: \uFFFD\uBC78\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u06F6\uFFFD\uFFFD 36, 2\uFFFD\uFFFD", /*#__PURE__*/React.createElement("br", null), "(\uFFFD\uFFFD) 41259 (\uFFFD\uFFFD\uFFFD\uFFFD) \uFFFD\uFFFD\xF5\uFFFD\uFFFD 178-1")), /*#__PURE__*/React.createElement("li", {
  className: "flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Mail, {
  size: 20,
  className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "\uFFFD\u0338\uFFFD\uFFFD\uFFFD: jcecbw@hanmail.net")), /*#__PURE__*/React.createElement("li", {
  className: "flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(Info, {
  size: 20,
  className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "\uFFFD\uFFFD\u022D: 053-256-3217")), /*#__PURE__*/React.createElement("li", {
  className: "flex items-center space-x-2"
}, /*#__PURE__*/React.createElement(BookOpen, {
  size: 20,
  className: "text-blue-600"
}), /*#__PURE__*/React.createElement("span", null, "\uFFFD\u047D\uFFFD: 053-256-3218")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\uEFF5 \uFFFD\xF0\uFFFD"), /*#__PURE__*/React.createElement("ul", {
  className: "text-black space-y-3"
}, /*#__PURE__*/React.createElement("li", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD - \uFFFD\u077F\uFFFD\uFFFD\uFFFD:"), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside ml-4"
}, /*#__PURE__*/React.createElement("li", null, "\uFFFD\u0431\uFFFD \uFFFD\uFFFD: 10:00 ~ 21:00"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD: 09:00 ~ 19:00")), /*#__PURE__*/React.createElement("li", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\uFFFD\xFC \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uEFF5"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\u03FF\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\u07B9\uFFFD")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\xE3\uFFFD\u01BF\uFFFD\uFFFD\xF4\uFFFD \uFFFD\uFFFD (\uFFFD\u0D75)"), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-4"
}, "\uFFFD\uBC78\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u06F6\uFFFD\uFFFD 36, 2\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0121\uFFFD\u03F0\uFFFD \uFFFD\u05BD\uFFFD\uFFFD\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\u07F1\uFFFD\uFFFD\uFFFD \uFFFD\u033F\uFFFD \uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD\xF6 1\u0223\uFFFD\uFFFD ", /*#__PURE__*/React.createElement("span", {
  className: "font-semibold text-blue-700"
}, "\uFFFD\uFFFD\xF5\uFFFD\uFFFD 5\uFFFD\uFFFD \uFFFD\u2C78"), "\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u037C\uFFFD ", /*#__PURE__*/React.createElement("span", {
  className: "font-semibold text-blue-700"
}, "\uFFFD\uFFFD\xF5\uFFFD\u02B5\uFFFD\uFFFD\u0431\uFFFD \uFFFD\uFFFD"), "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\xF8\uFFFD \uFFFD\u02F4\u03F4\uFFFD."), /*#__PURE__*/React.createElement("div", {
  className: "w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md border-2 border-gray-200"
}, /*#__PURE__*/React.createElement("iframe", {
  src: "https://map.kakao.com/?urlX=865779.0000000601&urlY=662241.9999999984&urlLevel=3&itemId=12009276&q=%EC%86%94%EC%9E%8E%EC%A7%80%EC%97%AD%EC%95%84%EB%8F%99%EC%84%BC%ED%84%B0&srcid=12009276&map_type=TYPE_MAP",
  className: "w-full h-full border-0",
  allowFullScreen: "",
  loading: "lazy",
  referrerPolicy: "no-referrer-when-downgrade",
  title: "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0121 \uFFFD\u0D75"
})), /*#__PURE__*/React.createElement("p", {
  className: "mt-4 text-gray-600 text-sm text-center"
}, "* \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u05BA\uFFFD\uFFFD\uFFFD \u022E\uFFFD\uFFFD\uFFFD\u03F0\u0173\uFFFD \u022E\uFFFD\uFFFD/\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05BD\uFFFD\uFFFD\u03F4\uFFFD.")));

// �Ŀ�/�ڿ����� ������
const SupportPage = () => /*#__PURE__*/React.createElement("section", {
  className: "bg-white p-8 rounded-lg shadow-lg animate-fade-in"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2"
}, "\uFFFD\u013F\uFFFD \uFFFD\uFFFD \uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-black mb-8 leading-relaxed"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u0374\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0337\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u05BD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u013F\uFFFD\uFFFD\uFFFD \uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\u7E26 \uFFFD\uFFFD\u0678\uFFFD\uFFFD\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\u9FE1\uFFFD\u0534\uFFFD \u016B \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u02F4\u03F4\uFFFD."), /*#__PURE__*/React.createElement("a", {
  href: "https://www.1365.go.kr/vols/main.do",
  target: "_blank",
  rel: "noopener noreferrer"
}, /*#__PURE__*/React.createElement("img", {
  src: "https://postfiles.pstatic.net/MjAyNTA3MjJfMjY0/MDAxNzUzMTc2NzU1NTUw.hAJetegdK6tt0r9Zi1QFwJ4EeqIBd26C-_2i4UdAPA0g.hMaWJtHtB359lNHHXIKuFwQK0SZ86OLwo4qqBCshY8Ig.PNG/%EB%B4%89%EC%82%AC_(1).png?type=w3840",
  alt: "\uFFFD\u013F\uFFFD \uFFFD\uFFFD \uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \u0230\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD",
  className: "w-full rounded-lg shadow-md mb-8 object-cover hover:opacity-80 transition-opacity",
  onError: e => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����";
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "grid md:grid-cols-2 gap-8 mb-8"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\u013F\uFFFD \uFFFD\u0233\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-black leading-relaxed mb-4"
}, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u013F\uFFFD, \uFFFD\u03FD\uFFFD \uFFFD\u013F\uFFFD \uFFFD\uFFFD \uFFFD\u067E\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05BD\uFFFD\uFFFD\u03F4\uFFFD. \uFFFD\u013F\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\u07BD\uFFFD, \uFFFD\uFFFD\u022D \xFC\uFFFD\uFFFD \u0230\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u02F4\u03F4\uFFFD."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4 mb-4"
}, /*#__PURE__*/React.createElement("li", null, "\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u013F\uFFFD: \uFFFD\u017F\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u077E\uFFFD\uFFFD\uFFFD \uFFFD\u06B5\uFFFD \uFFFD\uFFFD\xFC\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\u03FD\uFFFD \uFFFD\u013F\uFFFD: \uFFFD\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\xF1\u2FE1 \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u04F0\uFFFD \uFFFD\u013F\uFFFD\uFFFD\u03F4\uFFFD \uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\uFFFD\u01F0 \uFFFD\u013F\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\u043F\uFFFD\u01F0, \uFFFD\u01F7\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0335\u9FE1\uFFFD\uFFFD \uFFFD\u02BF\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u01F0 \uFFFD\u013F\uFFFD")), /*#__PURE__*/React.createElement("div", {
  className: "bg-blue-50 p-4 rounded-lg border border-blue-200"
}, /*#__PURE__*/React.createElement("p", {
  className: "font-bold text-blue-800 mb-2"
}, "\uFFFD\u013F\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-800"
}, "\uFFFD\uFFFD\uFFFD\uFFFD: IM\uFFFD\uFFFD\u0169(\uFFFD\uBC78\uFFFD\uFFFD\uFFFD\uFFFD)"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-800"
}, "\uFFFD\uFFFD\uFFFD\xB9\uFFFD\u0223: 033-10-004910"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-800"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("p", {
  className: "mt-4 text-gray-600 text-sm"
}, "* \uFFFD\u013F\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u04B5\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05BD\uFFFD\uFFFD\u03F4\uFFFD.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-semibold text-gray-800 mb-3"
}, "\uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0233\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-black leading-relaxed mb-4"
}, "\uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD \uFFFD\u0532\uFFFD \uFFFD\xF0\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u05BD\uFFFD \uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u06BA\u0435\uFFFD\uFFFD\uFFFD \u022F\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."), /*#__PURE__*/React.createElement("ul", {
  className: "list-disc list-inside text-black space-y-2 pl-4 mb-4"
}, /*#__PURE__*/React.createElement("li", null, "\uFFFD\u043D\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u043D\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\u01AF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\u033C\uFFFD, \uFFFD\uFFFD\uFFFD\uFFFD, \xFC\uFFFD\uFFFD, \uFFFD\uFFFD\u01FB\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\uFFFD\u022D \xFC\uFFFD\uFFFD \u0230\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD, \u0137\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\u022F\uFFFD\uFFFD \uFFFD\uFFFD\u022D \uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD \xFB\uFFFD\uFFFD \uFFFD\uFFFD \u022F\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("li", null, "\uFFFD\u07BD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\u0335\uFFFD \uFFFD\u013B\uFFFD \uFFFD\u063A\uFFFD \uFFFD\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD")), /*#__PURE__*/React.createElement("div", {
  className: "bg-amber-50 p-4 rounded-lg border border-amber-200"
}, /*#__PURE__*/React.createElement("p", {
  className: "font-bold text-amber-800 mb-2"
}, "\uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\xFB \uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-800"
}, "\uFFFD\uFFFD\u022D \uFFFD\u01F4\uFFFD \uFFFD\u0338\uFFFD\uFFFD\u03F7\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u6E6E \uFFFD\uFFFD\uFFFD"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-800"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD: \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD (053-256-3217)")), /*#__PURE__*/React.createElement("p", {
  className: "mt-4 text-gray-600 text-sm"
}, "* \uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\xF0\uFFFD\uFFFD\uFFFD VMS \uFFFD\u01F4\uFFFD 1365 \uFFFD\u06BF\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u043F\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0574\u03F4\uFFFD."))), /*#__PURE__*/React.createElement("div", {
  className: "mt-12 p-6 bg-blue-50 rounded-lg shadow-md text-center"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-2xl font-bold text-black mb-4"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u0571\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0678\uFFFD\uFFFD\u03F4\uFFFD!"), /*#__PURE__*/React.createElement("p", {
  className: "text-black leading-relaxed"
}, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u01B5\uFFFD\uFFFD\uFFFD\uFFFD\u0374\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\u013F\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uEFF5\uFFFD\u02F4\u03F4\uFFFD. \uFFFD\uFFFD\uFFFD\u0335\uFFFD\uFFFD\uFFFD \uFFFD\u01F0\uFFFD\uFFFD\u03F0\uFFFD \uFFFD\u0EB9\uFFFD\u03F0\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD \uFFFD\u05B5\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\u0270\uFFFD \uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\u0179\uFFFD\u5E33\uFFFD\u03F4\uFFFD.")));

// App ������Ʈ�� �⺻���� �������ϴ�.
export default App;