"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[5202],{6789:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>_,default:()=>k,frontMatter:()=>y,metadata:()=>b,toc:()=>N});var n=a(74848),l=a(28453),i=a(91366),r=a.n(i),t=(a(6050),a(57742)),c=a.n(t),o=(a(67792),a(27362)),d=a.n(o),m=(a(36683),a(81124)),p=a.n(m),h=a(60674),x=a.n(h),j=a(23397),u=a.n(j),g=(a(26651),a(51107)),f=(a(77675),a(19365));const y={id:"get",title:"Get",description:"Fetch the current configuration from the server",sidebar_label:"Get",hide_title:!0,hide_table_of_contents:!0,api:"eJylVFFv2zYQ/ivEPRaq5CYrMOhp7rYWBrI1iB1gQJqHM3WS2FIkd6TseYL+e3GSnSZ1MLTdk+zj8fu+++6OA1QUNZuQjHdQwltKulWpJaV7ZnJJae9q0/SMkqFq9t10HIl3xJABUwzeRYpQDnCxWMjnKeavzyIxJTa0o0rFXmuKse6tPUAG2rtELgkOhmCNnvKLj1HABoi6pQ7lV2AfiJOZqWf08ziGcB60vmmMa34zEbeWKgmlQyAoYeu9JXQwjtkp5LcfSScYM6j83lmP1Tng6eSttxXxI7yY2LjmeTgTb3qXTEcrFxPao5Cn5r1Qm9ZEVVtsVMVmR1Gh6ozzrG7/UjVh6pnKD+5DUi+Uqafe9JFYtRiV80mZE/Z0xDOh2pOKrd8rdGr153qzvLo6Qmz7lLzL5HsGh5YJq8N/Qx5xHgjUerO82Txkzfj5nAXZme0ZdL4i+0x/5yn6Q05X1Tc5/E0Rif20eHXu/K3DPrWezb9Ufc9Yfi1LCF4/txcrl4gdWrWedkn9zuz5/zFJfdhEKO9O+3CfQUep9RWUEHxMkEHA1EIJxZxRNCTBeZ/l5gA9WzkvrNdoWx9T+frni8tXMN5Lnu7ZpMNaVMydeYPR6GUvoA+a2pSCoE5Z0l/Jmfw3rvbHfU2opyqpQyOMES3FX6JxTW8xsXe59h1k4HDCWF6v1LoPwbMInkUKTyyL4qtLRes7mjb2ieM3vVPoKlXRjqwPKpKtX0qBVKnlSmEIMYcMrNHkIom0E/W76yu1u8wXZ8T7/T5vXJ97borjvVhgE+zLy3yRt6mzIiMRd/F9LY02+uSPyN5j0xDnxhdTSiEbYZKVlPWXktQb1J/IyRhKk+ZiFvmFQEtTO3SPxL6bGvqk8uHLUP3AE3/saaJ/UhEsmmlNJxuG4zA9jFsGMk73GYirEh+GLUa6ZTuOEv67Jz5AeXefwQ7ZyOsr/8YMWsLp5bwb4BMdxHOtKUglO7S98J8tw/h4uK/frzcwjp8BBVNe+A==",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron-backend",custom_edit_url:null},_=void 0,b={id:"singulatron/get",title:"Get",description:"Fetch the current configuration from the server",source:"@site/docs/singulatron/get.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/get",permalink:"/docs/singulatron/get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get",title:"Get",description:"Fetch the current configuration from the server",sidebar_label:"Get",hide_title:!0,hide_table_of_contents:!0,api:"eJylVFFv2zYQ/ivEPRaq5CYrMOhp7rYWBrI1iB1gQJqHM3WS2FIkd6TseYL+e3GSnSZ1MLTdk+zj8fu+++6OA1QUNZuQjHdQwltKulWpJaV7ZnJJae9q0/SMkqFq9t10HIl3xJABUwzeRYpQDnCxWMjnKeavzyIxJTa0o0rFXmuKse6tPUAG2rtELgkOhmCNnvKLj1HABoi6pQ7lV2AfiJOZqWf08ziGcB60vmmMa34zEbeWKgmlQyAoYeu9JXQwjtkp5LcfSScYM6j83lmP1Tng6eSttxXxI7yY2LjmeTgTb3qXTEcrFxPao5Cn5r1Qm9ZEVVtsVMVmR1Gh6ozzrG7/UjVh6pnKD+5DUi+Uqafe9JFYtRiV80mZE/Z0xDOh2pOKrd8rdGr153qzvLo6Qmz7lLzL5HsGh5YJq8N/Qx5xHgjUerO82Txkzfj5nAXZme0ZdL4i+0x/5yn6Q05X1Tc5/E0Rif20eHXu/K3DPrWezb9Ufc9Yfi1LCF4/txcrl4gdWrWedkn9zuz5/zFJfdhEKO9O+3CfQUep9RWUEHxMkEHA1EIJxZxRNCTBeZ/l5gA9WzkvrNdoWx9T+frni8tXMN5Lnu7ZpMNaVMydeYPR6GUvoA+a2pSCoE5Z0l/Jmfw3rvbHfU2opyqpQyOMES3FX6JxTW8xsXe59h1k4HDCWF6v1LoPwbMInkUKTyyL4qtLRes7mjb2ieM3vVPoKlXRjqwPKpKtX0qBVKnlSmEIMYcMrNHkIom0E/W76yu1u8wXZ8T7/T5vXJ97borjvVhgE+zLy3yRt6mzIiMRd/F9LY02+uSPyN5j0xDnxhdTSiEbYZKVlPWXktQb1J/IyRhKk+ZiFvmFQEtTO3SPxL6bGvqk8uHLUP3AE3/saaJ/UhEsmmlNJxuG4zA9jFsGMk73GYirEh+GLUa6ZTuOEv67Jz5AeXefwQ7ZyOsr/8YMWsLp5bwb4BMdxHOtKUglO7S98J8tw/h4uK/frzcwjp8BBVNe+A==",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron-backend",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Threads",permalink:"/docs/singulatron/get-threads"},next:{title:"Do",permalink:"/docs/singulatron/do"}},v={},N=[];function L(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get"}),"\n",(0,n.jsx)(c(),{method:"post",path:"/config/get"}),"\n",(0,n.jsx)(s.p,{children:"Fetch the current configuration from the server"}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(f.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Current configuration retrieved successfully"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"config"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"app"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"loggingDisabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})})]})}),(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"download"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"downloadFolder",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(x(),{collapsible:!1,name:"isRuntimeInstalled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"* This flag drives a minor UX feature:\n\t * if the user has not installed the runtime we show an INSTALL\n\t * button, but if the user has already installed the runtime we show\n\t * we show a START runtime button.\n\t *",type:"boolean"}}),(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"model"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"currentModelId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})]})]})})})]})}),(0,n.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:'{\n  "config": {\n    "app": {\n      "loggingDisabled": true\n    },\n    "download": {\n      "downloadFolder": "string"\n    },\n    "isRuntimeInstalled": true,\n    "model": {\n      "currentModelId": "string"\n    }\n  }\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(f.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(u(),{className:"openapi-tabs__schema",children:(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,n.jsxs)(f.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(u(),{className:"openapi-tabs__schema",children:(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(L,{...e})}):L(e)}}}]);