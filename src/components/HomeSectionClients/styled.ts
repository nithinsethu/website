import { colors, gridSize, sizes } from '../../styles/variables';

import appsmithUrl from './appsmith.svg';
import bairavaMotorsUrl from './bairava-motors.png';
import castorUrl from './castor.svg';
import elElyonUrl from './el-elyon.png';
import finderUrl from './finder.svg';
import framerUrl from './framer.svg';
import googleUrl from './google.svg';
import hugoUrl from './hugo.svg';
import media from '../../styles/media';
import styled from 'styled-components';

export const CasesItemsContainer = styled.div`
  display: grid;
  gap: ${6 * gridSize}px ${9 * gridSize}px;

  /* Keep the font size consistent across desktop and mobile */
  --homepage-font-size-regular: ${sizes.fontDefault}px;
  --homepage-font-size-small: ${sizes.fontSmall}px;
  font-size: var(--homepage-font-size-regular);

  ${media.small`
    grid-template-columns: 1fr;
  `}

  ${media.notSmall`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Content = styled.div``;

export const LogoText = styled.div`
  margin-bottom: ${sizes.paragraphSpacing}px;
  font-size: var(--homepage-font-size-small);
`;

const Logo = styled.img`
  display: block;
  margin: 0 0 12px;
  height: 48px;

  ${media.notSmall`
    margin-top: 10px;
  `};
`;

export const TagContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
`;

export const Tag = styled.div`
  flex: none;
  background: ${colors.brightYellow};
  padding: 2px 8px;
  border-radius: 2px;
`;

export const Mark = styled.mark`
  background: ${colors.softYellow};
`;

export const GoogleLogo = styled(Logo).attrs({
  src: googleUrl,
})`
  margin-bottom: 4px;
`;

export const CastorLogo = styled(Logo).attrs({
  src: castorUrl,
})``;

export const AppsmithLogo = styled(Logo).attrs({
  src: appsmithUrl,
})``;

export const HugoLogo = styled(Logo).attrs({
  src: hugoUrl,
})``;

export const FramerLogo = styled(Logo).attrs({
  src: framerUrl,
})``;

export const FinderLogo = styled(Logo).attrs({
  src: finderUrl,
})``;
export const ElElyonLogo = styled(Logo).attrs({
  src: elElyonUrl,
})`
  height: 96px;
`;
export const BairavaMotorsLogo = styled(Logo).attrs({
  src: bairavaMotorsUrl,
})``;
