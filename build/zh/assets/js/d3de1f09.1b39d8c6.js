'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5993],
  {
    60112: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => t,
          contentTitle: () => l,
          default: () => j,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => h,
        })
      const d = JSON.parse(
        '{"id":"simulate-io-chaos-on-kubernetes","title":"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c","description":"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa IOChaos \u6df7\u6c8c\u5b9e\u9a8c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-io-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-io-chaos-on-kubernetes","permalink":"/zh/docs/2.5.2/simulate-io-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-io-chaos-on-kubernetes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u538b\u529b\u573a\u666f","permalink":"/zh/docs/2.5.2/simulate-heavy-stress-on-kubernetes"},"next":{"title":"\u6a21\u62df DNS \u6545\u969c","permalink":"/zh/docs/2.5.2/simulate-dns-chaos-on-kubernetes"}}'
      )
      var A = s(74848),
        r = s(28453)
      const i = { title: '\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c' },
        l = void 0,
        t = {},
        h = [
          { value: 'IOChaos \u4ecb\u7ecd', id: 'iochaos-\u4ecb\u7ecd', level: 2 },
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
          { value: 'latency \u793a\u4f8b', id: 'latency-\u793a\u4f8b', level: 3 },
          { value: 'fault \u793a\u4f8b', id: 'fault-\u793a\u4f8b', level: 3 },
          { value: 'attrOverride \u793a\u4f8b', id: 'attroverride-\u793a\u4f8b', level: 3 },
          { value: 'mistake \u793a\u4f8b', id: 'mistake-\u793a\u4f8b', level: 3 },
          { value: '\u5b57\u6bb5\u8bf4\u660e', id: '\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          { value: '\u901a\u7528\u5b57\u6bb5', id: '\u901a\u7528\u5b57\u6bb5', level: 4 },
          {
            value: '\u4e0e action \u76f8\u5173\u7684\u5b57\u6bb5',
            id: '\u4e0e-action-\u76f8\u5173\u7684\u5b57\u6bb5',
            level: 4,
          },
          { value: '\u672c\u5730\u8c03\u8bd5', id: '\u672c\u5730\u8c03\u8bd5', level: 2 },
          { value: '\u9644\u5f55 A\uff1amethods \u7c7b\u578b', id: '\u9644\u5f55-amethods-\u7c7b\u578b', level: 2 },
          {
            value: '\u9644\u5f55 B\uff1a\u5e38\u89c1\u9519\u8bef\u53f7',
            id: '\u9644\u5f55-b\u5e38\u89c1\u9519\u8bef\u53f7',
            level: 2,
          },
        ]
      function c(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          em: 'em',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, A.jsxs)(A.Fragment, {
          children: [
            (0, A.jsx)(n.p, {
              children:
                '\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa IOChaos \u6df7\u6c8c\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, A.jsx)(n.h2, { id: 'iochaos-\u4ecb\u7ecd', children: 'IOChaos \u4ecb\u7ecd' }),
            '\n',
            (0, A.jsx)(n.p, {
              children:
                'IOChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\u3002\u901a\u8fc7\u521b\u5efa IOChaos \u7c7b\u578b\u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u6587\u4ef6\u7cfb\u7edf\u53d1\u751f\u6545\u969c\u7684\u60c5\u666f\u3002\u76ee\u524d\uff0cIOChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, A.jsxs)(n.ul, {
              children: [
                '\n',
                (0, A.jsx)(n.li, {
                  children: 'latency\uff1a\u4e3a\u6587\u4ef6\u7cfb\u7edf\u8c03\u7528\u52a0\u5165\u5ef6\u8fdf',
                }),
                '\n',
                (0, A.jsx)(n.li, {
                  children: 'fault\uff1a\u4f7f\u6587\u4ef6\u7cfb\u7edf\u8c03\u7528\u8fd4\u56de\u9519\u8bef',
                }),
                '\n',
                (0, A.jsx)(n.li, { children: 'attrOverride\uff1a\u4fee\u6539\u6587\u4ef6\u5c5e\u6027' }),
                '\n',
                (0, A.jsx)(n.li, {
                  children: 'mistake\uff1a\u4f7f\u6587\u4ef6\u8bfb\u5230\u6216\u5199\u5165\u9519\u8bef\u7684\u503c',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsxs)(n.p, {
              children: [
                '\u8be6\u7ec6\u7684\u529f\u80fd\u4ecb\u7ecd\u53c2\u89c1',
                (0, A.jsx)(n.a, {
                  href: '#%E4%BD%BF%E7%94%A8-yaml-%E6%96%87%E4%BB%B6%E5%88%9B%E5%BB%BA%E5%AE%9E%E9%AA%8C',
                  children: '\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h2, { id: '\u6ce8\u610f\u4e8b\u9879', children: '\u6ce8\u610f\u4e8b\u9879' }),
            '\n',
            (0, A.jsxs)(n.ol, {
              children: [
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsx)(n.p, {
                      children:
                        '\u521b\u5efa IOChaos \u5b9e\u9a8c\u524d\uff0c\u8bf7\u786e\u4fdd\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Controller Manager\u3002',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        'IOChaos \u53ef\u80fd\u4f1a\u635f\u574f\u4f60\u7684\u6570\u636e\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8bf7',
                        (0, A.jsx)(n.strong, { children: '\u8c28\u614e' }),
                        '\u4f7f\u7528\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h2, {
              id: '\u4f7f\u7528-dashboard-\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Dashboard \u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, A.jsxs)(n.ol, {
              children: [
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684',
                        (0, A.jsx)(n.strong, { children: '\u65b0\u7684\u5b9e\u9a8c' }),
                        '\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\u3002',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.p, {
                      children: (0, A.jsx)(n.img, {
                        alt: '\u65b0\u5efa\u5b9e\u9a8c',
                        src: s(84768).A + '',
                        width: '523',
                        height: '256',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5728',
                        (0, A.jsx)(n.strong, { children: '\u9009\u62e9\u76ee\u6807' }),
                        '\u5904\u9009\u62e9',
                        (0, A.jsx)(n.strong, { children: '\u6587\u4ef6\u7cfb\u7edf\u6ce8\u5165' }),
                        '\uff0c\u5e76\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u5982',
                        (0, A.jsx)(n.strong, { children: 'LATENCY' }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.p, {
                      children: (0, A.jsx)(n.img, {
                        alt: '\u8bbe\u7f6e\u5b9e\u9a8c\u7c7b\u578b',
                        src: s(98383).A + '',
                        width: '1079',
                        height: '457',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsx)(n.p, {
                      children:
                        '\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\u3002',
                    }),
                    '\n',
                    (0, A.jsx)(n.p, {
                      children: (0, A.jsx)(n.img, {
                        alt: '\u8bbe\u7f6e\u5b9e\u9a8c\u5185\u5bb9',
                        src: s(30450).A + '',
                        width: '1069',
                        height: '533',
                      }),
                    }),
                    '\n',
                    (0, A.jsx)(n.p, {
                      children: (0, A.jsx)(n.img, {
                        alt: '\u8bbe\u7f6e\u76ee\u6807\u548c\u8fd0\u884c\u65f6\u95f4',
                        src: s(82113).A + '',
                        width: '1083',
                        height: '413',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsx)(n.p, { children: '\u63d0\u4ea4\u5b9e\u9a8c\u3002' }),
                    '\n',
                    (0, A.jsx)(n.p, {
                      children: (0, A.jsx)(n.img, {
                        alt: '\u63d0\u4ea4\u5b9e\u9a8c',
                        src: s(4068).A + '',
                        width: '1129',
                        height: '478',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h2, {
              id: '\u4f7f\u7528-yaml-\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, A.jsx)(n.h3, { id: 'latency-\u793a\u4f8b', children: 'latency \u793a\u4f8b' }),
            '\n',
            (0, A.jsxs)(n.ol, {
              children: [
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ',
                        (0, A.jsx)(n.code, { children: 'io-latency.yaml' }),
                        '\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-latency-example\n  namespace: chaos-mesh\nspec:\n  action: latency\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: '/var/run/etcd/**/*'\n  delay: '100ms'\n  percent: 50\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411 ',
                        (0, A.jsx)(n.code, { children: '/var/run/etcd' }),
                        ' \u76ee\u5f55\u6ce8\u5165\u5ef6\u8fdf\u6545\u969c\uff0c\u4f7f\u8be5\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\uff08\u5305\u62ec\u8bfb\uff0c\u5199\uff0c\u5217\u51fa\u76ee\u5f55\u5185\u5bb9\u7b49\uff09\u4ea7\u751f 100 \u6beb\u79d2\u5ef6\u8fdf\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, A.jsx)(n.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-latency.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h3, { id: 'fault-\u793a\u4f8b', children: 'fault \u793a\u4f8b' }),
            '\n',
            (0, A.jsxs)(n.ol, {
              children: [
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ',
                        (0, A.jsx)(n.code, { children: 'io-fault.yaml' }),
                        '\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-fault-example\n  namespace: chaos-mesh\nspec:\n  action: fault\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  errno: 5\n  percent: 50\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411 ',
                        (0, A.jsx)(n.code, { children: '/var/run/etcd' }),
                        ' \u76ee\u5f55\u6ce8\u5165\u6587\u4ef6\u9519\u8bef\u6545\u969c\uff0c\u4f7f\u8be5\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\u6709 50% \u7684\u6982\u7387\u53d1\u751f\u9519\u8bef\uff0c\u5e76\u8fd4\u56de\u9519\u8bef\u7801 5 (Input/output error)\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, A.jsx)(n.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-fault.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h3, { id: 'attroverride-\u793a\u4f8b', children: 'attrOverride \u793a\u4f8b' }),
            '\n',
            (0, A.jsxs)(n.ol, {
              children: [
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ',
                        (0, A.jsx)(n.code, { children: 'io-attr.yaml' }),
                        '\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-attr-example\n  namespace: chaos-mesh\nspec:\n  action: attrOverride\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  attr:\n    perm: 72\n  percent: 10\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411 ',
                        (0, A.jsx)(n.code, { children: '/var/run/etcd' }),
                        ' \u76ee\u5f55\u6ce8\u5165 ',
                        (0, A.jsx)(n.code, { children: 'attrOverride' }),
                        ' \u6545\u969c\uff0c\u4f7f\u8be5\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\u5c06\u6709 10% \u7684\u6982\u7387\u4f7f\u76ee\u6807\u6587\u4ef6\u7684\u6743\u9650\u53d8\u4e3a 72\uff08\u5373\u516b\u8fdb\u5236\u4e0b\u7684 110\uff09\uff0c\u8fd9\u5c06\u4f7f\u5f97\u6587\u4ef6\u53ea\u80fd\u7531\u62e5\u6709\u8005\u4e0e\u5176\u6240\u5728\u7684\u7ec4\u6267\u884c\uff0c\u65e0\u6743\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, A.jsx)(n.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-attr.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h3, { id: 'mistake-\u793a\u4f8b', children: 'mistake \u793a\u4f8b' }),
            '\n',
            (0, A.jsxs)(n.ol, {
              children: [
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ',
                        (0, A.jsx)(n.code, { children: 'io-mistake.yaml' }),
                        '\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-mistake-example\n  namespace: chaos-mesh\nspec:\n  action: mistake\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  mistake:\n    filling: zero\n    maxOccurrences: 1\n    maxLength: 10\n  methods:\n    - READ\n    - WRITE\n  percent: 10\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411 ',
                        (0, A.jsx)(n.code, { children: '/var/run/etcd' }),
                        ' \u76ee\u5f55\u6ce8\u5165\u8bfb\u5199\u9519\u8bef\u6545\u969c\uff0c\u4f7f\u8be5\u76ee\u5f55\u4e0b\u7684\u8bfb\u5199\u64cd\u4f5c\u5c06\u6709 10% \u7684\u6982\u7387\u5c06\u53d1\u751f\u9519\u8bef\u3002\u5176\u4e2d\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff0c\u6700\u5927\u957f\u5ea6\u4e3a 10 \u7684 1 \u5904\u968f\u673a\u4f4d\u7f6e\u5c06\u88ab\u66ff\u6362\u4e3a 0\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, A.jsx)(n.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.pre, {
                      children: (0, A.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-mistake.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h3, { id: '\u5b57\u6bb5\u8bf4\u660e', children: '\u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, A.jsx)(n.h4, { id: '\u901a\u7528\u5b57\u6bb5', children: '\u901a\u7528\u5b57\u6bb5' }),
            '\n',
            (0, A.jsxs)(n.table, {
              children: [
                (0, A.jsx)(n.thead, {
                  children: (0, A.jsxs)(n.tr, {
                    children: [
                      (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                      (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                      (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                      (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, A.jsxs)(n.tbody, {
                  children: [
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'action' }),
                        (0, A.jsx)(n.td, { children: 'string' }),
                        (0, A.jsx)(n.td, {
                          children:
                            '\u8868\u793a\u5177\u4f53\u7684\u6545\u969c\u7c7b\u578b\uff0c\u4ec5\u652f\u6301 latency\u3001fault\u3001attrOverride\u3001mistake',
                        }),
                        (0, A.jsx)(n.td, {}),
                        (0, A.jsx)(n.td, { children: '\u662f' }),
                        (0, A.jsx)(n.td, { children: 'latency' }),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'mode' }),
                        (0, A.jsx)(n.td, { children: 'string' }),
                        (0, A.jsxs)(n.td, {
                          children: [
                            '\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a',
                            (0, A.jsx)(n.code, { children: 'one' }),
                            '\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, A.jsx)(n.code, { children: 'all' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, A.jsx)(n.code, { children: 'fixed' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, A.jsx)(n.code, { children: 'fixed-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001',
                            (0, A.jsx)(n.code, { children: 'random-max-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09',
                          ],
                        }),
                        (0, A.jsx)(n.td, { children: '\u65e0' }),
                        (0, A.jsx)(n.td, { children: '\u662f' }),
                        (0, A.jsx)(n.td, { children: (0, A.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'selector' }),
                        (0, A.jsx)(n.td, { children: 'struct' }),
                        (0, A.jsxs)(n.td, {
                          children: [
                            '\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003',
                            (0, A.jsx)(n.a, {
                              href: '/zh/docs/2.5.2/define-chaos-experiment-scope',
                              children: '\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4',
                            }),
                          ],
                        }),
                        (0, A.jsx)(n.td, { children: '\u65e0' }),
                        (0, A.jsx)(n.td, { children: '\u662f' }),
                        (0, A.jsx)(n.td, {}),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'value' }),
                        (0, A.jsx)(n.td, { children: 'string' }),
                        (0, A.jsxs)(n.td, {
                          children: [
                            '\u53d6\u51b3\u4e0e ',
                            (0, A.jsx)(n.code, { children: 'mode' }),
                            ' \u7684\u914d\u7f6e\uff0c\u4e3a ',
                            (0, A.jsx)(n.code, { children: 'mode' }),
                            ' \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ',
                            (0, A.jsx)(n.code, { children: 'mode' }),
                            ' \u914d\u7f6e\u4e3a ',
                            (0, A.jsx)(n.code, { children: 'fixed-percent' }),
                            ' \u65f6\uff0c',
                            (0, A.jsx)(n.code, { children: 'value' }),
                            ' \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4',
                          ],
                        }),
                        (0, A.jsx)(n.td, { children: '\u65e0' }),
                        (0, A.jsx)(n.td, { children: '\u5426' }),
                        (0, A.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'volumePath' }),
                        (0, A.jsx)(n.td, { children: 'string' }),
                        (0, A.jsx)(n.td, {
                          children:
                            'volume \u5728\u76ee\u6807\u5bb9\u5668\u5185\u7684\u6302\u8f7d\u70b9\uff0c\u5fc5\u987b\u4e3a\u6302\u8f7d\u7684\u6839\u76ee\u5f55',
                        }),
                        (0, A.jsx)(n.td, {}),
                        (0, A.jsx)(n.td, { children: '\u662f' }),
                        (0, A.jsx)(n.td, { children: '/var/run/etcd' }),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'path' }),
                        (0, A.jsx)(n.td, { children: 'string' }),
                        (0, A.jsx)(n.td, {
                          children:
                            '\u6ce8\u5165\u9519\u8bef\u7684\u751f\u6548\u8303\u56f4\uff0c\u53ef\u4ee5\u662f\u901a\u914d\u7b26\uff0c\u4e5f\u53ef\u4ee5\u662f\u5355\u4e2a\u6587\u4ef6',
                        }),
                        (0, A.jsx)(n.td, { children: '\u9ed8\u8ba4\u5bf9\u6240\u6709\u6587\u4ef6\u751f\u6548' }),
                        (0, A.jsx)(n.td, { children: '\u5426' }),
                        (0, A.jsxs)(n.td, { children: ['/var/run/etcd/*', (0, A.jsx)(n.em, { children: '/' })] }),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'methods' }),
                        (0, A.jsx)(n.td, { children: '[]string' }),
                        (0, A.jsxs)(n.td, {
                          children: [
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684\u6587\u4ef6\u7cfb\u7edf\u8c03\u7528\u7c7b\u578b\uff0c\u5177\u4f53\u652f\u6301\u7684\u7c7b\u578b\u89c1',
                            (0, A.jsx)(n.a, {
                              href: '#%E9%99%84%E5%BD%95-a%EF%BC%9Amethods-%E7%B1%BB%E5%9E%8B',
                              children: '\u9644\u5f55 A',
                            }),
                          ],
                        }),
                        (0, A.jsx)(n.td, { children: '\u6240\u6709\u7c7b\u578b' }),
                        (0, A.jsx)(n.td, { children: '\u5426' }),
                        (0, A.jsx)(n.td, { children: 'READ' }),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'percent' }),
                        (0, A.jsx)(n.td, { children: 'int' }),
                        (0, A.jsx)(n.td, {
                          children:
                            '\u6bcf\u6b21\u64cd\u4f5c\u53d1\u751f\u6545\u969c\u7684\u6982\u7387\uff0c\u5355\u4f4d\u4e3a%',
                        }),
                        (0, A.jsx)(n.td, { children: '100' }),
                        (0, A.jsx)(n.td, { children: '\u5426' }),
                        (0, A.jsx)(n.td, { children: '100' }),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'containerNames' }),
                        (0, A.jsx)(n.td, { children: '[]string' }),
                        (0, A.jsx)(n.td, { children: '\u6307\u5b9a\u6ce8\u5165\u7684\u5bb9\u5668\u540d' }),
                        (0, A.jsx)(n.td, {}),
                        (0, A.jsx)(n.td, { children: '\u5426' }),
                        (0, A.jsx)(n.td, {}),
                      ],
                    }),
                    (0, A.jsxs)(n.tr, {
                      children: [
                        (0, A.jsx)(n.td, { children: 'duration' }),
                        (0, A.jsx)(n.td, { children: 'string' }),
                        (0, A.jsx)(n.td, {
                          children: '\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4',
                        }),
                        (0, A.jsx)(n.td, {}),
                        (0, A.jsx)(n.td, { children: '\u662f' }),
                        (0, A.jsx)(n.td, { children: '30s' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, A.jsx)(n.h4, {
              id: '\u4e0e-action-\u76f8\u5173\u7684\u5b57\u6bb5',
              children: '\u4e0e action \u76f8\u5173\u7684\u5b57\u6bb5',
            }),
            '\n',
            (0, A.jsx)(n.p, {
              children:
                '\u8fd9\u4e9b\u5b57\u6bb5\u4ec5\u5728 action \u4e3a\u5bf9\u5e94\u503c\u65f6\u624d\u6709\u610f\u4e49\uff1a',
            }),
            '\n',
            (0, A.jsxs)(n.ul, {
              children: [
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsx)(n.p, { children: 'latency' }),
                    '\n',
                    (0, A.jsxs)(n.table, {
                      children: [
                        (0, A.jsx)(n.thead, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                              (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                              (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                              (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                              (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                              (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                            ],
                          }),
                        }),
                        (0, A.jsx)(n.tbody, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.td, { children: 'delay' }),
                              (0, A.jsx)(n.td, { children: 'string' }),
                              (0, A.jsx)(n.td, { children: '\u5177\u4f53\u7684\u5ef6\u8fdf\u65f6\u957f' }),
                              (0, A.jsx)(n.td, {}),
                              (0, A.jsx)(n.td, { children: '\u662f' }),
                              (0, A.jsx)(n.td, { children: '100 ms' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsx)(n.p, { children: 'fault' }),
                    '\n',
                    (0, A.jsxs)(n.table, {
                      children: [
                        (0, A.jsx)(n.thead, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                              (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                              (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                              (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                              (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                              (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                            ],
                          }),
                        }),
                        (0, A.jsx)(n.tbody, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.td, { children: 'errno' }),
                              (0, A.jsx)(n.td, { children: 'int' }),
                              (0, A.jsx)(n.td, { children: '\u8fd4\u56de\u7684\u9519\u8bef\u53f7' }),
                              (0, A.jsx)(n.td, {}),
                              (0, A.jsx)(n.td, { children: '\u662f' }),
                              (0, A.jsx)(n.td, { children: '22' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5e38\u89c1\u7684\u9519\u8bef\u53f7\u89c1',
                        (0, A.jsx)(n.a, {
                          href: '#%E9%99%84%E5%BD%95-b%EF%BC%9A%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF%E5%8F%B7',
                          children: '\u9644\u5f55 B',
                        }),
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsx)(n.p, { children: 'attrOverride' }),
                    '\n',
                    (0, A.jsxs)(n.table, {
                      children: [
                        (0, A.jsx)(n.thead, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                              (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                              (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                              (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                              (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                              (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                            ],
                          }),
                        }),
                        (0, A.jsx)(n.tbody, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.td, { children: 'attr' }),
                              (0, A.jsx)(n.td, { children: 'AttrOverrideSpec' }),
                              (0, A.jsx)(n.td, { children: '\u5177\u4f53\u7684\u5c5e\u6027\u8986\u5199\u89c4\u5219' }),
                              (0, A.jsx)(n.td, {}),
                              (0, A.jsx)(n.td, { children: '\u662f' }),
                              (0, A.jsx)(n.td, { children: '\u89c1\u4e0b' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.p, { children: 'AttrOverrideSpec \u5b9a\u4e49\u5982\u4e0b' }),
                    '\n',
                    (0, A.jsxs)(n.table, {
                      children: [
                        (0, A.jsx)(n.thead, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                              (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                              (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                              (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                              (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                              (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                            ],
                          }),
                        }),
                        (0, A.jsxs)(n.tbody, {
                          children: [
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'ino' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, { children: 'ino \u7684\u53f7' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'size' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, { children: '\u6587\u4ef6\u5927\u5c0f' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'blocks' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, { children: '\u6587\u4ef6\u5360\u7528\u5757\u6570' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'atime' }),
                                (0, A.jsx)(n.td, { children: 'TimeSpec' }),
                                (0, A.jsx)(n.td, { children: '\u6700\u540e\u8bbf\u95ee\u65f6\u95f4' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'mtime' }),
                                (0, A.jsx)(n.td, { children: 'TimeSpec' }),
                                (0, A.jsx)(n.td, { children: '\u6700\u540e\u4fee\u6539\u65f6\u95f4' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'ctime' }),
                                (0, A.jsx)(n.td, { children: 'TimeSpec' }),
                                (0, A.jsx)(n.td, { children: '\u6700\u540e\u72b6\u6001\u53d8\u66f4\u65f6\u95f4' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'kind' }),
                                (0, A.jsx)(n.td, { children: 'string' }),
                                (0, A.jsxs)(n.td, {
                                  children: [
                                    '\u6587\u4ef6\u7c7b\u578b\uff0c\u8be6\u89c1 ',
                                    (0, A.jsx)(n.a, {
                                      href: 'https://docs.rs/fuser/0.7.0/fuser/enum.FileType.html',
                                      children: 'fuser::FileType',
                                    }),
                                  ],
                                }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'perm' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, {
                                  children: '\u6587\u4ef6\u6743\u9650\u7684\u5341\u8fdb\u5236\u8868\u793a',
                                }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, { children: '72\uff08\u516b\u8fdb\u5236\u4e0b\u4e3a 110\uff09' }),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'nlink' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, { children: '\u786c\u94fe\u63a5\u6570\u91cf' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: (0, A.jsx)(n.code, { children: 'uid' }) }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, { children: '\u6240\u6709\u8005\u7684\u7528\u6237 ID' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'gid' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, { children: '\u6240\u6709\u8005\u7684\u7ec4 ID' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'rdev' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, { children: '\u8bbe\u5907 ID' }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.p, { children: 'TimeSpec \u5b9a\u4e49\u5982\u4e0b' }),
                    '\n',
                    (0, A.jsxs)(n.table, {
                      children: [
                        (0, A.jsx)(n.thead, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                              (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                              (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                              (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                              (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                              (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                            ],
                          }),
                        }),
                        (0, A.jsxs)(n.tbody, {
                          children: [
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'sec' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, {
                                  children: '\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u6233',
                                }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'nsec' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, {
                                  children: '\u4ee5\u7eb3\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u6233',
                                }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u5426' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    '\n',
                    (0, A.jsxs)(n.p, {
                      children: [
                        '\u5173\u4e8e\u53c2\u6570\u7684\u5177\u4f53\u542b\u4e49\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ',
                        (0, A.jsx)(n.a, {
                          href: 'https://man7.org/linux/man-pages/man2/lstat.2.html',
                          children: 'man stat',
                        }),
                        ' \u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, A.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, A.jsx)(n.p, { children: 'mistake' }),
                    '\n',
                    (0, A.jsxs)(n.table, {
                      children: [
                        (0, A.jsx)(n.thead, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                              (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                              (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                              (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                              (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                              (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                            ],
                          }),
                        }),
                        (0, A.jsx)(n.tbody, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.td, { children: 'mistake' }),
                              (0, A.jsx)(n.td, { children: 'MistakeSpec' }),
                              (0, A.jsx)(n.td, { children: '\u5177\u4f53\u9519\u8bef\u89c4\u5219' }),
                              (0, A.jsx)(n.td, {}),
                              (0, A.jsx)(n.td, { children: '\u662f' }),
                              (0, A.jsx)(n.td, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                    (0, A.jsx)(n.p, { children: 'MistakeSpec \u5b9a\u4e49\u5982\u4e0b' }),
                    '\n',
                    (0, A.jsxs)(n.table, {
                      children: [
                        (0, A.jsx)(n.thead, {
                          children: (0, A.jsxs)(n.tr, {
                            children: [
                              (0, A.jsx)(n.th, { children: '\u53c2\u6570' }),
                              (0, A.jsx)(n.th, { children: '\u7c7b\u578b' }),
                              (0, A.jsx)(n.th, { children: '\u8bf4\u660e' }),
                              (0, A.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                              (0, A.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                              (0, A.jsx)(n.th, { children: '\u793a\u4f8b' }),
                            ],
                          }),
                        }),
                        (0, A.jsxs)(n.tbody, {
                          children: [
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'filling' }),
                                (0, A.jsx)(n.td, { children: 'string' }),
                                (0, A.jsx)(n.td, {
                                  children:
                                    '\u9519\u8bef\u6570\u636e\u7684\u586b\u5145\u5185\u5bb9\uff0c\u53ea\u80fd\u4e3a zero\uff08\u586b\u5145 0\uff09\u6216 random\uff08\u586b\u5145\u968f\u673a\u5b57\u8282\uff09',
                                }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u662f' }),
                                (0, A.jsx)(n.td, {}),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'maxOccurrences' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, {
                                  children:
                                    '\u9519\u8bef\u5728\u6bcf\u4e00\u6b21\u64cd\u4f5c\u4e2d\u6700\u591a\u51fa\u73b0\u6b21\u6570',
                                }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u662f' }),
                                (0, A.jsx)(n.td, { children: '1' }),
                              ],
                            }),
                            (0, A.jsxs)(n.tr, {
                              children: [
                                (0, A.jsx)(n.td, { children: 'maxLength' }),
                                (0, A.jsx)(n.td, { children: 'int' }),
                                (0, A.jsx)(n.td, {
                                  children:
                                    '\u6bcf\u6b21\u9519\u8bef\u7684\u6700\u5927\u957f\u5ea6\uff08\u5355\u4f4d\u4e3a\u5b57\u8282\uff09',
                                }),
                                (0, A.jsx)(n.td, {}),
                                (0, A.jsx)(n.td, { children: '\u662f' }),
                                (0, A.jsx)(n.td, { children: '1' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsx)(n.admonition, {
              title: '\u8b66\u544a',
              type: 'warning',
              children: (0, A.jsx)(n.p, {
                children:
                  '\u4e0d\u63a8\u8350\u5728\u9664\u4e86 READ \u548c WRITE \u4e4b\u5916\u7684\u6587\u4ef6\u7cfb\u7edf\u8c03\u7528\u4e0a\u4f7f\u7528 mistake \u9519\u8bef\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9884\u671f\u4e4b\u5916\u7684\u7ed3\u679c\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6587\u4ef6\u7cfb\u7edf\u635f\u574f\u3001\u7a0b\u5e8f\u5d29\u6e83\u7b49\u3002',
              }),
            }),
            '\n',
            (0, A.jsx)(n.h2, { id: '\u672c\u5730\u8c03\u8bd5', children: '\u672c\u5730\u8c03\u8bd5' }),
            '\n',
            (0, A.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u67d0\u4e2a Chaos \u7684\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ',
                (0, A.jsx)(n.a, { href: 'https://github.com/chaos-mesh/toda', children: 'toda' }),
                ' \u5728\u672c\u5730\u6d4b\u8bd5\u76f8\u5e94\u529f\u80fd\u3002Chaos Mesh \u540c\u6837\u4f7f\u7528 toda \u5b9e\u73b0 IOChaos\u3002',
              ],
            }),
            '\n',
            (0, A.jsx)(n.h2, {
              id: '\u9644\u5f55-amethods-\u7c7b\u578b',
              children: '\u9644\u5f55 A\uff1amethods \u7c7b\u578b',
            }),
            '\n',
            (0, A.jsxs)(n.ul, {
              children: [
                '\n',
                (0, A.jsx)(n.li, { children: 'lookup' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'forget' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'getattr' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'setattr' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'readlink' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'mknod' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'mkdir' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'unlink' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'rmdir' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'symlink' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'rename' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'link' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'open' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'read' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'write' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'flush' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'release' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'fsync' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'opendir' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'readdir' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'releasedir' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'fsyncdir' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'statfs' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'setxattr' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'getxattr' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'listxattr' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'removexattr' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'access' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'create' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'getlk' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'setlk' }),
                '\n',
                (0, A.jsx)(n.li, { children: 'bmap' }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsxs)(n.p, {
              children: [
                '\u8be6\u89c1 ',
                (0, A.jsx)(n.a, {
                  href: 'https://docs.rs/fuser/0.7.0/fuser/trait.Filesystem.html',
                  children: 'fuser::Filesystem',
                }),
              ],
            }),
            '\n',
            (0, A.jsx)(n.h2, {
              id: '\u9644\u5f55-b\u5e38\u89c1\u9519\u8bef\u53f7',
              children: '\u9644\u5f55 B\uff1a\u5e38\u89c1\u9519\u8bef\u53f7',
            }),
            '\n',
            (0, A.jsxs)(n.ul, {
              children: [
                '\n',
                (0, A.jsx)(n.li, { children: '1: Operation not permitted' }),
                '\n',
                (0, A.jsx)(n.li, { children: '2: No such file or directory' }),
                '\n',
                (0, A.jsx)(n.li, { children: '5: I/O error' }),
                '\n',
                (0, A.jsx)(n.li, { children: '6: No such device or address' }),
                '\n',
                (0, A.jsx)(n.li, { children: '12: Out of memory' }),
                '\n',
                (0, A.jsx)(n.li, { children: '16: Device or resource busy' }),
                '\n',
                (0, A.jsx)(n.li, { children: '17: File exists' }),
                '\n',
                (0, A.jsx)(n.li, { children: '20: Not a directory' }),
                '\n',
                (0, A.jsx)(n.li, { children: '22: Invalid argument' }),
                '\n',
                (0, A.jsx)(n.li, { children: '24: Too many open files' }),
                '\n',
                (0, A.jsx)(n.li, { children: '28: No space left on device' }),
                '\n',
              ],
            }),
            '\n',
            (0, A.jsxs)(n.p, {
              children: [
                '\u8be6\u89c1 ',
                (0, A.jsx)(n.a, {
                  href: 'https://raw.githubusercontent.com/torvalds/linux/master/include/uapi/asm-generic/errno-base.h',
                  children: 'Linux \u6e90\u7801',
                }),
              ],
            }),
          ],
        })
      }
      function j(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, A.jsx)(n, { ...e, children: (0, A.jsx)(c, { ...e }) }) : c(e)
      }
    },
    84768: (e, n, s) => {
      s.d(n, { A: () => d })
      const d =
        'data:image/jpeg;base64,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X9iPHjx48ePHjx48ePHjx48ePHjx48S2nIET77DHk/d8P7Pd8ewx5P3fDtmB0EHROvKoiiKNEofy0M/KFMsDKHI2s0jFLHv2Zo75UJN3fHLxO749hjyfu+HasxsOJKD5fSgYYuFe1enrSKRITJ+IBK1cS7nGPqpcvTIC0CxzrdAXCSdGqanlw2hDbh1JqqFyAbk1ixbw+749hjyfu+HbFOuQTO6Y9KCBJcR05DpjxvOsT6/jPE7HAH3qDQWCEO5QStX/ALw46vSKtqUDATfnve9JroUndYPD7vj2GPJ+74dvE/6Cu3vmm7XlJX9Tu+PYY8ntBD0OSmS0f7AePHjx48ePHjx48ePHjx48ePHjx41CLeOSNdhj+CMeT//aAAwDAQACAAMAAAAQAAAAAAAAAAAAAA8888888888888888888AAAAAAAAAAAAAA8FBJDKLH24884040888AQoAApZKDAAAAA8W89M8cfW8M8s8M8888AAwAAAAAAAAAAA8uOOOOOOcc888888c88AAAAAAAAAAAAAA8888888888888888888AEEAAMAAIAAAAA8888888888888888888AQIAAXZjgAAAAA8888888888888888888AAAAAAAAAAAAAA8888888888888888888AAAAAAAAAAAAAA8888888888888888888AEMAAECKAAAAAA8888888888888888888AEcAAAQiAAAAAA8888888888888888888AAAAAAAAAAAAAA8888888888888888888YCCCCCCCCCCCVA8888888888888888888rVrBBq1ABBBBVA8888888888888888888rWgBBgQjBBBBVA8888888888888888888BDDDDDDDDDDDSA8888888888888888888/8QAKxEAAgECAggGAwAAAAAAAAAAAREAITFA8BAgMFBgYcHRQVFxgZGhseHx/9oACAEDAQE/EN40lJSMSkpBgOec9IbDObwBj4/v3WC2uJc4QwRCwWfHvCHE7wBCDjMhr16HvCaew/MHPNv3xEaLcApv0hIbQAAACiAcMXRkHpYIAT8nARWrawwDGFpBItAQtCXq2sKG7aAAAABF4X//xAAoEQEAAgAEBAYDAQAAAAAAAAABABExQWHwICFAoRAwUFGR0WBx4bH/2gAIAQIB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'
    },
    98383: (e, n, s) => {
      s.d(n, { A: () => d })
      const d = s.p + 'assets/images/create-io-chaos-on-dashboard-2-5b8dc154a741ce28d633a1395ab6b3d3.jpg'
    },
    30450: (e, n, s) => {
      s.d(n, { A: () => d })
      const d = s.p + 'assets/images/create-io-chaos-on-dashboard-3-67e93badfe65dcc6885928d67b84eb54.jpg'
    },
    82113: (e, n, s) => {
      s.d(n, { A: () => d })
      const d = s.p + 'assets/images/create-io-chaos-on-dashboard-4-0209c397b5cbc7222fe2c3e271ccb3ee.jpg'
    },
    4068: (e, n, s) => {
      s.d(n, { A: () => d })
      const d = s.p + 'assets/images/create-io-chaos-on-dashboard-5-9dd0ac9cd030bcd16b056e60ba6ce40b.jpg'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => i, x: () => l })
      var d = s(96540)
      const A = {},
        r = d.createContext(A)
      function i(e) {
        const n = d.useContext(r)
        return d.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function l(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(A)
              : e.components || A
            : i(e.components)),
          d.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
