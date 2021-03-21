import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Home" />
      </LinkWrapper>
      <S.Heading>Pra onde ir agora?</S.Heading>
      <S.Body>
        Nunc vel mollis diam. Morbi hendrerit turpis sapien, aliquam cursus
        metus pellentesque pretium. Duis et imperdiet enim, quis ultricies nisi.
        Sed et leo in lorem ultrices iaculis. Etiam porta varius lacus, sed
        pretium dolor elementum ac. Cras ut lacinia sapien. Fusce porttitor quam
        justo, pharetra congue dui cursus ac. Maecenas tempus odio id massa
        pharetra iaculis id nec leo. Nunc non gravida urna. Pellentesque mi
        nisl, eleifend vel ornare id, pretium a felis. Nullam accumsan suscipit
        est ut tristique. Quisque viverra dapibus est ut pretium. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Aliquam luctus libero
        et lacus condimentum tincidunt.
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
