(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),o=n.n(r),i=(n(25),n(9)),s=n(4),l=n(5),u=n(7),h=n(6),d=(n(26),n(19)),g=n.n(d),m=n(0),j=function(){return Object(m.jsx)("div",{className:"Loader",children:Object(m.jsx)(g.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100})})},p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={query:" "},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),n}(a.Component),b=n(20),f=n.n(b),y=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,c=void 0===a?1:a;e.largeImageURL;return f.a.get("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(n,"&page=").concat(c,"&per_page=12&key=").concat("21271693-9f15050c6f3761d48e024dcb2")).then((function(e){return e.data.hits}))},v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("modal didmount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("modal willunmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"Overlay ",onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:"Modal",children:this.props.children})})}}]),n}(a.Component),O=function(e){var t=e.onClick;return Object(m.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more..."})},k=function(e){var t=e.key,n=e.src,a=e.alt,c=e.onClick;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{className:"ImageGalleryItem-image",src:n,alt:a,onClick:c})},t)},w=void 0,C=function(e){var t=e.pictures;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,a=e.tags,c=e.largeImageURL;return Object(m.jsx)(k,{src:n,alt:a,onClick:function(){w.handleItemClick(c,a)}},t)}))})},x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pictures:[],currentPage:1,searchQuery:"",showModal:!1,largeImageURL:"",isLoading:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,pictures:[]})},e.fetchPictures=function(){var t=e.state,n=t.currentPage,a=t.searchQuery,c=t.largeImageURL;e.setState({isLoading:!0}),y({currentPage:n,searchQuery:a,largeImageURL:c}).then((function(t){e.setState((function(e){return{pictures:[].concat(Object(i.a)(e.pictures),Object(i.a)(t)),currentPage:e.currentPage+1}})),e.scrollWindow()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleItemClick=function(t,n){e.setState({largeImageURL:t}),e.toggleModal()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchPictures()}},{key:"scrollWindow",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.pictures,n=e.showModal,a=e.largeImageURL,c=e.isLoading;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p,{onSubmit:this.onChangeQuery}),Object(m.jsx)(C,{pictures:t}),c&&Object(m.jsx)(j,{}),t.length>0&&Object(m.jsx)(O,{onClick:this.fetchPictures}),n&&Object(m.jsx)(v,{onClose:this.toggleModal,children:Object(m.jsx)("img",{src:a,alt:""})})]})}}]),n}(a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),S()}},[[66,1,2]]]);
//# sourceMappingURL=main.5dfd43b3.chunk.js.map