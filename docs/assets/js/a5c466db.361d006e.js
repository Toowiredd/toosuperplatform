"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[8865],{11127:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>b,default:()=>k,frontMatter:()=>v,metadata:()=>_,toc:()=>E});var i=a(74848),l=a(28453),r=a(91366),d=a.n(r),n=(a(6050),a(57742)),t=a.n(n),c=(a(67792),a(27362)),m=a.n(c),p=a(36683),o=a.n(p),h=a(81124),j=a.n(h),u=a(60674),x=a.n(u),g=a(23397),f=a.n(g),y=(a(26651),a(51107)),N=(a(77675),a(19365));const v={id:"add-message",title:"Add Message",description:"Add a new message to a specific thread.",sidebar_label:"Add Message",hide_title:!0,hide_table_of_contents:!0,api:"eJylVktv3DYQ/ivEXNoCsuQ4DVDo0jpp2m6b1obXOdl7GJOzEhOJZEhqN9uF/nsxenjlXdWo0YsgDmc4z+8j96AoSK9d1NZADpdKCRSGtqKmELAgEa1AERxJvdZSxNITqhQSsI48stVCQQ6o1J+9ASTg0GNNkXyA/G5/5OG2O0EsfoYENAscxhISMFgT5NA7WChIwNOXRntSkEffUAJBllQj5HuIO8e6IXptCmjbVa9MIb61asca0ppIJvIvOldp2YWafQocw35ylPOcSNQUeDUkfbqBIVBcqO7/qGLDjlC01oaCiCUJjBFlWZOJ/XosZomBa6cj1WEmkWQUoPe44/Ukj6du3/Ubwq6fOKAiFffwm07EtsT4TRCN+/EeIDn1JD1hJHUZZ+PQaj68sTsn8dwOO0cBpXOuG6eecd0E8nMePnZyofuK6kdPrC+2pRVbbyM9cX5vfrFeXC5GAZvqINaaqu4gql3czYR4aIR9+EQyzkraZAY7AwjETT+OJ1PcsiA4a0I/Vxfn56eZjoeERkoKYd1U1U6gUsSo+M+TjUpp3sLqejLKPZROcmkT+H4ulIXZYKWV+H159ddLnB8XtHfwaqarBptYWq//fll2cw7ezGcQyRusxJL8hrx47731/89Tm0Ag2Xgddx3BvSX05C+bWEJ+t2I2ilgw98G7EqNYbiSsEqgplpa50tluMDreyyGTJcazsJFZD65sP4KszepHSg1d8D2fNr5iu6yyEqvShpi/+eHi9Stgx2NcSw6/H7FpdCeo3TkS94PKPYi1rSq7JSUedh3roySBRoloP5MRKPtRFmtv6w5ojEkRuLJakvhgC20EGeWsNjEdCb4kVOQPFH85NLwr+AF86PQftOugxk24ORD6+69Yu4qOCPpAyXdjc1aTto6yJ0x3EDLBHVYHXjvIJiw1EQ7kNKUKbdZ2vHNQdhNFNWpuUsCKwk9Bm6KpMHprUmnrSSWuF2LZOGc9D0Tf1zJGl2dZaBx5V2FcW1+nqDM44Zsrc+Y81ToQU9yo2/Wr1tLb0LclCJI27EKkmltSaUkmdBUco/j1+oPYvE7Pn8QQ8izbbrdpYZrU+iIb7EKGhavOXqfnaRnrqrsUyNfhaj1MwSSFLRYF+VTbrFPJuNA6ciNhOU0PEuDh7rM6Ty/4UAZJjWYa5oFe4agUk/v+BS+YYe4ifY2Zq1Cb7vbhAuwHcN7BCM7HGYEE8skbZZzHVQKMRDbZ7x8w0EdftS2LvzTkmSZWCWzQa3zg/PlVpAP/K8jXWAV6JqNvb4Yr5DsxfTzNhj9iyey4qFg1vIIEPtNu+rhqV20y4pKD6beHN8UZs8LE/IQe22S0uJSSXHxWd8p811fLW0jgYXik1Vaxjcct35O47UO1XQk66upke6jQFE2HeujPZNThQGgH9uCQkvGHs5otxjH79Inwl9OaNdnve25q20f9futfLR4pr9fm3qzatv0HlRPszw==",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},b=void 0,_={id:"superplatform/add-message",title:"Add Message",description:"Add a new message to a specific thread.",source:"@site/docs/superplatform/add-message.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/add-message",permalink:"/docs/superplatform/add-message",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-message",title:"Add Message",description:"Add a new message to a specific thread.",sidebar_label:"Add Message",hide_title:!0,hide_table_of_contents:!0,api:"eJylVktv3DYQ/ivEXNoCsuQ4DVDo0jpp2m6b1obXOdl7GJOzEhOJZEhqN9uF/nsxenjlXdWo0YsgDmc4z+8j96AoSK9d1NZADpdKCRSGtqKmELAgEa1AERxJvdZSxNITqhQSsI48stVCQQ6o1J+9ASTg0GNNkXyA/G5/5OG2O0EsfoYENAscxhISMFgT5NA7WChIwNOXRntSkEffUAJBllQj5HuIO8e6IXptCmjbVa9MIb61asca0ppIJvIvOldp2YWafQocw35ylPOcSNQUeDUkfbqBIVBcqO7/qGLDjlC01oaCiCUJjBFlWZOJ/XosZomBa6cj1WEmkWQUoPe44/Ukj6du3/Ubwq6fOKAiFffwm07EtsT4TRCN+/EeIDn1JD1hJHUZZ+PQaj68sTsn8dwOO0cBpXOuG6eecd0E8nMePnZyofuK6kdPrC+2pRVbbyM9cX5vfrFeXC5GAZvqINaaqu4gql3czYR4aIR9+EQyzkraZAY7AwjETT+OJ1PcsiA4a0I/Vxfn56eZjoeERkoKYd1U1U6gUsSo+M+TjUpp3sLqejLKPZROcmkT+H4ulIXZYKWV+H159ddLnB8XtHfwaqarBptYWq//fll2cw7ezGcQyRusxJL8hrx47731/89Tm0Ag2Xgddx3BvSX05C+bWEJ+t2I2ilgw98G7EqNYbiSsEqgplpa50tluMDreyyGTJcazsJFZD65sP4KszepHSg1d8D2fNr5iu6yyEqvShpi/+eHi9Stgx2NcSw6/H7FpdCeo3TkS94PKPYi1rSq7JSUedh3roySBRoloP5MRKPtRFmtv6w5ojEkRuLJakvhgC20EGeWsNjEdCb4kVOQPFH85NLwr+AF86PQftOugxk24ORD6+69Yu4qOCPpAyXdjc1aTto6yJ0x3EDLBHVYHXjvIJiw1EQ7kNKUKbdZ2vHNQdhNFNWpuUsCKwk9Bm6KpMHprUmnrSSWuF2LZOGc9D0Tf1zJGl2dZaBx5V2FcW1+nqDM44Zsrc+Y81ToQU9yo2/Wr1tLb0LclCJI27EKkmltSaUkmdBUco/j1+oPYvE7Pn8QQ8izbbrdpYZrU+iIb7EKGhavOXqfnaRnrqrsUyNfhaj1MwSSFLRYF+VTbrFPJuNA6ciNhOU0PEuDh7rM6Ty/4UAZJjWYa5oFe4agUk/v+BS+YYe4ifY2Zq1Cb7vbhAuwHcN7BCM7HGYEE8skbZZzHVQKMRDbZ7x8w0EdftS2LvzTkmSZWCWzQa3zg/PlVpAP/K8jXWAV6JqNvb4Yr5DsxfTzNhj9iyey4qFg1vIIEPtNu+rhqV20y4pKD6beHN8UZs8LE/IQe22S0uJSSXHxWd8p811fLW0jgYXik1Vaxjcct35O47UO1XQk66upke6jQFE2HeujPZNThQGgH9uCQkvGHs5otxjH79Inwl9OaNdnve25q20f9futfLR4pr9fm3qzatv0HlRPszw==",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update Thread",permalink:"/docs/superplatform/update-thread"},next:{title:"List Messages",permalink:"/docs/superplatform/get-messages"}},q={},E=[];function S(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Add Message"}),"\n",(0,i.jsx)(t(),{method:"post",path:"/chat-svc/thread/{threadId}/message"}),"\n",(0,i.jsx)(s.p,{children:"Add a new message to a specific thread."}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(o(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Add Message Request"})})}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"message"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"assetIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"AssetIds defines the attachments the message has.",items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'Content of the message eg. "Hi, what\'s up?"',type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"threadId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"ThreadId of the message.",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"UserId is the id of the user who wrote the message.\nFor AI messages this field is empty.",type:"string"}})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(d(),{label:void 0,id:void 0,children:[(0,i.jsxs)(N.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Message successfully added"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{additionalProperties:!0,type:"object"},collapsible:!1,discriminator:!1})})]})}),(0,i.jsx)(N.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(N.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(N.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(N.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}}}]);