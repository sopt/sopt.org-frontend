import { EventDetailNumbers } from '@src/types/EventDetailNumbers';

/* 앱잼에 관한 통계를 적어주세요. number만 바꾸면 됩니다. */
export const appjamInfo: EventDetailNumbers[] = [
  { order: 1, title: '협업 기간', number: 3, unit: '주' },
  { order: 2, title: '진행 횟수', number: 20, unit: '회' },
  { order: 3, title: '서비스 개수', number: 250, unit: '개+' },
];

/* 앱잼 릴리즈, 창업에 대한 통계를 적어주세요. 숫자만 바꾸면 됩니다.*/
export const appjamProductInfo = {
  RELEASE: 30,
  FOUNDATION: 8,
};

/* 솝커톤에 관한 통계를 적어주세요. number만 바꾸면 됩니다. */
export const sopkathonInfo: EventDetailNumbers[] = [
  { order: 1, title: '협업 기간', number: 16, unit: '시간' },
  { order: 2, title: '진행 횟수', number: 7, unit: '회' },
  { order: 3, title: '서비스 개수', number: 80, unit: '개+' },
];

/* 솝텀에 관한 통계를 적어주세요. number만 바꾸면 됩니다. */
export const soptTermInfo: EventDetailNumbers[] = [
  { order: 1, title: '협업 기간', number: 8, unit: '주' },
  { order: 2, title: '진행 횟수', number: 4, unit: '회' },
  { order: 3, title: '서비스 개수', number: 20, unit: '개+' },
];
