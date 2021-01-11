
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

export const Container = styled.form `
display:flex;
width: 250px;
height: 250px;
border:2px solid #fff;
box-shadow: 1px 4px rgba(0, 0, 0, 0.2);
border-radius:18px;
`
export const EditIcon = styled(CreateIcon) `
height:14px;
width: 14px;
color:var(--gray);


 `
export const DeleteIcon = styled(CloseIcon) `
height:14px;
width: 14px;
color:var(--gray);
`
export const Separator = styled.div`
  height: 1px;
  width: 230px;
  background-color: var(--gray);
  margin: 0 13px;
`;
            
