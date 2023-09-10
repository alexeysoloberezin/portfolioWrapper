import React, {Suspense, lazy} from 'react';
import {Tags} from "../../types/Portfolio";
import {Tooltip} from "antd";

const TagsComp = ({tags}: { tags: Tags[] | [] }) => {
  const tagList = [
    {
      name: Tags.Vue,
      component: () => import('./icons/VueIcon'),
    },
    {
      name: Tags.React,
      component: () => import('./icons/ReactIcon'),
    },
    {
      name: Tags.Firebase,
      component: () => import('./icons/FirebaseIcon'),
    },
    {
      name: Tags.Vite,
      component: () => import('./icons/ViteIcon'),
    },
    {
      name: Tags.TypeScript,
      component: () => import('./icons/TsIcon'),
    },
    {
      name: Tags.SCSS,
      component: () => import('./icons/ScssIcon'),
    },
    {
      name: Tags.Eslint,
      component: () => import('./icons/EsLintIcon'),
    },
    {
      name: Tags.PrimeVue,
      component: () => import('./icons/PrimeIcon'),
    },
    {
      name: Tags.Prettier,
      component: () => import('./icons/Prettier'),
    },
    {
      name: Tags.Pinia,
      component: () => import('./icons/PiniaIcon'),
    },
  ]


  return (
    <Tooltip title={tags.join(", ")}>
      <div className={"tagsComp"}>
        {tags.map(tag => {
          const tagInfo = tagList.find(el => el.name === tag);

          if (!tagInfo) {
            return <div key={tag} className={"icon-text"}>{tag}</div>;
          }

          const Component = lazy(tagInfo.component);

          return (
            <Suspense key={tag} fallback={<div>Loading...</div>}>
              <Component/>
            </Suspense>
          );
        })}
      </div>
    </Tooltip>
  );
};

export default TagsComp;