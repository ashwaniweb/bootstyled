import styled,{css} from 'styled-components'
import { Link } from "react-router-dom";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`;

export const CardHeader = styled.div`
  padding:0 15px;
  max-width:1200px;
  margin:0 auto;
`;

export const CardImg = styled.img`
  width: 100%;
  border-radius: calc(0.25rem - 1px);
  ${({ top }) => top && css`
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);`
  }
  ${({ bottom }) => bottom && css`
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  `
  }
`;

export const CardImgOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;

export const CardTitle = styled.h5`
  margin-bottom: 0.75rem;
`;

export const CardSubtitle = styled.h6`
  padding:0 15px;
  max-width:1200px;
  margin:0 auto;
`;

export const CardText = styled.p`
  padding:0 15px;
  max-width:1200px;
  margin:0 auto;
`;

export const CardLink = styled(Link)`
  padding:0 15px;
  max-width:1200px;
  margin:0 auto;
`;