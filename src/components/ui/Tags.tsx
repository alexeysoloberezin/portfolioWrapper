import React, { ReactNode, Suspense, lazy } from 'react';
import {Tags} from "../../types/Portfolio";


const TagsComp = ({tags}: {tags: Tags[] | []}) => {
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
      name: Tags.Pinia,
      component: () => import('./icons/PiniaIcon'),
    },
  ]


  return (
    <div>
      {tags.map(tag => {
        const tagInfo = tagList.find(el => el.name === tag);

        if (!tagInfo) {
          return <div key={tag} className={"icon-text"}>{tag}</div>;
        }

        const Component = lazy(tagInfo.component);

        return (
          <Suspense key={tag} fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        );
      })}
    </div>
  );
};

export default TagsComp;