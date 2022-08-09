import { appjamProductInfo } from '@src/assets/replaceMe/statistics';
import { ABOUT_INFO_TYPE, AboutInfoType, PartInfos } from '@src/types';

export const ABOUT_INFO: Record<AboutInfoType, ABOUT_INFO_TYPE> = {
  SEMINAR: {
    description: '서로의 지식을 공유하는',
    title: 'SEMINAR',
    contents: `
    매주 토요일 세미나를 통해 기획, 디자인, 개발 분야에서 실력을 기릅니다.
    파트장의 강연을 듣고 수준별 과제를 수행하며 지식을 쌓고,
    파트원 간 지식 공유를 통해 주체적으로 학습하며 실력을 향상합니다.
    OB 초청 세션과 외부 연사 강연 등 특별 세미나까지 함께할 수 있습니다.
    `,
  },
  APPJAM: {
    description: '솝트 활동의 꽃, 장기 해커톤',
    title: 'APP JAM',
    contents: `솝트의 자랑. 2-3주동안 몰입하여 하나의 서비스를 만드는 장기 해커톤, 앱잼!
    기획/디자인/개발(안드로이드, iOS, 웹, 서버) 파트의 회원들이 팀을 이루어
    웹/앱 서비스를 제작합니다. 앱잼을 통해 IT창업을 위한 협업 과정을 체험하고,
    최종 데모데이에서는 다양한 사람들에게 결과물을 공유합니다.`,
  },
  SOPKATHON: {
    description: '대학생의 시선으로 주제를 해석하는 무박 2일 해커톤',
    title: 'SOPKATHON',
    contents: `16시간 동안 기획-디자인-개발을 경험하는 무박 2일 단기 해커톤, 솝커톤!
    각 팀은 주어진 주제를 자유롭게 해석하며 서비스를 제작합니다.
    솝트에서의 첫 팀 단위 협업을 경험하며 단기간에 성장할 수 있습니다.`,
  },
  STUDY_NETWORKUNG: {
    description: '다양한 사람들과 자유롭게 즐기는,',
    title: `STUDY&
    NETWORKING`,
    contents: `스터디와 네트워킹, 솝트에서 빠질 수 없는 재미!
    자율적으로 스터디에 참여해 실력을 더욱 탄탄히 하고, 다양한 행사를 통해
    활발하게 네트워킹하며 여러 파트의 솝트인들과 친목을 다질 수 있습니다.`,
  },
  SOPTTERM: {
    description: '수료 후에도 이어지는 열정!',
    title: `SOPT-TERM
    PROJECT`,
    contents: `한 기수 이상 수료하면 참여할 수 있는 솝텀 프로젝트!
    팀별로 자유롭게 프로젝트를 수행하며 실력을 더욱 탄탄하게 쌓습니다.`,
  },
  TEAM: {
    description: '서로의 지식을 공유하는',
    title: 'SEMINAR',
    contents: `매주 토요일 세미나를 통해 기획, 디자인, 개발 분야에서 실력을 기릅니다.
    파트장의 강연을 듣고 수준별 과제를 수행하며 지식을 쌓고,
    파트원 간 지식 공유를 통해 주체적으로 학습하며 실력을 향상합니다.
    OB 초청 세션과 외부 연사 강연 등 특별 세미나까지 함께할 수 있습니다.`,
  },
};

export const PART_INFO: PartInfos[] = [
  {
    title: '기획',
    contents: `고객 중심 사고를 바탕으로
  서비스 기획 일련의 과정을 배워
  실제 서비스를 기획합니다.`,
    delay: 300,
  },
  {
    title: '디자인',
    contents: `UX/UI 디자인 이론을 학습하며
    사용자 중심 사고를 기르고,
    개발 가능한 디자인을 구현합니다.`,
    delay: 600,
  },
  {
    title: '개발',
    contents: `모바일 앱과 웹 서비스 개발을 위한
    이론을 배우고 실습합니다.
    안드로이드/iOS/웹/서버 파트로 나뉩니다.`,
    delay: 900,
  },
];

export const APPJAM_INFO = {
  RELEASE: {
    KO: '스토어 릴리즈',
    EN: 'Release',
    COUNT: appjamProductInfo.RELEASE,
  },
  FOUNDATION: {
    KO: '창업',
    EN: 'Foundation',
    COUNT: appjamProductInfo.FOUNDATION,
  },
};

export const APPJAM_STEP = [
  { title: '기획 경선', isGradient: false, delay: 300 },
  {
    title: `기획/디자인
  파트 팀빌딩`,
    isGradient: false,
    delay: 500,
  },
  {
    title: `개발파트
  팀빌딩`,
    isGradient: false,
    delay: 700,
  },
  { title: '앱잼', isGradient: true, delay: 900 },
  { title: '데모데이', isGradient: true, delay: 1100 },
];
