'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7369],
  {
    19114: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => l,
          contentTitle: () => h,
          default: () => d,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => c,
        })
      const n = JSON.parse(
        '{"id":"simulate-host-console-in-physical-nodes","title":"Simulate Host Faults","description":"This document introduces how to simulate host shutdown faults using Chaosd.","source":"@site/docs/simulate-host-console-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-host-console-in-physical-nodes","permalink":"/docs/next/simulate-host-console-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/simulate-host-console-in-physical-nodes.md","tags":[],"version":"current","frontMatter":{"title":"Simulate Host Faults"},"sidebar":"docs","previous":{"title":"Simulate Network Faults","permalink":"/docs/next/simulate-network-chaos-in-physical-nodes"},"next":{"title":"Simulate Stress Scenarios","permalink":"/docs/next/simulate-heavy-stress-in-physical-nodes"}}'
      )
      var o = s(74848),
        a = s(28453)
      const i = { title: 'Simulate Host Faults' },
        h = void 0,
        l = {},
        c = [
          {
            value: 'View the help information of host shutdown experiments',
            id: 'view-the-help-information-of-host-shutdown-experiments',
            level: 2,
          },
          { value: 'Create a host shutdown experiment', id: 'create-a-host-shutdown-experiment', level: 2 },
        ]
      function r(e) {
        const t = { code: 'code', h2: 'h2', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.p, {
              children: 'This document introduces how to simulate host shutdown faults using Chaosd.',
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'view-the-help-information-of-host-shutdown-experiments',
              children: 'View the help information of host shutdown experiments',
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                'Before creating a fault experiment, you can run the following command to view the help information of host shutdown experiments:',
            }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack host shutdown -h\n',
              }),
            }),
            '\n',
            (0, o.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "shutdowns system, this action will trigger shutdown of the host machine\n\nUsage:\n  chaosd attack host shutdown [flags]\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'create-a-host-shutdown-experiment',
              children: 'Create a host shutdown experiment',
            }),
            '\n',
            (0, o.jsx)(t.p, { children: 'To create a host shutdown experiment, run the following command:' }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack host shutdown\n' }),
            }),
            '\n',
            (0, o.jsx)(t.p, { children: 'The example output is as follows:' }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'chaosd attack host shutdown\nShutdown successfully, uid: 4bc9b74a-5fe2-4038-b4f3-09ae95b57694\n',
              }),
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children: 'After executing this command, your host will shut down after all processes are closed.',
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: t } = { ...(0, a.R)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e)
      }
    },
    28453: (e, t, s) => {
      s.d(t, { R: () => i, x: () => h })
      var n = s(96540)
      const o = {},
        a = n.createContext(o)
      function i(e) {
        const t = n.useContext(a)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function h(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          n.createElement(a.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
