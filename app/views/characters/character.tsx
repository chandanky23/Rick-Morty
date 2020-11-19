import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import Spinner from 'app/components/spinner'
import EditOutlined from '@ant-design/icons/EditOutlined'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import { useCharacterQuery } from 'app/gql/client.generated'
import { APP_CONSTANTS } from 'app/vars'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer } from 'app/views/styles'
import { EpisodeContainer, DeleteButton, ButtonContainer, SubTitleContainer, SubTitle, Label, ExtraContainer, CardContainer } from './styles'
import { routes } from 'app/routes'

const Character = () => {
  let { characterId } = useParams<{ characterId: string }>()
  const history = useHistory()

  const { data, loading, error } = useCharacterQuery({
    skip: !characterId,
    variables: {
      id: characterId
    }
  })

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const { name, status, species, type, gender, origin, location, image, episode } = data.character

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>{APP_CONSTANTS.CHARACTERS}</BreadcrumbItem>
        <BreadcrumbItem>{name}</BreadcrumbItem>
      </Breadcrumb>

      <EpisodeContainer>
        <HeaderContainer>
          <Title>{name}</Title>
          <ButtonContainer>
            <Button type="primary" icon={<EditOutlined />} size="middle">{APP_CONSTANTS.EDIT}</Button>
            <DeleteButton icon={<DeleteOutlined />} size="middle" style={{ backgroundColor: 'red' }}>{APP_CONSTANTS.DELETE}</DeleteButton>
          </ButtonContainer>
        </HeaderContainer>
        <SubTitleContainer>
          <Label>{`${gender} |`}</Label>
          <Label>&nbsp;{`${status}`} </Label>
        </SubTitleContainer>
        <SubTitleContainer>
          <Label>{`Species - ${species}`}</Label>
        </SubTitleContainer>
        <SubTitleContainer>
          <Label>{`Origin - ${origin.name}, ${origin.dimension}, ${origin.type}`}</Label>
        </SubTitleContainer>
        <SubTitleContainer>
          <Label>{`Location - ${location.name}, ${location.dimension}, ${location.type}`}</Label>
        </SubTitleContainer>
      </EpisodeContainer>

      <ExtraContainer>
        <SubTitle>{`${episode.length} ${APP_CONSTANTS.EPISODES}`}</SubTitle>
        <CardContainer>
          {episode.map(e => (
            <Card
              key={e.id}
              title={e.name}
              style={{ width: 400, margin: '16px' }}
              onClick={() => history.push(`${routes.episodes}/${e.id}`)}
            >
              {e.episode}
            </Card>
          ))}
        </CardContainer>
      </ExtraContainer>
    </Container>
  )
}

export default Character