import{r as l,j as e}from"./index-CjFm1tIR.js";import{a as z}from"./axios-BimPEqV4.js";const P=()=>{const[n,m]=l.useState([]),[c,w]=l.useState(""),[i,j]=l.useState(null),[B,y]=l.useState([]),[o,d]=l.useState(null),[N,x]=l.useState(!1),[b,U]=l.useState(!1),[v,p]=l.useState(!1),[S,u]=l.useState(!1),[I,g]=l.useState(!1),[F,f]=l.useState(!1),h=l.useRef(null),D=a=>{const t=a.target.files;if(t.length===0)return;const r=[];for(let s=0;s<t.length;s++)t[s].type.split("/")[0]==="image"&&(t[s].size>2e6?x(!0):n.some(M=>M.name===t[s].name)||(x(null),n.length<1?(f(!1),g(!1),r.push({name:t[s].name,url:URL.createObjectURL(t[s]),size:t[s].size,file:t[s]})):f(!0)));m(s=>[...s,...r])},E=()=>{h.current.click()},C=a=>{m(t=>t.filter((r,s)=>s!==a)),d(null)},k=a=>(a/1048576).toFixed(3),A=async a=>{if(a.preventDefault(),n.length===0){g(!0);return}y({images:n,title:c,description:i});const t=new FormData;t.append("title",c),t.append("description",i),n.forEach(r=>{t.append("file",r.file)});try{await z.post("http://localhost:4000/api/user/uploadarticle",t,{headers:{"Content-Type":"multipart/form-data"}}),p(!0),u(!1)}catch(r){u(!0),p(!1),console.log(r)}};return e.jsxs("div",{className:"bg-[#F9FAFB] w-full h-auto ",children:[N&&e.jsxs("p",{className:"bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/warning.png",className:"w-10 h-10",alt:"warning"}),"File size exceeds 6mb"]}),F&&e.jsxs("p",{className:"bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/warning.png",className:"w-10 h-10",alt:"warning"}),"Maximum 1 image allowed"]}),b&&e.jsxs("p",{className:"bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/warning.png",className:"w-10 h-10",alt:"warning"}),"Image already added. Please select another image"]}),I&&e.jsxs("p",{className:"bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/warning.png",className:"w-10 h-10",alt:"warning"}),"Please select an image to upload"]}),v&&e.jsxs("p",{className:"bg-green-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/checkmark.png",className:"w-10 h-10",alt:"checkmark"}),"Article uploaded successfully"]}),S&&e.jsxs("p",{className:"bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]",children:[e.jsx("img",{src:"./header/warning.png",className:"w-10 h-10",alt:"warning"}),"Failed to upload article. Please try again"]}),e.jsx("div",{className:"pt-5 md:mt-16 mx-5 md:mx-20",children:e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] bg-gray-100 flex flex-row flex-wrap gap-10 p-5 md:p-16 ",children:e.jsx("div",{className:"rounded-xl border border-[#E1E6EF] bg-white p-5 md:p-10 flex flex-col gap-10 justify-start items-start",children:e.jsxs("form",{className:"w-full lg:w-[550px]",children:[e.jsx("p",{className:"text-[36px] font-bold text-[#727272]] ",children:"Add New Article"}),e.jsxs("div",{className:"flex flex-col gap-5 lg:gap-10 w-full my-3",children:[e.jsx("input",{type:"text",value:c,onChange:a=>w(a.target.value),placeholder:"Article Title",className:"inputContact my-3 w-full "}),e.jsx("textarea",{onChange:a=>j(a.target.value),name:"contactMessage",id:"contactMessage",className:"inputContact my-3 w-full",placeholder:"Type the article description here",rows:5}),e.jsx("input",{type:"file",name:"file",multiple:!0,ref:h,onChange:D,className:"hidden"}),e.jsx("div",{className:"w-full h-auto flex flex-row justify-center md:justify-start items-start flex-wrap mb-5 gap-5 px-5",children:n.length!==0?n.map((a,t)=>e.jsxs("div",{className:"w-[200px] relative text-center",children:[e.jsx("img",{src:"./header/bin.png",className:"absolute w-8 h-8 top-4 right-[15px] text-[40px] cursor-pointer text-[#4A16D8]",onClick:()=>C(t),alt:"Delete"}),e.jsx("img",{onClick:()=>d(a),className:`${o&&o.name===a.name?"border-8 border-gray-300":""} cursor-pointer w-full h-[200px] rounded-lg object-cover`,src:a.url,alt:a.name}),e.jsxs("span",{className:"flex flex-row justify-center gap-2 font-bold mt-2",children:[k(a.size),e.jsx("p",{children:"MB"})]}),e.jsx("button",{onClick:A,className:"px-8 py-1 rounded-full bg-[#4A16D8] text-white text-[24px] mt-5 mb-7",children:"Upload"})]},t)):e.jsx("div",{className:"mx-auto mt-10 text-center",children:e.jsxs("span",{className:"text-[24px] mx-auto",children:["Select your image"," ",e.jsx("p",{onClick:E,className:"text-[#4A16D8] cursor-pointer",children:"Browse"})]})})})]})]})})})})]})};export{P as default};