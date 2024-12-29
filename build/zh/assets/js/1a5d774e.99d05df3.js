'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8789],
  {
    23472: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => h,
          contentTitle: () => i,
          default: () => a,
          frontMatter: () => c,
          metadata: () => d,
          toc: () => l,
        })
      const d = JSON.parse(
        '{"id":"send-http-request-on-workflow","title":"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42","description":"Chaos Mesh \u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86 Task \u8282\u70b9\u4ee5\u652f\u6301\u4efb\u610f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5176\u529f\u80fd\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 Job\u3002 \u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4ea7\u54c1\u4f53\u9a8c\uff0cChaos Dashboard \u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e Task \u7684\u6a21\u677f\u3002\u901a\u8fc7\u6b64\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728 WebUI \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/send-http-request-on-workflow.md","sourceDirName":".","slug":"/send-http-request-on-workflow","permalink":"/zh/docs/2.4.3/send-http-request-on-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/send-http-request-on-workflow.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42"},"sidebar":"docs","previous":{"title":"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c","permalink":"/zh/docs/2.4.3/run-serial-or-parallel-experiments"},"next":{"title":"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001","permalink":"/zh/docs/2.4.3/check-workflow-status"}}'
      )
      var n = t(74848),
        r = t(28453)
      const c = { title: '\u5728\u5de5\u4f5c\u6d41\u4e2d\u53d1\u9001 HTTP \u8bf7\u6c42' },
        i = void 0,
        h = {},
        l = [
          {
            value: '\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42',
            id: '\u901a\u8fc7-chaos-dashboard-\u521b\u5efa-http-\u8bf7\u6c42',
            level: 2,
          },
          {
            value:
              '\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u7c7b\u578b\u4e3a HTTP \u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9',
            id: '\u7b2c-1-\u6b65\u521b\u5efa\u7c7b\u578b\u4e3a-http-\u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9',
            level: 3,
          },
          {
            value: '\u7b2c 2 \u6b65\uff1a\u914d\u7f6e HTTP \u8bf7\u6c42',
            id: '\u7b2c-2-\u6b65\u914d\u7f6e-http-\u8bf7\u6c42',
            level: 3,
          },
          {
            value: '\u7b2c 3 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9',
            id: '\u7b2c-3-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9',
            level: 3,
          },
          { value: '\u8868\u5355\u5b57\u6bb5', id: '\u8868\u5355\u5b57\u6bb5', level: 2 },
        ]
      function o(e) {
        const s = {
          admonition: 'admonition',
          code: 'code',
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
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(s.p, {
              children: [
                'Chaos Mesh \u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86 ',
                (0, n.jsx)(s.code, { children: 'Task' }),
                ' \u8282\u70b9\u4ee5\u652f\u6301\u4efb\u610f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5176\u529f\u80fd\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 ',
                (0, n.jsx)(s.code, { children: 'Job' }),
                '\u3002 \u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4ea7\u54c1\u4f53\u9a8c\uff0cChaos Dashboard \u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e ',
                (0, n.jsx)(s.code, { children: 'Task' }),
                ' \u7684\u6a21\u677f\u3002\u901a\u8fc7\u6b64\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728 WebUI \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, n.jsxs)(s.p, {
                children: [
                  'Chaos Mesh \u4e2d\u4e0d\u5b58\u5728\u5c5e\u4e8e ',
                  (0, n.jsx)(s.code, { children: 'HTTPRequest' }),
                  ' \u7c7b\u578b\u7684\u5de5\u4f5c\u6d41\u8282\u70b9\u3002\u672c\u7279\u6027\u57fa\u4e8e ',
                  (0, n.jsx)(s.code, { children: 'Task' }),
                  ' \u8282\u70b9\uff0c\u7528\u4e8e\u66f4\u65b9\u4fbf\u5730\u53d1\u9001 HTTP \u8bf7\u6c42\u3002',
                ],
              }),
            }),
            '\n',
            (0, n.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, n.jsx)(s.p, {
                children:
                  '\u5f53\u524d\u8be5\u529f\u80fd\u4e3a\u5b9e\u9a8c\u7279\u6027\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u5176\u914d\u7f6e\u4e0e\u884c\u4e3a\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u53d1\u751f\u53d8\u5316\u3002',
              }),
            }),
            '\n',
            (0, n.jsx)(s.h2, {
              id: '\u901a\u8fc7-chaos-dashboard-\u521b\u5efa-http-\u8bf7\u6c42',
              children: '\u901a\u8fc7 Chaos Dashboard \u521b\u5efa HTTP \u8bf7\u6c42',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5728 Chaos Dashboard \u4e2d\u521b\u5efa HTTP \u8bf7\u6c42\uff0c\u5177\u4f53\u64cd\u4f5c\u4ee5\u901a\u8fc7 Slack Webhook \u53d1\u9001\u6d88\u606f\u4e3a\u4f8b\u3002',
            }),
            '\n',
            (0, n.jsx)(s.h3, {
              id: '\u7b2c-1-\u6b65\u521b\u5efa\u7c7b\u578b\u4e3a-http-\u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9',
              children:
                '\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u7c7b\u578b\u4e3a HTTP \u8bf7\u6c42\u7684\u5de5\u4f5c\u6d41\u8282\u70b9',
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u4efb\u52a1\u7c7b\u578b\u9009\u4e3a"HTTP \u8bf7\u6c42" :' }),
            '\n',
            (0, n.jsx)(s.p, {
              children: (0, n.jsx)(s.img, {
                alt: 'create-http-request-workflow-node',
                src: t(53986).A + '',
                width: '676',
                height: '926',
              }),
            }),
            '\n',
            (0, n.jsx)(s.h3, {
              id: '\u7b2c-2-\u6b65\u914d\u7f6e-http-\u8bf7\u6c42',
              children: '\u7b2c 2 \u6b65\uff1a\u914d\u7f6e HTTP \u8bf7\u6c42',
            }),
            '\n',
            (0, n.jsx)(s.p, { children: '\u5b8c\u6210\u5bf9\u4ee5\u4e0b\u914d\u7f6e\u7684\u8bbe\u7f6e\uff1a' }),
            '\n',
            (0, n.jsxs)(s.ul, {
              children: [
                '\n',
                (0, n.jsxs)(s.li, {
                  children: ['\u8282\u70b9\u540d\u79f0\uff1a', (0, n.jsx)(s.code, { children: 'send-slack-message' })],
                }),
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    '\u8bf7\u6c42\u5730\u5740\uff1a',
                    (0, n.jsx)(s.code, {
                      children: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
                    }),
                  ],
                }),
                '\n',
                (0, n.jsxs)(s.li, {
                  children: ['\u8bf7\u6c42\u65b9\u6cd5\uff1a', (0, n.jsx)(s.code, { children: 'POST' })],
                }),
                '\n',
                (0, n.jsxs)(s.li, {
                  children: [
                    '\u8bf7\u6c42\u4f53\uff1a ',
                    (0, n.jsx)(s.code, { children: '{"text": "Hello, world."}' }),
                    '\uff0c\u5e76\u52fe\u9009 "\u4e3a JSON \u5185\u5bb9"',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children: (0, n.jsx)(s.img, {
                alt: 'configure-http-request-workflow-node',
                src: t(60606).A + '',
                width: '2010',
                height: '1164',
              }),
            }),
            '\n',
            (0, n.jsx)(s.h3, {
              id: '\u7b2c-3-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9',
              children: '\u7b2c 3 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41\u8282\u70b9',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children:
                '\u70b9\u51fb\u201c\u63d0\u4ea4\u201d\u6309\u94ae\uff0c\u5373\u53ef\u5728\u9884\u89c8\u7a97\u53e3\u67e5\u770b\u521b\u5efa\u7684\u4efb\u52a1\u3002',
            }),
            '\n',
            (0, n.jsx)(s.p, {
              children: (0, n.jsx)(s.img, {
                alt: 'http-request-task-node-preview',
                src: t(28937).A + '',
                width: '1078',
                height: '1086',
              }),
            }),
            '\n',
            (0, n.jsx)(s.h2, { id: '\u8868\u5355\u5b57\u6bb5', children: '\u8868\u5355\u5b57\u6bb5' }),
            '\n',
            (0, n.jsxs)(s.table, {
              children: [
                (0, n.jsx)(s.thead, {
                  children: (0, n.jsxs)(s.tr, {
                    children: [
                      (0, n.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, n.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, n.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, n.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, n.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, n.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(s.tbody, {
                  children: [
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, { children: '\u540d\u79f0' }),
                        (0, n.jsx)(s.td, { children: 'string' }),
                        (0, n.jsx)(s.td, { children: '\u8282\u70b9\u540d\u79f0' }),
                        (0, n.jsx)(s.td, {}),
                        (0, n.jsx)(s.td, { children: '\u662f' }),
                        (0, n.jsx)(s.td, { children: (0, n.jsx)(s.code, { children: 'send-slack-message' }) }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, { children: 'URL' }),
                        (0, n.jsx)(s.td, { children: 'string' }),
                        (0, n.jsx)(s.td, { children: '\u8bf7\u6c42\u5730\u5740' }),
                        (0, n.jsx)(s.td, {}),
                        (0, n.jsx)(s.td, { children: '\u662f' }),
                        (0, n.jsx)(s.td, {
                          children: (0, n.jsx)(s.code, {
                            children: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, { children: '\u65b9\u6cd5' }),
                        (0, n.jsx)(s.td, { children: 'string' }),
                        (0, n.jsx)(s.td, { children: '\u8bf7\u6c42\u65b9\u6cd5' }),
                        (0, n.jsx)(s.td, {}),
                        (0, n.jsx)(s.td, { children: '\u662f' }),
                        (0, n.jsx)(s.td, { children: (0, n.jsx)(s.code, { children: 'POST' }) }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, { children: '\u8bf7\u6c42\u4f53' }),
                        (0, n.jsx)(s.td, { children: 'string' }),
                        (0, n.jsx)(s.td, { children: '\u8bf7\u6c42\u4f53' }),
                        (0, n.jsx)(s.td, {}),
                        (0, n.jsx)(s.td, { children: '\u5426' }),
                        (0, n.jsx)(s.td, { children: (0, n.jsx)(s.code, { children: '{"text": "Hello, world."}' }) }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, { children: '\u8ddf\u968f 301/302 \u8df3\u8f6c' }),
                        (0, n.jsx)(s.td, { children: 'boolean' }),
                        (0, n.jsxs)(s.td, {
                          children: [
                            '\u8be5\u53c2\u6570\u7684\u503c\u5bf9\u5e94 ',
                            (0, n.jsx)(s.code, { children: 'curl' }),
                            ' \u7684 ',
                            (0, n.jsx)(s.code, { children: '-L' }),
                            ' \u53c2\u6570',
                          ],
                        }),
                        (0, n.jsx)(s.td, { children: (0, n.jsx)(s.code, { children: 'false' }) }),
                        (0, n.jsx)(s.td, { children: '\u5426' }),
                        (0, n.jsx)(s.td, { children: (0, n.jsx)(s.code, { children: 'false' }) }),
                      ],
                    }),
                    (0, n.jsxs)(s.tr, {
                      children: [
                        (0, n.jsx)(s.td, { children: '\u4e3a JSON \u5185\u5bb9' }),
                        (0, n.jsx)(s.td, { children: 'boolean' }),
                        (0, n.jsxs)(s.td, {
                          children: [
                            '\u8be5\u53c2\u6570\u4f1a\u5c06',
                            (0, n.jsx)(s.code, { children: 'Content-Type: application/json' }),
                            ' \u6dfb\u52a0\u81f3 HTTP \u8bf7\u6c42\u5934',
                          ],
                        }),
                        (0, n.jsx)(s.td, { children: (0, n.jsx)(s.code, { children: 'false' }) }),
                        (0, n.jsx)(s.td, { children: '\u5426' }),
                        (0, n.jsx)(s.td, { children: (0, n.jsx)(s.code, { children: 'false' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsxs)(s.p, {
              children: [
                '\u751f\u6210\u7684\u4efb\u52a1\u8282\u70b9\u7684 ',
                (0, n.jsx)(s.code, { children: 'name' }),
                ' \u5b57\u6bb5\u7684\u503c\u4f1a\u628a ',
                (0, n.jsx)(s.code, { children: 'http-request' }),
                ' \u540e\u7f00\u52a0\u5230"\u540d\u79f0"\u7684\u540e\u9762\u3002',
              ],
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(o, { ...e }) }) : o(e)
      }
    },
    60606: (e, s, t) => {
      t.d(s, { A: () => d })
      const d = t.p + 'assets/images/configure-http-request-workflow-node_zh-709f34ac46e370ffb3ff1ccb9d638afd.png'
    },
    53986: (e, s, t) => {
      t.d(s, { A: () => d })
      const d = t.p + 'assets/images/create-http-request-workflow-node_zh-5674b5cb05d294c2a80622b4976c4d0f.png'
    },
    28937: (e, s, t) => {
      t.d(s, { A: () => d })
      const d = t.p + 'assets/images/http-request-task-node-preview-17bb1a024ea9ccc9b66d2bbc6614f4e6.png'
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => c, x: () => i })
      var d = t(96540)
      const n = {},
        r = d.createContext(n)
      function c(e) {
        const s = d.useContext(r)
        return d.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function i(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : c(e.components)),
          d.createElement(r.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
