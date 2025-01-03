'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4164, 8771, 8801],
  {
    58149: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => a,
        })
      const t = JSON.parse(
        '{"id":"common/quick-run","title":"quick-run","description":"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md","sourceDirName":"common","slug":"/common/quick-run","permalink":"/zh/docs/next/common/quick-run","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md","tags":[],"version":"current","frontMatter":{}}'
      )
      var c = n(74848),
        r = n(28453)
      const i = {},
        o = void 0,
        l = {},
        a = []
      function h(e) {
        const s = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components }
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(s.p, {
              children:
                '\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002',
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u8bf7\u53c2\u8003',
                (0, c.jsx)(s.a, { href: '/zh/docs/next/run-a-chaos-experiment', children: '\u8fd0\u884c\u8bd5\u9a8c' }),
                '\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, c.jsx)(s, { ...e, children: (0, c.jsx)(h, { ...e }) }) : h(e)
      }
    },
    22707: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => a,
        })
      const t = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/zh/docs/next/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md","tags":[],"version":"current","frontMatter":{}}'
      )
      var c = n(74848),
        r = n(28453)
      const i = {},
        o = void 0,
        l = {},
        a = []
      function h(e) {
        const s = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components }
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(s.p, {
              children:
                '\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, { className: 'language-bash', children: 'kubectl get po -n chaos-mesh\n' }),
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a' }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002',
            }),
            '\n',
            (0, c.jsxs)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: [
                (0, c.jsxs)(s.p, {
                  children: [
                    '\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ',
                    (0, c.jsx)(s.code, { children: 'STATUS' }),
                    ' \u72b6\u6001\u4e0d\u662f ',
                    (0, c.jsx)(s.code, { children: 'Running' }),
                    '\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002',
                  ],
                }),
                (0, c.jsx)(s.pre, {
                  children: (0, c.jsx)(s.code, {
                    className: 'language-bash',
                    children:
                      '# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, c.jsxs)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: [
                (0, c.jsxs)(s.p, {
                  children: [
                    '\u5982\u679c\u624b\u52a8\u5173\u95ed\u4e86 ',
                    (0, c.jsx)(s.code, { children: 'leader-election' }),
                    '\uff0c',
                    (0, c.jsx)(s.code, { children: 'chaos-controller-manager' }),
                    ' \u5e94\u8be5\u53ea\u6709 1 \u4e2a\u5b9e\u4f8b\u3002',
                  ],
                }),
                (0, c.jsx)(s.pre, {
                  children: (0, c.jsx)(s.code, {
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
      function d(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, c.jsx)(s, { ...e, children: (0, c.jsx)(h, { ...e }) }) : h(e)
      }
    },
    39840: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => d,
          contentTitle: () => h,
          default: () => x,
          frontMatter: () => a,
          metadata: () => t,
          toc: () => u,
        })
      const t = JSON.parse(
        '{"id":"quick-start","title":"\u5feb\u901f\u8bd5\u7528","description":"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u6d4b\u8bd5\u73af\u5883\u6216\u672c\u673a\u73af\u5883\u5feb\u901f\u8bd5\u7528 Chaos Mesh\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/zh/docs/next/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/quick-start.md","tags":[],"version":"current","frontMatter":{"title":"\u5feb\u901f\u8bd5\u7528"},"sidebar":"docs","previous":{"title":"\u57fa\u672c\u529f\u80fd","permalink":"/zh/docs/next/basic-features"},"next":{"title":"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh","permalink":"/zh/docs/next/production-installation-using-helm"}}'
      )
      var c = n(74848),
        r = n(28453),
        i = n(34661),
        o = n(22707),
        l = n(58149)
      const a = { title: '\u5feb\u901f\u8bd5\u7528' },
        h = void 0,
        d = {},
        u = [
          { value: '\u73af\u5883\u51c6\u5907', id: '\u73af\u5883\u51c6\u5907', level: 2 },
          { value: '\u5feb\u901f\u5b89\u88c5', id: '\u5feb\u901f\u5b89\u88c5', level: 2 },
          { value: '\u9a8c\u8bc1\u5b89\u88c5', id: '\u9a8c\u8bc1\u5b89\u88c5', level: 2 },
          ...o.toc,
          { value: '\u8fd0\u884c Chaos \u5b9e\u9a8c', id: '\u8fd0\u884c-chaos-\u5b9e\u9a8c', level: 2 },
          ...l.toc,
          { value: '\u5378\u8f7d Chaos Mesh', id: '\u5378\u8f7d-chaos-mesh', level: 2 },
          { value: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54', id: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54', level: 2 },
          {
            value:
              '\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0 <code>local</code> \u76ee\u5f55',
            id: '\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0-local-\u76ee\u5f55',
            level: 3,
          },
        ]
      function m(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(s.p, {
              children:
                '\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u6d4b\u8bd5\u73af\u5883\u6216\u672c\u673a\u73af\u5883\u5feb\u901f\u8bd5\u7528 Chaos Mesh\u3002',
            }),
            '\n',
            (0, c.jsxs)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'caution',
              children: [
                (0, c.jsx)(s.p, {
                  children: (0, c.jsx)(s.strong, {
                    children:
                      '\u5728\u672c\u6587\u6863\u4e2d\uff0cChaos Mesh \u662f\u901a\u8fc7\u811a\u672c\u5b89\u88c5\u7684\uff0c\u4ec5\u4f9b\u5feb\u901f\u8bd5\u7528\u3002',
                  }),
                }),
                (0, c.jsxs)(s.p, {
                  children: [
                    '\u5982\u679c\u9700\u8981\u5728\u751f\u4ea7\u73af\u5883\u6216\u8005\u662f\u5176\u4ed6\u4e25\u683c\u7684\u975e\u6d4b\u8bd5\u573a\u666f\u4e0b\u5b89\u88c5\uff0c\u63a8\u8350\u4f7f\u7528 ',
                    (0, c.jsx)(s.a, { href: 'https://helm.sh/', children: 'Helm' }),
                    '\u3002\u8be6\u60c5\u8bf7\u53c2\u8003',
                    (0, c.jsx)(s.a, {
                      href: '/zh/docs/next/production-installation-using-helm',
                      children: '\u4f7f\u7528 Helm \u5b89\u88c5',
                    }),
                    '\u3002',
                  ],
                }),
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u73af\u5883\u51c6\u5907', children: '\u73af\u5883\u51c6\u5907' }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5728\u8bd5\u7528\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u73af\u5883\u4e2d\u5df2\u7ecf\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u3002\u5982\u679c\u5c1a\u672a\u90e8\u7f72 Kubernetes \u96c6\u7fa4\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\u5b8c\u6210\u90e8\u7f72\uff1a',
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsx)(s.li, {
                  children: (0, c.jsx)(s.a, { href: 'https://kubernetes.io/docs/setup/', children: 'Kubernetes' }),
                }),
                '\n',
                (0, c.jsx)(s.li, {
                  children: (0, c.jsx)(s.a, { href: 'https://minikube.sigs.k8s.io/docs/start/', children: 'minikube' }),
                }),
                '\n',
                (0, c.jsx)(s.li, {
                  children: (0, c.jsx)(s.a, {
                    href: 'https://kind.sigs.k8s.io/docs/user/quick-start/',
                    children: 'kind',
                  }),
                }),
                '\n',
                (0, c.jsx)(s.li, {
                  children: (0, c.jsx)(s.a, {
                    href: 'https://rancher.com/docs/k3s/latest/en/quick-start/',
                    children: 'K3s',
                  }),
                }),
                '\n',
                (0, c.jsx)(s.li, { children: (0, c.jsx)(s.a, { href: 'https://microk8s.io/', children: 'Microk8s' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u5feb\u901f\u5b89\u88c5', children: '\u5feb\u901f\u5b89\u88c5' }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u8981\u5728\u8bd5\u7528\u73af\u5883\u4e2d\u5b89\u88c5 Chaos Mesh\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u811a\u672c\uff1a',
            }),
            '\n',
            (0, c.jsx)(i.A, { children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash' }),
            '\n',
            (0, c.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsxs)(s.ul, {
                children: [
                  '\n',
                  (0, c.jsxs)(s.li, {
                    children: [
                      '\n',
                      (0, c.jsxs)(s.p, {
                        children: [
                          '\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ',
                          (0, c.jsx)(s.a, { href: 'https://kind.sigs.k8s.io/', children: 'kind' }),
                          '\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ',
                          (0, c.jsx)(s.code, { children: '--local kind' }),
                          ' \u53c2\u6570\u3002',
                        ],
                      }),
                      '\n',
                      (0, c.jsx)(i.A, {
                        children:
                          'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind',
                      }),
                      '\n',
                      (0, c.jsxs)(s.p, {
                        children: [
                          '\u82e5\u9700\u8981\u6307\u5b9a kind \u7248\u672c\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ',
                          (0, c.jsx)(s.code, { children: '--kind-version xxx' }),
                          ' \u53c2\u6570\uff0c\u5982\uff1a',
                        ],
                      }),
                      '\n',
                      (0, c.jsx)(i.A, {
                        children:
                          'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.20.0',
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, c.jsxs)(s.li, {
                    children: [
                      '\n',
                      (0, c.jsxs)(s.p, {
                        children: [
                          '\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ',
                          (0, c.jsx)(s.a, { href: 'https://k3s.io/', children: 'K3s' }),
                          '\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ',
                          (0, c.jsx)(s.code, { children: '--k3s' }),
                          ' \u53c2\u6570\u3002',
                        ],
                      }),
                      '\n',
                      (0, c.jsx)(i.A, {
                        children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s',
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, c.jsxs)(s.li, {
                    children: [
                      '\n',
                      (0, c.jsxs)(s.p, {
                        children: [
                          '\u5982\u679c\u5f53\u524d\u73af\u5883\u4e3a ',
                          (0, c.jsx)(s.a, { href: 'https://microk8s.io/', children: 'Microk8s' }),
                          '\uff0c\u8bf7\u5728\u811a\u672c\u540e\u6dfb\u52a0 ',
                          (0, c.jsx)(s.code, { children: '--microk8s' }),
                          ' \u53c2\u6570\u3002',
                        ],
                      }),
                      '\n',
                      (0, c.jsx)(i.A, {
                        children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --microk8s',
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                ],
              }),
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u8fd0\u884c\u6b64\u5b89\u88c5\u811a\u672c\u540e\uff0cChaos Mesh \u5c06\u4f1a\u81ea\u52a8\u5b89\u88c5\u4e0e\u7248\u672c\u76f8\u7b26\u7684 CustomResourceDefinition (CRD)\u3001\u6240\u6709\u9700\u8981\u7684\u7ec4\u4ef6\u3001\u53ca\u76f8\u5173\u7684 Service Account \u914d\u7f6e\u3002',
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u5b89\u88c5\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ',
                (0, c.jsxs)(s.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh',
                  children: [(0, c.jsx)(s.code, { children: 'install.sh' }), ' \u7684\u6e90\u4ee3\u7801'],
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u9a8c\u8bc1\u5b89\u88c5', children: '\u9a8c\u8bc1\u5b89\u88c5' }),
            '\n',
            (0, c.jsx)(o.default, {}),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u8fd0\u884c-chaos-\u5b9e\u9a8c', children: '\u8fd0\u884c Chaos \u5b9e\u9a8c' }),
            '\n',
            (0, c.jsx)(l.default, {}),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u5378\u8f7d-chaos-mesh', children: '\u5378\u8f7d Chaos Mesh' }),
            '\n',
            (0, c.jsx)(s.p, {
              children: '\u5982\u8981\u5378\u8f7d Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, c.jsx)(i.A, {
              children:
                'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -',
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5220\u9664 ',
                (0, c.jsx)(s.code, { children: 'chaos-mesh' }),
                ' \u547d\u540d\u7a7a\u95f4\u76f4\u63a5\u5378\u8f7d Chaos Mesh\uff1a',
              ],
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, { className: 'language-sh', children: 'kubectl delete ns chaos-mesh\n' }),
            }),
            '\n',
            (0, c.jsx)(s.h2, {
              id: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
              children: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
            }),
            '\n',
            (0, c.jsxs)(s.h3, {
              id: '\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0-local-\u76ee\u5f55',
              children: [
                '\u4e3a\u4ec0\u4e48\u5b89\u88c5\u540e\u6839\u76ee\u5f55\u4f1a\u51fa\u73b0 ',
                (0, c.jsx)(s.code, { children: 'local' }),
                ' \u76ee\u5f55',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5982\u679c\u5f53\u524d\u73af\u5883\u5e76\u6ca1\u6709\u5b89\u88c5 kind \u4f46\u4f60\u5728\u5b89\u88c5\u547d\u4ee4\u4e2d\u4f7f\u7528\u4e86 ',
                (0, c.jsx)(s.code, { children: '--local kind' }),
                ' \u53c2\u6570\uff0c',
                (0, c.jsx)(s.code, { children: 'install.sh' }),
                ' \u5b89\u88c5\u811a\u672c\u5c06\u4f1a\u81ea\u52a8\u5b89\u88c5 kind \u5230\u6839\u76ee\u5f55\u4e0b\u7684 ',
                (0, c.jsx)(s.code, { children: 'local' }),
                ' \u76ee\u5f55\u4e2d\u3002',
              ],
            }),
          ],
        })
      }
      function x(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, c.jsx)(s, { ...e, children: (0, c.jsx)(m, { ...e }) }) : m(e)
      }
    },
    34661: (e, s, n) => {
      n.d(s, { A: () => a, t: () => l })
      var t = n(78478),
        c = n(44586),
        r = n(66588),
        i = n(21432),
        o = n(74848)
      const l = (e, s) => {
        const n = window.location.pathname
        let t = window.localStorage.getItem('docs-preferred-version-default')
        if (n === e.baseUrl && t) return 'current' === t ? 'latest' : t
        if (n.includes('/docs/next')) return 'latest'
        const c = s.find((e) => e.isLast),
          r = s.find((e) => n.includes(e.name))
        return r ? r.name : c.name
      }
      const a = (e) => {
        let { children: s, replaced: n = 'latest', isArchive: a = !1, className: h = 'language-bash' } = e
        const { siteConfig: d } = (0, c.A)(),
          { versions: u } = (0, r.P_)('docusaurus-plugin-content-docs')
        return (0, o.jsx)(t.A, {
          children: () => {
            const e = l(d, u),
              t = a
                ? s.replace(
                    n,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? s
                : s.replace(n, 'v' + e)
            return (0, o.jsx)(i.A, { className: h, children: t })
          },
        })
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => i, x: () => o })
      var t = n(96540)
      const c = {},
        r = t.createContext(c)
      function i(e) {
        const s = t.useContext(r)
        return t.useMemo(
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
              ? e.components(c)
              : e.components || c
            : i(e.components)),
          t.createElement(r.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
