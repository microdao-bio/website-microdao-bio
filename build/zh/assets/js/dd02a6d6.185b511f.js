'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6110],
  {
    24177: (e, d, s) => {
      s.r(d),
        s.d(d, {
          assets: () => i,
          contentTitle: () => l,
          default: () => j,
          frontMatter: () => t,
          metadata: () => n,
          toc: () => h,
        })
      const n = JSON.parse(
        '{"id":"simulate-http-chaos-on-kubernetes","title":"\u6a21\u62df HTTP \u6545\u969c","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u6a21\u62df HTTP \u6545\u969c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-http-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-http-chaos-on-kubernetes","permalink":"/zh/docs/next/simulate-http-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/simulate-http-chaos-on-kubernetes.md","tags":[],"version":"current","frontMatter":{"title":"\u6a21\u62df HTTP \u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df GCP \u6545\u969c","permalink":"/zh/docs/next/simulate-gcp-chaos"},"next":{"title":"Simulate Block Device Incidents","permalink":"/zh/docs/next/simulate-block-chaos-on-kubernetes"}}'
      )
      var r = s(74848),
        c = s(28453)
      const t = { title: '\u6a21\u62df HTTP \u6545\u969c' },
        l = void 0,
        i = {},
        h = [
          { value: 'HTTPChaos \u7b80\u4ecb', id: 'httpchaos-\u7b80\u4ecb', level: 2 },
          { value: '\u6ce8\u610f\u4e8b\u9879', id: '\u6ce8\u610f\u4e8b\u9879', level: 2 },
          {
            value: '\u4f7f\u7528 Dashboard \u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-dashboard-\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-yaml-\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          { value: '<code>abort</code> \u793a\u4f8b', id: 'abort-\u793a\u4f8b', level: 3 },
          {
            value: '\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b',
            id: '\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b',
            level: 3,
          },
          { value: '\u5b57\u6bb5\u8bf4\u660e', id: '\u5b57\u6bb5\u8bf4\u660e', level: 2 },
          { value: '\u901a\u7528\u5b57\u6bb5\u8bf4\u660e', id: '\u901a\u7528\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          {
            value: '\u4e0e <code>target</code> \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e',
            id: '\u4e0e-target-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e',
            level: 3,
          },
          {
            value: '<code>Request</code> \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e',
            id: 'request-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e',
            level: 3,
          },
          {
            value: '<code>Response</code> \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e',
            id: 'response-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e',
            level: 3,
          },
          { value: '\u672c\u5730\u8c03\u8bd5', id: '\u672c\u5730\u8c03\u8bd5', level: 2 },
        ]
      function x(e) {
        const d = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.p, {
              children:
                '\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u6a21\u62df HTTP \u6545\u969c\u3002',
            }),
            '\n',
            (0, r.jsx)(d.h2, { id: 'httpchaos-\u7b80\u4ecb', children: 'HTTPChaos \u7b80\u4ecb' }),
            '\n',
            (0, r.jsxs)(d.p, {
              children: [
                'HTTPChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\u3002\u901a\u8fc7\u521b\u5efa HTTPChaos \u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df ',
                (0, r.jsx)(d.strong, { children: 'HTTP \u670d\u52a1\u7aef' }),
                '\u5728\u8bf7\u6c42\u6216\u54cd\u5e94\u8fc7\u7a0b\u4e2d\u53d1\u751f\u6545\u969c\u7684\u573a\u666f\u3002\u76ee\u524d\uff0cHTTPChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a',
              ],
            }),
            '\n',
            (0, r.jsxs)(d.ul, {
              children: [
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.code, { children: 'abort' }),
                    '\uff1a\u4e2d\u65ad\u670d\u52a1\u7aef\u7684\u8fde\u63a5',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.code, { children: 'delay' }),
                    '\uff1a\u4e3a\u76ee\u6807\u8fc7\u7a0b\u6ce8\u5165\u5ef6\u8fdf',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.code, { children: 'replace' }),
                    '\uff1a\u66ff\u6362\u8bf7\u6c42\u62a5\u6587\u6216\u8005\u54cd\u5e94\u62a5\u6587\u7684\u90e8\u5206\u5185\u5bb9',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.code, { children: 'patch' }),
                    '\uff1a\u7ed9\u8bf7\u6c42\u62a5\u6587\u6216\u54cd\u5e94\u62a5\u6587\u6dfb\u52a0\u989d\u5916\u5185\u5bb9',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(d.p, {
              children: [
                'HTTPChaos \u652f\u6301\u591a\u79cd\u7c7b\u578b\u6545\u969c\u7684\u7ec4\u5408\u3002\u5728\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u65f6\uff0c\u5982\u679c\u540c\u65f6\u914d\u7f6e\u4e86\u591a\u79cd HTTP \u6545\u969c\u7c7b\u578b\uff0c\u5b9e\u9a8c\u8fd0\u884c\u65f6\u6ce8\u5165\u6545\u969c\u7684\u4f18\u5148\u7ea7\uff08\u987a\u5e8f\uff09\u56fa\u5b9a\u4e3a ',
                (0, r.jsx)(d.code, { children: 'abort' }),
                ' -> ',
                (0, r.jsx)(d.code, { children: 'delay' }),
                ' -> ',
                (0, r.jsx)(d.code, { children: 'replace' }),
                ' -> ',
                (0, r.jsx)(d.code, { children: 'patch' }),
                '\u3002\u5176\u4e2d ',
                (0, r.jsx)(d.code, { children: 'abort' }),
                ' \u6545\u969c\u4f1a\u5bfc\u81f4\u77ed\u8def\uff0c\u76f4\u63a5\u4e2d\u65ad\u6b64\u6b21\u8fde\u63a5\u3002',
              ],
            }),
            '\n',
            (0, r.jsxs)(d.p, {
              children: [
                '\u5173\u4e8e HTTPChaos \u8be6\u7ec6\u7684\u914d\u7f6e\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u89c1',
                (0, r.jsx)(d.a, {
                  href: '#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                  children: '\u5b57\u6bb5\u8bf4\u660e',
                }),
                '\u90e8\u5206\u3002',
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, { id: '\u6ce8\u610f\u4e8b\u9879', children: '\u6ce8\u610f\u4e8b\u9879' }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                '\u5728\u6ce8\u5165 HTTPChaos \u76f8\u5173\u6545\u969c\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a',
            }),
            '\n',
            (0, r.jsxs)(d.ul, {
              children: [
                '\n',
                (0, r.jsx)(d.li, {
                  children:
                    '\u786e\u4fdd\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Control Manager\u3002',
                }),
                '\n',
                (0, r.jsx)(d.li, {
                  children:
                    '\u786e\u4fdd\u76ee\u6807\u670d\u52a1\u7981\u7528\u4e86 HTTPS \u8bbf\u95ee\uff0c\u56e0\u4e3a HTTPChaos \u6682\u4e0d\u652f\u6301\u6ce8\u5165 HTTPS \u8fde\u63a5\u3002',
                }),
                '\n',
                (0, r.jsx)(d.li, {
                  children:
                    '\u4e3a\u4f7f HTTPChaos \u6ce8\u5165\u751f\u6548\uff0c\u5c3d\u91cf\u907f\u514d\u590d\u7528\u5ba2\u6237\u7aef\u7684 TCP socket\u3002\u56e0\u4e3a\u5728\u6ce8\u5165\u6545\u969c\u524d\u5efa\u7acb\u7684 TCP socket \u4e0a\u8fdb\u884c HTTP \u8bf7\u6c42\u4e0d\u53d7 HTTPChaos \u5f71\u54cd\u3002',
                }),
                '\n',
                (0, r.jsx)(d.li, {
                  children:
                    '\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8c28\u614e\u4f7f\u7528\u975e\u5e42\u7b49\u8bed\u4e49\u8bf7\u6c42\uff08\u4f8b\u5982\u5927\u591a\u6570 POST \u8bf7\u6c42\uff09\u3002\u82e5\u4f7f\u7528\u4e86\u8fd9\u7c7b\u8bf7\u6c42\uff0c\u6ce8\u5165\u6545\u969c\u540e\u53ef\u80fd\u65e0\u6cd5\u901a\u8fc7\u91cd\u590d\u8bf7\u6c42\u4f7f\u76ee\u6807\u670d\u52a1\u6062\u590d\u6b63\u5e38\u72b6\u6001\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, {
              id: '\u4f7f\u7528-dashboard-\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Dashboard \u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, r.jsxs)(d.ol, {
              children: [
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684',
                        (0, r.jsx)(d.strong, { children: '\u65b0\u7684\u5b9e\u9a8c' }),
                        '\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(d.p, {
                      children: (0, r.jsx)(d.img, {
                        alt: '\u521b\u5efa\u5b9e\u9a8c',
                        src: s(42461).A + '',
                        width: '982',
                        height: '648',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u5728',
                        (0, r.jsx)(d.strong, { children: '\u9009\u62e9\u76ee\u6807' }),
                        '\u533a\u57df\u9009\u62e9',
                        (0, r.jsx)(d.strong, { children: 'HTTP \u6545\u969c' }),
                        '\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff08\u5982 ',
                        (0, r.jsx)(d.code, { children: 'RESPONSE ABORT' }),
                        '\uff09\uff0c\u5e76\u586b\u5199\u5177\u4f53\u914d\u7f6e\uff1a',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(d.p, {
                      children: (0, r.jsx)(d.img, {
                        alt: '\u521b\u5efa HTTP \u6545\u969c',
                        src: s(82180).A + '',
                        width: '1089',
                        height: '1219',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(d.p, { children: '\u63d0\u4ea4\u5b9e\u9a8c\u3002' }),
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u4ee5\u4e0a\u56fe\u4e3a\u4f8b\uff0c\u70b9\u51fb',
                        (0, r.jsx)(d.strong, { children: '\u63d0\u4ea4' }),
                        '\u5373\u5b8c\u6210\u4e86\u5bf9 80 \u7aef\u53e3\u6240\u6709\u8bf7\u6c42\u7684\u54cd\u5e94\u4e2d\u65ad\u914d\u7f6e\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, {
              id: '\u4f7f\u7528-yaml-\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                'Chaos Mesh \u4e5f\u652f\u6301\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa HTTPChaos \u5b9e\u9a8c\u3002\u5728 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u4e00\u79cd HTTP \u6545\u969c\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u6a21\u62df\u591a\u79cd HTTP \u6545\u969c\u7684\u7ec4\u5408\u3002',
            }),
            '\n',
            (0, r.jsxs)(d.h3, {
              id: 'abort-\u793a\u4f8b',
              children: [(0, r.jsx)(d.code, { children: 'abort' }), ' \u793a\u4f8b'],
            }),
            '\n',
            (0, r.jsxs)(d.ol, {
              children: [
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 ',
                        (0, r.jsx)(d.code, { children: 'http-abort-failure.yaml' }),
                        ' \u6587\u4ef6\u4e2d\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(d.pre, {
                      children: (0, r.jsx)(d.code, {
                        className: 'language-yaml',
                        children:
                          'apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api\n  abort: true\n  duration: 5m\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ',
                        (0, r.jsx)(d.code, { children: 'abort' }),
                        ' \u6545\u969c 5 \u5206\u949f\uff0c\u6545\u969c\u6ce8\u5165\u671f\u95f4\u8be5 Pod \u7684 80 \u7aef\u53e3 ',
                        (0, r.jsx)(d.code, { children: '/api' }),
                        ' \u8def\u5f84\u7684 GET \u8bf7\u6c42\u4f1a\u88ab\u4e2d\u65ad\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, r.jsx)(d.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(d.pre, {
                      children: (0, r.jsx)(d.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./http-abort-failure.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(d.h3, {
              id: '\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b',
              children: '\u5176\u5b83\u6545\u969c\u7ec4\u5408\u793a\u4f8b',
            }),
            '\n',
            (0, r.jsxs)(d.ol, {
              children: [
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 ',
                        (0, r.jsx)(d.code, { children: 'http-failure.yaml' }),
                        ' \u6587\u4ef6\u4e2d\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(d.pre, {
                      children: (0, r.jsx)(d.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api/*\n  delay: 10s\n  replace:\n    path: /api/v2/\n    method: DELETE\n  patch:\n    headers:\n      - ['Token', '<one token>']\n      - ['Token', '<another token>']\n    body:\n      type: JSON\n      value: '{\"foo\": \"bar\"}'\n  duration: 5m\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u5206\u522b\u6ce8\u5165 ',
                        (0, r.jsx)(d.code, { children: 'delay' }),
                        ' \u6545\u969c\u3001',
                        (0, r.jsx)(d.code, { children: 'replace' }),
                        ' \u6545\u969c\u3001',
                        (0, r.jsx)(d.code, { children: 'patch' }),
                        ' \u6545\u969c\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(d.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, r.jsx)(d.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(d.pre, {
                      children: (0, r.jsx)(d.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./http-failure.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, { id: '\u5b57\u6bb5\u8bf4\u660e', children: '\u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, r.jsx)(d.h3, {
              id: '\u901a\u7528\u5b57\u6bb5\u8bf4\u660e',
              children: '\u901a\u7528\u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                '\u901a\u7528\u5b57\u6bb5\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a Request \u6216 Response \u65f6\u5747\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002',
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, r.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, r.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, r.jsx)(d.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, r.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, r.jsx)(d.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'mode' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            '\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a',
                            (0, r.jsx)(d.code, { children: 'one' }),
                            '\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, r.jsx)(d.code, { children: 'all' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, r.jsx)(d.code, { children: 'fixed' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, r.jsx)(d.code, { children: 'fixed-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001',
                            (0, r.jsx)(d.code, { children: 'random-max-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09',
                          ],
                        }),
                        (0, r.jsx)(d.td, { children: '\u65e0' }),
                        (0, r.jsx)(d.td, { children: '\u662f' }),
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'value' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            '\u53d6\u51b3\u4e8e ',
                            (0, r.jsx)(d.code, { children: 'mode' }),
                            ' \u7684\u53d6\u503c\uff0c\u4e3a ',
                            (0, r.jsx)(d.code, { children: 'mode' }),
                            ' \u63d0\u4f9b\u53c2\u6570',
                          ],
                        }),
                        (0, r.jsx)(d.td, { children: '\u65e0' }),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '1' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'target' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            '\u6307\u5b9a\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a ',
                            (0, r.jsx)(d.code, { children: 'Request' }),
                            ' \u6216 ',
                            (0, r.jsx)(d.code, { children: 'Response' }),
                            '\uff0c\u9700\u8981\u540c\u65f6\u914d\u7f6e',
                            (0, r.jsxs)(d.a, {
                              href: '#%E4%B8%8E-target-%E7%9B%B8%E5%85%B3%E7%9A%84%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                              children: [
                                '\u4e0e ',
                                (0, r.jsx)(d.code, { children: 'target' }),
                                ' \u76f8\u5173\u7684\u5b57\u6bb5',
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u662f' }),
                        (0, r.jsx)(d.td, { children: 'Request' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'port' }) }),
                        (0, r.jsx)(d.td, { children: 'int32' }),
                        (0, r.jsx)(d.td, { children: '\u76ee\u6807\u670d\u52a1\u76d1\u542c\u7684 TCP \u7aef\u53e3' }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u662f' }),
                        (0, r.jsx)(d.td, { children: '80' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'path' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            '\u76ee\u6807\u8bf7\u6c42\u7684 URI \u8def\u5f84\uff0c\u652f\u6301',
                            (0, r.jsx)(d.a, {
                              href: 'https://www.wikiwand.com/en/Matching_wildcards',
                              children: '\u901a\u914d\u7b26',
                            }),
                          ],
                        }),
                        (0, r.jsx)(d.td, { children: '\u9ed8\u8ba4\u5bf9\u6240\u6709\u8def\u5f84\u751f\u6548' }),
                        (0, r.jsx)(d.td, { children: '\u662f' }),
                        (0, r.jsx)(d.td, { children: '/api/*' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'method' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsx)(d.td, { children: '\u76ee\u6807\u8bf7\u6c42\u7684 HTTP method' }),
                        (0, r.jsx)(d.td, { children: '\u9ed8\u8ba4\u5bf9\u6240\u6709\u65b9\u6cd5\u751f\u6548' }),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'GET' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'request_headers' }) }),
                        (0, r.jsx)(d.td, { children: 'map[string]string' }),
                        (0, r.jsx)(d.td, { children: '\u76ee\u6807\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u5339\u914d' }),
                        (0, r.jsx)(d.td, { children: '\u9ed8\u8ba4\u5bf9\u6240\u6709\u8bf7\u6c42\u751f\u6548' }),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'Content-Type: application/json' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'abort' }) }),
                        (0, r.jsx)(d.td, { children: 'bool' }),
                        (0, r.jsx)(d.td, { children: '\u662f\u5426\u6ce8\u5165\u8fde\u63a5\u4e2d\u65ad\u6545\u969c' }),
                        (0, r.jsx)(d.td, { children: 'false' }),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'true' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'delay' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsx)(d.td, { children: '\u6307\u5b9a\u5ef6\u8fdf\u6545\u969c\u7684\u65f6\u95f4' }),
                        (0, r.jsx)(d.td, { children: '0' }),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '10s' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'replace.headers' }) }),
                        (0, r.jsx)(d.td, { children: 'map[string]string' }),
                        (0, r.jsx)(d.td, {
                          children:
                            '\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u66ff\u6362\u6545\u969c\u4e2d\u7528\u4e8e\u66ff\u6362\u7684\u952e\u503c\u5bf9',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'Content-Type: application/xml' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'replace.body' }) }),
                        (0, r.jsx)(d.td, { children: '[]byte' }),
                        (0, r.jsx)(d.td, {
                          children:
                            '\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u66ff\u6362\u6545\u969c\u7684\u5185\u5bb9\uff08base64 \u7f16\u7801\uff09',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'eyJmb28iOiAiYmFyIn0K' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'patch.headers' }) }),
                        (0, r.jsx)(d.td, { children: '[][]string' }),
                        (0, r.jsx)(d.td, {
                          children:
                            '\u6307\u5b9a\u8bf7\u6c42\u5934\u6216\u54cd\u5e94\u5934\u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '- [Set-Cookie, one cookie]' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'patch.body.type' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            '\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u53ea\u652f\u6301 ',
                            (0, r.jsx)(d.a, {
                              href: 'https://tools.ietf.org/html/rfc7396',
                              children: (0, r.jsx)(d.code, { children: 'JSON' }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'JSON' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'patch.body.value' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsx)(d.td, {
                          children:
                            '\u6307\u5b9a\u8bf7\u6c42\u4f53\u6216\u54cd\u5e94\u4f53\u9644\u52a0\u6545\u969c\u7684\u6545\u969c\u5185\u5bb9',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: '{"foo": "bar"}' }) }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'duration' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsx)(d.td, {
                          children: '\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u662f' }),
                        (0, r.jsx)(d.td, { children: '30s' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'scheduler' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsx)(d.td, {
                          children:
                            '\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u8fd0\u884c\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '5 * * * *' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(d.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: [
                (0, r.jsxs)(d.ul, {
                  children: [
                    '\n',
                    (0, r.jsxs)(d.li, {
                      children: [
                        '\n',
                        (0, r.jsxs)(d.p, {
                          children: [
                            '\u5f53\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c',
                            (0, r.jsx)(d.code, { children: 'replace.body' }),
                            ' \u5fc5\u987b\u4e3a\u66ff\u6362\u5185\u5bb9\u7684 Base64 \u7f16\u7801\u3002',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(d.li, {
                      children: [
                        '\n',
                        (0, r.jsxs)(d.p, {
                          children: [
                            '\u5f53\u4f7f\u7528 Kubernetes API \u521b\u5efa\u5b9e\u9a8c\u65f6\uff0c\u65e0\u9700\u5c06\u66ff\u6362\u7684\u5185\u5bb9\u8fdb\u884c Base64 \u7f16\u7801\uff0c\u76f4\u63a5\u5c06\u5176\u8f6c\u6362\u6210 ',
                            (0, r.jsx)(d.code, { children: '[]byte' }),
                            ' \u540e\u4f20\u5165 ',
                            (0, r.jsx)(d.code, { children: 'httpchaos.Spec.Replace.Body' }),
                            ' \u5b57\u6bb5\u5373\u53ef\u3002\u4f8b\u5982\uff1a',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                (0, r.jsx)(d.pre, {
                  children: (0, r.jsx)(d.code, {
                    className: 'language-golang',
                    children: 'httpchaos.Spec.Replace.Body = []byte(`{"foo": "bar"}`)\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(d.h3, {
              id: '\u4e0e-target-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e',
              children: [
                '\u4e0e ',
                (0, r.jsx)(d.code, { children: 'target' }),
                ' \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e',
              ],
            }),
            '\n',
            (0, r.jsxs)(d.h3, {
              id: 'request-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e',
              children: [(0, r.jsx)(d.code, { children: 'Request' }), ' \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e'],
            }),
            '\n',
            (0, r.jsxs)(d.p, {
              children: [
                (0, r.jsx)(d.code, { children: 'Request' }),
                ' \u4e13\u7528\u5b57\u6bb5\u662f\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a ',
                (0, r.jsx)(d.code, { children: 'Request' }),
                ' \uff08\u5373 ',
                (0, r.jsx)(d.code, { children: 'target' }),
                ' \u8bbe\u7f6e\u4e3a ',
                (0, r.jsx)(d.code, { children: 'Request' }),
                '\uff09 \u65f6\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002',
              ],
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, r.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, r.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, r.jsx)(d.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, r.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, r.jsx)(d.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'replace.path' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsx)(d.td, { children: '\u6307\u5b9a URI \u8def\u5f84\u66ff\u6362\u5185\u5bb9' }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '/api/v2/' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'replace.method' }) }),
                        (0, r.jsx)(d.td, { children: 'string' }),
                        (0, r.jsx)(d.td, {
                          children: '\u6307\u5b9a\u8bf7\u6c42 HTTP \u65b9\u6cd5\u7684\u66ff\u6362\u5185\u5bb9',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'DELETE' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'replace.queries' }) }),
                        (0, r.jsx)(d.td, { children: 'map[string]string' }),
                        (0, r.jsx)(d.td, { children: '\u6307\u5b9a URI query \u7684\u66ff\u6362\u952e\u503c\u5bf9' }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'foo: bar' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'patch.queries' }) }),
                        (0, r.jsx)(d.td, { children: '[][]string' }),
                        (0, r.jsx)(d.td, {
                          children:
                            '\u6307\u5b9a URI query \u9644\u52a0\u6545\u969c\u4e2d\u9644\u52a0\u7684\u952e\u503c\u5bf9',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '- [foo, bar]' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(d.h3, {
              id: 'response-\u4e13\u7528\u5b57\u6bb5\u8bf4\u660e',
              children: [(0, r.jsx)(d.code, { children: 'Response' }), ' \u4e13\u7528\u5b57\u6bb5\u8bf4\u660e'],
            }),
            '\n',
            (0, r.jsxs)(d.p, {
              children: [
                (0, r.jsx)(d.code, { children: 'Response' }),
                ' \u4e13\u7528\u5b57\u6bb5\u662f\u6307\u6545\u969c\u6ce8\u5165\u7684\u76ee\u6807\u8fc7\u7a0b\u4e3a ',
                (0, r.jsx)(d.code, { children: 'Response' }),
                ' \uff08\u5373 ',
                (0, r.jsx)(d.code, { children: 'target' }),
                ' \u8bbe\u7f6e\u4e3a ',
                (0, r.jsx)(d.code, { children: 'Response' }),
                '\uff09 \u65f6\u6709\u610f\u4e49\u7684\u5b57\u6bb5\u3002',
              ],
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, r.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, r.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, r.jsx)(d.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, r.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, r.jsx)(d.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'code' }) }),
                        (0, r.jsx)(d.td, { children: 'int32' }),
                        (0, r.jsx)(d.td, { children: '\u76ee\u6807\u54cd\u5e94\u7684\u72b6\u6001\u7801' }),
                        (0, r.jsx)(d.td, { children: '\u9ed8\u8ba4\u5bf9\u6240\u6709\u72b6\u6001\u7801\u751f\u6548' }),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '200' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'response_headers' }) }),
                        (0, r.jsx)(d.td, { children: 'map[string]string' }),
                        (0, r.jsx)(d.td, { children: '\u76ee\u6807\u54cd\u5e94\u7684\u54cd\u5e94\u5934\u5339\u914d' }),
                        (0, r.jsx)(d.td, { children: '\u9ed8\u8ba4\u5bf9\u6240\u6709\u54cd\u5e94\u751f\u6548' }),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: 'Content-Type: application/json' }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, { children: (0, r.jsx)(d.code, { children: 'replace.code' }) }),
                        (0, r.jsx)(d.td, { children: 'int32' }),
                        (0, r.jsx)(d.td, {
                          children: '\u6307\u5b9a\u54cd\u5e94\u72b6\u6001\u7801\u7684\u66ff\u6362\u5185\u5bb9',
                        }),
                        (0, r.jsx)(d.td, {}),
                        (0, r.jsx)(d.td, { children: '\u5426' }),
                        (0, r.jsx)(d.td, { children: '404' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, { id: '\u672c\u5730\u8c03\u8bd5', children: '\u672c\u5730\u8c03\u8bd5' }),
            '\n',
            (0, r.jsxs)(d.p, {
              children: [
                '\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u67d0\u79cd\u6545\u969c\u7684\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ',
                (0, r.jsx)(d.a, { href: 'https://github.com/chaos-mesh/rs-tproxy', children: 'rs-tproxy' }),
                ' \u5728\u672c\u5730\u6d4b\u8bd5\u76f8\u5e94\u529f\u80fd\u3002Chaos Mesh \u540c\u6837\u4f7f\u7528 rs-tproxy \u5b9e\u73b0 HTTPChaos\u3002',
              ],
            }),
          ],
        })
      }
      function j(e = {}) {
        const { wrapper: d } = { ...(0, c.R)(), ...e.components }
        return d ? (0, r.jsx)(d, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e)
      }
    },
    42461: (e, d, s) => {
      s.d(d, { A: () => n })
      const n = s.p + 'assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png'
    },
    82180: (e, d, s) => {
      s.d(d, { A: () => n })
      const n = s.p + 'assets/images/create-new-httpchaos-d7cb30f5ac1586585b27241eef6ec383.png'
    },
    28453: (e, d, s) => {
      s.d(d, { R: () => t, x: () => l })
      var n = s(96540)
      const r = {},
        c = n.createContext(r)
      function t(e) {
        const d = n.useContext(c)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(d) : { ...d, ...e }
          },
          [d, e]
        )
      }
      function l(e) {
        let d
        return (
          (d = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : t(e.components)),
          n.createElement(c.Provider, { value: d }, e.children)
        )
      }
    },
  },
])
