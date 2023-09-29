import React, {useState} from 'react';
import Header from "../components/common/Header";
import {getTags, Tags} from "../types/Portfolio";
import TagsComp from "../components/ui/Tags";
import {Button, Form, Input, Radio, Checkbox} from 'antd';
import type {CheckboxValueType} from 'antd/es/checkbox/Group';

interface liveCoddingData {
  id: number,
  title: string,
  tags: Tags[],
  url: string,
  toggle: boolean,
}

interface filterState {
  tags: Tags[],
  search: string,
}

const data: liveCoddingData[] = [
  {
    id: 1,
    title: 'Wrapper Portfolio on React',
    toggle: false,
    tags: [Tags.React, Tags.TypeScript, Tags.Firebase],
    url: 'https://www.youtube.com/embed/ju4JCJV-zj0?si=3X-f5XwX7w8nv8x3'
  },
  {
    id: 2,
    title: 'Movie vue project',
    toggle: false,
    tags: [Tags.Vue],
    url: 'https://www.youtube.com/embed/HEzRRuRIf9w?si=dhBgca5eC_6CFbgo'
  },
  {
    id: 3,
    title: 'Nuxt 2',
    toggle: false,
    tags: [Tags.Pinia, Tags.Nuxt],
    url: 'https://www.youtube.com/embed/LetTLKyXRZY?si=MeLSvzzaVKURhCwH'
  },
  {
    id: 4,
    title: 'Vue+Laravel',
    toggle: false,
    tags: [Tags.Pinia, Tags.Vue],
    url: 'https://www.youtube.com/embed/bD9teNoK60Q?si=XPantLzU4Hp-i7EB'
  },
  {
    id: 5,
    title: '',
    toggle: false,
    tags: [],
    url: "https://www.youtube.com/embed/NTCuzZNZmn0?si=jJ5GkC1cWYyx8HQh"
  }
]


const LiveCodding = () => {
  const [showIframes, setShowIframes] = useState(false)
  const [videos, setVideos] = useState<liveCoddingData[]>(data)

  const [form] = Form.useForm();
  const [filters, setFilters] = useState<filterState | null>(null)

  const toggleIframe = (id: number): any => {
    setVideos(videos.map(video => {
      return video.id === id ? {...video, toggle: !video.toggle} : video
    }))
  }

  const options = getTags();

  const onFinish = async (values: any) => {
    setFilters({
      tags: values.tags || [],
      search: values.search || ''
    })
  }

  const computedVideos = (videos: liveCoddingData[]) => {
    if (!filters) return videos;
    if (!filters.search && !filters.tags?.length) return videos;

    return videos
      .filter(video => {
        const matchSearch =
          !filters.search || video.title.toLowerCase().includes(filters.search.toLowerCase())

        const matchTags =
          filters.tags.length === 0 || video.tags.some(tag => filters.tags.includes(tag))

        return matchSearch && matchTags
      })
  }

  const resetFilters = () => {
    form.resetFields();
    setFilters(null)
  }

  return (
    <div>
      <Header/>
      <div className={'container'}>
        <div className={'livecodding-filters'}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item label="Tags" name="tags">
              <Checkbox.Group options={options} defaultValue={['Pear']}/>
            </Form.Item>
            <Form.Item label="Search by name" name="search">
              <Input placeholder="Search by name"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType={'submit'}>Apply filters</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="livecodding">
          <div>
            <h1>Here is a video of performing certain tasks.</h1>
            <Button type="primary" className={'my-2'} onClick={() => setShowIframes(!showIframes)}>{!showIframes ? 'Show' : 'Hide'} all videos</Button>
          </div>
          <div className="livecodding-wrp">
            {computedVideos(videos).length > 0 ?
              computedVideos(videos).map(el => (
                <div key={el.id}>
                  <div className={'flex'}>
                    <h4 className={"mb-2"}>{el.title}</h4>
                    <Button size={'large'} className={"ml-auto"}
                            onClick={() => toggleIframe(el.id)}>{!el.toggle ? 'Show' : 'Hide'} video</Button>
                  </div>
                  <TagsComp tags={el.tags}/>

                  {el.toggle || showIframes
                    ?
                    <div className="video-item mt-2">
                      <iframe src={el.url}
                              title="YouTube video player" frameBorder="0"
                              allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen></iframe>
                    </div>
                    : null
                  }
                </div>
              ))
              : <div>
                <h4>No data yet</h4>
                <Button size={'large'} className={"ml-auto"}
                        onClick={() => resetFilters()}>Reset filters</Button>
              </div>
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveCodding;