import React, { useState } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer, FilterContainer, Form } from 'app/views/styles'
import { APP_CONSTANTS } from 'app/vars'
import { FilterEpisode } from 'app/gql/client.generated'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import EpisodesList from './episodesList'

const Episodes: React.FC = () => {
  const [filters, setFilters] = useState<FilterEpisode>({ name: '', episode: '' })


  const handleFilterChange = (val: string, key: FilterEpisode['name'] | FilterEpisode['episode']) => {
    setFilters({ ...filters, [key]: val })
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
      <FilterContainer>
        <Form
          layout="vertical"
        >
          <Form.Item label={APP_CONSTANTS.FILTER_BY_NAME}>
            <Input placeholder={APP_CONSTANTS.FILTER_BY_NAME} onChange={(e) => handleFilterChange(e.target.value, 'name')} />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
        >
          <Form.Item label={APP_CONSTANTS.FILTER_BY_EPISODE} >
            <Input placeholder={APP_CONSTANTS.FILTER_BY_EPISODE} onChange={(e) => handleFilterChange(e.target.value, 'episode')} />
          </Form.Item>
        </Form>
      </FilterContainer>
      <EpisodesList filters={filters} />
    </Container>
  )
}

export default Episodes
