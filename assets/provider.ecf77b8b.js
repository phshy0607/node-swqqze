import{g as l,R as e}from"./vendor.d396be56.js";function c(s={}){const{wrapper:n}=Object.assign({},l(),s.components);return n?e.createElement(n,s,e.createElement(t)):t();function t(){const a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",span:"span"},l(),s.components);return e.createElement(e.Fragment,null,e.createElement(a.h1,null,"Provider"),`
`,e.createElement(a.p,null,"If you need a ",e.createElement(a.code,null,"Provider")," to wrap the document up. You can provider a ",e.createElement(a.code,null,"providePath")," via config file."),`
`,e.createElement(a.h2,null,"Example"),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-js"},e.createElement(a.span,{className:"hljs-comment"},"// docit.config.js"),`
`,e.createElement(a.span,{className:"hljs-keyword"},"import")," { resolve } ",e.createElement(a.span,{className:"hljs-keyword"},"from")," ",e.createElement(a.span,{className:"hljs-string"},"'path'"),`

`,e.createElement(a.span,{className:"hljs-keyword"},"export")," ",e.createElement(a.span,{className:"hljs-keyword"},"default"),` {
  `,e.createElement(a.span,{className:"hljs-attr"},"providerPath"),": ",e.createElement(a.span,{className:"hljs-title hljs-function"},"resolve"),"(__dirname, ",e.createElement(a.span,{className:"hljs-string"},"'../../Provder/index.jsx'"),`)
}
`)),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-jsx"},e.createElement(a.span,{className:"hljs-comment"},"// Provider/index.jsx"),`

`,e.createElement(a.span,{className:"hljs-keyword"},"import")," ",e.createElement(a.span,{className:"hljs-title hljs-class"},"React")," ",e.createElement(a.span,{className:"hljs-keyword"},"from")," ",e.createElement(a.span,{className:"hljs-string"},'"react"'),`;
`,e.createElement(a.span,{className:"hljs-keyword"},"import")," { ",e.createElement(a.span,{className:"hljs-title hljs-class"},"ThemeProvider")," } ",e.createElement(a.span,{className:"hljs-keyword"},"from")," ",e.createElement(a.span,{className:"hljs-string"},'"../src/theme/Provider"'),`;

`,e.createElement(a.span,{className:"hljs-keyword"},"const")," ",e.createElement(a.span,{className:"hljs-title hljs-function"},"Provider")," = (",e.createElement(a.span,{className:"hljs-params"},"props"),`) => {
  `,e.createElement(a.span,{className:"hljs-keyword"},"const"),` { children } = props;
  `,e.createElement(a.span,{className:"hljs-keyword"},"return")," ",e.createElement(a.span,{className:"xml"},e.createElement(a.span,{className:"hljs-tag"},"<",e.createElement(a.span,{className:"hljs-name"},"ThemeProvider"),">"),"{children}",e.createElement(a.span,{className:"hljs-tag"},"</",e.createElement(a.span,{className:"hljs-name"},"ThemeProvider"),">")),`;
};

`,e.createElement(a.span,{className:"hljs-keyword"},"export")," ",e.createElement(a.span,{className:"hljs-keyword"},"default")," ",e.createElement(a.span,{className:"hljs-title hljs-class"},"Provider"),`;
`)))}}export{c as default};
