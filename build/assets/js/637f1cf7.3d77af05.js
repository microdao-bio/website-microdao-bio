'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6712],
  {
    93809: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => r,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => l,
        })
      const s = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"To check the running status of Chaos Mesh, execute the following command:","source":"@site/versioned_docs/version-2.5.2/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/docs/2.5.2/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/common/verify-installation.md","tags":[],"version":"2.5.2","frontMatter":{}}'
      )
      var t = o(74848),
        c = o(28453)
      const i = {},
        a = void 0,
        r = {},
        l = []
      function d(e) {
        const n = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, c.R)(), ...e.components }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.p, { children: 'To check the running status of Chaos Mesh, execute the following command:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, { className: 'language-sh', children: 'kubectl get po -n chaos-mesh\n' }),
            }),
            '\n',
            (0, t.jsx)(n.p, { children: 'The expected output is as follows:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-sh',
                children:
                  'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If your actual output is similar to the expected output with ',
                (0, t.jsx)(n.code, { children: 'NAME' }),
                ', ',
                (0, t.jsx)(n.code, { children: 'READY' }),
                ', ',
                (0, t.jsx)(n.code, { children: 'STATUS' }),
                ', ',
                (0, t.jsx)(n.code, { children: 'RESTARTS' }),
                ', and ',
                (0, t.jsx)(n.code, { children: 'AGE' }),
                ', it means that Helm is installed successfully.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, t.jsxs)(n.p, {
                  children: [
                    'If the ',
                    (0, t.jsx)(n.code, { children: 'STATUS' }),
                    ' of your actual output is not ',
                    (0, t.jsx)(n.code, { children: 'Running' }),
                    ', then execute the following command to check the Pod details, and troubleshoot issues according to the error information.',
                  ],
                }),
                (0, t.jsx)(n.pre, {
                  children: (0, t.jsx)(n.code, {
                    className: 'language-sh',
                    children:
                      '# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, t.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, t.jsxs)(n.p, {
                  children: [
                    'If ',
                    (0, t.jsx)(n.code, { children: 'leader-election' }),
                    ' feature is turned off manually, ',
                    (0, t.jsx)(n.code, { children: 'chaos-controller-manager' }),
                    ' should only have 1 replication.',
                  ],
                }),
                (0, t.jsx)(n.pre, {
                  children: (0, t.jsx)(n.code, {
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
        const { wrapper: n } = { ...(0, c.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, n, o) => {
      o.d(n, { R: () => i, x: () => a })
      var s = o(96540)
      const t = {},
        c = s.createContext(t)
      function i(e) {
        const n = s.useContext(c)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function a(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : i(e.components)),
          s.createElement(c.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
