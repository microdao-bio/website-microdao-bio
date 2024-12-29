'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6634],
  {
    60590: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => d,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => l,
        })
      const n = JSON.parse(
        '{"id":"define-workflow-scheduling-rules","title":"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219","description":"TODO","source":"@site/versioned_docs/version-2.5.2/define-workflow-scheduling-rules.md","sourceDirName":".","slug":"/define-workflow-scheduling-rules","permalink":"/docs/2.5.2/define-workflow-scheduling-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/define-workflow-scheduling-rules.md","tags":[],"version":"2.5.2","frontMatter":{"title":"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219"}}'
      )
      var s = o(74848),
        r = o(28453)
      const i = { title: '\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219' },
        c = void 0,
        d = {},
        l = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function a(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => i, x: () => c })
      var n = o(96540)
      const s = {},
        r = n.createContext(s)
      function i(e) {
        const t = n.useContext(r)
        return n.useMemo(
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
          n.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
