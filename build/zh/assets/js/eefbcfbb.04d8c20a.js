'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7402],
  {
    21825: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => h,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => d,
        })
      const a = JSON.parse(
        '{"id":"expose-dashboard-with-ingress","title":"Expose Chaos Dashboard with Ingress","description":"At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard.","source":"@site/versioned_docs/version-2.6.2/expose-dashboard-with-ingress.md","sourceDirName":".","slug":"/expose-dashboard-with-ingress","permalink":"/zh/docs/expose-dashboard-with-ingress","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/expose-dashboard-with-ingress.md","tags":[],"version":"2.6.2","frontMatter":{},"sidebar":"docs","previous":{"title":"\u79bb\u7ebf\u5b89\u88c5","permalink":"/zh/docs/offline-installation"},"next":{"title":"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e","permalink":"/zh/docs/persistence-dashboard"}}'
      )
      var o = n(74848),
        t = n(28453)
      const r = {},
        i = 'Expose Chaos Dashboard with Ingress',
        h = {},
        d = []
      function c(e) {
        const s = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          header: 'header',
          p: 'p',
          pre: 'pre',
          ...(0, t.R)(),
          ...e.components,
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.header, {
              children: (0, o.jsx)(s.h1, {
                id: 'expose-chaos-dashboard-with-ingress',
                children: 'Expose Chaos Dashboard with Ingress',
              }),
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                'At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard.',
            }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'Below is an example of how to expose the Chaos Dashboard under the path ',
                (0, o.jsx)(s.code, { children: '/chaos-mesh' }),
                ':',
              ],
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-chaos-dashboard-under-subpath\n  namespace: chaos-mesh\n  annotations:\n    nginx.ingress.kubernetes.io/use-regex: 'true'\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\n    nginx.ingress.kubernetes.io/configuration-snippet: |\n      sub_filter '<head>' '<head> <base href=\"/chaos-mesh/\">';\nspec:\n  rules:\n    - http:\n        paths:\n          - path: /chaos-mesh/?(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: chaos-dashboard\n                port:\n                  number: 2333\n",
              }),
            }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'You can also find this example in ',
                (0, o.jsx)(s.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/dashboard/ingress-subpath.yaml',
                  children:
                    'https://github.com/chaos-mesh/chaos-mesh/blob/master/examples/dashboard/ingress-subpath.yaml',
                }),
                '.',
              ],
            }),
          ],
        })
      }
      function p(e = {}) {
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, o.jsx)(s, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => r, x: () => i })
      var a = n(96540)
      const o = {},
        t = a.createContext(o)
      function r(e) {
        const s = a.useContext(t)
        return a.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function i(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : r(e.components)),
          a.createElement(t.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
