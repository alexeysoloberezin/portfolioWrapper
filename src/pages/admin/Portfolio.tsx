import React, {useState} from 'react';
import Sidebar from "./ui/Sidebar";
import {Button, Form, Input, Select, Upload} from 'antd';
import firebase from "firebase/compat/app";
import {getLinks, getTags, PortfolioItem} from "../../types/Portfolio";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from '../../App';

const TagsOptions = getTags()
const LinksOptions = getLinks()

const Portfolio = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<{ name: string, url: string }[]>([]);

  const onFinish = async (values: any) => {
    setLoading(true);

    try {
      const db = firebase.firestore();
      const portfolioRef = db.collection('portfolio').doc('T7zXc2chQljB1M040q9I');

      const portfolioDoc = await portfolioRef.get();
      const portfolioData: any = portfolioDoc.exists ? portfolioDoc.data() : {};

      fileList.forEach(file => {
        values[file.name] = file.url
      })

      const updatedPortfolio = [
        ...(portfolioData.portfolio || []),
        {
          ...values,
          id: new Date().getTime(),
        },
      ];

      const rs = await portfolioRef.set({portfolio: updatedPortfolio}, {merge: true});
    } catch (err) {
      console.error('err', err)
    }
    setLoading(false);
  };

  const beforeUpload = async (file: any) => {
    try {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file); // Upload the file
      console.log(getDownloadURL(storageRef))
      const url = await getDownloadURL(storageRef);
      setFileList([...fileList, {name: 'img', url}]);
      return !!url
    } catch (error) {
      console.error('Error uploading image:', error);
      return false; // Prevent immediate upload in case of error
    }
  };

  return (
    <div className={'admin'}>
      <Sidebar/>
      <div>
        <h2>Create portfolio array</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="title" label="Title" rules={[{required: true, message: 'Please input the title'}]}>
            <Input/>
          </Form.Item>
          <Form.Item name="subtitle" label="Subtitle" rules={[{required: true, message: 'Please input the title'}]}>
            <Input/>
          </Form.Item>
          <Form.Item name="text" label="Text" rules={[{required: true, message: 'Please input the text'}]}>
            <Input.TextArea/>
          </Form.Item>
          <Form.Item name="tags" label="tags" rules={[{required: true, message: 'Please input the text'}]}>
            <Select
              mode="multiple"
              allowClear
              style={{width: '100%'}}
              placeholder="Please select tags"
              options={TagsOptions}
            />
          </Form.Item>
          <Form.List
            name="steps"
            initialValue={[{content: '', title: '', images: ''}]}
          >
            {(fields, {add, remove}) => (
              <div className="dashed-border-button">
                <h5>Steps</h5>

                {fields.map(({key, name, fieldKey, ...restField}) => (
                  <div key={key} className={"mb-2"}>
                    <Form.Item
                      {...restField}
                      name={[name, 'content']}
                      fieldKey={[fieldKey as any, 'content']}
                      label="Content"
                      rules={[{required: true, message: 'Please input the content'}]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      fieldKey={[fieldKey as any, 'title']}
                      label="Title"
                      rules={[{required: true, message: 'Please input the title'}]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'images']}
                      fieldKey={[fieldKey as any, 'images']}
                      label="images"
                      rules={[{required: true, message: 'Please input the description'}]}
                    >
                      <Input/>
                    </Form.Item>
                    <Button
                      type="dashed"
                      className={"mr-2"}
                      onClick={() => {
                        add();
                      }}
                    >
                      Add Example
                    </Button>
                    {fields.length > 1 && (
                      <Button
                        type="dashed"
                        onClick={() => {
                          remove(name);
                        }}
                      >
                        Remove Example
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Form.List>

          <Form.List
            name="reviews"
            initialValue={[{content: '', name: '', img: ''}]}
          >
            {(fields, {add, remove}) => (
              <div className="dashed-border-button">
                <h5>Reviews</h5>
                {fields.map(({key, name, fieldKey, ...restField}) => (
                  <div key={key} className={"mb-2"}>

                    <Form.Item
                      {...restField}
                      name={[name, 'content']}
                      fieldKey={[fieldKey as any, 'content']}
                      label="Content"
                      rules={[{required: true, message: 'Please input the content'}]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      fieldKey={[fieldKey as any, 'name']}
                      label="Name"
                      rules={[{required: true, message: 'Please input the title'}]}
                    >
                      <Input/>

                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'img']}
                      fieldKey={[fieldKey as any, 'img']}
                      label="Image"
                      rules={[{required: true, message: 'Please input the description'}]}
                    >
                      <Input/>
                    </Form.Item>
                    <Button
                      type="dashed"
                      className={"mr-2"}
                      onClick={() => {
                        add();
                      }}
                    >
                      Add Review
                    </Button>
                    {fields.length > 1 && (
                      <Button
                        type="dashed"
                        onClick={() => {
                          remove(name);
                        }}
                      >
                        Remove Review
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Form.List>

          <Form.List
            name="links"
            initialValue={[{link: '', name: ''}]}
          >
            {(fields, {add, remove}) => (
              <div className="dashed-border-button">
                <h5>Links</h5>

                {fields.map(({key, name, fieldKey, ...restField}) => (
                  <div key={key} className={"mb-2"}>
                    <Form.Item
                      {...restField}
                      name={[name, 'link']}
                      fieldKey={[fieldKey as any, 'link']}
                      label="Link"
                      rules={[{required: true, message: 'Please input the content'}]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      fieldKey={[fieldKey as any, 'name']}
                      label="Name"
                    >
                      <Select
                        allowClear
                        style={{width: '100%'}}
                        placeholder="Please select link"
                        options={LinksOptions}
                      />
                    </Form.Item>
                    <Button
                      type="dashed"
                      className={"mr-2"}
                      onClick={() => {
                        add();
                      }}
                    >
                      Add Link
                    </Button>
                    {fields.length > 1 && (
                      <Button
                        type="dashed"
                        onClick={() => {
                          remove(name);
                        }}
                      >
                        Remove Link
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Form.List>

          <Form.List
            name="images"
          >
            {(fields, {add, remove}) => (
              <div className={"dashed-border-button"}>
                <h5>Images</h5>
                {fields.map(({key, name, fieldKey}) => (
                  <Form.Item
                    key={key}
                    name={[name, 'link']}
                    fieldKey={[fieldKey as any, 'link']}
                  >
                    <Input/>
                  </Form.Item>
                ))}
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                >
                  Добавить изображение
                </Button>
              </div>
            )}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Add to Portfolio
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Portfolio;