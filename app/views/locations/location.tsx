import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import EditOutlined from '@ant-design/icons/EditOutlined'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import { useLocationQuery } from 'app/gql/client.generated'
import { APP_CONSTANTS } from 'app/vars'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer } from 'app/views/styles'
import { EpisodeContainer, DeleteButton, ButtonContainer, SubTitleContainer, SubTitle, Label, ExtraContainer, CardContainer } from './styles'
import { routes } from 'app/routes'

const Character = () => {
  let { locationId } = useParams<{ locationId: string }>()
  const history = useHistory()

  const { data, loading, error } = useLocationQuery({
    skip: !locationId,
    variables: {
      id: locationId
    }
  })

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const { name, type, dimension, residents } = data.location

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
          <Label>{`Dimension - ${dimension}`}</Label>
        </SubTitleContainer>
        <SubTitleContainer>
          <Label>{`Type - ${type}`}</Label>
        </SubTitleContainer>
      </EpisodeContainer>

      <ExtraContainer>
        <SubTitle>{`${residents.length} ${APP_CONSTANTS.CHARACTERS}`}</SubTitle>
        <CardContainer>
          {residents.map(c => (
            <Card
              key={c.id}
              style={{ width: 200, margin: '16px' }}
              cover={<img src={c.image} />}
              onClick={() => history.push(`${routes.characters}/${c.id}`)}
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

export default Character