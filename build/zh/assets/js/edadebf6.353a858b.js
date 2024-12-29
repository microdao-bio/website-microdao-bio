'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [554],
  {
    50922: (n, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => u,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => r,
          metadata: () => t,
          toc: () => a,
        })
      const t = JSON.parse(
        '{"id":"common/quick-run","title":"quick-run","description":"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/common/quick-run.md","sourceDirName":"common","slug":"/common/quick-run","permalink":"/zh/docs/2.4.3/common/quick-run","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/common/quick-run.md","tags":[],"version":"2.4.3","frontMatter":{}}'
      )
      var s = o(74848),
        c = o(28453)
      const r = {},
        i = void 0,
        u = {},
        a = []
      function m(n) {
        const e = { a: 'a', p: 'p', ...(0, c.R)(), ...n.components }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(e.p, {
              children:
                '\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002',
            }),
            '\n',
            (0, s.jsxs)(e.p, {
              children: [
                '\u8bf7\u53c2\u8003',
                (0, s.jsx)(e.a, {
                  href: '/zh/docs/2.4.3/run-a-chaos-experiment',
                  children: '\u8fd0\u884c\u8bd5\u9a8c',
                }),
                '\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002',
              ],
            }),
          ],
        })
      }
      function d(n = {}) {
        const { wrapper: e } = { ...(0, c.R)(), ...n.components }
        return e ? (0, s.jsx)(e, { ...n, children: (0, s.jsx)(m, { ...n }) }) : m(n)
      }
    },
    28453: (n, e, o) => {
      o.d(e, { R: () => r, x: () => i })
      var t = o(96540)
      const s = {},
        c = t.createContext(s)
      function r(n) {
        const e = t.useContext(c)
        return t.useMemo(
          function () {
            return 'function' == typeof n ? n(e) : { ...e, ...n }
          },
          [e, n]
        )
      }
      function i(n) {
        let e
        return (
          (e = n.disableParentContext
            ? 'function' == typeof n.components
              ? n.components(s)
              : n.components || s
            : r(n.components)),
          t.createElement(c.Provider, { value: e }, n.children)
        )
      }
    },
  },
])
