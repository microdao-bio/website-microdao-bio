'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4689],
  {
    70923: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"define-workflow-scheduling-rules","title":"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219","description":"TODO","source":"@site/docs/define-workflow-scheduling-rules.md","sourceDirName":".","slug":"/define-workflow-scheduling-rules","permalink":"/zh/docs/next/define-workflow-scheduling-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/define-workflow-scheduling-rules.md","tags":[],"version":"current","frontMatter":{"title":"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219"}}'
      )
      var s = n(74848),
        r = n(28453)
      const i = { title: '\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219' },
        c = void 0,
        l = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function d(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function a(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e)
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
