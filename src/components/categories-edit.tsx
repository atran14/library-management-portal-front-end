import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CategoryService } from '../shared/services/categoryService'
import { Category } from '../shared/types/category'

let categoryService = new CategoryService();

export function CategoriesEdit() {
  let { id = '0' } = useParams<{ id?: string }>()
  let [categoryId, setCategoryId] = useState(-1);
  let [categoryName, setCategoryName] = useState("");
  let [form] = Form.useForm();
  let history = useHistory();

  useEffect(() => {
    ;(async () => {
      let category = await categoryService.getById(parseInt(id))
      setCategoryId(category.id)
      setCategoryName(category.name)
    })()
  }, [])

  const onFinish = async (values: any) => {    
    let newCategory : Category = {
        id: categoryId,
        name: values["new-category-name"]
    };
    await categoryService.edit(newCategory.id, newCategory);
    history.replace("/categories");
  }

  return (
    <>
      <Form name="edit-category-forms" form={form} onFinish={onFinish}>
        <Form.Item name="new-category-name" label={`${categoryName} → `}>
          <Input placeholder="e.g. Horror"></Input>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
