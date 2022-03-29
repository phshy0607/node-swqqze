import{g as l,R as e}from"./vendor.d396be56.js";function r(t={}){const{wrapper:s}=Object.assign({},l(),t.components);return s?e.createElement(s,t,e.createElement(n)):n();function n(){const a=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",pre:"pre",h2:"h2",span:"span"},l(),t.components);return e.createElement(e.Fragment,null,e.createElement(a.h1,null,"Config File"),`
`,e.createElement(a.blockquote,null,`
`,e.createElement(a.p,null,"Docit will watch your config file in dev mode, if config file changes, dev server will restart."),`
`),`
`,e.createElement(a.p,null,"Docit also support more configs via config file."),`
`,e.createElement(a.p,null,"A valid config file need to be placed under ",e.createElement(a.code,null,".docit")," folder, and named as ",e.createElement(a.code,null,"docit.config.js"),"."),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-arduino"},`|-[your-project-root]
  |-docs
    |-.docit
      |-docit.config.js
    |- your-doc.md
`)),`
`,e.createElement(a.h2,null,"Example"),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-js"},e.createElement(a.span,{className:"hljs-keyword"},"const"),` config = {
  `,e.createElement(a.span,{className:"hljs-comment"},`/**
   * Your document title, will show at the left top corner and also \`document.title\`
   *
   * `,e.createElement(a.span,{className:"hljs-doctag"},"@Default"),` 'Docit'
   */`),`
  `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Docit"'),`,

  `,e.createElement(a.span,{className:"hljs-comment"},`/**
   * Public path for your assets, also check out https://vitejs.dev/config/#base
   *
   * `,e.createElement(a.span,{className:"hljs-doctag"},"@Default"),` '/'
   */`),`
  `,e.createElement(a.span,{className:"hljs-attr"},"publicPath"),": ",e.createElement(a.span,{className:"hljs-string"},'"https://phshy0607.github.io/docit/"'),`,

  `,e.createElement(a.span,{className:"hljs-comment"},`/**
   * A path to your provider, need to be an absolute path.
   *
   * `,e.createElement(a.span,{className:"hljs-doctag"},"@Default"),` path.resolve(CLIENT_PATH, './components/DefaultProvider/index.js'),
   */`),`
  `,e.createElement(a.span,{className:"hljs-attr"},"providerPath"),": ",e.createElement(a.span,{className:"hljs-string"},'"https://phshy0607.github.io/docit/"'),`,

  `,e.createElement(a.span,{className:"hljs-comment"},`/**
   * Custom Sidebar Configs
   *
   * `,e.createElement(a.span,{className:"hljs-doctag"},"@Default")," ",e.createElement(a.span,{className:"hljs-variable"},"undefined"),`
   */`),`
  `,e.createElement(a.span,{className:"hljs-attr"},"sidebars"),`: [
    { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Get Started"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/index"'),` },
    {
      `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Usage"'),`,
      `,e.createElement(a.span,{className:"hljs-attr"},"children"),`: [
        {
          `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Syntax"'),`,
          `,e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/usage/Syntax"'),`,
        },
        {
          `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Sidebars"'),`,
          `,e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/usage/sidebar"'),`,
        },
        { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Static Resources"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/usage/static-resources"'),` },
      ],
    },
    {
      `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Config File"'),`,
      `,e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/Configs"'),`,
    },
    { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"FAQ"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/FAQ"'),` },
    { `,e.createElement(a.span,{className:"hljs-attr"},"title"),": ",e.createElement(a.span,{className:"hljs-string"},'"Feature Request List"'),", ",e.createElement(a.span,{className:"hljs-attr"},"path"),": ",e.createElement(a.span,{className:"hljs-string"},'"/feature-request"'),` },
  ],
};
`,e.createElement(a.span,{className:"hljs-keyword"},"export")," ",e.createElement(a.span,{className:"hljs-keyword"},"default"),` config;
`)),`
`,e.createElement(a.h2,null,"Provider"),`
`,e.createElement(a.p,null,"If you need a ",e.createElement(a.code,null,"Provider")," to wrap the document up. You can provider a ",e.createElement(a.code,null,"providePath")," via config file."),`
`,e.createElement(a.p,null,"For Example."),`
`,e.createElement(a.pre,null,e.createElement(a.code,{className:"hljs language-jsx"},e.createElement(a.span,{className:"hljs-keyword"},"import")," ",e.createElement(a.span,{className:"hljs-title hljs-class"},"React")," ",e.createElement(a.span,{className:"hljs-keyword"},"from")," ",e.createElement(a.span,{className:"hljs-string"},'"react"'),`;
`,e.createElement(a.span,{className:"hljs-keyword"},"import")," { ",e.createElement(a.span,{className:"hljs-title hljs-class"},"ThemeProvider")," } ",e.createElement(a.span,{className:"hljs-keyword"},"from")," ",e.createElement(a.span,{className:"hljs-string"},'"../src/theme/Provider"'),`;

`,e.createElement(a.span,{className:"hljs-keyword"},"const")," ",e.createElement(a.span,{className:"hljs-title hljs-function"},"Provider")," = (",e.createElement(a.span,{className:"hljs-params"},"props"),`) => {
  `,e.createElement(a.span,{className:"hljs-keyword"},"const"),` { children } = props;
  `,e.createElement(a.span,{className:"hljs-keyword"},"return")," ",e.createElement(a.span,{className:"xml"},e.createElement(a.span,{className:"hljs-tag"},"<",e.createElement(a.span,{className:"hljs-name"},"ThemeProvider"),">"),"{children}",e.createElement(a.span,{className:"hljs-tag"},"</",e.createElement(a.span,{className:"hljs-name"},"ThemeProvider"),">")),`;
};

`,e.createElement(a.span,{className:"hljs-keyword"},"export")," ",e.createElement(a.span,{className:"hljs-keyword"},"default")," ",e.createElement(a.span,{className:"hljs-title hljs-class"},"Provider"),`;
`)))}}export{r as default};
