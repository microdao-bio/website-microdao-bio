'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [770],
  {
    90531: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => u,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => a,
        })
      const o = JSON.parse(
        '{"id":"chaos-engineering-principles","title":"\u6df7\u6c8c\u5de5\u7a0b\u7406\u8bba","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/chaos-engineering-principles.md","sourceDirName":".","slug":"/chaos-engineering-principles","permalink":"/zh/docs/next/chaos-engineering-principles","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/chaos-engineering-principles.md","tags":[],"version":"current","frontMatter":{"title":"\u6df7\u6c8c\u5de5\u7a0b\u7406\u8bba"}}'
      )
      var s = t(74848),
        i = t(28453)
      const c = { title: '\u6df7\u6c8c\u5de5\u7a0b\u7406\u8bba' },
        r = void 0,
        u = {},
        a = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(e) {
        const n = { h2: 'h2', ...(0, i.R)(), ...e.components }
        return (0, s.jsx)(n.h2, { id: 'todo', children: 'TODO' })
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components }
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e)
      }
    },
    28453: (e, n, t) => {
      t.d(n, { R: () => c, x: () => r })
      var o = t(96540)
      const s = {},
        i = o.createContext(s)
      function c(e) {
        const n = o.useContext(i)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function r(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : c(e.components)),
          o.createElement(i.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
