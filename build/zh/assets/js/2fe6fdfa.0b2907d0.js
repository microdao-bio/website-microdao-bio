'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [935],
  {
    27657: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => c,
          metadata: () => i,
          toc: () => a,
        })
      const i = JSON.parse(
        '{"id":"basic-features","title":"\u57fa\u672c\u529f\u80fd","description":"\u672c\u6587\u6863\u4ecb\u7ecd Chaos Mesh \u7684\u57fa\u672c\u529f\u80fd\uff0c\u5305\u62ec\u6545\u969c\u6ce8\u5165\u3001\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\u3001\u53ef\u89c6\u5316\u64cd\u4f5c\u3001\u5b89\u5168\u4fdd\u969c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/basic-features.md","sourceDirName":".","slug":"/basic-features","permalink":"/zh/docs/2.4.3/basic-features","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/basic-features.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u57fa\u672c\u529f\u80fd"},"sidebar":"docs","previous":{"title":"Chaos Mesh \u7b80\u4ecb","permalink":"/zh/docs/2.4.3/"},"next":{"title":"\u5feb\u901f\u8bd5\u7528","permalink":"/zh/docs/2.4.3/quick-start"}}'
      )
      var h = n(74848),
        r = n(28453)
      const c = { title: '\u57fa\u672c\u529f\u80fd' },
        o = void 0,
        l = {},
        a = [
          { value: '\u6545\u969c\u6ce8\u5165', id: '\u6545\u969c\u6ce8\u5165', level: 2 },
          { value: '\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f', id: '\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f', level: 2 },
          { value: '\u53ef\u89c6\u5316\u64cd\u4f5c', id: '\u53ef\u89c6\u5316\u64cd\u4f5c', level: 2 },
          { value: '\u5b89\u5168\u4fdd\u969c', id: '\u5b89\u5168\u4fdd\u969c', level: 2 },
        ]
      function t(e) {
        const s = { a: 'a', h2: 'h2', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components }
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsxs)(s.p, {
              children: [
                '\u672c\u6587\u6863\u4ecb\u7ecd Chaos Mesh \u7684\u57fa\u672c\u529f\u80fd\uff0c\u5305\u62ec',
                (0, h.jsx)(s.a, {
                  href: '#%E6%95%85%E9%9A%9C%E6%B3%A8%E5%85%A5',
                  children: '\u6545\u969c\u6ce8\u5165',
                }),
                '\u3001',
                (0, h.jsx)(s.a, {
                  href: '#%E6%B7%B7%E6%B2%8C%E5%AE%9E%E9%AA%8C%E5%9C%BA%E6%99%AF',
                  children: '\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f',
                }),
                '\u3001',
                (0, h.jsx)(s.a, {
                  href: '#%E5%8F%AF%E8%A7%86%E5%8C%96%E6%93%8D%E4%BD%9C',
                  children: '\u53ef\u89c6\u5316\u64cd\u4f5c',
                }),
                '\u3001',
                (0, h.jsx)(s.a, {
                  href: '#%E5%AE%89%E5%85%A8%E4%BF%9D%E9%9A%9C',
                  children: '\u5b89\u5168\u4fdd\u969c',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h2, { id: '\u6545\u969c\u6ce8\u5165', children: '\u6545\u969c\u6ce8\u5165' }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u6545\u969c\u6ce8\u5165\u662f\u6df7\u6c8c\u5b9e\u9a8c\u7684\u6838\u5fc3\u3002Chaos Mesh \u5145\u5206\u8003\u8651\u5206\u5e03\u5f0f\u7cfb\u7edf\u53ef\u80fd\u51fa\u73b0\u7684\u6545\u969c\uff0c\u63d0\u4f9b\u5168\u9762\u3001\u7ec6\u7c92\u5ea6\u7684\u6545\u969c\u7c7b\u578b\uff0c\u5206\u4e3a\u57fa\u7840\u8d44\u6e90\u7c7b\u578b\u6545\u969c\u3001\u5e73\u53f0\u7c7b\u578b\u6545\u969c\u548c\u5e94\u7528\u5c42\u6545\u969c\u4e09\u5927\u7c7b\u3002',
            }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\u57fa\u7840\u8d44\u6e90\u7c7b\u578b\u6545\u969c\uff1a',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-pod-chaos-on-kubernetes',
                              children: 'PodChaos',
                            }),
                            '\uff1a\u6a21\u62df Pod \u6545\u969c\uff0c\u4f8b\u5982 Pod \u8282\u70b9\u91cd\u542f\u3001Pod \u6301\u7eed\u4e0d\u53ef\u7528\uff0c\u4ee5\u53ca\u7279\u5b9a Pod \u4e2d\u7684\u67d0\u4e9b\u5bb9\u5668\u6545\u969c\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-network-chaos-on-kubernetes',
                              children: 'NetworkChaos',
                            }),
                            '\uff1a\u6a21\u62df\u7f51\u7edc\u6545\u969c\uff0c\u4f8b\u5982\u7f51\u7edc\u5ef6\u8fdf\u3001\u7f51\u7edc\u4e22\u5305\u3001\u5305\u4e71\u5e8f\u3001\u5404\u7c7b\u7f51\u7edc\u5206\u533a\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-dns-chaos-on-kubernetes',
                              children: 'DNSChaos',
                            }),
                            '\uff1a\u6a21\u62df DNS \u6545\u969c\uff0c\u4f8b\u5982 DNS \u57df\u540d\u89e3\u6790\u5931\u8d25\u3001\u8fd4\u56de\u9519\u8bef IP \u5730\u5740\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-http-chaos-on-kubernetes',
                              children: 'HTTPChaos',
                            }),
                            '\uff1a\u6a21\u62df HTTP \u901a\u4fe1\u6545\u969c\uff0c\u4f8b\u5982 HTTP \u901a\u4fe1\u5ef6\u8fdf\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-heavy-stress-on-kubernetes',
                              children: 'StressChaos',
                            }),
                            '\uff1a\u6a21\u62df CPU \u62a2\u5360\u6216\u5185\u5b58\u62a2\u5360\u573a\u666f\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-io-chaos-on-kubernetes',
                              children: 'IOChaos',
                            }),
                            '\uff1a\u6a21\u62df\u5177\u4f53\u67d0\u4e2a\u5e94\u7528\u7684\u6587\u4ef6 I/O \u6545\u969c\uff0c\u4f8b\u5982 I/O \u5ef6\u8fdf\u3001\u8bfb\u5199\u5931\u8d25\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-time-chaos-on-kubernetes',
                              children: 'TimeChaos',
                            }),
                            '\uff1a\u6a21\u62df\u65f6\u95f4\u8df3\u52a8\u5f02\u5e38\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-kernel-chaos-on-kubernetes',
                              children: 'KernelChaos',
                            }),
                            '\uff1a\u6a21\u62df\u5185\u6838\u6545\u969c\uff0c\u4f8b\u5982\u5e94\u7528\u5185\u5b58\u5206\u914d\u5f02\u5e38\u3002',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\u5e73\u53f0\u7c7b\u578b\u6545\u969c\uff1a',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, { href: '/zh/docs/2.4.3/simulate-aws-chaos', children: 'AWSChaos' }),
                            '\uff1a\u6a21\u62df AWS \u5e73\u53f0\u6545\u969c\uff0c\u4f8b\u5982 AWS \u8282\u70b9\u91cd\u542f\u3002',
                          ],
                        }),
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, { href: '/zh/docs/2.4.3/simulate-gcp-chaos', children: 'GCPChaos' }),
                            '\uff1a\u6a21\u62df GCP \u5e73\u53f0\u6545\u969c\uff0c\u4f8b\u5982 GCP \u8282\u70b9\u91cd\u542f\u3002',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\u5e94\u7528\u5c42\u6545\u969c\uff1a',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsxs)(s.li, {
                          children: [
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/2.4.3/simulate-jvm-application-chaos',
                              children: 'JVMChaos',
                            }),
                            '\uff1a\u6a21\u62df JVM \u5e94\u7528\u6545\u969c\uff0c\u4f8b\u5982\u51fd\u6570\u8c03\u7528\u5ef6\u8fdf\u3002',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h2, {
              id: '\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f',
              children: '\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\u7531\u4e00\u7ec4\u6df7\u6c8c\u5b9e\u9a8c\u548c\u5e94\u7528\u72b6\u6001\u68c0\u67e5\u7ec4\u6210\uff0c\u65e8\u5728\u5e2e\u52a9\u7528\u6237\u5728\u5e73\u53f0\u4e0a\u5b9e\u73b0\u6df7\u6c8c\u5de5\u7a0b\u95ed\u73af\u3002',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u7528\u6237\u8fd0\u884c\u6df7\u6c8c\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4e0d\u65ad\u5730\u6269\u5927\u7206\u70b8\u534a\u5f84\uff08\u5305\u62ec\u653b\u51fb\u8303\u56f4\uff09\u548c\u589e\u52a0\u6545\u969c\u7c7b\u578b\u3002\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u5730\u68c0\u67e5\u5f53\u524d\u7684\u5e94\u7528\u72b6\u6001\uff0c\u5224\u65ad\u662f\u5426\u9700\u8981\u8fdb\u884c\u540e\u7eed\u6df7\u6c8c\u5b9e\u9a8c\u3002\u540c\u65f6\u7528\u6237\u53ef\u4ee5\u4e0d\u65ad\u5730\u8fed\u4ee3\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\uff0c\u79ef\u7d2f\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\uff0c\u4ee5\u53ca\u65b9\u4fbf\u5730\u5c06\u5df2\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\u590d\u7528\u5230\u5176\u4ed6\u5e94\u7528\u6df7\u6c8c\u5b9e\u9a8c\u4e2d\uff0c\u5927\u5927\u964d\u4f4e\u4e86\u6df7\u6c8c\u5b9e\u9a8c\u7684\u6210\u672c\u3002',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: '\u76ee\u524d\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\u63d0\u4f9b\u7684\u529f\u80fd\u6709\uff1a',
            }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsx)(s.li, { children: '\u7f16\u6392\u4e32\u884c\u6df7\u6c8c\u5b9e\u9a8c' }),
                '\n',
                (0, h.jsx)(s.li, { children: '\u7f16\u6392\u5e76\u884c\u6df7\u6c8c\u5b9e\u9a8c' }),
                '\n',
                (0, h.jsx)(s.li, { children: '\u652f\u6301\u72b6\u6001\u68c0\u67e5\u6b65\u9aa4' }),
                '\n',
                (0, h.jsx)(s.li, { children: '\u652f\u6301\u4e2d\u9014\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c' }),
                '\n',
                (0, h.jsx)(s.li, {
                  children:
                    '\u652f\u6301\u4f7f\u7528 YAML \u6587\u4ef6\u5b9a\u4e49\u548c\u7ba1\u7406\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f',
                }),
                '\n',
                (0, h.jsx)(s.li, {
                  children:
                    '\u652f\u6301\u901a\u8fc7 Web UI \u5b9a\u4e49\u548c\u7ba1\u7406\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u5177\u4f53\u7684\u5b9e\u9a8c\u573a\u666f\u914d\u7f6e\uff0c\u53c2\u8003\u5177\u4f53',
                (0, h.jsx)(s.a, {
                  href: '/zh/docs/2.4.3/create-chaos-mesh-workflow',
                  children: '\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h2, { id: '\u53ef\u89c6\u5316\u64cd\u4f5c', children: '\u53ef\u89c6\u5316\u64cd\u4f5c' }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                'Chaos Mesh \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u5355\u72ec\u7684 Chaos Dashboard \u7ec4\u4ef6\uff0c\u5373\u53ef\u89c6\u5316\u652f\u6301\u3002Chaos Dashboard \u6781\u5927\u5730\u7b80\u5316\u4e86\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u53ef\u89c6\u5316\u754c\u9762\u6765\u7ba1\u7406\u548c\u76d1\u63a7\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4ec5\u9700\u70b9\u4e00\u70b9\u9f20\u6807\u5c31\u80fd\u591f\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8303\u56f4\u3001\u6307\u5b9a\u6df7\u6c8c\u6ce8\u5165\u7684\u7c7b\u578b\u3001\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219\uff0c\u4ee5\u53ca\u5728\u754c\u9762\u4e0a\u83b7\u53d6\u5230\u6df7\u6c8c\u5b9e\u9a8c\u7684\u7ed3\u679c\u7b49\u3002',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: (0, h.jsx)(s.img, {
                alt: '\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f',
                src: n(93989).A + '',
                width: '1892',
                height: '859',
              }),
            }),
            '\n',
            (0, h.jsx)(s.h2, { id: '\u5b89\u5168\u4fdd\u969c', children: '\u5b89\u5168\u4fdd\u969c' }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                'Chaos Mesh \u901a\u8fc7 Kubernetes \u539f\u751f\u7684 ',
                (0, h.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
                  children: 'RBAC',
                }),
                '\uff08\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236\uff09\u529f\u80fd\u5bf9\u6743\u9650\u8fdb\u884c\u7ba1\u7406\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u7684\u6743\u9650\u9700\u6c42\u81ea\u7531\u5730\u521b\u5efa\u591a\u79cd Role\uff0c\u7136\u540e\u7ed1\u5b9a\u5230\u7528\u6237\u540d Service Account \u4e0a\uff0c\u6700\u540e\u751f\u6210 Service Account \u5bf9\u5e94\u7684 Token\u3002\u7528\u6237\u4f7f\u7528\u8be5 Token \u767b\u9646 Dashboard\uff0c\u53ea\u80fd\u5728\u8be5 Service Account \u5141\u8bb8\u7684\u6743\u9650\u8303\u56f4\u5185\u8fdb\u884c Chaos \u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u6b64\u5916 Chaos Mesh \u8fd8\u652f\u6301\u901a\u8fc7\u8bbe\u7f6e Namespace Annotation \u7684\u65b9\u5f0f\u5f00\u542f\u7279\u5b9a Namespace \u4e0b\u6df7\u6c8c\u5b9e\u9a8c\u7684\u6743\u9650\uff0c\u8fdb\u4e00\u6b65\u4fdd\u969c\u6df7\u6c8c\u5b9e\u9a8c\u7684\u53ef\u63a7\u6027\u3002',
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, h.jsx)(s, { ...e, children: (0, h.jsx)(t, { ...e }) }) : t(e)
      }
    },
    93989: (e, s, n) => {
      n.d(s, { A: () => i })
      const i = n.p + 'assets/images/dashboard-overview-445b086ab6dbbdf6525405e17c12782b.png'
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => c, x: () => o })
      var i = n(96540)
      const h = {},
        r = i.createContext(h)
      function c(e) {
        const s = i.useContext(r)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function o(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(h)
              : e.components || h
            : c(e.components)),
          i.createElement(r.Provider, { value: s }, e.children)
        )
      }
    },
  },
])