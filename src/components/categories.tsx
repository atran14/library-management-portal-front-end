import { EditOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import Table from 'antd/lib/table'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CategoryService } from '../shared/services/categoryService'
import { Category } from '../shared/types/category'

const categoryService = new CategoryService()

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([])
  const history = useHistory()
  const [form] = Form.useForm()

  useEffect(() => {
    (async () => {
      let obtainedCategories = await categoryService.getAll()
      setCategories(obtainedCategories);
    })()
  }, [])

  const renderActions = (value: any, record: Category, index: number) => {
    const onClickDeleteButton = async () => {
      await categoryService.delete(record.id)
      setCategories(categories.filter((e) => e.id !== record.id))
    }

    const onClickToCategoryEditPage = () => {
      history.push(`/categories/edit/${record.id}`)
    }

    return (
      <>
        <div style={{ display: 'flex' }}>
          <Button
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
            size="small"
            danger
            onClick={onClickDeleteButton}
          />
          <Button
            shape="circle"
            icon={<EditOutlined />}
            size="small"
            onClick={onClickToCategoryEditPage}
          ></Button>
        </div>
      </>
    )
  }

  const onNewCategoryAdd = async (values: {categoryName: string}) => {
    try {
      form.resetFields();
      let {categoryName} = values;
      let addedCategory = await categoryService.add({name: categoryName});
      setCategories([...categories, {
        id: addedCategory.id,
        name: addedCategory.name
      }])
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div>
        <Form form={form} layout="inline" onFinish={onNewCategoryAdd}>
          <Form.Item>
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              htmlType="submit"
            ></Button>
            <Form.Item name="categoryName" rules={[{required: true, message: "Required field"}]}>
              <Input placeholder="Add new category" />
            </Form.Item>
          </Form.Item>
        </Form>
      </div>
      <Table<Category> dataSource={categories}>
        <Table.Column<Category> title="ID" dataIndex="id" />
        <Table.Column<Category> title="Name" dataIndex="name" />
        <Table.Column<Category>
          title="Action"
          key="action"
          render={renderActions}
        />
      </Table>
    </>
  )
}
