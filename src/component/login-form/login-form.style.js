import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { Form } from 'formik';
import { TextField } from 'formik-material-ui';

export const StyledPaper = styled(Paper)`
  && {
    background-color: white;
    height: 425px;
    width: 350px;
  }
`;

export const StyledForm = styled(Form)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin: 10px;
    width: 300px;
  }
`;

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: 23px;
  font-family: 'Arial';
`;
