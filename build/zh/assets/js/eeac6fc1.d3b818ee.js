'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8633],
  {
    32332: (s, e, c) => {
      c.r(e),
        c.d(e, {
          assets: () => r,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => l,
          metadata: () => n,
          toc: () => i,
        })
      const n = JSON.parse(
        '{"id":"chaosctl-tool","title":"Chaosctl","description":"Chaosctl \u662f\u4e00\u4e2a\u7528\u4e8e\u8f85\u52a9\u8c03\u8bd5 Chaos Mesh \u7684\u5de5\u5177\u3002\u6211\u4eec\u5e0c\u671b\u5229\u7528 Chaosctl \u7b80\u5316\u5f00\u53d1\u8c03\u8bd5\u65b0 chaos \u7c7b\u578b\uff0c\u4ee5\u53ca\u63d0\u4ea4 issue \u76f8\u5173\u65e5\u5fd7\u7684\u6d41\u7a0b\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/chaosctl-tool.md","sourceDirName":".","slug":"/chaosctl-tool","permalink":"/zh/docs/2.4.3/chaosctl-tool","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/chaosctl-tool.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Chaosctl"},"sidebar":"docs","previous":{"title":"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b","permalink":"/zh/docs/2.4.3/use-grafana-data-source"},"next":{"title":"\u5f00\u53d1\u6307\u5357\u6982\u89c8","permalink":"/zh/docs/2.4.3/developer-guide-overview"}}'
      )
      var h = c(74848),
        a = c(28453)
      const l = { title: 'Chaosctl' },
        o = void 0,
        r = {},
        i = [
          { value: '\u83b7\u53d6 Chaosctl', id: '\u83b7\u53d6-chaosctl', level: 2 },
          { value: '\u529f\u80fd\u4ecb\u7ecd', id: '\u529f\u80fd\u4ecb\u7ecd', level: 2 },
          { value: '\u65e5\u5fd7\u67e5\u770b', id: '\u65e5\u5fd7\u67e5\u770b', level: 3 },
          { value: '\u8c03\u8bd5 Chaos', id: '\u8c03\u8bd5-chaos', level: 3 },
          {
            value: '\u4e3a Chaosd \u751f\u6210 TLS \u8bc1\u4e66',
            id: '\u4e3a-chaosd-\u751f\u6210-tls-\u8bc1\u4e66',
            level: 3,
          },
          { value: '\u95ee\u9898\u53cd\u9988', id: '\u95ee\u9898\u53cd\u9988', level: 2 },
        ]
      function t(s) {
        const e = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, a.R)(),
          ...s.components,
        }
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(e.p, {
              children:
                'Chaosctl \u662f\u4e00\u4e2a\u7528\u4e8e\u8f85\u52a9\u8c03\u8bd5 Chaos Mesh \u7684\u5de5\u5177\u3002\u6211\u4eec\u5e0c\u671b\u5229\u7528 Chaosctl \u7b80\u5316\u5f00\u53d1\u8c03\u8bd5\u65b0 chaos \u7c7b\u578b\uff0c\u4ee5\u53ca\u63d0\u4ea4 issue \u76f8\u5173\u65e5\u5fd7\u7684\u6d41\u7a0b\u3002',
            }),
            '\n',
            (0, h.jsx)(e.h2, { id: '\u83b7\u53d6-chaosctl', children: '\u83b7\u53d6 Chaosctl' }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                '\u6211\u4eec\u4e3a Linux \u63d0\u4f9b\u4e86\u53ef\u6267\u884c\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d Chaosctl\uff1a',
            }),
            '\n',
            (0, h.jsx)(e.pre, {
              children: (0, h.jsx)(e.code, {
                className: 'language-bash',
                children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/chaosctl -O\n',
              }),
            }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                '\u5982\u679c\u4f60\u4f7f\u7528 Windows \u6216 macOS\uff0c\u53ef\u4ee5\u81ea\u884c\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1\u3002\u63a8\u8350\u4f7f\u7528 Go 1.15 \u4ee5\u4e0a\u7248\u672c\u8fdb\u884c\u7f16\u8bd1\u3002\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a',
            }),
            '\n',
            (0, h.jsxs)(e.ol, {
              children: [
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsx)(e.p, { children: '\u5c06 Chaos Mesh \u514b\u9686\u81f3\u672c\u5730' }),
                    '\n',
                    (0, h.jsx)(e.pre, {
                      children: (0, h.jsx)(e.code, {
                        className: 'language-bash',
                        children: 'git clone https://github.com/chaos-mesh/chaos-mesh.git\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsx)(e.p, { children: '\u5207\u6362\u81f3 Chaos Mesh \u76ee\u5f55\u4e0b' }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsx)(e.p, { children: '\u6267\u884c' }),
                    '\n',
                    (0, h.jsx)(e.pre, {
                      children: (0, h.jsx)(e.code, { className: 'language-bash', children: 'make chaosctl\n' }),
                    }),
                    '\n',
                    (0, h.jsxs)(e.p, {
                      children: [
                        '\u7f16\u8bd1\u5f97\u5230\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8e ',
                        (0, h.jsx)(e.code, { children: 'bin/chaosctl' }),
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(e.h2, { id: '\u529f\u80fd\u4ecb\u7ecd', children: '\u529f\u80fd\u4ecb\u7ecd' }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                'Chaosctl \u6709\u4e24\u7c7b\u529f\u80fd\uff0c\u5206\u522b\u662f\u67e5\u770b\u65e5\u5fd7\u53ca\u8c03\u8bd5 Chaos\u3002',
            }),
            '\n',
            (0, h.jsx)(e.h3, { id: '\u65e5\u5fd7\u67e5\u770b', children: '\u65e5\u5fd7\u67e5\u770b' }),
            '\n',
            (0, h.jsxs)(e.p, {
              children: [
                '\u4f7f\u7528 ',
                (0, h.jsx)(e.code, { children: 'chaosctl logs' }),
                ' \u53ef\u4ee5\u67e5\u770b\u6240\u6709 Chaos Mesh \u7ec4\u4ef6\u7684\u65e5\u5fd7\u3002',
                (0, h.jsx)(e.code, { children: 'chaosctl logs -h' }),
                ' \u4f1a\u63d0\u4f9b\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u5e2e\u52a9\u548c\u4f8b\u5b50\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a',
              ],
            }),
            '\n',
            (0, h.jsx)(e.pre, {
              children: (0, h.jsx)(e.code, {
                className: 'language-bash',
                children:
                  'chaosctl logs -t 100 # \u8f93\u51fa\u6240\u6709\u7ec4\u4ef6\u7684\u6700\u540e100\u884c\u65e5\u5fd7\n',
              }),
            }),
            '\n',
            (0, h.jsx)(e.h3, { id: '\u8c03\u8bd5-chaos', children: '\u8c03\u8bd5 Chaos' }),
            '\n',
            (0, h.jsxs)(e.p, {
              children: [
                '\u4f7f\u7528 ',
                (0, h.jsx)(e.code, { children: 'chaosctl debug' }),
                ' \u53ef\u4ee5\u67e5\u770b Chaos \u7684\u8c03\u8bd5\u4fe1\u606f\u3002',
                (0, h.jsx)(e.code, { children: 'chaosctl debug -h' }),
                ' \u4f1a\u63d0\u4f9b\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u5e2e\u52a9\u548c\u4f8b\u5b50\u3002\u4f7f\u7528\u8fd9\u4e00\u529f\u80fd\u65f6\uff0cChaosctl \u9700\u8981\u4e0e\u76f8\u5e94\u7684 chaos-daemon \u5efa\u7acb\u8fde\u63a5\uff0c\u5982\u679c\u4f60\u5728\u90e8\u7f72 Chaos Mesh \u65f6\u5173\u95ed\u4e86 TLS \uff08\u9ed8\u8ba4\u6253\u5f00\uff09\uff0c\u9700\u8981\u4f7f\u7528 ',
                (0, h.jsx)(e.code, { children: '-i' }),
                ' \u9009\u9879\u6765\u544a\u77e5 Chaosctl \u4e0d\u4f7f\u7528 TLS\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a',
              ],
            }),
            '\n',
            (0, h.jsx)(e.pre, {
              children: (0, h.jsx)(e.code, {
                className: 'language-bash',
                children: './chaosctl debug -i networkchaos web-show-network-delay\n',
              }),
            }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                '\u76ee\u524d\uff0cChaosctl \u53ea\u652f\u6301 iochaos, networkchaos, stresschaos \u4e09\u7c7b Chaos \u7684\u8c03\u8bd5\u3002',
            }),
            '\n',
            (0, h.jsx)(e.h3, {
              id: '\u4e3a-chaosd-\u751f\u6210-tls-\u8bc1\u4e66',
              children: '\u4e3a Chaosd \u751f\u6210 TLS \u8bc1\u4e66',
            }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                '\u5f53\u5728 Chaosd \u548c Chaos Mesh \u4e4b\u95f4\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u4e3a\u4e86\u4fdd\u969c Chaosd \u548c Chaos-controller-manager \u670d\u52a1\u4e4b\u95f4\u7684\u901a\u4fe1\u5b89\u5168\uff0cChaos Mesh \u63a8\u8350\u5f00\u542f mTLS (Mutual Transport Layer Security) \u6a21\u5f0f\u3002',
            }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                '\u5982\u9700\u5f00\u542f mTLS \u6a21\u5f0f\uff0cChaosd \u548c Chaos mesh \u7684\u53c2\u6570\u4e2d\u9700\u8981\u914d\u7f6e\u597d TLS \u8bc1\u4e66\u53c2\u6570\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u786e\u5b9a Chaosd \u548c Chaos Mesh \u5df2\u7ecf\u751f\u6210\u4e86 TLS \u8bc1\u4e66\u540e\uff0c\u518d\u628a TLS \u8bc1\u4e66\u4f5c\u4e3a\u53c2\u6570\u542f\u52a8 Chaosd \u548c Chaos Mesh\u3002',
            }),
            '\n',
            (0, h.jsxs)(e.ul, {
              children: [
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    'Chaosd\uff1a\u8be5\u5de5\u5177\u652f\u6301\u5728\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570\u524d\u548c\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570\u540e\u5f00\u59cb\u542f\u52a8\u3002\u4e3a\u4e86\u4fdd\u969c\u96c6\u7fa4\u5b89\u5168\uff0c\u63a8\u8350\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570',
                    (0, h.jsx)(e.strong, { children: '\u540e' }),
                    '\uff0c\u518d\u542f\u52a8\u5de5\u5177\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605',
                    (0, h.jsx)(e.a, {
                      href: '/zh/docs/2.4.3/simulate-physical-machine-chaos#%E8%BF%90%E8%A1%8C-chaosd-server',
                      children: '\u8fd0\u884c Chaosd Server',
                    }),
                    '\u3002',
                  ],
                }),
                '\n',
                (0, h.jsx)(e.li, {
                  children:
                    'Chaos Mesh\uff1a\u5f53\u4f7f\u7528 Helm \u90e8\u7f72 Chaos Mesh \u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e TLS \u8bc1\u4e66\u53c2\u6570\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                '\u5982\u679c\u4f60\u7684 Chaosd \u6ca1\u6709\u751f\u6210 TLS \u8bc1\u4e66\uff0c\u53ef\u4ee5\u4f7f\u7528 Chaosctl\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u4fbf\u5730\u751f\u6210\u8be5\u8bc1\u4e66\u3002\u5728\u4ee5\u4e0b\u573a\u666f\u4e0b\uff0cChaosctl \u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684\u65b9\u6848\u6267\u884c\u547d\u4ee4\u3002',
            }),
            '\n',
            (0, h.jsxs)(e.p, {
              children: [
                (0, h.jsx)(e.strong, { children: '\u573a\u666f\u4e00' }),
                '\uff1a\u5f00\u542f Chaosctl \u7684\u8fd0\u884c\u4e2d\u7684\u8282\u70b9\u53ef\u4ee5\u8bbf\u95ee Kubernetes \u96c6\u7fa4\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 SSH \u5de5\u5177\u8fde\u63a5\u5230\u7269\u7406\u673a\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(e.p, {
              children:
                '\u5728\u8be5\u573a\u666f\u4e0b\uff0c\u4ec5\u9700\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u4e0b\u5217\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, h.jsxs)(e.ul, {
              children: [
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsxs)(e.p, {
                      children: [
                        '\u547d\u4ee4\uff1a\u4f7f\u7528 ',
                        (0, h.jsx)(e.code, { children: 'chaosctl pm init' }),
                        ' \u547d\u4ee4\uff1a',
                      ],
                    }),
                    '\n',
                    (0, h.jsx)(e.pre, {
                      children: (0, h.jsx)(e.code, {
                        className: 'language-bash',
                        children: './chaosctl pm init pm-name --ip=123.123.123.123 -l arch=amd64,anotherkey=value\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsx)(e.p, {
                      children:
                        '\u64cd\u4f5c\uff1a\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u6267\u884c\u4e0b\u5217\u64cd\u4f5c\uff1a',
                    }),
                    '\n',
                    (0, h.jsxs)(e.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(e.li, {
                          children:
                            '\u4e00\u952e\u751f\u6210 Chaosd \u6240\u9700\u8981\u7684\u8bc1\u4e66\uff0c\u5e76\u628a\u8bc1\u4e66\u4fdd\u5b58\u5230\u5bf9\u5e94\u7684\u7269\u7406\u673a\u4e0a\uff1b',
                        }),
                        '\n',
                        (0, h.jsxs)(e.li, {
                          children: [
                            '\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u5bf9\u5e94\u7684 ',
                            (0, h.jsx)(e.code, { children: 'PhysicalMachine' }),
                            ' \u8d44\u6e90\u3002',
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
            (0, h.jsxs)(e.p, {
              children: [
                '\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u4ecb\u7ecd\u548c\u4f8b\u5b50\uff0c\u8bf7\u901a\u8fc7 ',
                (0, h.jsx)(e.code, { children: 'chaosctl pm init -h' }),
                ' \u67e5\u9605\u3002',
              ],
            }),
            '\n',
            (0, h.jsxs)(e.p, {
              children: [
                (0, h.jsx)(e.strong, { children: '\u573a\u666f\u4e8c' }),
                '\uff1a\u5f00\u542f Chaosctl \u7684\u8fd0\u884c\u4e2d\u7684\u8282\u70b9\u53ef\u4ee5\u8bbf\u95ee Kubernetes \u96c6\u7fa4\uff0c\u4f46\u65e0\u6cd5\u4f7f\u7528 SSH \u5de5\u5177\u8fde\u63a5\u5230\u7269\u7406\u673a\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(e.p, {
              children: '\u5728\u8be5\u573a\u666f\u4e0b\uff0c\u64cd\u4f5c\u6b65\u9aa4\u5982\u4e0b\uff1a',
            }),
            '\n',
            (0, h.jsxs)(e.ol, {
              children: [
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsx)(e.p, {
                      children:
                        '\u5728\u6267\u884c\u547d\u4ee4\u524d\uff0c\u5148\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u624b\u52a8\u83b7\u53d6 CA \u8bc1\u4e66\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a',
                    }),
                    '\n',
                    (0, h.jsx)(e.pre, {
                      children: (0, h.jsx)(e.code, {
                        className: 'language-bash',
                        children:
                          'kubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o "jsonpath={.data[\'ca\\.crt\']}" | base64 -d > ca.crt\nkubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o "jsonpath={.data[\'ca\\.key\']}" | base64 -d> ca.key\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsxs)(e.p, {
                      children: [
                        '\u6267\u884c\u547d\u4ee4\u540e\uff0c\u628a ',
                        (0, h.jsx)(e.code, { children: 'ca.crt' }),
                        ' \u6587\u4ef6\u548c ',
                        (0, h.jsx)(e.code, { children: 'ca.key' }),
                        ' \u6587\u4ef6\u62f7\u8d1d\u5230',
                        (0, h.jsx)(e.strong, { children: '\u5bf9\u5e94\u7684\u7269\u7406\u673a' }),
                        '\u4e0a\u3002\u4e0b\u6587\u4ee5\u4fdd\u5b58\u5230 ',
                        (0, h.jsx)(e.code, { children: '/etc/chaosd/pki' }),
                        ' \u76ee\u5f55\u4e0b\u4e3a\u4f8b\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsxs)(e.p, {
                      children: [
                        '\u7136\u540e\uff0c\u5728',
                        (0, h.jsx)(e.strong, { children: '\u7269\u7406\u673a' }),
                        '\u4e0a\uff0c\u4f7f\u7528 ',
                        (0, h.jsx)(e.code, { children: 'chaosctl pm generate' }),
                        ' \u547d\u4ee4\uff0c\u751f\u6210 TLS \u8bc1\u4e66\uff08\u8bc1\u4e66\u7684\u9ed8\u8ba4\u4fdd\u5b58\u8def\u5f84\u4e3a ',
                        (0, h.jsx)(e.code, { children: '/etc/chaosd/pki' }),
                        '\uff09\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, h.jsx)(e.pre, {
                      children: (0, h.jsx)(e.code, {
                        className: 'language-bash',
                        children:
                          './chaosctl pm generate --cacert=/etc/chaosd/pki/ca.crt --cakey=/etc/chaosd/pki/ca.key\n',
                      }),
                    }),
                    '\n',
                    (0, h.jsxs)(e.p, {
                      children: [
                        '\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u4ecb\u7ecd\u548c\u4f8b\u5b50\uff0c\u8bf7\u901a\u8fc7 ',
                        (0, h.jsx)(e.code, { children: 'chaosctl pm generate -h' }),
                        ' \u67e5\u9605\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, h.jsxs)(e.p, {
                      children: [
                        '\u6700\u540e\uff0c\u5728\u53ef\u8bbf\u95ee\u5230 Kubernetes \u96c6\u7fa4\u7684\u673a\u5668\u4e0a\uff0c\u4f7f\u7528 ',
                        (0, h.jsx)(e.code, { children: 'chaosctl pm create' }),
                        ' \u547d\u4ee4\uff0c\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa ',
                        (0, h.jsx)(e.code, { children: 'PhysicalMachine' }),
                        ' \u8d44\u6e90\u3002\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, h.jsx)(e.pre, {
                      children: (0, h.jsx)(e.code, {
                        className: 'language-bash',
                        children: './chaosctl pm create pm-name --ip=123.123.123.123 -l arch=amd64\n',
                      }),
                    }),
                    '\n',
                    (0, h.jsxs)(e.p, {
                      children: [
                        '\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6b64\u529f\u80fd\u7684\u4ecb\u7ecd\u548c\u4f8b\u5b50\uff0c\u8bf7\u901a\u8fc7 ',
                        (0, h.jsx)(e.code, { children: 'chaosctl pm create -h' }),
                        ' \u67e5\u9605\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(e.h2, { id: '\u95ee\u9898\u53cd\u9988', children: '\u95ee\u9898\u53cd\u9988' }),
            '\n',
            (0, h.jsxs)(e.p, {
              children: [
                'Chaosctl \u7684\u4ee3\u7801\u76ee\u524d\u6258\u7ba1\u4e8e Chaos Mesh \u9879\u76ee\u4e2d\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ',
                (0, h.jsx)(e.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosctl',
                  children: 'chaos-mesh/pkg/chaosctl',
                }),
                ' \u3002',
              ],
            }),
            '\n',
            (0, h.jsxs)(e.p, {
              children: [
                '\u5982\u679c\u5728\u64cd\u4f5c\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u6216\u6709\u5174\u8da3\u5e2e\u52a9\u6211\u4eec\u6539\u8fdb\u8fd9\u4e00\u5de5\u5177\uff0c\u6b22\u8fce\u5728 ',
                (0, h.jsx)(e.a, {
                  href: 'https://cloud-native.slack.com/archives/C0193VAV272',
                  children: 'CNCF Slack',
                }),
                ' \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\uff0c\u6216\u8005\u76f4\u63a5\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ',
                (0, h.jsx)(e.a, { href: 'https://github.com/chaos-mesh/chaos-mesh/issues', children: 'issue' }),
                '\u3002',
              ],
            }),
            '\n',
            (0, h.jsxs)(e.p, {
              children: [
                '\u53cd\u9988\u95ee\u9898\u65f6\uff0c\u5728\u95ee\u9898\u4e2d\u9644\u4e0a\u76f8\u5173\u7684\u65e5\u5fd7\u548c Chaos \u4fe1\u606f\u4f1a\u6709\u52a9\u4e8e\u8bca\u65ad\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u5c06 ',
                (0, h.jsx)(e.code, { children: 'chaosctl logs' }),
                ' \u7684\u8f93\u51fa\u9644\u5728 issue \u5c3e\u90e8\uff0c\u4ee5\u4f9b\u5f00\u53d1\u4eba\u5458\u53c2\u8003\u3002\u5982\u679c\u4f60\u7684\u95ee\u9898\u4e0e iochaos, networkchaos, stresschaos \u76f8\u5173\uff0c\u4e5f\u8bf7\u9644\u4e0a ',
                (0, h.jsx)(e.code, { children: 'chaosctl debug' }),
                ' \u76f8\u5173\u4fe1\u606f\u3002',
              ],
            }),
          ],
        })
      }
      function d(s = {}) {
        const { wrapper: e } = { ...(0, a.R)(), ...s.components }
        return e ? (0, h.jsx)(e, { ...s, children: (0, h.jsx)(t, { ...s }) }) : t(s)
      }
    },
    28453: (s, e, c) => {
      c.d(e, { R: () => l, x: () => o })
      var n = c(96540)
      const h = {},
        a = n.createContext(h)
      function l(s) {
        const e = n.useContext(a)
        return n.useMemo(
          function () {
            return 'function' == typeof s ? s(e) : { ...e, ...s }
          },
          [e, s]
        )
      }
      function o(s) {
        let e
        return (
          (e = s.disableParentContext
            ? 'function' == typeof s.components
              ? s.components(h)
              : s.components || h
            : l(s.components)),
          n.createElement(a.Provider, { value: e }, s.children)
        )
      }
    },
  },
])
