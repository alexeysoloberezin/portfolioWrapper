import React, {useState} from 'react';
import Header from "../../components/common/Header";
import MainBannerImages from "../../components/ui/MainBannerImages";
import {Button, Form, Input, Select, Upload} from "antd";
import {getLinks, getTags} from "../../types/Portfolio";
import Footer from "../../components/common/Footer";

const TagsOptions = getTags()
const LinksOptions = getLinks()

const Cases = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log('val', values)
  }

  return (
    <>
      <Header />

      <section className={'mainBanner'}>
        <div className="container">
            <div className={"cases__filter"}>
              <h3><span className={"text-primary"}>Find</span> what you are looking for:</h3>
              <div className="cases__search">
                <Form form={form} layout="vertical" onFinish={onFinish}>
                  <Form.Item name="search" label="Search what u want">
                    <Input placeholder={"Search"}/>
                  </Form.Item>
                  <Form.Item name="tags" label="Tags" >
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select tags"
                      options={TagsOptions}
                    />
                  </Form.Item>
                  <Form.Item name="sortby" label="Sort by">
                    <Select
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Sort by"
                      options={TagsOptions}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      Apply filters
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          <MainBannerImages />
        </div>
      </section>

      <Footer />

    </>
  );
};

export default Cases;