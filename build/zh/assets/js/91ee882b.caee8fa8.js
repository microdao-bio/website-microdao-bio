'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6779],
  {
    43175: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => r,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => d,
        })
      const n = JSON.parse(
        '{"id":"extend-chaosd","title":"\u62d3\u5c55 Chaosd \u7ec4\u4ef6","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/extend-chaosd.md","sourceDirName":".","slug":"/extend-chaosd","permalink":"/zh/docs/extend-chaosd","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/extend-chaosd.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u62d3\u5c55 Chaosd \u7ec4\u4ef6"},"sidebar":"docs","previous":{"title":"\u62d3\u5c55 Chaos Daemon \u63a5\u53e3","permalink":"/zh/docs/extend-chaos-daemon-interface"},"next":{"title":"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)","permalink":"/zh/docs/faqs"}}'
      )
      var s = o(74848),
        c = o(28453)
      const i = { title: '\u62d3\u5c55 Chaosd \u7ec4\u4ef6' },
        a = void 0,
        r = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(e) {
        const t = { h2: 'h2', ...(0, c.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, c.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => i, x: () => a })
      var n = o(96540)
      const s = {},
        c = n.createContext(s)
      function i(e) {
        const t = n.useContext(c)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function a(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          n.createElement(c.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
