"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[7730],{16799:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>w,contentTitle:()=>N,default:()=>S,frontMatter:()=>v,metadata:()=>_,toc:()=>k});var l=s(74848),r=s(28453),i=s(91366),n=s.n(i),t=(s(6050),s(57742)),o=s.n(t),d=(s(67792),s(27362)),m=s.n(d),c=s(36683),p=s.n(c),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),f=s(23397),g=s.n(f),b=(s(26651),s(51107)),y=(s(77675),s(19365));const v={id:"add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",sidebar_label:"Add a User to an Organization",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVlFv2zYQ/ivEPW2AYqVJCwx6Wrp1g7diCeLkKfXDWTxLbCmSJSm7rqH/XhwlJXLsFd1LsBdLoo/H7/vI+3h7kBRKr1xU1kABV1rbbRBoBLaxtl59JSnaQF5EK1BKgcbGmvzTmAiOSrVWpbC+QqO+Iqeaibua+qCt0lqsSGAIqjIkp1O81SS2KtbKiFjTYQrIwDry6WMuoQCU8j6Qv7PXkzDIwKHHhiL5AMXD/hmjaayY/w4ZKB52GGvIwGBDUMB03bmEDDx9bpUnCUX0LWUQypoahGIPced4RohemQq6btkHU4hvrdxxRGlNJBP5FZ3Tqkxp84+B8ewnqZxnflFR4C8Wi2keL5GNI3b1kcoIHQ892zcpxf2wJQeMb3tsR5Q6HgjOmtCvfnF+zo/DrCkjSklShLYsKYR1q/UOsh/neIS8y+D1qbXmZoNaSfHX4vqf/7LAoYjkvfU/qGFC8uoEa/N09l8QyeUxkj+sXykpybwgjNfHMKYHKk9nwtgo1rY1L6fPm9NnJpI3qMWC/Ia8eJdyvgykLoNAZetV3CXXeUvoyV+1sYbiYcm2ELFiQ+qraLEpYZlBQ7G27GXOpqJMNlRAzsV/FjZlPnWifH/oS10KA16Y6fZu13rNCXJtS9S1DbF488vF5StgBCPABRPuOU5hPpfzbudIfBhCPoBYW74NSIrVLpk2liTQSBHtJzICy95PxNrbJrl3Ihp4L1RJ4r2tlBFkpLPKxNlovDWhTCQG670aam0080FpdOpv2iXtedtunyz23RdsnKapZT7uFK+xtqMJY5mOADWoWKOAmsKvQZmq1Ri9NbPSNhMgN3OxaJ2znjeml7WO0RV5HlpH3mmMa+ubGaocjgz42pw5T40KJK7mYoxNcjWq9Db0qgRBpQ27EKlhRbQqyYTEZUTx5817sbmcnR9gCEWeb7fbWWXamfVVPswLOVZOn13Ozmd1bDSjiuSbcL0eNmFCYYtVRX6mbJ5CcpZaRdYRFlN6kAGfrZ7V+eyCk/JhbdBMYXIr8HjjoBHPruQDcSZX4v+twRhOW6QvMXcalWG6Sff9UJsPMNYm9yOHLIujviEV6DIDLkSeu9+vMNC9113Hw59b8mwXyww26BWuWH9uWVTgdwnFGnWg7+j30+1wjf8sjjubk2zGgjJ8b29Qt/wFGXyi3XHn0y27bCxRBtYH/dYvf8YGMUly5K1dNs64Kkty8buxUze8uV7cQQaroYNqrOQ5Hrfct+C2B2yTHMnF0tgeNJqqxYpj+5xsFzh425ORMKRsfGFWJyV5bkQ9Ef5lWien7Pe9TXXdY3z/17/OeHS/Ppp3aNl13TeIDwRY",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},N=void 0,_={id:"superplatform/add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",source:"@site/docs/superplatform/add-user-to-organization.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/add-user-to-organization",permalink:"/docs/superplatform/add-user-to-organization",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",sidebar_label:"Add a User to an Organization",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVlFv2zYQ/ivEPW2AYqVJCwx6Wrp1g7diCeLkKfXDWTxLbCmSJSm7rqH/XhwlJXLsFd1LsBdLoo/H7/vI+3h7kBRKr1xU1kABV1rbbRBoBLaxtl59JSnaQF5EK1BKgcbGmvzTmAiOSrVWpbC+QqO+Iqeaibua+qCt0lqsSGAIqjIkp1O81SS2KtbKiFjTYQrIwDry6WMuoQCU8j6Qv7PXkzDIwKHHhiL5AMXD/hmjaayY/w4ZKB52GGvIwGBDUMB03bmEDDx9bpUnCUX0LWUQypoahGIPced4RohemQq6btkHU4hvrdxxRGlNJBP5FZ3Tqkxp84+B8ewnqZxnflFR4C8Wi2keL5GNI3b1kcoIHQ892zcpxf2wJQeMb3tsR5Q6HgjOmtCvfnF+zo/DrCkjSklShLYsKYR1q/UOsh/neIS8y+D1qbXmZoNaSfHX4vqf/7LAoYjkvfU/qGFC8uoEa/N09l8QyeUxkj+sXykpybwgjNfHMKYHKk9nwtgo1rY1L6fPm9NnJpI3qMWC/Ia8eJdyvgykLoNAZetV3CXXeUvoyV+1sYbiYcm2ELFiQ+qraLEpYZlBQ7G27GXOpqJMNlRAzsV/FjZlPnWifH/oS10KA16Y6fZu13rNCXJtS9S1DbF488vF5StgBCPABRPuOU5hPpfzbudIfBhCPoBYW74NSIrVLpk2liTQSBHtJzICy95PxNrbJrl3Ihp4L1RJ4r2tlBFkpLPKxNlovDWhTCQG670aam0080FpdOpv2iXtedtunyz23RdsnKapZT7uFK+xtqMJY5mOADWoWKOAmsKvQZmq1Ri9NbPSNhMgN3OxaJ2znjeml7WO0RV5HlpH3mmMa+ubGaocjgz42pw5T40KJK7mYoxNcjWq9Db0qgRBpQ27EKlhRbQqyYTEZUTx5817sbmcnR9gCEWeb7fbWWXamfVVPswLOVZOn13Ozmd1bDSjiuSbcL0eNmFCYYtVRX6mbJ5CcpZaRdYRFlN6kAGfrZ7V+eyCk/JhbdBMYXIr8HjjoBHPruQDcSZX4v+twRhOW6QvMXcalWG6Sff9UJsPMNYm9yOHLIujviEV6DIDLkSeu9+vMNC9113Hw59b8mwXyww26BWuWH9uWVTgdwnFGnWg7+j30+1wjf8sjjubk2zGgjJ8b29Qt/wFGXyi3XHn0y27bCxRBtYH/dYvf8YGMUly5K1dNs64Kkty8buxUze8uV7cQQaroYNqrOQ5Hrfct+C2B2yTHMnF0tgeNJqqxYpj+5xsFzh425ORMKRsfGFWJyV5bkQ9Ef5lWien7Pe9TXXdY3z/17/OeHS/Ppp3aNl13TeIDwRY",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Create an Organization",permalink:"/docs/superplatform/create-organization"},next:{title:"Remove a User from an Organization",permalink:"/docs/superplatform/remove-user-from-organization"}},w={},k=[];function z(e){const a={p:"p",...(0,r.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Add a User to an Organization"}),"\n",(0,l.jsx)(o(),{method:"post",path:"/user-svc/organization/{organizationId}/user"}),"\n",(0,l.jsx)(a.p,{children:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization."}),"\n",(0,l.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Organization ID",in:"path",name:"organizationId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)(m(),{className:"openapi-tabs__mime",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(a.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(a.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,l.jsx)(a.p,{children:"Add User to Organization Request"})})}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n(),{label:void 0,id:void 0,children:[(0,l.jsxs)(y.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"User added successfully"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"object"})})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"403",value:"403",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Forbidden"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Organization/User not found"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function S(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(z,{...e})}):z(e)}}}]);