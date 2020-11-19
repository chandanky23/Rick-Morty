import React, { useEffect, useState } from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer } from '../../views/styles'
import { APP_CONSTANTS } from '../../vars'
import { useEpisodesQuery, Episode } from '../../gql/client.generated'
import Table from 'antd/lib/table'
import Button from 'antd/lib/button'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { useHistory } from 'react-router-dom'
import { routes } from '../../routes'

type EpisodeProps = Episode & { key: string }

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeProps[]>()
  const [pageNumber, setPageNummber] = useState(1)
  const history = useHistory()
  const { data, loading, error } = useEpisodesQuery({
    variables: {
      page: pageNumber
    }
  })

  const columns = [
    {
      title: 'Episode',
      dataIndex: 'episode',
      key: 'episode'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Launched',
      dataIndex: 'air_date',
      key: 'air_date'
    },
    {
      title: 'Action',
      key: 'action',
      render: (episode: Episode) => <Button type='primary' onClick={() => history.push(`${routes.episodes}/${episode.id}`)}>View More</Button>
    }
  ]

  useEffect(() => {
    if (data && data.episodes) {
      setEpisodes(data.episodes.results.map(e => {
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
        <BreadcrumbItem>{APP_CONSTANTS.EPISODES}</BreadcrumbItem>
      </Breadcrumb>
      <HeaderContainer>
        <Title>
          {APP_CONSTANTS.EPISODES}
        </Title>
        <Button type="primary" icon={<PlusOutlined />} size="middle">{APP_CONSTANTS.ADD_EPISODE}</Button>
      </HeaderContainer>
      {data && (
        <Table
          loading={loading}
          columns={columns}
          dataSource={episodes} pagination={{
            current: pageNumber,
            pageSize: 20,
            total: data.episodes.info.count,
            onChange: (page: number) => setPageNummber(page)
          }} />
      )}
    </Container>
  )
}

export default Episodes
