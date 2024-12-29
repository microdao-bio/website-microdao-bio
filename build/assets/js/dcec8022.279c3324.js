'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1928],
  {
    36513: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => h,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => d,
          metadata: () => n,
          toc: () => c,
        })
      const n = JSON.parse(
        '{"id":"send-http-request-on-workflow","title":"Send HTTP Requests on Workflow","description":"Chaos Mesh Workflow provides a Task node to support any workload, similar to Kubernetes Job. To make the user experience more convenient, Chaos Dashboard provides a template based on Task to create HTTP requests in WebUI.","source":"@site/versioned_docs/version-2.4.3/send-http-request-on-workflow.md","sourceDirName":".","slug":"/send-http-request-on-workflow","permalink":"/docs/2.4.3/send-http-request-on-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/send-http-request-on-workflow.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Send HTTP Requests on Workflow"},"sidebar":"docs","previous":{"title":"Serial and Parallel Experiments","permalink":"/docs/2.4.3/run-serial-or-parallel-experiments"},"next":{"title":"Check Workflow Status","permalink":"/docs/2.4.3/check-workflow-status"}}'
      )
      var o = s(74848),
        r = s(28453)
      const d = { title: 'Send HTTP Requests on Workflow' },
        i = void 0,
        h = {},
        c = [
          {
            value: 'Create an HTTP request through Chaos Dashboard',
            id: 'create-an-http-request-through-chaos-dashboard',
            level: 2,
          },
          {
            value: 'Step 1. Create a workflow node with the type <code>HTTPRequest</code>',
            id: 'step-1-create-a-workflow-node-with-the-type-httprequest',
            level: 3,
          },
          { value: 'Step 2. Configure an HTTP request', id: 'step-2-configure-an-http-request', level: 3 },
          { value: 'Step 3. Submit the workflow node', id: 'step-3-submit-the-workflow-node', level: 3 },
          { value: 'Field description', id: 'field-description', level: 2 },
        ]
      function a(e) {
        const t = {
          admonition: 'admonition',
          code: 'code',
          em: 'em',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          p: 'p',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(t.p, {
              children: [
                'Chaos Mesh Workflow provides a ',
                (0, o.jsx)(t.code, { children: 'Task' }),
                ' node to support any workload, similar to Kubernetes ',
                (0, o.jsx)(t.code, { children: 'Job' }),
                '. To make the user experience more convenient, Chaos Dashboard provides a template based on ',
                (0, o.jsx)(t.code, { children: 'Task' }),
                ' to create HTTP requests in WebUI.',
              ],
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'Chaos Mesh Workflow provides a ',
                (0, o.jsx)(t.code, { children: 'Task' }),
                ' node to support any workload, which function is similar to the ',
                (0, o.jsx)(t.code, { children: 'Job' }),
                ' in Kubernetes. To provide a better user experience, Chaos Dashboard provides a template based on ',
                (0, o.jsx)(t.code, { children: 'Task' }),
                '. With this template, you can easily create HTTP requests in WebUI. This document describes how to create an HTTP request through Chaos Dashboard.',
              ],
            }),
            '\n',
            (0, o.jsx)(t.admonition, {
              type: 'note',
              children: (0, o.jsxs)(t.p, {
                children: [
                  'Chaos Mesh does ',
                  (0, o.jsx)(t.em, { children: 'NOT' }),
                  ' have the workflow node of the type ',
                  (0, o.jsx)(t.code, { children: 'HTTPRequest' }),
                  '. This feature is based on ',
                  (0, o.jsx)(t.code, { children: 'Task' }),
                  ' node, and you can send HTTP requests more conveniently by using the feature.',
                ],
              }),
            }),
            '\n',
            (0, o.jsx)(t.admonition, {
              type: 'note',
              children: (0, o.jsx)(t.p, {
                children:
                  'This feature is currently an experimental feature, so it is not recommended to use this feature in the production environment. The configuration and behavior of the feature might change in the future.',
              }),
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'create-an-http-request-through-chaos-dashboard',
              children: 'Create an HTTP request through Chaos Dashboard',
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                'You can create an HTTP request in Chaos Dashboard as the following steps that take sending a message through Slack Webhook as an example.',
            }),
            '\n',
            (0, o.jsxs)(t.h3, {
              id: 'step-1-create-a-workflow-node-with-the-type-httprequest',
              children: [
                'Step 1. Create a workflow node with the type ',
                (0, o.jsx)(t.code, { children: 'HTTPRequest' }),
              ],
            }),
            '\n',
            (0, o.jsx)(t.p, { children: 'Select "HTTP Request" as the task type:' }),
            '\n',
            (0, o.jsx)(t.p, {
              children: (0, o.jsx)(t.img, {
                alt: 'create-http-request-workflow-node',
                src: s(22154).A + '',
                width: '736',
                height: '896',
              }),
            }),
            '\n',
            (0, o.jsx)(t.h3, { id: 'step-2-configure-an-http-request', children: 'Step 2. Configure an HTTP request' }),
            '\n',
            (0, o.jsx)(t.p, { children: 'Configure the followings:' }),
            '\n',
            (0, o.jsxs)(t.ul, {
              children: [
                '\n',
                (0, o.jsxs)(t.li, {
                  children: ['node name: ', (0, o.jsx)(t.code, { children: 'send-slack-message' })],
                }),
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    'request URL: ',
                    (0, o.jsx)(t.code, {
                      children: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
                    }),
                  ],
                }),
                '\n',
                (0, o.jsxs)(t.li, { children: ['request method: ', (0, o.jsx)(t.code, { children: 'POST' })] }),
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    'request body: ',
                    (0, o.jsx)(t.code, { children: '{"text": "Hello, world."}' }),
                    ' , then check "For JSON content".',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children: (0, o.jsx)(t.img, {
                alt: 'configure-http-request-workflow-node',
                src: s(35628).A + '',
                width: '2016',
                height: '1188',
              }),
            }),
            '\n',
            (0, o.jsx)(t.h3, { id: 'step-3-submit-the-workflow-node', children: 'Step 3. Submit the workflow node' }),
            '\n',
            (0, o.jsx)(t.p, { children: 'Click the "Submit" button to see the task in the preview window:' }),
            '\n',
            (0, o.jsx)(t.p, {
              children: (0, o.jsx)(t.img, {
                alt: 'http-request-task-node-preview',
                src: s(58038).A + '',
                width: '1078',
                height: '1086',
              }),
            }),
            '\n',
            (0, o.jsx)(t.h2, { id: 'field-description', children: 'Field description' }),
            '\n',
            (0, o.jsxs)(t.table, {
              children: [
                (0, o.jsx)(t.thead, {
                  children: (0, o.jsxs)(t.tr, {
                    children: [
                      (0, o.jsx)(t.th, { children: 'Parameter' }),
                      (0, o.jsx)(t.th, { children: 'Type' }),
                      (0, o.jsx)(t.th, { children: 'Description' }),
                      (0, o.jsx)(t.th, { children: 'Default value' }),
                      (0, o.jsx)(t.th, { children: 'Required' }),
                      (0, o.jsx)(t.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, o.jsxs)(t.tbody, {
                  children: [
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, { children: 'Name' }),
                        (0, o.jsx)(t.td, { children: 'string' }),
                        (0, o.jsx)(t.td, { children: 'Name of the workflow node' }),
                        (0, o.jsx)(t.td, {}),
                        (0, o.jsx)(t.td, { children: 'Yes' }),
                        (0, o.jsx)(t.td, { children: (0, o.jsx)(t.code, { children: 'send-slack-message' }) }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, { children: 'URL' }),
                        (0, o.jsx)(t.td, { children: 'string' }),
                        (0, o.jsx)(t.td, { children: 'URL of an HTTP request' }),
                        (0, o.jsx)(t.td, {}),
                        (0, o.jsx)(t.td, { children: 'Yes' }),
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
                          }),
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, { children: 'Method' }),
                        (0, o.jsx)(t.td, { children: 'string' }),
                        (0, o.jsx)(t.td, { children: 'Method of an HTTP request' }),
                        (0, o.jsx)(t.td, {}),
                        (0, o.jsx)(t.td, { children: 'Yes' }),
                        (0, o.jsx)(t.td, { children: (0, o.jsx)(t.code, { children: 'POST' }) }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, { children: 'Body' }),
                        (0, o.jsx)(t.td, { children: 'string' }),
                        (0, o.jsx)(t.td, { children: 'Body of an HTTP request' }),
                        (0, o.jsx)(t.td, {}),
                        (0, o.jsx)(t.td, { children: 'No' }),
                        (0, o.jsx)(t.td, { children: (0, o.jsx)(t.code, { children: '{"text": "Hello, world."}' }) }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, { children: 'Follow 301/302 Location' }),
                        (0, o.jsx)(t.td, { children: 'boolean' }),
                        (0, o.jsxs)(t.td, {
                          children: [
                            'The value of this parameter corresponds to the ',
                            (0, o.jsx)(t.code, { children: '-L' }),
                            ' parameter of ',
                            (0, o.jsx)(t.code, { children: 'curl' }),
                            '.',
                          ],
                        }),
                        (0, o.jsx)(t.td, { children: (0, o.jsx)(t.code, { children: 'false' }) }),
                        (0, o.jsx)(t.td, { children: 'No' }),
                        (0, o.jsx)(t.td, { children: (0, o.jsx)(t.code, { children: 'false' }) }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, { children: 'Json Content' }),
                        (0, o.jsx)(t.td, { children: 'boolean' }),
                        (0, o.jsxs)(t.td, {
                          children: [
                            'The parameter appends ',
                            (0, o.jsx)(t.code, { children: 'Content-Type: application/json' }),
                            ' to the header of an HTTP request.',
                          ],
                        }),
                        (0, o.jsx)(t.td, { children: (0, o.jsx)(t.code, { children: 'false' }) }),
                        (0, o.jsx)(t.td, { children: 'No' }),
                        (0, o.jsx)(t.td, { children: (0, o.jsx)(t.code, { children: 'false' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The value of the ',
                (0, o.jsx)(t.code, { children: 'name' }),
                ' field of the generated task node adds the suffix ',
                (0, o.jsx)(t.code, { children: 'http-request' }),
                ' to the end of "name".',
              ],
            }),
          ],
        })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e)
      }
    },
    35628: (e, t, s) => {
      s.d(t, { A: () => n })
      const n = s.p + 'assets/images/configure-http-request-workflow-node-e9bf432761a85ae7aa1d93d20451fab5.png'
    },
    22154: (e, t, s) => {
      s.d(t, { A: () => n })
      const n = s.p + 'assets/images/create-http-request-workflow-node-6a50447e8f1da67f08a0ec25a2535f15.png'
    },
    58038: (e, t, s) => {
      s.d(t, { A: () => n })
      const n = s.p + 'assets/images/http-request-task-node-preview-17bb1a024ea9ccc9b66d2bbc6614f4e6.png'
    },
    28453: (e, t, s) => {
      s.d(t, { R: () => d, x: () => i })
      var n = s(96540)
      const o = {},
        r = n.createContext(o)
      function d(e) {
        const t = n.useContext(r)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function i(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : d(e.components)),
          n.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
