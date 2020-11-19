import React, { useEffect, useState } from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer } from '../../views/styles'
import { APP_CONSTANTS } from '../../vars'
import { useLocationsQuery, Location } from '../../gql/client.generated'
import Table from 'antd/lib/table'
import Button from 'antd/lib/button'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { useHistory } from 'react-router-dom'
import { routes } from '../../routes'

type LocationProps = Location & { key: string }

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<LocationProps[]>()
  const [pageNumber, setPageNummber] = useState(1)
  const history = useHistory()
  const { data, loading, error } = useLocationsQuery({
    variables: {
      page: pageNumber
    }
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'dimension',
      dataIndex: 'dimension',
      key: 'dimension'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Action',
      key: 'action',
      render: (location: Location) => <Button type='primary' onClick={() => history.push(`${routes.locations}/${location.id}`)}>View More</Button>
    }
  ]

  useEffect(() => {
    if (data && data.locations) {
      setEpisodes(data.locations.results.map(e => {
        return { ...e, key: e.id }
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
            total: data.locations.info.count,
            onChange: (page: number) => setPageNummber(page),
            showSizeChanger: false,
          }} />
      )}
    </Container>
  )
}

export default Episodes
