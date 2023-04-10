import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  width: 300px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: lightgrey;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const SubmitBtn = styled.button``;

export const ErrorMessage = styled(FormikError)`
  color: black;
`;
