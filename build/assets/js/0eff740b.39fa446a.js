'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7905],
  {
    16351: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => r,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => a,
          metadata: () => t,
          toc: () => l,
        })
      const t = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"To check the running status of Chaos Mesh, execute the following command:","source":"@site/docs/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/docs/next/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/common/verify-installation.md","tags":[],"version":"current","frontMatter":{}}'
      )
      var c = o(74848),
        s = o(28453)
      const a = {},
        i = void 0,
        r = {},
        l = []
      function d(e) {
        const n = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components }
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(n.p, { children: 'To check the running status of Chaos Mesh, execute the following command:' }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, { className: 'language-sh', children: 'kubectl get po -n chaos-mesh\n' }),
            }),
            '\n',
            (0, c.jsx)(n.p, { children: 'The expected output is as follows:' }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-sh',
                children:
                  'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
              }),
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                'If your actual output is similar to the expected output with ',
                (0, c.jsx)(n.code, { children: 'NAME' }),
                ', ',
                (0, c.jsx)(n.code, { children: 'READY' }),
                ', ',
                (0, c.jsx)(n.code, { children: 'STATUS' }),
                ', ',
                (0, c.jsx)(n.code, { children: 'RESTARTS' }),
                ', and ',
                (0, c.jsx)(n.code, { children: 'AGE' }),
                ', it means that Helm is installed successfully.',
              ],
            }),
            '\n',
            (0, c.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, c.jsxs)(n.p, {
                  children: [
                    'If the ',
                    (0, c.jsx)(n.code, { children: 'STATUS' }),
                    ' of your actual output is not ',
                    (0, c.jsx)(n.code, { children: 'Running' }),
                    ', then execute the following command to check the Pod details, and troubleshoot issues according to the error information.',
                  ],
                }),
                (0, c.jsx)(n.pre, {
                  children: (0, c.jsx)(n.code, {
                    className: 'language-sh',
                    children:
                      '# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, c.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, c.jsxs)(n.p, {
                  children: [
                    'If ',
                    (0, c.jsx)(n.code, { children: 'leader-election' }),
                    ' feature is turned off manually, ',
                    (0, c.jsx)(n.code, { children: 'chaos-controller-manager' }),
                    ' should only have 1 replication.',
                  ],
                }),
                (0, c.jsx)(n.pre, {
                  children: (0, c.jsx)(n.code, {
                    className: 'language-sh',
                    children:
                      'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
                  }),
                }),
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components }
        return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, n, o) => {
      o.d(n, { R: () => a, x: () => i })
      var t = o(96540)
      const c = {},
        s = t.createContext(c)
      function a(e) {
        const n = t.useContext(s)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function i(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(c)
              : e.components || c
            : a(e.components)),
          t.createElement(s.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
