import React, { useState } from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer, FilterContainer, Form } from '../../views/styles'
import { APP_CONSTANTS } from '../../vars'
import { FilterLocation } from '../../gql/client.generated'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import LocationsList from './LocationsList'

const Episodes: React.FC = () => {
  const [filters, setFilters] = useState<FilterLocation>({ name: '', type: '', dimension: '' })

  const handleFilterChange = (val: string, key: FilterLocation['name'] | FilterLocation['type'] | FilterLocation['dimension']) => {
    setFilters({ ...filters, [key]: val })
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
          <Form.Item label={APP_CONSTANTS.FILTER_BY_DIMENSION} >
            <Input placeholder={APP_CONSTANTS.FILTER_BY_DIMENSION} onChange={(e) => handleFilterChange(e.target.value, 'dimension')} />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
        >
          <Form.Item label={APP_CONSTANTS.FILTER_BY_TYPE} >
            <Input placeholder={APP_CONSTANTS.FILTER_BY_TYPE} onChange={(e) => handleFilterChange(e.target.value, 'type')} />
          </Form.Item>
        </Form>
      </FilterContainer>
      <LocationsList filters={filters} />
    </Container>
  )
}

export default Episodes
