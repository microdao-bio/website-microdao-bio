'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3581],
  {
    27636: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => h,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => c,
        })
      const a = JSON.parse(
        '{"id":"expose-dashboard-with-ingress","title":"Expose Chaos Dashboard with Ingress","description":"At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard.","source":"@site/docs/expose-dashboard-with-ingress.md","sourceDirName":".","slug":"/expose-dashboard-with-ingress","permalink":"/docs/next/expose-dashboard-with-ingress","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/expose-dashboard-with-ingress.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Install Chaos Mesh Offline","permalink":"/docs/next/offline-installation"},"next":{"title":"Persistence Chaos Dashboard","permalink":"/docs/next/persistence-dashboard"}}'
      )
      var t = n(74848),
        o = n(28453)
      const r = {},
        i = 'Expose Chaos Dashboard with Ingress',
        h = {},
        c = []
      function d(e) {
        const s = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          header: 'header',
          p: 'p',
          pre: 'pre',
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.header, {
              children: (0, t.jsx)(s.h1, {
                id: 'expose-chaos-dashboard-with-ingress',
                children: 'Expose Chaos Dashboard with Ingress',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'At times, you may need to make the Chaos Dashboard accessible to external users, while placing it under the subpath of your current monitoring dashboard.',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'Below is an example of how to expose the Chaos Dashboard under the path ',
                (0, t.jsx)(s.code, { children: '/chaos-mesh' }),
                ':',
              ],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-chaos-dashboard-under-subpath\n  namespace: chaos-mesh\n  annotations:\n    nginx.ingress.kubernetes.io/use-regex: 'true'\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\n    nginx.ingress.kubernetes.io/configuration-snippet: |\n      sub_filter '<head>' '<head> <base href=\"/chaos-mesh/\">';\nspec:\n  rules:\n    - http:\n        paths:\n          - path: /chaos-mesh/?(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: chaos-dashboard\n                port:\n                  number: 2333\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'You can also find this example in ',
                (0, t.jsx)(s.a, {
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
        const { wrapper: s } = { ...(0, o.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => r, x: () => i })
      var a = n(96540)
      const t = {},
        o = a.createContext(t)
      function r(e) {
        const s = a.useContext(o)
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
              ? e.components(t)
              : e.components || t
            : r(e.components)),
          a.createElement(o.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
