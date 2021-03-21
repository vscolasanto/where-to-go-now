import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PagesTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Home" />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body dangerouslySetInnerHTML={{ __html: body }}></S.Body>
    </S.Content>
  )
}

export default PagesTemplate
