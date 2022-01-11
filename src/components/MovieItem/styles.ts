import styled from "styled-components/native";

interface PosterProps {
  big?: boolean
}

export const Poster = styled.Image.attrs<PosterProps>((props) => ({
  borderRadius: props.big ? 25 : 20,
  resizeMode: "cover",
}))<PosterProps>`
  width: ${(props) => props.big ? '190' : '120'}px;
  height: ${(props) => props.big ? '300' : '200'}px;
`;