import styled from 'styled-components';
import { colorByKey } from '../../theme/utils';

export const LabelStandard = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${colorByKey('blueyGrey')};

  &.focused {
    color: ${colorByKey('darkGrey')};
  }

  &.disabled {
    pointer-events: none;
  }
`;
