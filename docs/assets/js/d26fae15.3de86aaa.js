"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[7277],{10312:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>b,default:()=>N,frontMatter:()=>y,metadata:()=>v,toc:()=>q});var i=a(74848),r=a(28453),l=a(91366),t=a.n(l),n=(a(6050),a(57742)),d=a.n(n),c=(a(67792),a(27362)),m=a.n(c),o=(a(36683),a(81124)),p=a.n(o),h=a(60674),u=a.n(h),j=a(23397),x=a.n(j),f=(a(26651),a(51107)),g=(a(77675),a(19365));const y={id:"add-thread",title:"Add Thread",description:"Create a new chat thread and add the requesting user to it.",sidebar_label:"Add Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJztVt9v2zYQ/lcIPitWmqzAoKelRTFkK5YgTp8cAz2TZ4ktRTIkZdcz9L8XR0q2knjFggF76osgHe/Hd3ffHbXnEoPwykVlDa/4e48QkQEzuGWigchi4xEkAyMZSMlig8zjY4chKlOzLqBn0TIVZw/mDh875TEkpc9kfRY2osoeKpFcf2YOfatCUNbMeMGtQw8U/FryioOU90mbF3yI8s7KHa/2XFgT0UR6Bee0Esmq/BII954H0WAL9OY8+YwKA33l4C/lGY28Sg7jziGveIhemZr3BVfypDiqqJFOnhbtnsTMrlPeOSCl9tLcOiWuZTjhYThhEtfKYGDbRomGJYMwcctWqK2pA4t29mDu87EAw7zt6kbv2Io06T0SHggsQh3Y2vrBQSBgKmIbTieYBeA97Oi7c/IHVaLmn0znUz5IwJUMY2lIn1KzCXJAwqrCpGL/FthRYFdfUMSTkr54hupKSpbZxe4ytwaWKY+SV9F32JMgOGtCZsnF+fmJZmUfoRMCQ1h3Wu/YQCde/OTpT56+kqd9wX85xbNrswGtJPtjfvPXa4j1DNQQ4M2J9A10sbFe/f065p4K8PZ0BhG9Ac3m6Dfo2Qfvrf9vkfqCBxSdV3HHq8Wev0Pw6K+62PBqseyXBScm8WrB39PtNd8Ivix4i7GxdME4m6beAenzcryjyjjeOiEhDcl35zUpldoK0I0NsXr768XlG05RRhBzwppHdQrlxeDsHLKHQeWBs7XV2m5RstWOAQsOBKYrNtqvaBiIvJTY2ts2UZKYygKVUQlkH22tDEMjnVUmJkZSkAZBItXXQEtluxq6m6p7HHRw6k/M7KSK3x3v2Q/foHV5cxz30WQDjY3Ii+f4NeybieCwQRajcPlkSo+qh+E8ahIyZdZ2vPZBJKpgC4oaEkBj+C0oU3caordmJmw7yfr2ms0756ynTuceNjG6qixD59A7DXFtfTsDVfKXl8Q1a8FAjS2amFoicYPauvR9sOUF10qgCalYY+Tfbz+yzeXs/EncUJXldrud1aabWV+Xg10ooXb67HJ2Pmtiq9PyQN+Gm/XQ5QnsLdQ1+pmyZVIpJyWfT1PiBSfy5kzOZxfklBjfgpnCPNyD/Fn2k7+s//9PcGBnxG+xdBqUSaubyrgf5nXBR0+knjNYFpwmkw73+xUE/OR135P4sUNPO2JZ8A14BSuq12LZF+Oc0Ih/xR3lmrM+oymlGoLu8qA82019MVpcCYEu/lB3unZub+b3vOCr4V+2tZJsPGzpDwS2vOLpV5is0ypJsj3XYOoOatLNPmkyYFgwx2kmSMX4QlmNR2Y3Qfh8G+RE6ElpnTTZ7/Ou6PuDfj76R4vDCsra1MRl3/ffAdYZS5k=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},b=void 0,v={id:"superplatform/add-thread",title:"Add Thread",description:"Create a new chat thread and add the requesting user to it.",source:"@site/docs/superplatform/add-thread.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/add-thread",permalink:"/docs/superplatform/add-thread",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-thread",title:"Add Thread",description:"Create a new chat thread and add the requesting user to it.",sidebar_label:"Add Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJztVt9v2zYQ/lcIPitWmqzAoKelRTFkK5YgTp8cAz2TZ4ktRTIkZdcz9L8XR0q2knjFggF76osgHe/Hd3ffHbXnEoPwykVlDa/4e48QkQEzuGWigchi4xEkAyMZSMlig8zjY4chKlOzLqBn0TIVZw/mDh875TEkpc9kfRY2osoeKpFcf2YOfatCUNbMeMGtQw8U/FryioOU90mbF3yI8s7KHa/2XFgT0UR6Bee0Esmq/BII954H0WAL9OY8+YwKA33l4C/lGY28Sg7jziGveIhemZr3BVfypDiqqJFOnhbtnsTMrlPeOSCl9tLcOiWuZTjhYThhEtfKYGDbRomGJYMwcctWqK2pA4t29mDu87EAw7zt6kbv2Io06T0SHggsQh3Y2vrBQSBgKmIbTieYBeA97Oi7c/IHVaLmn0znUz5IwJUMY2lIn1KzCXJAwqrCpGL/FthRYFdfUMSTkr54hupKSpbZxe4ytwaWKY+SV9F32JMgOGtCZsnF+fmJZmUfoRMCQ1h3Wu/YQCde/OTpT56+kqd9wX85xbNrswGtJPtjfvPXa4j1DNQQ4M2J9A10sbFe/f065p4K8PZ0BhG9Ac3m6Dfo2Qfvrf9vkfqCBxSdV3HHq8Wev0Pw6K+62PBqseyXBScm8WrB39PtNd8Ivix4i7GxdME4m6beAenzcryjyjjeOiEhDcl35zUpldoK0I0NsXr768XlG05RRhBzwppHdQrlxeDsHLKHQeWBs7XV2m5RstWOAQsOBKYrNtqvaBiIvJTY2ts2UZKYygKVUQlkH22tDEMjnVUmJkZSkAZBItXXQEtluxq6m6p7HHRw6k/M7KSK3x3v2Q/foHV5cxz30WQDjY3Ii+f4NeybieCwQRajcPlkSo+qh+E8ahIyZdZ2vPZBJKpgC4oaEkBj+C0oU3caordmJmw7yfr2ms0756ynTuceNjG6qixD59A7DXFtfTsDVfKXl8Q1a8FAjS2amFoicYPauvR9sOUF10qgCalYY+Tfbz+yzeXs/EncUJXldrud1aabWV+Xg10ooXb67HJ2Pmtiq9PyQN+Gm/XQ5QnsLdQ1+pmyZVIpJyWfT1PiBSfy5kzOZxfklBjfgpnCPNyD/Fn2k7+s//9PcGBnxG+xdBqUSaubyrgf5nXBR0+knjNYFpwmkw73+xUE/OR135P4sUNPO2JZ8A14BSuq12LZF+Oc0Ih/xR3lmrM+oymlGoLu8qA82019MVpcCYEu/lB3unZub+b3vOCr4V+2tZJsPGzpDwS2vOLpV5is0ypJsj3XYOoOatLNPmkyYFgwx2kmSMX4QlmNR2Y3Qfh8G+RE6ElpnTTZ7/Ou6PuDfj76R4vDCsra1MRl3/ffAdYZS5k=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete a Message",permalink:"/docs/superplatform/delete-message"},next:{title:"Delete a Thread",permalink:"/docs/superplatform/delete-thread"}},_={},q=[];function k(e){const s={code:"code",p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Add Thread"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/chat-svc/thread"}),"\n",(0,i.jsxs)(s.p,{children:["Create a new chat thread and add the requesting user to it.\nRequires the ",(0,i.jsx)(s.code,{children:"chat-svc:thread:create"})," permission."]}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Add Thread Request"})})}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"thread"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Title of the thread.",type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"topicIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"TopicIds defines which topics the thread belongs to.\nTopics can roughly be thought of as tags for threads.",items:{type:"string"},type:"array"}}),(0,i.jsx)(u(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"userIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"UserIds the ids of the users who can see this thread.",items:{type:"string"},type:"array"}})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Thread successfully created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"thread"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Title of the thread.",type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"topicIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"TopicIds defines which topics the thread belongs to.\nTopics can roughly be thought of as tags for threads.",items:{type:"string"},type:"array"}}),(0,i.jsx)(u(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"userIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"UserIds the ids of the users who can see this thread.",items:{type:"string"},type:"array"}})]})]})})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "thread": {\n    "createdAt": "string",\n    "id": "string",\n    "title": "string",\n    "topicIds": [\n      "string"\n    ],\n    "updatedAt": "string",\n    "userIds": [\n      "string"\n    ]\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(x(),{className:"openapi-tabs__schema",children:(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(g.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(x(),{className:"openapi-tabs__schema",children:(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(g.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(x(),{className:"openapi-tabs__schema",children:(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function N(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);