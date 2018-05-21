import styled, { css } from 'styled-components'
import media from './media'

function percentage (val) {
  return 100 * val / 12 + '%'
}

export const Container = styled.div`
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
  ${({ fluid }) => fluid && css`
      max-width: 100%;
    `};
`

export const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;  
  display: flex;
  flex-wrap: wrap;
`

export const Col = styled.div`
  padding: 15px;
  ${media.phone`
    ${({ xs }) => xs && `
      flex: 0 0 ${percentage(xs)};
      max-width: ${percentage(xs)};
    `}
  `}
  ${media.tablet`
    ${({ sm }) => sm && `
      flex: 0 0 ${percentage(sm)};
      max-width: ${percentage(sm)};
    `}
  `}
  ${media.desktop`
    ${({ md }) => md && `
      flex: 0 0 ${percentage(md)};
      max-width: ${percentage(md)};
    `}
  `}
  ${media.large`
    ${({ lg }) => lg && `
      flex: 0 0 ${percentage(lg)};
      max-width: ${percentage(lg)};
    `}
  `}
`
