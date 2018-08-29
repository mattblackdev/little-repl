import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows:
    50vh
    50vh;
  grid-template-areas:
    'left right'
    'left bottom';
`

export const Left = styled.div`
  grid-area: left;
`

export const Right = styled.div`
  grid-area: right;
`

export const Bottom = styled.div`
  grid-area: bottom;
  padding: 10px;
`
