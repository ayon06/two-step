import styled from '@emotion/styled'
import { HTMLAttributes } from 'react'

const StyledH1 = styled.h1((props) => ({
  fontWeight: 200,
  lineHeight: '10em',
  fontSize: 16,
  fontFamily: 'gilroy',
}))

const StyledH2 = StyledH1.withComponent('h2')

export const Heading = ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
  return <StyledH1>{children}</StyledH1>
}

export const Heading2 = ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
  return <StyledH2>{children}</StyledH2>
}
