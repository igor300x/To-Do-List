import styled from 'styled-components'

import { FcApproval, FcEmptyTrash } from "react-icons/fc";

export const Div = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
`
export const ToDoList = styled.div`
background:white;
padding:30px 20px;
border-radius:5px;

ul{
    padding:0;
    margin-top:60px;
}
`
export const Input = styled.input`
border:2px solid rgba(209, 211, 212, 0.4);
height:40px;
width:340px;
margin-right:40px;
border-radius:5px;
padding:0 10px;
`
export const Button = styled.button`
width: 130px;
height: 40px;
font-weight:900;
font-size:17px;
line-height:2px;
border:none;
color:#ffffff;
background: #8052EC;
border-radius: 5px;
cursor: pointer;

&:hover{ opacity: 0.8;}

&:active{ opacity: 0.6;}

`
export const ListItem = styled.div`
width: 500px;
height: 60px;
margin-bottom:30px;
padding:0 10px;
display:flex;
align-items:center;
justify-content:space-between;
background: ${(props) => (props.isFinished ? '#E8FF8B' : '#E4E4E4')};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;


li{
    list-style-type: none;
}
`
export const Approval = styled(FcApproval)`
   cursor: pointer;
`
export const Trash = styled(FcEmptyTrash)`
   cursor: pointer;

`
    ;