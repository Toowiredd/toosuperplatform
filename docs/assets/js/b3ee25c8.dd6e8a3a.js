"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[6886],{4936:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=i(74848),r=i(28453);const t={sidebar_position:2,tags:["user-svc","permissions","roles","authentication","authorization","service"]},a="Dynamic Svc",o={id:"services/dynamic-svc",title:"Dynamic Svc",description:"The dynamic service is designed to help build backendless applications: the goal is to be able to save and query data directly from the frontend. Similarly to Firebase.",source:"@site/docs/services/dynamic-svc.md",sourceDirName:"services",slug:"/services/dynamic-svc",permalink:"/docs/services/dynamic-svc",draft:!1,unlisted:!1,editUrl:"https://github.com/singulatron/singulatron/tree/main/docs-source/docs/services/dynamic-svc.md",tags:[{inline:!0,label:"user-svc",permalink:"/docs/tags/user-svc"},{inline:!0,label:"permissions",permalink:"/docs/tags/permissions"},{inline:!0,label:"roles",permalink:"/docs/tags/roles"},{inline:!0,label:"authentication",permalink:"/docs/tags/authentication"},{inline:!0,label:"authorization",permalink:"/docs/tags/authorization"},{inline:!0,label:"service",permalink:"/docs/tags/service"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["user-svc","permissions","roles","authentication","authorization","service"]},sidebar:"tutorialSidebar",previous:{title:"User Svc",permalink:"/docs/services/user-svc"},next:{title:"Prompt Svc",permalink:"/docs/services/prompt-svc"}},l={},c=[{value:"How It Works",id:"how-it-works",level:2},{value:"Readers",id:"readers",level:3},{value:"Authors",id:"authors",level:3},{value:"Writers",id:"writers",level:3},{value:"Deleters",id:"deleters",level:3},{value:"Conventions",id:"conventions",level:2},{value:"Table Name and Record ID",id:"table-name-and-record-id",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"dynamic-svc",children:"Dynamic Svc"}),"\n",(0,n.jsx)(s.p,{children:"The dynamic service is designed to help build backendless applications: the goal is to be able to save and query data directly from the frontend. Similarly to Firebase."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["This page is a high level overview of the ",(0,n.jsx)(s.code,{children:"Dynamic Svc"}),". For more details, please see the ",(0,n.jsx)(s.a,{href:"/docs/singulatron/query",children:"Dynamic Svc API documentation"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Aimed at prototyping or where building a service to store the data feels like an overkill. It doesn't aim to be a definitive and exclusively used datastore by any means."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Currently the Dynamic Svc is being used with internal apps but the goal is to have a permission model that works for public apps (where adversarial users might be present). If you find a logical inconsitency that hinders building public apps, please report it."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsx)(s.p,{children:"The Dynamic Svc has a permission model with the following goals:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Be simple & easy to understand"}),"\n",(0,n.jsx)(s.li,{children:"Be as versatile as possible while being simple"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To understand the permission model, lets disect an example entry:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "authors": ["usr_12345", "org_67890"],\n  "data": {},\n  "deleters": ["usr_12345"],\n  "id": "pet_67890",\n  "readers": ["org_67890"],\n  "table": "pet",\n  "writers": ["org_67890"]\n}\n'})}),"\n",(0,n.jsx)(s.h3,{id:"readers",children:"Readers"}),"\n",(0,n.jsx)(s.p,{children:"Readers are user ids, organization ids or role ids that can read the entry."}),"\n",(0,n.jsxs)(s.p,{children:['You can specify other users\' IDs or IDs of organizations you are not part of. This can sometimes cause "spam" in multitenant applications where adversarial entities can be present on the same platform. To fix this issue, see the ',(0,n.jsx)(s.code,{children:"authors"})," field."]}),"\n",(0,n.jsx)(s.h3,{id:"authors",children:"Authors"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"authors"}),' field simply marks which user or organization created the entry. This field is used to avoid "spam".']}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'In certain platforms spam is because anyone can "offer" a record to be read by an other user or organizations they are not part of. Sometimes this behaviour is undesired: imagine a chat application where strangers spam messages just by knowing the company ID. The Authors field fixes this.'}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"writers",children:"Writers"}),"\n",(0,n.jsx)(s.p,{children:"Writers are user ids, organization ids or role ids that can edit entry."}),"\n",(0,n.jsx)(s.h3,{id:"deleters",children:"Deleters"}),"\n",(0,n.jsx)(s.p,{children:"Deleters are user ids, organization ids or role ids that can delete the entry."}),"\n",(0,n.jsx)(s.h2,{id:"conventions",children:"Conventions"}),"\n",(0,n.jsx)(s.h3,{id:"table-name-and-record-id",children:"Table Name and Record ID"}),"\n",(0,n.jsx)(s.p,{children:"The ID of a record must be prefixed by the table name. For this reason, use singular table names if possible."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'{\n  "table": "pet",\n  "id": "pet_67890"\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var n=i(96540);const r={},t=n.createContext(r);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);