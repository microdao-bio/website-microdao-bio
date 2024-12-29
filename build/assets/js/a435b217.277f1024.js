'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9484],
  {
    50376: (e, o, s) => {
      s.r(o),
        s.d(o, {
          assets: () => a,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => l,
          metadata: () => t,
          toc: () => i,
        })
      const t = JSON.parse(
        '{"id":"check-workflow-status","title":"Check Workflow Status","description":"Check workflow status using Chaos Dashboard","source":"@site/docs/check-workflow-status.md","sourceDirName":".","slug":"/check-workflow-status","permalink":"/docs/next/check-workflow-status","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/check-workflow-status.md","tags":[],"version":"current","frontMatter":{"title":"Check Workflow Status"},"sidebar":"docs","previous":{"title":"Send HTTP Requests on Workflow","permalink":"/docs/next/send-http-request-on-workflow"},"next":{"title":"Status Check in Workflow","permalink":"/docs/next/status-check-in-workflow"}}'
      )
      var n = s(74848),
        c = s(28453)
      const l = { title: 'Check Workflow Status' },
        r = void 0,
        a = {},
        i = [
          {
            value: 'Check workflow status using Chaos Dashboard',
            id: 'check-workflow-status-using-chaos-dashboard',
            level: 2,
          },
          {
            value: 'Check workflow status using <code>kubectl</code> commands',
            id: 'check-workflow-status-using-kubectl-commands',
            level: 2,
          },
        ]
      function d(e) {
        const o = {
          code: 'code',
          h2: 'h2',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.h2, {
              id: 'check-workflow-status-using-chaos-dashboard',
              children: 'Check workflow status using Chaos Dashboard',
            }),
            '\n',
            (0, n.jsxs)(o.ol, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(o.p, { children: 'List all workflows in Chaos Dashboard.' }),
                    '\n',
                    (0, n.jsx)(o.p, {
                      children: (0, n.jsx)(o.img, {
                        alt: 'List Workflow On Dashboard',
                        src: s(98182).A + '',
                        width: '2255',
                        height: '746',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(o.p, {
                      children: 'Select the workflow you want to check and see the details of the workflow.',
                    }),
                    '\n',
                    (0, n.jsx)(o.p, {
                      children: (0, n.jsx)(o.img, {
                        alt: 'Workflow Status On Dashboard',
                        src: s(6518).A + '',
                        width: '2283',
                        height: '1820',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(o.h2, {
              id: 'check-workflow-status-using-kubectl-commands',
              children: ['Check workflow status using ', (0, n.jsx)(o.code, { children: 'kubectl' }), ' commands'],
            }),
            '\n',
            (0, n.jsxs)(o.ol, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(o.p, {
                      children:
                        'Execute the following command to list the current created workflows in the specified namespace:',
                    }),
                    '\n',
                    (0, n.jsx)(o.pre, {
                      children: (0, n.jsx)(o.code, {
                        className: 'language-shell',
                        children: 'kubectl -n <namespace> get workflow\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(o.p, {
                      children:
                        'Choose a workflow you want to check and specify the workflow name in the following command. Execute the command to get all workflow nodes of the workflow:',
                    }),
                    '\n',
                    (0, n.jsx)(o.pre, {
                      children: (0, n.jsx)(o.code, {
                        className: 'language-shell',
                        children:
                          'kubectl -n <namespace> get workflownode --selector="chaos-mesh.org/workflow=<workflow-name>"\n',
                      }),
                    }),
                    '\n',
                    (0, n.jsx)(o.p, {
                      children: 'The steps of the workflow are represented by the names of these workflow nodes.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(o.p, {
                      children:
                        'Execute the following command to the get detailed status of the specified workflow node:',
                    }),
                    '\n',
                    (0, n.jsx)(o.pre, {
                      children: (0, n.jsx)(o.code, {
                        className: 'language-shell',
                        children: 'kubectl -n <namespace> describe workflownode <workflow-node-name>\n',
                      }),
                    }),
                    '\n',
                    (0, n.jsx)(o.p, {
                      children:
                        'The output includes whether the execution of the current node is completed, the execution status of its parallel or serial node, the corresponding Chaos experiment object of the current node, and so on.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: o } = { ...(0, c.R)(), ...e.components }
        return o ? (0, n.jsx)(o, { ...e, children: (0, n.jsx)(d, { ...e }) }) : d(e)
      }
    },
    98182: (e, o, s) => {
      s.d(o, { A: () => t })
      const t = s.p + 'assets/images/list-workflow-on-dashboard-a67310dee3e406648c062f614850a377.png'
    },
    6518: (e, o, s) => {
      s.d(o, { A: () => t })
      const t = s.p + 'assets/images/workflow-status-on-dashboard-5ef0a1eac75e1564d7faad74b7c39435.png'
    },
    28453: (e, o, s) => {
      s.d(o, { R: () => l, x: () => r })
      var t = s(96540)
      const n = {},
        c = t.createContext(n)
      function l(e) {
        const o = t.useContext(c)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : { ...o, ...e }
          },
          [o, e]
        )
      }
      function r(e) {
        let o
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : l(e.components)),
          t.createElement(c.Provider, { value: o }, e.children)
        )
      }
    },
  },
])
