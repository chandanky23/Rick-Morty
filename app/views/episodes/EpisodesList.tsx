import React, { useEffect, useState } from 'react'
import Table from 'antd/lib/table'
import Button from 'antd/lib/button'
import Spinner from 'app/components/spinner'
import { routes } from 'app/routes'
import { useHistory } from 'react-router-dom'
import { useEpisodesQuery, Episode, FilterEpisode } from 'app/gql/client.generated'

type EpisodeProps = Episode & { key: string }

const EpisodesList: React.FC<{ filters: FilterEpisode }> = ({ filters }) => {
  const [episodes, setEpisodes] = useState<EpisodeProps[]>()
  const [pageNumber, setPageNummber] = useState(1)
  const history = useHistory()

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

  const { data, loading, error } = useEpisodesQuery({
    variables: {
      page: pageNumber,
      filter: filters
    }
  })

  useEffect(() => {
    if (data && data.episodes) {
      setEpisodes(data.episodes.results.map(e => {
        return { ...e, key: e.id }
      }))
    }
  }, [data])


  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <p>{error.message}</p>
  }
  return <Table
    loading={loading}
    columns={columns}
    dataSource={episodes} pagination={{
      current: pageNumber,
      pageSize: 20,
      total: data.episodes.info.count,
      onChange: (page: number) => setPageNummber(page)
    }}
  />
}

export default EpisodesList