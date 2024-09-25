"use strict";(self["webpackChunkvue_cart"]=self["webpackChunkvue_cart"]||[]).push([[140],{6807:function(a,e,t){t.d(e,{C:function(){return s},j:function(){return r}});const r=async()=>{try{const a=await fetch("https://fakestoreapi.com/products/categories");if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.warn("Error: ",a),a}},s=async()=>{try{const a=await fetch("https://fakestoreapi.com/products");if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.warn("Error: ",a),a}}},7526:function(a,e,t){t.d(e,{A:function(){return u}});var r=t(6768),s=t(4232);const n={class:"lead"};function o(a,e,t,o,c,l){return(0,r.uX)(),(0,r.CE)("div",{class:(0,s.C4)(`alert alert-${t.alert_type} ${t.alert_class}`),role:"alert"},[(0,r.Lk)("h4",{class:(0,s.C4)(`alert-heading ${t.heading_class}`)},(0,s.v_)(t.title),3),(0,r.Lk)("p",n,(0,s.v_)(t.message),1),(0,r.RG)(a.$slots,"default")],2)}var c={name:"AlertMessage",props:{alert_class:{type:String,default:""},heading_class:{type:String,default:""},alert_type:String,title:String,message:String}},l=t(1241);const i=(0,l.A)(c,[["render",o]]);var u=i},1765:function(a,e,t){t.d(e,{A:function(){return v}});var r=t(6768),s=t(4232);const n={class:"container-fluid"},o={class:"row pt-4 pb-2 mt-5 bg-accent2 footerRow"},c={class:"col-md-4 col-sm-12"},l={class:"lead text-white"},i={class:"col-12 position-relative"};function u(a,e,t,u,d,g){return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("footer",o,[e[2]||(e[2]=(0,r.Lk)("div",{class:"col-md-4 col-sm-12"},[(0,r.Lk)("h3",{class:"text-white"},"Vue Cart")],-1)),(0,r.Lk)("div",c,[(0,r.Lk)("p",l,"© "+(0,s.v_)(g.year)+" Vue Cart. All rights reserved.",1)]),e[3]||(e[3]=(0,r.Fv)('<div class="col-md-4 col-sm-12" data-v-88458554><section class="footerSection" data-v-88458554><i class="fa-brands fa-facebook fa-2xl" data-v-88458554></i><i class="fa-brands fa-instagram fa-2xl" data-v-88458554></i><i class="fa-brands fa-linkedin fa-2xl" data-v-88458554></i><i class="fa-brands fa-twitter fa-2xl" data-v-88458554></i></section></div>',1)),(0,r.Lk)("div",i,[(0,r.Lk)("div",{class:"arrow-icon cursor-pointer",onClick:e[0]||(e[0]=(...a)=>g.scrollTop&&g.scrollTop(...a))},e[1]||(e[1]=[(0,r.Lk)("i",{class:"fa-solid fa-up-long text-white fa-2xl"},null,-1)]))])])])}var d={name:"FooterPage",data(){return{currentYear:(new Date).getFullYear()}},computed:{year(){return`2020-${this.currentYear}`}},methods:{scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}}},g=t(1241);const p=(0,g.A)(d,[["render",u],["__scopeId","data-v-88458554"]]);var v=p},509:function(a,e,t){t.d(e,{A:function(){return f}});var r=t(6768);const s={id:"navbar",class:"navbar navbar-expand-lg navbar-light bg-accent2"},n={class:"container-fluid"},o={class:"collapse navbar-collapse",id:"navbarSupportedContent"},c={class:"navbar-nav me-auto mb-2 mb-lg-0"},l={class:"nav-item"},i={class:"nav-item"},u={class:"nav-item"},d={class:"nav-item"},g={class:"nav-item"};function p(a,e,t,p,v,b){const k=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",s,[(0,r.Lk)("div",n,[(0,r.bF)(k,{class:"navbar-brand",to:"/","aria-current":"page"},{default:(0,r.k6)((()=>e[0]||(e[0]=[(0,r.eW)("Vue Cart")]))),_:1}),e[6]||(e[6]=(0,r.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,r.Lk)("div",o,[(0,r.Lk)("ul",c,[(0,r.Lk)("li",l,[(0,r.bF)(k,{class:"nav-link",to:"/","aria-current":"page"},{default:(0,r.k6)((()=>e[1]||(e[1]=[(0,r.eW)("Home")]))),_:1})]),(0,r.Lk)("li",i,[(0,r.bF)(k,{class:"nav-link",to:"/checkout","aria-current":"page"},{default:(0,r.k6)((()=>e[2]||(e[2]=[(0,r.eW)("Checkout")]))),_:1})]),(0,r.Lk)("li",u,[(0,r.bF)(k,{class:"nav-link",to:"/products","aria-current":"page"},{default:(0,r.k6)((()=>e[3]||(e[3]=[(0,r.eW)("Products")]))),_:1})]),(0,r.Lk)("li",d,[(0,r.bF)(k,{class:"nav-link",to:"/about","aria-current":"page"},{default:(0,r.k6)((()=>e[4]||(e[4]=[(0,r.eW)("About")]))),_:1})]),(0,r.Lk)("li",g,[(0,r.bF)(k,{class:"nav-link",to:"/contact","aria-current":"page"},{default:(0,r.k6)((()=>e[5]||(e[5]=[(0,r.eW)("Contact")]))),_:1})])])])])])}var v={name:"NavBar"},b=t(1241);const k=(0,b.A)(v,[["render",p]]);var f=k},5676:function(a,e,t){t.d(e,{A:function(){return i}});var r=t(6768);const s={key:0,class:"row pt-5 d-flex justify-content-center"};function n(a,e,t,n,o,c){return t.loading?((0,r.uX)(),(0,r.CE)("div",s,e[0]||(e[0]=[(0,r.Lk)("div",{class:"spinner-border text-success",role:"status"},[(0,r.Lk)("span",{class:"visually-hidden"},"Loading...")],-1)]))):(0,r.Q3)("",!0)}var o={name:"SpinnerLoader",props:["loading"]},c=t(1241);const l=(0,c.A)(o,[["render",n]]);var i=l},140:function(a,e,t){t.r(e),t.d(e,{default:function(){return j}});var r=t(6768);const s={class:"products wrapper"},n={class:"content"},o={class:"container"};function c(a,e,t,c,l,i){const u=(0,r.g2)("NavBar"),d=(0,r.g2)("SpinnerLoader"),g=(0,r.g2)("ProductsTabs"),p=(0,r.g2)("FooterPage");return(0,r.uX)(),(0,r.CE)("main",s,[(0,r.Lk)("section",n,[(0,r.bF)(u),(0,r.Lk)("div",o,[(0,r.bF)(d,{loading:l.loading},null,8,["loading"]),(0,r.bF)(g,{error:l.error,categories:l.categories,groupedProducts:l.groupedProducts,selectedTab:l.selectedTab,changeTab:i.changeTab},null,8,["error","categories","groupedProducts","selectedTab","changeTab"])])]),(0,r.bF)(p)])}var l=t(509),i=t(5676),u=t(6807),d=t(4232);const g={class:"row pt-4"},p={key:0,class:"col-12"},v={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},b=["id","data-bs-target","aria-controls","aria-selected","onClick"],k={class:"tab-content",id:"nav-tabContent"},f=["id","aria-labelledby"],h={key:0},m={class:"list-group list-group-products my-4"},L={class:"list-group-item"},y={class:"list-group-item"},C={class:"list-group-item"},w={class:"list-group-item"},T=["src","alt"],_={key:1},P={key:1,class:"col-12 mt-3"};function E(a,e,t,s,n,o){const c=(0,r.g2)("AlertMessage");return(0,r.uX)(),(0,r.CE)("div",g,[e[4]||(e[4]=(0,r.Lk)("div",{class:"col-12"},[(0,r.Lk)("h2",{class:"text-success"},"Check Our Products")],-1)),t.error?((0,r.uX)(),(0,r.CE)("div",P,[(0,r.bF)(c,{alert_type:"danger",title:"Fetching Product Error!",message:t.error},{default:(0,r.k6)((()=>e[3]||(e[3]=[(0,r.Lk)("hr",null,null,-1),(0,r.Lk)("p",{class:"mb-0"},"We encountered an issue while trying to fetch the product information. This could be due to a temporary server problem or connectivity issues.",-1),(0,r.Lk)("p",{class:"mt-2"},"Please try the following:",-1),(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,"Refresh the page to see if the issue resolves itself."),(0,r.Lk)("li",null,"Check your internet connection and ensure you are online."),(0,r.Lk)("li",null,"If the problem persists, please try again later or contact support for assistance.")],-1),(0,r.Lk)("p",{class:"mt-2"},"We apologize for any inconvenience this may have caused and appreciate your understanding as we work to resolve this issue.",-1)]))),_:1},8,["message"])])):((0,r.uX)(),(0,r.CE)("div",p,[(0,r.Lk)("nav",null,[(0,r.Lk)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.categories,((a,e)=>((0,r.uX)(),(0,r.CE)("button",{key:e,class:(0,d.C4)([{active:t.selectedTab===e},"nav-link"]),id:"nav-"+e+"-tab","data-bs-toggle":"tab","data-bs-target":"#nav"+e,type:"button",role:"tab","aria-controls":"nav-"+e,"aria-selected":t.selectedTab===e,onClick:a=>t.changeTab(e)},(0,d.v_)(a),11,b)))),128))])]),(0,r.Lk)("div",k,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.categories,((a,s)=>((0,r.uX)(),(0,r.CE)("div",{key:s,class:(0,d.C4)(["tab-pane fade",{"show active":t.selectedTab===s}]),id:"nav-"+s,role:"tabpanel","aria-labelledby":"nav-"+s+"-tab"},[t.groupedProducts[a]?.length?((0,r.uX)(),(0,r.CE)("div",h,[(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.groupedProducts[a],(a=>((0,r.uX)(),(0,r.CE)("li",{key:a.id},[(0,r.Lk)("ul",m,[(0,r.Lk)("li",L,[e[0]||(e[0]=(0,r.Lk)("span",{class:"badge bg-secondary"},"Title:",-1)),(0,r.eW)(" "+(0,d.v_)(a.title),1)]),(0,r.Lk)("li",y,[e[1]||(e[1]=(0,r.Lk)("span",{class:"badge bg-secondary"},"Price:",-1)),(0,r.eW)(" "+(0,d.v_)(a.price),1)]),(0,r.Lk)("li",C,[e[2]||(e[2]=(0,r.Lk)("span",{class:"badge bg-secondary"},"Description:",-1)),(0,r.eW)(" "+(0,d.v_)(a.description),1)]),(0,r.Lk)("li",w,[(0,r.Lk)("img",{class:"img-fluid productsImg",src:a.image,alt:a.title},null,8,T)])])])))),128))])])):((0,r.uX)(),(0,r.CE)("div",_," No products available in this category. "))],10,f)))),128))])]))])}var F=t(7526),A={name:"ProductTabs",components:{AlertMessage:F.A},props:["error","categories","groupedProducts","selectedTab","changeTab"]},X=t(1241);const x=(0,X.A)(A,[["render",E],["__scopeId","data-v-6ae27a45"]]);var S=x,W=t(1765),I={name:"ProductsPage",components:{NavBar:l.A,SpinnerLoader:i.A,ProductsTabs:S,FooterPage:W.A},data(){return{categories:[],products:[],groupedProducts:{},selectedTab:0,error:!1,loading:!0}},async created(){try{this.loading=!0,this.categories=await(0,u.j)(),this.products=await(0,u.C)(),this.groupProductsByCategory()}catch(a){this.error=a.message}finally{this.loading=!1}},methods:{groupProductsByCategory(){this.groupedProducts={},this.categories.forEach((a=>{this.groupedProducts[a]=this.products.filter((e=>e.category===a))}))},changeTab(a){this.selectedTab=a}}};const $=(0,X.A)(I,[["render",c]]);var j=$}}]);
//# sourceMappingURL=140.f8e5cb0c.js.map