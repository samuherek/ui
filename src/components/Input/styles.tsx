import styled from 'styled-components';
import { colorByKey } from '../../theme/utils';

export const Outlined = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${colorByKey('paleLilac')};

  input,
  textarea {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: ${colorByKey('charcoalGrey')};

    &::-webkit-input-placeholder {
      color: ${colorByKey('cloudyBlue')};
      font-weight: normal;
    }
    &::-moz-placeholder {
      color: ${colorByKey('cloudyBlue')};
      font-weight: normal;
    }
    &:-ms-input-placeholder {
      color: ${colorByKey('cloudyBlue')};
      font-weight: normal;
    }
    &::-ms-input-placeholder {
      color: ${colorByKey('cloudyBlue')};
      font-weight: normal;
    }
  }

  &.focused {
    box-shadow: 0 0 0 2px ${colorByKey('greenTeal')};

    input,
    textarea {
      color: ${colorByKey('charcoalGrey')};
    }
  }
`;
