'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4505],
  {
    25110: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => a,
          metadata: () => i,
          toc: () => r,
        })
      const i = JSON.parse(
        '{"id":"simulate-file-chaos-in-physical-nodes","title":"Simulate File Faults","description":"TODO","source":"@site/docs/simulate-file-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-file-chaos-in-physical-nodes","permalink":"/docs/next/simulate-file-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/simulate-file-chaos-in-physical-nodes.md","tags":[],"version":"current","frontMatter":{"title":"Simulate File Faults"},"sidebar":"docs","previous":{"title":"Simulate Time Faults","permalink":"/docs/next/simulate-time-chaos-on-physical-nodes"},"next":{"title":"Simulate Redis Faults","permalink":"/docs/next/simulate-redis-chaos-on-physical-nodes"}}'
      )
      var o = s(74848),
        n = s(28453)
      const a = { title: 'Simulate File Faults' },
        l = void 0,
        c = {},
        r = [{ value: 'TODO', id: 'todo', level: 3 }]
      function u(e) {
        const t = { h3: 'h3', ...(0, n.R)(), ...e.components }
        return (0, o.jsx)(t.h3, { id: 'todo', children: 'TODO' })
      }
      function d(e = {}) {
        const { wrapper: t } = { ...(0, n.R)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e)
      }
    },
    28453: (e, t, s) => {
      s.d(t, { R: () => a, x: () => l })
      var i = s(96540)
      const o = {},
        n = i.createContext(o)
      function a(e) {
        const t = i.useContext(n)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function l(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : a(e.components)),
          i.createElement(n.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
