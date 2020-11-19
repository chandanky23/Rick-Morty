import React, { useEffect, useState } from 'react'
import { useCharactersQuery, Character, FilterCharacter } from '../../gql/client.generated'
import Table from 'antd/lib/table'
import Button from 'antd/lib/button'
import { useHistory } from 'react-router-dom'
import { routes } from '../../routes'
import Spinner from '../../components/spinner'

type CharacterProps = Character & { key: string }

const Episodes: React.FC<{ filters: FilterCharacter }> = ({ filters }) => {
  const [episodes, setEpisodes] = useState<CharacterProps[]>()
  const [pageNumber, setPageNummber] = useState(1)
  const history = useHistory()
  const { data, loading, error } = useCharactersQuery({
    variables: {
      page: pageNumber,
      filter: filters
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
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
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
        total: data.characters.info.count,
        onChange: (page: number) => setPageNummber(page),
        showSizeChanger: false,
      }}
    />
  )
}

export default Episodes
