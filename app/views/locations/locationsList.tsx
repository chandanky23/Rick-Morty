import React, { useEffect, useState } from 'react'
import { useLocationsQuery, Location, FilterLocation } from '../../gql/client.generated'
import Table from 'antd/lib/table'
import Button from 'antd/lib/button'
import { useHistory } from 'react-router-dom'
import { routes } from '../../routes'
import Spinner from '../../components/spinner'

type LocationProps = Location & { key: string }

const LocationsList: React.FC<{ filters: FilterLocation }> = ({ filters }) => {
  const [episodes, setEpisodes] = useState<LocationProps[]>()
  const [pageNumber, setPageNummber] = useState(1)
  const history = useHistory()
  const { data, loading, error } = useLocationsQuery({
    variables: {
      page: pageNumber,
      filter: filters
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
    return <Spinner />
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
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
  )
}

export default LocationsList
