import Link from 'next/link'
import * as Styled from './styles'

interface IBreadcrumbsProps {
  title: string
  subtitle: string
}

const Breadcrumbs = ({ title, subtitle }: IBreadcrumbsProps) => {
  return (
    <Styled.Container>
      <Styled.Breadcrumbs>
        <Link href="/">Home</Link>
        &nbsp; &gt; {title}
      </Styled.Breadcrumbs>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Container>
  )
}

export default Breadcrumbs
