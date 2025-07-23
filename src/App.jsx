import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Info, BookOpen, Image, Mail, HeartHandshake, Menu, X, Bell, Loader2, ExternalLink, Camera, MessageSquare } from 'lucide-react'; // Camera, MessageSquare ������ �߰�
import axios from 'axios';

// ���� App ������Ʈ
// �� ���� Tailwind CSS�� ����Ͽ� ����� �켱(mobile-first) ������ ���������� ����Ǿ����ϴ�.
// `md:`�� ���� ��ƿ��Ƽ Ŭ������ ���� �پ��� ȭ�� ũ�⿡ ���� ���̾ƿ��� �ڵ����� �����˴ϴ�.
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = (page) => {
        setCurrentPage(page);
        setIsMobileMenuOpen(false); // ������ �̵� �� ����� �޴� �ݱ�
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'about':
                return <AboutPage />;
            case 'programs':
                return <ProgramsPage />;
            case 'gallery':
                return <GalleryPage />;
            case 'announcements': // ���ο� �������� ������ �߰�
                return <AnnouncementsPage />;
            case 'contact':
                return <ContactPage />;
            case 'support':
                return <SupportPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-black flex flex-col">
            {/* Google Fonts - Noto Sans KR ����Ʈ �� ���� */}
            {/* ������ ������Ʈ���� �ַ� ����ϴ� ������ ���� ����ü�� 'Noto Sans KR'�� �����մϴ�. */}
            <style>
                {`
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
        `}
            </style>

            {/* ��� �� �׺���̼� */}
            <header className="bg-white shadow-md p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* �ΰ�� ���� �̸��� Ŭ���ϸ� Ȩ���� �̵��մϴ�. */}
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => navigate('home')}
                    >
                        <img src="https://ion.or.kr/common/do/thumbnail?index=499994" alt="���������Ƶ����� �ΰ�" className="rounded-full" />
                        {/* '����'�� �ʷϻ�, '�����Ƶ�����'�� ���������� ���� */}
                        <h1 className="text-2xl font-bold">
                            <span className="text-green-600">����</span>
                            <span className="text-black">�����Ƶ�����</span>
                        </h1>
                    </div>

                    {/* ����ũ�� �׺���̼�: 'Ȩ' ������ ���� �� ������ ũ�� ���� */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        <NavItem icon={<Info size={30} />} text="���� �Ұ�" onClick={() => navigate('about')} isActive={currentPage === 'about'} />
                        <NavItem icon={<BookOpen size={30} />} text="�ֿ� ���" onClick={() => navigate('programs')} isActive={currentPage === 'programs'} />
                        <NavItem icon={<Image size={30} />} text="������" onClick={() => navigate('gallery')} isActive={currentPage === 'gallery'} />
                        <NavItem icon={<Bell size={30} />} text="��������" onClick={() => navigate('announcements')} isActive={currentPage === 'announcements'} />
                        <NavItem icon={<Mail size={30} />} text="���ô� ��" onClick={() => navigate('contact')} isActive={currentPage === 'contact'} />
                        <NavItem icon={<HeartHandshake size={30} />} text="�Ŀ�/�ڿ�����" onClick={() => navigate('support')} isActive={currentPage === 'support'} />
                    </nav>

                    {/* ����� �޴� ��ư: `md:hidden`�� ����Ͽ� �߰�(md) ȭ�� �̻󿡼��� ����� ����Ͽ����� ǥ�õ˴ϴ�. */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* ����� �׺���̼� (���): 'Ȩ' ������ ���� */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-inner">
                        <NavItem icon={<Info size={20} />} text="���� �Ұ�" onClick={() => navigate('about')} isActive={currentPage === 'about'} isMobile />
                        <NavItem icon={<BookOpen size={20} />} text="�ֿ� ���" onClick={() => navigate('programs')} isActive={currentPage === 'programs'} isMobile />
                        <NavItem icon={<Image size={20} />} text="������" onClick={() => navigate('gallery')} isActive={currentPage === 'gallery'} isMobile />
                        <NavItem icon={<Bell size={20} />} text="��������" onClick={() => navigate('announcements')} isActive={currentPage === 'announcements'} isMobile />
                        <NavItem icon={<Mail size={20} />} text="���ô� ��" onClick={() => navigate('contact')} isActive={currentPage === 'contact'} isMobile />
                        <NavItem icon={<HeartHandshake size={20} />} text="�Ŀ�/�ڿ�����" onClick={() => navigate('support')} isActive={currentPage === 'support'} isMobile />
                    </nav>
                )}
            </header>

            {/* ���� ������ ����: `container mx-auto p-4 md:p-8`�� ����Ͽ� �е��� �ִ� �ʺ� �����Ͽ� ���������� ����ϴ�. */}
            <main className="flex-grow container mx-auto p-4 md:p-8">
                {renderPage()}
            </main>

            {/* Ǫ�� */}
            <footer className="bg-gray-800 text-white p-6 text-center text-sm">
                <div className="container mx-auto">
                    {/* ��ǥ �̸� �� �ּ� ������Ʈ */}
                    <p>���������Ƶ����� | ��ǥ: ������ | �ּ�: �뱸������ ���� �۶�� 36, 2�� | ��ȭ: 053-256-3217</p>
                    <p>�̸���: jcecbw@hanmail.net | ����ڵ�Ϲ�ȣ: 502-80-12722</p>
                    <p className="mt-2">&copy; 2025 ���������Ƶ�����. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

// �׺���̼� ������ ������Ʈ
const NavItem = ({ icon, text, onClick, isActive, isMobile = false }) => (
    <button
        onClick={onClick}
        // ����ϰ� ����ũž�� ���̾ƿ��� �ٸ��� �����մϴ�.
        className={`flex ${isMobile ? 'flex-row items-center space-x-2 w-full justify-start' : 'flex-col items-center space-y-1'} p-2 rounded-md transition-colors duration-200
        ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}
      `}
    >
        {icon}
        {/* [�ڵ� ���� �� �ּ� �߰�]
        ����ũ��� ����� ȭ�鿡 ���� ���� ũ�⸦ �ٸ��� �����Ͽ� ����ȭ�մϴ�.
        - ����ũ�� (isMobile=false): 'text-sm'���� �����Ͽ� �����ܰ� ��ȭ�� �̷�鼭 �������� �������ϴ�.
        - ����� (isMobile=true): 'text-base'�� �����Ͽ� ��ġ ���Ǽ��� ���� ȭ�鿡���� �������� Ȯ���߽��ϴ�.
      */}
        <span className={`font-medium ${isActive ? 'font-bold' : ''} ${isMobile ? 'text-base' : 'text-sm'}`}>{text}</span>
    </button>
);

// �� ������ ������Ʈ ����

// Ȩ ������
const HomePage = () => (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg text-center animate-fade-in">
        <h2 className="text-4xl font-extrabold text-black mb-4">
            ���������Ƶ����Ϳ� ���� ���� ȯ���մϴ�!
        </h2>
        <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto mb-8">
            ���������Ƶ����ʹ� �Ƶ��� �ǰ��� ����� �ߴ��� �����ϰ�, ������ȸ�� �Բ� ���̵��� ���� �̷��� ������ �����Դϴ�.
            ����� �������� ���̵��� ���� Ű�������ϴ�.
        </p>
        <img
            src="https://www.ion.or.kr/common/do/load?index=285758" // Ȩȭ�� �̹��� �ֱ�
            alt="���̵��� �Բ� ���� ���"
            className="w-full rounded-lg shadow-md mb-8 object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
        />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
            <FeatureCard
                icon={<HomeIcon size={40} className="text-blue-500" />}
                title="������ ��ȣ"
                description="���̵��� �Ƚ��ϰ� ��Ȱ�� �� �ִ� �����ϰ� ������ ȯ���� �����մϴ�."
            />
            <FeatureCard
                icon={<BookOpen size={40} className="text-blue-500" />}
                title="���� ���� ����"
                description="����, ��ȭ, ���� ������ ���� ���̵��� ������ ������ �����ϴ�."
            />
            <FeatureCard
                icon={<HeartHandshake size={40} className="text-blue-500" />}
                title="������ȸ ����"
                description="������ȸ �ڿ��� �����Ͽ� ���̵鿡�� �پ��� ��ȸ�� �����մϴ�."
            />
        </div>
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black mb-4">������ ����</h3>
            <p className="text-black leading-relaxed">
                ���������Ƶ����ʹ� ��� ���̵��� ���߹ް� ���������, �ڽ��� ������� �ִ��� ������ �� �ִ� �ູ�� ������ �޲ߴϴ�.
                ���̵��� �ǰ��� ��ȸ ���������� ������ �� �ֵ��� ����� �������� �ǰڽ��ϴ�.
            </p>
        </div>
    </section>
);

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

// ���� �Ұ� ������
const AboutPage = () => (
    <section className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2">���� �Ұ�</h2>

        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">���������Ƶ����ʹ�?</h3>
            <p className="text-black leading-relaxed">
                ���������Ƶ����ʹ� ��� �� ������ �ʿ��� �Ƶ����� ���� ������ ��ȣ, ����, ������ ���� �� ��ȭ Ȱ��, �׸��� ������ ������ �����ϴ� �Ƶ������ü��Դϴ�.
                ������ȸ �� �Ƶ����� �ǰ��� ����� �ߴ��� ����, ������ ���� �δ��� �氨�ϸ�, �Ƶ����� �ູ�� ȯ�濡�� �̷��� ���� Ű�� �� �ֵ��� �����ϰ� �ֽ��ϴ�.
                ���� ���ʹ� ���̵��� ���߹ް� ����޴� ������ �� �� �ֵ��� �ּ��� ���ϰ� �ֽ��ϴ�.
            </p>
        </div>

        <img
            src="https://postfiles.pstatic.net/MjAyNTA3MjFfMjQ4/MDAxNzUzMDgxMTkzNjg0.0vMfK_h9o2n_Yn__OU8IiXBDe62MqKX7GmiLxy_e-_wg.qcYcdgDDh7NX-tpb_2hNRthdzdVfr9pY71BgOQx-K8Ag.PNG/image01_(1).png?type=w773"
            alt="���̵��� �Բ� Ȱ���ϴ� ���� ���� ���"
            className="w-full rounded-lg shadow-md mb-8 object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
        />

        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">���� ����</h3>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
                <li>�Ƶ��� ������ �ߴ��� ���� ������ ��ȣ �� ���� ȯ�� ����</li>
                <li>�Ƶ��� ����� ���� �� ���� Ư���� ����� ������ ���α׷� �</li>
                <li>������ȸ �ڿ� ���踦 ���� �Ƶ� ���� ���� �� ���� ��� ��ȭ</li>
                <li>�Ƶ��� �Ǹ� ���� �� �Ƶ� �߽��� ���� ����</li>
                <li>�Ƶ����� �̷� ��ȸ�� �ǰ��� ���������� �����ϵ��� ����</li>
            </ul>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">���� ����</h3>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
                <li>2010�� 03��: ���������Ƶ����� ���� �ΰ�</li>
                <li>2012�� 07��: ��1ȸ ���� �޳��� ��ǥȸ ����</li>
                <li>2015�� 11��: ȯ�� ���� ��� �Ϸ� (���̽�, �н��� ���𵨸�)</li>
                <li>2018�� 05��: ������ȸ ���� ���α׷� '���ٰ� �Բ��ϴ� ��ȭ Ž��' ����</li>
                <li>2020�� 03��: ���� 10�ֳ� ��� ��� ����</li>
                <li>2023�� 09��: �Ƶ� �ɸ� ��� ���α׷� ����</li>
            </ul>
        </div>

        <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">���� �Ұ�</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StaffCard
                    name="������ ������"
                    role="������"
                    description="���̵��� �ູ�� �ֿ켱���� �����ϸ�, ���� � ������ �Ѱ��մϴ�."
                    imgSrc="https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ4.z5NaR6HqCHh-IbWV5IJz-NkUCrx-xfkwtNRuGecE2REg.-y_va7sNMMn-jXFwuxppObMYIuLCywuTXGlO51p06mQg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EB%82%A8%EC%9E%90).png?type=w3840"
                />
                <StaffCard
                    name="������ ��ȸ������"
                    role="��ȸ������"
                    description="�Ƶ� ���� ��� �� ���α׷� ��ȹ, ������ȸ ���� ������ ����մϴ�."
                    imgSrc="https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ2.1SF9Z9CEv46lZHxhshapACdnFvPDIAdS-ys3bhj4LCMg.y2IytYdmebWFC0R4EjDW-bWR3GicAKP1qpCUIr9btgIg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EC%97%AC%EC%9E%90).png?type=w3840"
                />
                <StaffCard
                    name="��� ��ȸ������"
                    role="��ȸ������"
                    description="���̵��� �ϻ��Ȱ ���� �� �н� ������ ����մϴ�."
                    imgSrc="https://postfiles.pstatic.net/MjAyNTA3MjNfMjMg/MDAxNzUzMjQ5ODAxMTQ2.1SF9Z9CEv46lZHxhshapACdnFvPDIAdS-ys3bhj4LCMg.y2IytYdmebWFC0R4EjDW-bWR3GicAKP1qpCUIr9btgIg.PNG/%EC%95%84%EC%9D%B4%EC%BD%98(%EC%97%AC%EC%9E%90).png?type=w3840"
                />
            </div>
        </div>
    </section>
);

const StaffCard = ({ name, role, description, imgSrc }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center space-x-4">
        <img
            src={imgSrc}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-300"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/CCCCCC/000000?text=����+����"; }}
        />
        <div>
            <h4 className="text-xl font-bold text-gray-900">{name}</h4>
            <p className="text-blue-600 text-sm mb-1">{role}</p>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

// �ֿ� ��� ������
const ProgramsPage = () => (
    <section className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2">�ֿ� ���</h2>
        <p className="text-black mb-8 leading-relaxed">
            ���������Ƶ����ʹ� �Ƶ��� �ǰ��� ����� �ߴ��� ���� 5���� �ٽ� ������ �߽����� �پ��� ���α׷��� ��մϴ�.
            ���̵��� �ູ�ϰ� �����ϰ� ������ �� �ֵ��� ü������ ������ �����մϴ�.
        </p>

        <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center space-x-2">
                <HomeIcon size={28} className="text-blue-600" />
                <span>1. ��ȣ</span>
            </h3>
            <p className="text-black mb-4">
                ���̵��� ��� �� �����ϰ� ��Ȱ�ϰ�, �⺻���� �屸�� ������ �� �ֵ��� ��ȣ�մϴ�.
            </p>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
                <li><strong>������ ��Ȱ ���� ����:</strong> �����ϰ� ������ ���� ȯ�� ���� �� ����</li>
                <li><strong>�޽� ����:</strong> ���簡 �ִ� ���� �Ļ� �� ���� ���� (�Ĵ�ǥ �)</li>
                <li><strong>���� �� �ǰ� ����:</strong> �������� ����, �ǰ� ���� Ȯ�� �� ����óġ</li>
                <li><strong>�Ͱ� ����:</strong> ������ �Ͱ��� ���� ���� �� ��ȣ�� ����</li>
            </ul>
            <img
                src="https://postfiles.pstatic.net/MjAyNTA3MjFfMTk1/MDAxNzUzMDgzMjU3MDg2.afZJ8c_1brnucnYVsqwOfffhGp3Ft3HXsp8P4AItJ64g.ZU79MGI09KVtMHpXA9lnyQnR5FEfSHJfbVFdpcXEdNcg.JPEG/123123123123).jpg?type=w773"
                alt="���̵��� ���Ϳ��� �����ϰ� ���� ���"
                className="w-full rounded-lg shadow-md mt-6 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
            />
        </div>

        <div className="mb-10 p-6 bg-amber-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4 flex items-center space-x-2">
                <HeartHandshake size={28} className="text-amber-600" />
                <span>2. ��������</span>
            </h3>
            <p className="text-black mb-4">
                ���̵��� �ǰ��� ���� �ߴ��� ����, �ɸ��� �������� �����Ͽ� �ູ�ϰ� ������ �� �ֵ��� �����մϴ�.
            </p>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
                <li><strong>���� �� ���� ���:</strong> �Ƶ��� ��� ��û �� ������ ����, �Ƿ� ���� ����</li>
                <li><strong>�̼�/����/���� ġ��:</strong> ���� Ȱ���� ���� ���� ǥ�� �� ġ��</li>
                <li><strong>������ ��� ���α׷�:</strong> ������ �ھ� ���� ���� �� �ڽŰ� ���� Ȱ��</li>
                <li><strong>��Ʈ���� ����:</strong> ����, �޽� ���� ���� ��Ʈ���� �ؼ�</li>
            </ul>
            <img
                src="https://postfiles.pstatic.net/MjAyNTA3MjFfMjU4/MDAxNzUzMDg0OTk0Nzgy.DF6V_pl2K-ILd-wMhgbGz-YGlGpmtJPzx3SLijy6EwYg.HSTSMtyDk3P2cqKCJ1_7H8W5PW8XWBNs37aYTErbjOcg.JPEG/KakaoTalk_20250721_170100531.jpg?type=w773"
                alt="���̵��� ��� �Ǵ� ġ�� Ȱ���� �����ϴ� ���"
                className="w-full rounded-lg shadow-md mt-6 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
            />
        </div>

        <div className="mb-10 p-6 bg-purple-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center space-x-2">
                <Image size={28} className="text-purple-600" />
                <span>3. ��ȭü��</span>
            </h3>
            <p className="text-black mb-4">
                �پ��� ��ȭ Ȱ���� ���� ���̵��� �߹��� ������, ǳ���� �������� �Ծ��ϵ��� �����ϴ�.
            </p>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
                <li><strong>��ȭ/����/������ ����:</strong> �پ��� ���� ������ ���� ��ȭ�� ����</li>
                <li><strong>�ڹ���/�̼���/���а� ����:</strong> �н��� ����� ü�� Ȱ��</li>
                <li><strong>������ ������ �� ķ��:</strong> �ڿ� �ӿ��� ��ſ� �߾� ����� �� ������ ����</li>
                <li><strong>�丮 Ȱ��:</strong> ���� ������ ����� ���� �ߴ� �� ���밨 ����</li>
            </ul>
            <img
                src="https://postfiles.pstatic.net/MjAyNTA3MjNfMTc3/MDAxNzUzMjUxNzQ3MTE2.cQbV7hzcaZOWAWGcKPXpf-yjQdqqYEGc9YAYpAswnJ0g.OdH6n8SZRK-831F2fg-cgpli4T2CHctQ5qNyMYtbdW8g.JPEG/%EB%8C%80%EC%99%B8%ED%99%9C%EB%8F%99_(1).jpg?type=w773"
                alt="���̵��� ��ȭ ü�� Ȱ���� �����ϴ� ���"
                className="w-full rounded-lg shadow-md mt-6 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
            />
        </div>

        <div className="mb-10 p-6 bg-stone-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center space-x-2">
                <BookOpen size={28} className="text-stone-600" />
                <span>4. ����</span>
            </h3>
            <p className="text-black mb-4">
                ���̵��� �о� ���뵵 ���� �ڱ� �ֵ� �н� �ɷ� ��ȭ�� ���� ������ ������ �����մϴ�.
            </p>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
                <li><strong>���� ������ �н� ����:</strong> ����, ����, ���� �� �ֿ� ���� �н� ����</li>
                <li><strong>���� ���� �� ���� �н�:</strong> �б� ���� ���� �� ������ �κ� ����</li>
                <li><strong>���� ���� �� ��� ����:</strong> ���� ���� ���� �� ����, ǥ���� ����</li>
                <li><strong>Ư������ ����:</strong> �̼�, ����, ü��, ��ǻ�� �� ��ü�� �� ����ȭ ����</li>
            </ul>
            <img
                src="https://postfiles.pstatic.net/MjAyNTA3MjNfMjY2/MDAxNzUzMjUyODMwODc2.5AKT9mUjGTskRsr6tG3JYYJEU9qqdhRbPnTRo9pghjYg._kY4wgadyhhKLL-bmRWQDJEOewv3boqJHNXtOMX3qwkg.JPEG/%EA%B3%B5%EB%B6%80_(1).jpg?type=w3840"
                alt="���̵��� �н� Ȱ���� �����ϴ� ���"
                className="w-full rounded-lg shadow-md mt-6 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
            />
        </div>

        <div className="mb-10 p-6 bg-red-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-red-800 mb-4 flex items-center space-x-2">
                <Info size={28} className="text-red-600" />
                <span>5. ��������</span>
            </h3>
            <p className="text-black mb-4">
                ������ȸ �ڿ��� ���������� Ȱ���ϰ� �����Ͽ� ���̵鿡�� ���� ǳ���� ��ȸ�� �����ϰ�, ������ȸ�� �Բ� �����մϴ�.
            </p>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
                <li><strong>�ڿ������� ����:</strong> �н� ����, Ư�� ���� ���� �� �ڿ������� Ȱ��</li>
                <li><strong>������ȸ ��� ����:</strong> ������, ������, ���Ǽ� ��� ���� ���α׷� �</li>
                <li><strong>ķ���� �� ȫ�� Ȱ��:</strong> �Ƶ� �Ǹ� ���� �� ������ȸ �ν� ���� ���</li>
                <li><strong>�Ŀ��� ���� �� ����:</strong> ���̵��� ���� �������� �Ŀ� ��ġ �� ����</li>
            </ul>
            <img
                src="https://postfiles.pstatic.net/MjAyNTA3MjJfMjU3/MDAxNzUzMTYzODc5NzIw.cIY_wCP8KaiZ3lJicn_xHBjgHqXahQuZEkC5QV_DTjog.Dmur5rBLNdwAV6zwrrdvqFfbtqE4M_v-9BirS1RQ7fQg.JPEG/%EB%8C%80%EC%99%B8%ED%99%9C%EB%8F%993.jpg?type=w773"
                alt="���Ϳ� ������ȸ ����� �����ϴ� ���"
                className="w-full rounded-lg shadow-md mt-6 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
            />
        </div>
    </section>
);

// ������ ������
const GalleryPage = () => {
    return (
        <section className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2 text-center">
                ���� ������
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GalleryLinkBox
                    href="https://ion.or.kr/solip/community/photo/list/1"
                    icon={<Camera size={48} className="text-blue-500" />}
                    title="��ü ������ ����"
                    description="���������Ƶ����� ���̵��� ��ſ� Ȱ�� ����� Ȯ���غ�����!"
                    bgColor="bg-blue-50"
                    borderColor="border-blue-200"
                />

                <GalleryLinkBox
                    href="https://pf.kakao.com/_xbxlyUxb/posts"
                    icon={<MessageSquare size={48} className="text-yellow-500" />}
                    title="īī���� ä�� �ҽ�"
                    description="īī���� ä�ο��� �� ���� �ֽ� �ҽ��� ����������."
                    bgColor="bg-yellow-50"
                    borderColor="border-yellow-200"
                />
            </div>
        </section>
    );
};

// ������ ��ũ �ڽ� ������Ʈ
const GalleryLinkBox = ({ href, icon, title, description, bgColor, borderColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border ${borderColor} ${bgColor}`}
    >
        <div className="flex justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {title}
        </h3>
        <p className="text-black leading-relaxed">
            {description}
        </p>
        <div className="mt-6">
            <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-semibold text-blue-600 border-2 border-blue-200 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                �ٷΰ��� <ExternalLink size={16} className="ml-2" />
            </span>
        </div>
    </a>
);


// �������� ������ ������Ʈ (��ũ �ڽ� ���·� ����)
const AnnouncementsPage = () => {
    return (
        <section className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2 text-center">
                ���� ��������
            </h2>

            <div className="flex justify-center items-center mt-8">
                <GalleryLinkBox
                    href="https://ion.or.kr/solip/community/notice/list/1"
                    icon={<Bell size={48} className="text-green-500" />}
                    title="���������Ƶ������� �ֿ� ��� �� �ҽ�"
                    description="������ �ֽ� ���������� Ȯ���Ͻ÷��� '�ٷΰ���'�� Ŭ�����ּ���."
                    bgColor="bg-green-50"
                    borderColor="border-green-200"
                />
            </div>
        </section>
    );
};


// ���ô� �� ������
const ContactPage = () => (
    <section className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2">���ô� ��</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">����ó ����</h3>
                <ul className="text-black space-y-3">
                    <li className="flex items-start space-x-2">
                        <HomeIcon size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>�ּ�: �뱸������ ���� �۶�� 36, 2��<br />(��) 41259 (����) ��õ�� 178-1</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Mail size={20} className="text-blue-600" />
                        <span>�̸���: jcecbw@hanmail.net</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Info size={20} className="text-blue-600" />
                        <span>��ȭ: 053-256-3217</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <BookOpen size={20} className="text-blue-600" />
                        <span>�ѽ�: 053-256-3218</span>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">� �ð�</h3>
                <ul className="text-black space-y-3">
                    <li>������ - �ݿ���:</li>
                    <ul className="list-disc list-inside ml-4">
                        <li>�б� ��: 10:00 ~ 21:00</li>
                        <li>���� ��: 09:00 ~ 19:00</li>
                    </ul>
                    <li>�����: ��ü ���� �</li>
                    <li>�Ͽ���, ������: �޹�</li>
                </ul>
            </div>
        </div>

        <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">ã�ƿ��ô� �� (�൵)</h3>
            <p className="text-black mb-4">
                �뱸������ ���� �۶�� 36, 2���� ��ġ�ϰ� �ֽ��ϴ�.
                ���߱��� �̿� ��, ����ö 1ȣ�� <span className="font-semibold text-blue-700">��õ�� 5�� �ⱸ</span>�� ���ͼ� <span className="font-semibold text-blue-700">��õ�ʵ��б� ��</span>���� ���ø� �˴ϴ�.
            </p>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
                <iframe
                    src="https://map.kakao.com/?urlX=865779.0000000601&urlY=662241.9999999984&urlLevel=3&itemId=12009276&q=%EC%86%94%EC%9E%8E%EC%A7%80%EC%97%AD%EC%95%84%EB%8F%99%EC%84%BC%ED%84%B0&srcid=12009276&map_type=TYPE_MAP"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="���������Ƶ����� ��ġ �൵"
                ></iframe>
            </div>
            <p className="mt-4 text-gray-600 text-sm text-center">
                * ������ ������ �ֺ��� Ȯ���ϰų� Ȯ��/����� �� �ֽ��ϴ�.
            </p>
        </div>
    </section>
);

// �Ŀ�/�ڿ����� ������
const SupportPage = () => (
    <section className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-black mb-4 border-b-2 border-blue-200 pb-2">�Ŀ� �� �ڿ�����</h2>
        <p className="text-black mb-8 leading-relaxed">
            ���������Ƶ����ʹ� ���̵��� ���� �̷��� ���� ������ ������ �������ֽ� �������� �Ŀ��� �ڿ����縦 ��ٸ��ϴ�.
            ���� ������ ���̵鿡�Դ� ū ����� �˴ϴ�.
        </p>

        <a href="https://www.1365.go.kr/vols/main.do" target="_blank" rel="noopener noreferrer">
            <img
                src="https://postfiles.pstatic.net/MjAyNTA3MjJfMjY0/MDAxNzUzMTc2NzU1NTUw.hAJetegdK6tt0r9Zi1QFwJ4EeqIBd26C-_2i4UdAPA0g.hMaWJtHtB359lNHHXIKuFwQK0SZ86OLwo4qqBCshY8Ig.PNG/%EB%B4%89%EC%82%AC_(1).png?type=w3840"
                alt="�Ŀ� �� �ڿ����� Ȱ�� ���"
                className="w-full rounded-lg shadow-md mb-8 object-cover hover:opacity-80 transition-opacity"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/CCCCCC/000000?text=�̹���+����"; }}
            />
        </a>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">�Ŀ� �ȳ�</h3>
                <p className="text-black leading-relaxed mb-4">
                    ���� �Ŀ�, �Ͻ� �Ŀ� �� �پ��� ������� ���̵��� ���� �� �ֽ��ϴ�.
                    �Ŀ����� ���̵��� ����, �޽�, ��ȭ ü�� Ȱ�� �� ���� ���̵��� ���� ���˴ϴ�.
                </p>
                <ul className="list-disc list-inside text-black space-y-2 pl-4 mb-4">
                    <li>���� �Ŀ�: �ſ� ���� �ݾ��� �ڵ� ��ü�ϴ� ���</li>
                    <li>�Ͻ� �Ŀ�: ���ϴ� �ñ⿡ �����Ӱ� �Ŀ��ϴ� ���</li>
                    <li>��ǰ �Ŀ�: ����, �п�ǰ, �Ƿ�, ���� �� ���̵鿡�� �ʿ��� ��ǰ �Ŀ�</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-bold text-blue-800 mb-2">�Ŀ� ���� ����</p>
                    <p className="text-gray-800">����: IM��ũ(�뱸����)</p>
                    <p className="text-gray-800">���¹�ȣ: 033-10-004910</p>
                    <p className="text-gray-800">������: ���������Ƶ�����</p>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                    * �Ŀ����� �������� �� �ҵ���� ������ ������ �� �ֽ��ϴ�.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">�ڿ����� �ȳ�</h3>
                <p className="text-black leading-relaxed mb-4">
                    ���̵�� �Բ� �ð��� ������ ����� �������ֽ� �ڿ������ںе��� ȯ���մϴ�.
                </p>
                <ul className="list-disc list-inside text-black space-y-2 pl-4 mb-4">
                    <li>�н� ���� ����: ����, ����, ���� �� ������ �н� ����</li>
                    <li>Ư������ ���� ����: �̼�, ����, ü��, ��ǻ�� �� ��� ���</li>
                    <li>��ȭ ü�� Ȱ�� ����: ������, ķ�� �� ��� ����</li>
                    <li>ȯ�� ��ȭ ����: ���� û�� �� ȯ�� ����</li>
                    <li>�޽� ����: ���̵� �Ļ� �غ� �� ��� ����</li>
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <p className="font-bold text-amber-800 mb-2">�ڿ����� ��û ���</p>
                    <p className="text-gray-800">��ȭ �Ǵ� �̸��Ϸ� ���� �� �湮 ���</p>
                    <p className="text-gray-800">�����: ������ ������ (053-256-3217)</p>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                    * �ڿ����� �ð��� VMS �Ǵ� 1365 �ڿ����� ���п� ��� �����մϴ�.
                </p>
            </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-black mb-4">�������� ������ �ձ��� ��ٸ��ϴ�!</h3>
            <p className="text-black leading-relaxed">
                ���������Ƶ����ʹ� �������� ������ �Ŀ��� ����� ��˴ϴ�.
                ���̵��� �ǰ��ϰ� �ູ�ϰ� ������ �� �ֵ��� ���� ���ɰ� ��� ��Ź�帳�ϴ�.
            </p>
        </div>
    </section>
);

// App ������Ʈ�� �⺻���� �������ϴ�.
export default App;