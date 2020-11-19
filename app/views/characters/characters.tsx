import React, { useEffect, useState } from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer } from '../../views/styles'
import { APP_CONSTANTS } from '../../vars'
import { useCharactersQuery, Character } from '../../gql/client.generated'
import Table from 'antd/lib/table'
import Button from 'antd/lib/button'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { useHistory } from 'react-router-dom'
import { routes } from '../../routes'

type CharacterProps = Character & { key: string }

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<CharacterProps[]>()
  const [pageNumber, setPageNummber] = useState(1)
  const history = useHistory()
  const { data, loading, error } = useCharactersQuery({
    variables: {
      page: pageNumber
    }
  })

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: Character['image']) => <img src={image} width={100} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Species',
      dataIndex: 'species',
      key: 'species'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin'
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location'
    },
    {
      title: 'Action',
      key: 'action',
      render: (character: Character) => <Button type='primary' onClick={() => history.push(`${routes.characters}/${character.id}`)}>View More</Button>
    }
  ]

  useEffect(() => {
    if (data && data.characters) {
      setEpisodes(data.characters.results.map(e => {
        return { ...e, key: e.id, origin: e.origin.name, location: e.location.name }
      }))
    }
  }, [data])


  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>{APP_CONSTANTS.CHARACTERS}</BreadcrumbItem>
      </Breadcrumb>
      <HeaderContainer>
        <Title>
          {APP_CONSTANTS.CHARACTERS}
        </Title>
        <Button type="primary" icon={<PlusOutlined />} size="middle">{APP_CONSTANTS.ADD_CHARACTER}</Button>
      </HeaderContainer>
      {data && (
        <Table
          loading={loading}
          columns={columns}
          dataSource={episodes} pagination={{
            current: pageNumber,
            pageSize: 20,
            total: data.characters.info.count,
            onChange: (page: number) => setPageNummber(page),
            showSizeChanger: false,
          }} />
      )}
    </Container>
  )
}

export default Episodes
