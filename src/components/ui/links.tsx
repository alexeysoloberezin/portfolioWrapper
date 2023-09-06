import React from 'react';
import { Tag } from 'antd';
import { GithubOutlined, GlobalOutlined, LinkedinOutlined, GitlabOutlined } from '@ant-design/icons';
import {SocialLinks} from "../../types/Portfolio";

export interface LinkProps {
  text: SocialLinks;
}

const Links: React.FC<LinkProps> = ({ text }) => {
  let tagColor = '';
  let icon = null;

  console.log('text', text)

  switch (text.toLowerCase()) {
    case 'github':
      tagColor = '#55acee';
      icon = <GithubOutlined />;
      break;
    case 'site':
      tagColor = '#2db7f5';
      icon = <GlobalOutlined />;
      break;
    case 'linkedin':
      tagColor = '#0077b5';
      icon = <LinkedinOutlined />;
      break;
    case 'gitlab':
      tagColor = '#fc6d26';
      icon = <GitlabOutlined />;
      break;
    default:
      tagColor = '#55acee';
      icon = null;
  }

  return (
    <Tag color={tagColor} icon={icon}>
      {text}
    </Tag>
  );
};

export default Links;
