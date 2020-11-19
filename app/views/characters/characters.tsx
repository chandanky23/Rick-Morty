import React, { useState } from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Title, HeaderContainer, FilterContainer, Form } from '../../views/styles'
import { APP_CONSTANTS } from '../../vars'
import { FilterCharacter } from '../../gql/client.generated'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import CharactersList from './charactersList'

type FilterTypes = FilterCharacter['name'] | FilterCharacter['gender'] | FilterCharacter['species'] | FilterCharacter['status'] | FilterCharacter['type']

const Episodes: React.FC = () => {
  const [filters, setFilters] = useState<FilterCharacter>({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  })

  const handleFilterChange = ( val: string, key: FilterTypes) => {
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
          <Form.Item label={APP_CONSTANTS.FILTER_BY_GENDER} >
            <Input placeholder={APP_CONSTANTS.FILTER_BY_GENDER} onChange={(e) => handleFilterChange(e.target.value, 'gender')} />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
        >
          <Form.Item label={APP_CONSTANTS.FILTER_BY_SPECIES} >
            <Input placeholder={APP_CONSTANTS.FILTER_BY_SPECIES} onChange={(e) => handleFilterChange(e.target.value, 'species')} />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
        >
          <Form.Item label={APP_CONSTANTS.FILTER_BY_TYPE} >
            <Input placeholder={APP_CONSTANTS.FILTER_BY_TYPE} onChange={(e) => handleFilterChange(e.target.value, 'type')} />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
        >
          <Form.Item label={APP_CONSTANTS.FILTER_BY_STATUS} >
            <Input placeholder={APP_CONSTANTS.FILTER_BY_STATUS} onChange={(e) => handleFilterChange(e.target.value, 'status')} />
          </Form.Item>
        </Form>
      </FilterContainer>
      <CharactersList filters={filters} />
    </Container>
  )
}

export default Episodes
