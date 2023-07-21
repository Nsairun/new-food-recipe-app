import styled from '@emotion/styled';
import { BsFillHeartFill } from 'react-icons/bs';

const FavIcon = styled(BsFillHeartFill)`
  color: ${({ color }) => color};
`;

export default FavIcon;
