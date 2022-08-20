import Image from 'next/image';

import * as S from './ProjectCard.style';

interface ProjectCardProps {
  year: number;
  imageSrc: string;
  title: string;
  description: string;
  etc: string;
}

function ProjectCard({ year, imageSrc, title, description, etc }: ProjectCardProps) {
  return (
    <S.Root>
      <S.Year>{year}</S.Year>
      <S.ImageWrap>
        <Image
          layout="fill"
          src={imageSrc}
          alt="협업 프로젝트 사진"
          blurDataURL={imageSrc}
          placeholder="blur"
        />
      </S.ImageWrap>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Etc>{etc}</S.Etc>
    </S.Root>
  );
}

export default ProjectCard;
