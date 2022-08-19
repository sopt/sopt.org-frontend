import TempImage from '@src/assets/images/Appjam.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import ProjectCard from '@src/components/Partners/Projects/ProjectCard';

import * as S from './Projects.style';

function Projects() {
  return (
    <S.Root>
      <UnderlinedTitle>PROJECT with SOPT</UnderlinedTitle>
      <S.Description>
        다양한 기업 및 단체에서 SOPT와 협력 프로젝트를 진행하고 있습니다.
      </S.Description>
      <S.ProjectWrap>
        <ProjectCard
          year={2022}
          imageSrc={TempImage}
          title={'KB D.N.A 프로젝트'}
          description={
            'KB금융그룹과 SOPT, 디지털 전문가 간 협업을\n' +
            '통해 KB금융그룹의 디지털 프로젝트에 대한\n' +
            '개선과제를 함께 발굴하고 이를 실행하기 위한\n' +
            '구체적인 아이디어를 도출하는 프로젝트 팀'
          }
          etc={'2018년부터 총 5회 진행'}
        />
        <ProjectCard
          year={2022}
          imageSrc={TempImage}
          title={'KB D.N.A 프로젝트'}
          description={
            'KB금융그룹과 SOPT, 디지털 전문가 간 협업을\n' +
            '통해 KB금융그룹의 디지털 프로젝트에 대한\n' +
            '개선과제를 함께 발굴하고 이를 실행하기 위한\n' +
            '구체적인 아이디어를 도출하는 프로젝트 팀'
          }
          etc={'2018년부터 총 5회 진행'}
        />
        <ProjectCard
          year={2022}
          imageSrc={TempImage}
          title={'KB D.N.A 프로젝트'}
          description={
            'KB금융그룹과 SOPT, 디지털 전문가 간 협업을\n' +
            '통해 KB금융그룹의 디지털 프로젝트에 대한\n' +
            '개선과제를 함께 발굴하고 이를 실행하기 위한\n' +
            '구체적인 아이디어를 도출하는 프로젝트 팀'
          }
          etc={'2018년부터 총 5회 진행'}
        />
        <ProjectCard
          year={2022}
          imageSrc={TempImage}
          title={'KB D.N.A 프로젝트'}
          description={
            'KB금융그룹과 SOPT, 디지털 전문가 간 협업을\n' +
            '통해 KB금융그룹의 디지털 프로젝트에 대한\n' +
            '개선과제를 함께 발굴하고 이를 실행하기 위한\n' +
            '구체적인 아이디어를 도출하는 프로젝트 팀'
          }
          etc={'2018년부터 총 5회 진행'}
        />
        <ProjectCard
          year={2022}
          imageSrc={TempImage}
          title={'KB D.N.A 프로젝트'}
          description={
            'KB금융그룹과 SOPT, 디지털 전문가 간 협업을\n' +
            '통해 KB금융그룹의 디지털 프로젝트에 대한\n' +
            '개선과제를 함께 발굴하고 이를 실행하기 위한\n' +
            '구체적인 아이디어를 도출하는 프로젝트 팀'
          }
          etc={'2018년부터 총 5회 진행'}
        />
        <ProjectCard
          year={2022}
          imageSrc={TempImage}
          title={'KB D.N.A 프로젝트'}
          description={
            'KB금융그룹과 SOPT, 디지털 전문가 간 협업을\n' +
            '통해 KB금융그룹의 디지털 프로젝트에 대한\n' +
            '개선과제를 함께 발굴하고 이를 실행하기 위한\n' +
            '구체적인 아이디어를 도출하는 프로젝트 팀'
          }
          etc={'2018년부터 총 5회 진행'}
        />
      </S.ProjectWrap>
    </S.Root>
  );
}

export default Projects;
