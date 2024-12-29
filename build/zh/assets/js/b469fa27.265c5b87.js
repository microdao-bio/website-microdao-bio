'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8328],
  {
    94841: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => r,
          contentTitle: () => i,
          default: () => x,
          frontMatter: () => c,
          metadata: () => t,
          toc: () => h,
        })
      const t = JSON.parse(
        '{"id":"simulate-dns-chaos-on-kubernetes","title":"\u6a21\u62df DNS \u6545\u969c","description":"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df DNS \u6545\u969c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-dns-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-dns-chaos-on-kubernetes","permalink":"/zh/docs/next/simulate-dns-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/simulate-dns-chaos-on-kubernetes.md","tags":[],"version":"current","frontMatter":{"title":"\u6a21\u62df DNS \u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c","permalink":"/zh/docs/next/simulate-io-chaos-on-kubernetes"},"next":{"title":"\u6a21\u62df\u65f6\u95f4\u6545\u969c","permalink":"/zh/docs/next/simulate-time-chaos-on-kubernetes"}}'
      )
      var l = n(74848),
        d = n(28453)
      const c = { title: '\u6a21\u62df DNS \u6545\u969c' },
        i = void 0,
        r = {},
        h = [
          { value: 'DNSChaos \u4ecb\u7ecd', id: 'dnschaos-\u4ecb\u7ecd', level: 2 },
          { value: '\u90e8\u7f72 Chaos DNS Service', id: '\u90e8\u7f72-chaos-dns-service', level: 2 },
          { value: '\u6ce8\u610f\u4e8b\u9879', id: '\u6ce8\u610f\u4e8b\u9879', level: 2 },
          {
            value: '\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          { value: '\u914d\u7f6e\u8bf4\u660e', id: '\u914d\u7f6e\u8bf4\u660e', level: 3 },
        ]
      function o(e) {
        const s = {
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
          ...(0, d.R)(),
          ...e.components,
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(s.p, {
              children:
                '\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ee5\u6a21\u62df DNS \u6545\u969c\u3002',
            }),
            '\n',
            (0, l.jsx)(s.h2, { id: 'dnschaos-\u4ecb\u7ecd', children: 'DNSChaos \u4ecb\u7ecd' }),
            '\n',
            (0, l.jsx)(s.p, {
              children:
                'DNSChaos \u53ef\u4ee5\u7528\u4e8e\u6a21\u62df\u9519\u8bef\u7684 DNS \u54cd\u5e94\uff0c\u4f8b\u5982\u5728\u6536\u5230 DNS \u8bf7\u6c42\u65f6\u8fd4\u56de\u9519\u8bef\uff0c\u6216\u8005\u8fd4\u56de\u968f\u673a\u7684 IP \u5730\u5740\u3002',
            }),
            '\n',
            (0, l.jsx)(s.h2, { id: '\u90e8\u7f72-chaos-dns-service', children: '\u90e8\u7f72 Chaos DNS Service' }),
            '\n',
            (0, l.jsx)(s.p, {
              children:
                '\u5728\u4f7f\u7528 Chaos Mesh \u521b\u5efa DNSChaos \u6df7\u6c8c\u5b9e\u9a8c\u524d\uff0c\u4f60\u9700\u8981\u90e8\u7f72\u4e00\u4e2a\u4e13\u95e8\u7684 DNS \u670d\u52a1\u7528\u4e8e\u6ce8\u5165\u6545\u969c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
            }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'helm upgrade chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --set dnsServer.create=true\n',
              }),
            }),
            '\n',
            (0, l.jsx)(s.p, {
              children:
                '\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 DNS \u670d\u52a1\u7684\u72b6\u6001\u662f\u5426\u6b63\u5e38\uff1a',
            }),
            '\n',
            (0, l.jsx)(s.pre, {
              children: (0, l.jsx)(s.code, {
                className: 'language-bash',
                children: 'kubectl get pods -n chaos-mesh -l app.kubernetes.io/component=chaos-dns-server\n',
              }),
            }),
            '\n',
            (0, l.jsxs)(s.p, {
              children: [
                '\u786e\u8ba4 Pod \u7684\u72b6\u6001\u4e3a ',
                (0, l.jsx)(s.code, { children: 'Running' }),
                ' \u5373\u53ef\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(s.h2, { id: '\u6ce8\u610f\u4e8b\u9879', children: '\u6ce8\u610f\u4e8b\u9879' }),
            '\n',
            (0, l.jsxs)(s.ol, {
              children: [
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        '\u76ee\u524d DNSChaos \u53ea\u652f\u6301 DNS \u8bb0\u5f55\u7c7b\u578b ',
                        (0, l.jsx)(s.code, { children: 'A' }),
                        ' \u548c ',
                        (0, l.jsx)(s.code, { children: 'AAAA' }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        'Chaos DNS \u670d\u52a1\u8fd0\u884c\u7684\u5e26\u6709 ',
                        (0, l.jsx)(s.a, {
                          href: 'https://github.com/chaos-mesh/k8s_dns_chaos',
                          children: 'k8s_dns_chaos',
                        }),
                        ' \u63d2\u4ef6\u7684 CoreDNS\u3002\u5982\u679c Kubernetes \u96c6\u7fa4\u672c\u8eab\u7684 CoreDNS \u670d\u52a1\u5305\u542b\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 configMap ',
                        (0, l.jsx)(s.code, { children: 'dns-server-config' }),
                        '\uff0c\u4f7f Chaos DNS \u670d\u52a1\u7684\u914d\u7f6e\u4e0e K8s CoreDNS \u670d\u52a1\u7684\u914d\u7f6e\u4e00\u81f4\uff0c\u7f16\u8f91\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(s.pre, {
                      children: (0, l.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl edit configmap dns-server-config -n chaos-mesh\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(s.h2, {
              id: '\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(s.ol, {
              children: [
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        '\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684',
                        (0, l.jsx)(s.strong, { children: '\u65b0\u7684\u5b9e\u9a8c' }),
                        '\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(s.p, {
                      children: (0, l.jsx)(s.img, {
                        alt: '\u521b\u5efa\u5b9e\u9a8c',
                        src: n(42461).A + '',
                        width: '982',
                        height: '648',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        '\u5728\u201c\u9009\u62e9\u76ee\u6807\u201d\u5904\u9009\u62e9 \u201cDNS \u6545\u969c\u201d\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ',
                        (0, l.jsx)(s.code, { children: 'ERROR' }),
                        '\uff0c\u6700\u540e\u586b\u5199\u5339\u914d\u89c4\u5219\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(s.p, {
                      children: (0, l.jsx)(s.img, {
                        alt: 'DNSChaos \u5b9e\u9a8c',
                        src: n(18399).A + '',
                        width: '1844',
                        height: '1314',
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        '\u56fe\u4e2d\u914d\u7f6e\u7684\u5339\u914d\u89c4\u5219\u53ef\u4ee5\u5bf9\u57df\u540d ',
                        (0, l.jsx)(s.code, { children: 'google.com' }),
                        '\u3001',
                        (0, l.jsx)(s.code, { children: 'chaos-mesh.org' }),
                        ' \u548c ',
                        (0, l.jsx)(s.code, { children: 'github.com' }),
                        ' \u751f\u6548\uff0c\u5373\u5bf9\u8fd9\u4e09\u4e2a\u57df\u540d\u53d1\u9001 DNS \u8bf7\u6c42\u5c06\u8fd4\u56de\u9519\u8bef\u3002\u5177\u4f53\u7684\u5339\u914d\u89c4\u5219\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003',
                        (0, l.jsx)(s.a, {
                          href: '#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E',
                          children: '\u914d\u7f6e\u8bf4\u660e',
                        }),
                        '\u4e2d ',
                        (0, l.jsx)(s.code, { children: 'patterns' }),
                        ' \u5b57\u6bb5\u7684\u4ecb\u7ecd\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(s.p, {
                      children:
                        '\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a',
                    }),
                    '\n',
                    (0, l.jsx)(s.p, {
                      children: (0, l.jsx)(s.img, {
                        alt: '\u5b9e\u9a8c\u4fe1\u606f',
                        src: n(84612).A + '',
                        width: '1838',
                        height: '1328',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(s.li, {
                  children: ['\n', (0, l.jsx)(s.p, { children: '\u63d0\u4ea4\u5b9e\u9a8c\u3002' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(s.h2, {
              id: '\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(s.ol, {
              children: [
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6 ',
                        (0, l.jsx)(s.code, { children: 'dnschaos.yaml' }),
                        ' \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(s.pre, {
                      children: (0, l.jsx)(s.code, {
                        className: 'language-yaml',
                        children:
                          'apiVersion: chaos-mesh.org/v1alpha1\nkind: DNSChaos\nmetadata:\n  name: dns-chaos-example\n  namespace: chaos-mesh\nspec:\n  action: random\n  mode: all\n  patterns:\n    - google.com\n    - chaos-mesh.*\n    - github.?om\n  selector:\n    namespaces:\n      - busybox\n',
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        '\u8be5\u5b9e\u9a8c\u914d\u7f6e\u53ef\u4ee5\u5bf9\u57df\u540d ',
                        (0, l.jsx)(s.code, { children: 'google.com' }),
                        '\u3001',
                        (0, l.jsx)(s.code, { children: 'chaos-mesh.org' }),
                        ' \u548c ',
                        (0, l.jsx)(s.code, { children: 'github.com' }),
                        ' \u751f\u6548\uff0c\u5bf9\u8fd9\u4e09\u4e2a\u57df\u540d\u53d1\u9001 DNS \u8bf7\u6c42\u5c06\u8fd4\u56de\u968f\u673a IP \u5730\u5740\u3002\u5177\u4f53\u7684\u5339\u914d\u89c4\u5219\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003',
                        (0, l.jsx)(s.a, {
                          href: '#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E',
                          children: '\u914d\u7f6e\u8bf4\u660e',
                        }),
                        '\u4e2d ',
                        (0, l.jsx)(s.code, { children: 'patterns' }),
                        ' \u5b57\u6bb5\u7684\u4ecb\u7ecd\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(s.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, l.jsx)(s.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(s.pre, {
                      children: (0, l.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f dnschaos.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(s.h3, { id: '\u914d\u7f6e\u8bf4\u660e', children: '\u914d\u7f6e\u8bf4\u660e' }),
            '\n',
            (0, l.jsxs)(s.table, {
              children: [
                (0, l.jsx)(s.thead, {
                  children: (0, l.jsxs)(s.tr, {
                    children: [
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u9ed8\u8ba4\u503c' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, l.jsx)(s.th, { style: { textAlign: 'left' }, children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(s.tbody, {
                  children: [
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'action' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u5b9a\u4e49 DNS \u6545\u969c\u7684\u884c\u4e3a\uff0c\u53ef\u9009\u503c\u4e3a ',
                            (0, l.jsx)(s.code, { children: 'random' }),
                            ' \u6216 ',
                            (0, l.jsx)(s.code, { children: 'error' }),
                            '\u3002\u5f53\u503c\u4e3a ',
                            (0, l.jsx)(s.code, { children: 'random' }),
                            ' \u65f6\uff0c DNS \u670d\u52a1\u8fd4\u56de\u968f\u673a\u7684 IP \u5730\u5740\uff1b\u5f53\u503c\u4e3a ',
                            (0, l.jsx)(s.code, { children: 'error' }),
                            ' \u65f6 DNS \u670d\u52a1\u8fd4\u56de\u9519\u8bef',
                          ],
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u662f' }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, l.jsx)(s.code, { children: 'random' }),
                            ' \u6216 ',
                            (0, l.jsx)(s.code, { children: 'error' }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'patterns' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string \u6570\u7ec4' }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9009\u62e9\u5339\u914d\u6545\u969c\u884c\u4e3a\u7684\u57df\u540d\u6a21\u7248\uff0c \u652f\u6301\u5360\u4f4d\u7b26 ',
                            (0, l.jsx)(s.code, { children: '?' }),
                            ' \u4ee5\u53ca\u901a\u914d\u7b26 ',
                            (0, l.jsx)(s.code, { children: '*' }),
                          ],
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '[]' }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u5426' }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, l.jsx)(s.code, { children: 'google.com' }),
                            '\uff0c',
                            (0, l.jsx)(s.code, { children: 'chaos-mesh.org' }),
                            '\uff0c',
                            (0, l.jsx)(s.code, { children: 'github.com' }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'mode' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a',
                            (0, l.jsx)(s.code, { children: 'one' }),
                            '\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(s.code, { children: 'all' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(s.code, { children: 'fixed' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(s.code, { children: 'fixed-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(s.code, { children: 'random-max-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09',
                          ],
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u662f' }),
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'one' }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'value' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u53d6\u51b3\u4e0e ',
                            (0, l.jsx)(s.code, { children: 'mode' }),
                            ' \u7684\u914d\u7f6e\uff0c\u4e3a ',
                            (0, l.jsx)(s.code, { children: 'mode' }),
                            ' \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ',
                            (0, l.jsx)(s.code, { children: 'mode' }),
                            ' \u914d\u7f6e\u4e3a ',
                            (0, l.jsx)(s.code, { children: 'fixed-percent' }),
                            ' \u65f6\uff0c',
                            (0, l.jsx)(s.code, { children: 'value' }),
                            ' \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4',
                          ],
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u5426' }),
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: '1' }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)(s.tr, {
                      children: [
                        (0, l.jsx)(s.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(s.code, { children: 'selector' }),
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: 'struct' }),
                        (0, l.jsxs)(s.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003',
                            (0, l.jsx)(s.a, {
                              href: '/zh/docs/next/define-chaos-experiment-scope',
                              children: '\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4',
                            }),
                          ],
                        }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' }, children: '\u662f' }),
                        (0, l.jsx)(s.td, { style: { textAlign: 'left' } }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, l.jsxs)(s.ul, {
                children: [
                  '\n',
                  (0, l.jsxs)(s.li, {
                    children: [
                      '\n',
                      (0, l.jsxs)(s.p, {
                        children: [
                          (0, l.jsx)(s.code, { children: 'patterns' }),
                          ' \u914d\u7f6e\u4e2d\u7684\u901a\u914d\u7b26\u5fc5\u987b\u4f4d\u4e8e\u5b57\u7b26\u4e32\u7684\u5c3e\u90e8\uff0c\u4f8b\u5982 ',
                          (0, l.jsx)(s.code, { children: 'chaos-mes*.org' }),
                          ' \u662f\u4e0d\u5408\u6cd5\u7684\u914d\u7f6e\u3002',
                        ],
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, l.jsxs)(s.li, {
                    children: [
                      '\n',
                      (0, l.jsxs)(s.p, {
                        children: [
                          '\u5f53 ',
                          (0, l.jsx)(s.code, { children: 'patterns' }),
                          ' \u6ca1\u6709\u914d\u7f6e\u65f6\uff0c\u9ed8\u8ba4\u5bf9\u6240\u6709\u57df\u540d\u6ce8\u5165\u6545\u969c\u3002',
                        ],
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                ],
              }),
            }),
          ],
        })
      }
      function x(e = {}) {
        const { wrapper: s } = { ...(0, d.R)(), ...e.components }
        return s ? (0, l.jsx)(s, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e)
      }
    },
    42461: (e, s, n) => {
      n.d(s, { A: () => t })
      const t = n.p + 'assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png'
    },
    18399: (e, s, n) => {
      n.d(s, { A: () => t })
      const t = n.p + 'assets/images/dnschaos-exp-3bb3ce1e583cebdeac93de61ce23ea8e.png'
    },
    84612: (e, s, n) => {
      n.d(s, { A: () => t })
      const t = n.p + 'assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png'
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => c, x: () => i })
      var t = n(96540)
      const l = {},
        d = t.createContext(l)
      function c(e) {
        const s = t.useContext(d)
        return t.useMemo(
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
              ? e.components(l)
              : e.components || l
            : c(e.components)),
          t.createElement(d.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
