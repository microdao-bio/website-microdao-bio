'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1205],
  {
    99851: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => d,
        })
      const o = JSON.parse(
        '{"id":"multi-data-center-scenario","title":"\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f","description":"TODO","source":"@site/versioned_docs/version-2.6.2/multi-data-center-scenario.md","sourceDirName":".","slug":"/multi-data-center-scenario","permalink":"/docs/multi-data-center-scenario","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/multi-data-center-scenario.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f"}}'
      )
      var s = n(74848),
        r = n(28453)
      const i = { title: '\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f' },
        c = void 0,
        a = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => i, x: () => c })
      var o = n(96540)
      const s = {},
        r = o.createContext(s)
      function i(e) {
        const t = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function c(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          o.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
