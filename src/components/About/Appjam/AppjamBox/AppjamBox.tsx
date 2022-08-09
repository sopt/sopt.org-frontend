import AppStoreBtn from '@src/assets/icons/apple_appstore.svg';
import GooglePlayStoreBtn from '@src/assets/icons/google_playstore.svg';
import DotImg from '@src/assets/images/DotImg.svg';
import { APPJAM_INFO } from '@src/constants/about';
import Image from 'next/image';
import React from 'react';

import * as S from './AppjamBox.style';

function AppjamBox() {
  return (
    <S.AppjamBox>
      <S.AppjamInfoWrapper>
        <h2>{APPJAM_INFO.RELEASE.EN}</h2>
        <DotImg alt="dot" />
        <h2>{APPJAM_INFO.RELEASE.KO}</h2>
        <h2>{APPJAM_INFO.RELEASE.COUNT}</h2>
        <h2>팀</h2>
      </S.AppjamInfoWrapper>
      <S.DownloadBtnWrapper>
        <GooglePlayStoreBtn alt="구글 플레이스토어" role="button" tabIndex={0} />
        <AppStoreBtn alt="앱스토어" role="button" tabIndex={0} />
      </S.DownloadBtnWrapper>
      <S.AppjamInfoWrapper>
        <h2>{APPJAM_INFO.FOUNDATION.EN}</h2>
        <DotImg alt="dot" />
        <h2>{APPJAM_INFO.FOUNDATION.KO}</h2>
        <h2>{APPJAM_INFO.FOUNDATION.COUNT}</h2>
        <h2>팀</h2>
      </S.AppjamInfoWrapper>
    </S.AppjamBox>
  );
}

export default AppjamBox;
