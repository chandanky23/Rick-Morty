import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import EditOutlined from '@ant-design/icons/EditOutlined'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import { useEpisodeQuery } from 'app/gql/client.generated'
import { APP_CONSTANTS } from 'app/vars'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer } from 'app/views/styles'
import { EpisodeContainer, DeleteButton, ButtonContainer, SubTitleContainer, SubTitle, Label, ExtraContainer, CardContainer } from './styles'

const Episode = () => {
  let { episodeId } = useParams<{ episodeId: string }>()

  const { data, loading, error } = useEpisodeQuery({
    skip: !episodeId,
    variables: {
      id: episodeId
    }
  })

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  console.log(data)

  const { name, id, air_date, characters, episode } = data.episode

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>{APP_CONSTANTS.EPISODES}</BreadcrumbItem>
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
          <Label>{episode}</Label>
        </SubTitleContainer>
        <SubTitleContainer>
          <Label>{`Available from ${air_date}`}</Label>
        </SubTitleContainer>
      </EpisodeContainer>

      <ExtraContainer>
        <SubTitle>{`${characters.length} ${APP_CONSTANTS.CHARACTERS}`}</SubTitle>
        <CardContainer>
          {characters.map(c => (
            <Card
              key={c.id}
              style={{ width: 200, margin: '16px' }}
              cover={<img src={c.image} />}
            >
              <Card.Meta title={c.name} description={c.species} />
              <Card.Meta description={`Status - ${c.status}`} />
            </Card>
          ))}
        </CardContainer>
      </ExtraContainer>
    </Container>
  )
}

export default Episode