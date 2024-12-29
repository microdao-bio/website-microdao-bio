'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4164, 8329, 8801],
  {
    58149: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => h,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => t,
        })
      const o = JSON.parse(
        '{"id":"common/quick-run","title":"quick-run","description":"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md","sourceDirName":"common","slug":"/common/quick-run","permalink":"/zh/docs/next/common/quick-run","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/common/quick-run.md","tags":[],"version":"current","frontMatter":{}}'
      )
      var c = n(74848),
        a = n(28453)
      const r = {},
        i = void 0,
        h = {},
        t = []
      function l(e) {
        const s = { a: 'a', p: 'p', ...(0, a.R)(), ...e.components }
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
        const { wrapper: s } = { ...(0, a.R)(), ...e.components }
        return s ? (0, c.jsx)(s, { ...e, children: (0, c.jsx)(l, { ...e }) }) : l(e)
      }
    },
    22707: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => h,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => t,
        })
      const o = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/zh/docs/next/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md","tags":[],"version":"current","frontMatter":{}}'
      )
      var c = n(74848),
        a = n(28453)
      const r = {},
        i = void 0,
        h = {},
        t = []
      function l(e) {
        const s = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components }
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
        const { wrapper: s } = { ...(0, a.R)(), ...e.components }
        return s ? (0, c.jsx)(s, { ...e, children: (0, c.jsx)(l, { ...e }) }) : l(e)
      }
    },
    95182: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => d,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => t,
          metadata: () => o,
          toc: () => m,
        })
      const o = JSON.parse(
        '{"id":"offline-installation","title":"\u79bb\u7ebf\u5b89\u88c5","description":"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u79bb\u7ebf\u5b89\u88c5 Chaos Mesh\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/offline-installation.md","sourceDirName":".","slug":"/offline-installation","permalink":"/zh/docs/next/offline-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/offline-installation.md","tags":[],"version":"current","frontMatter":{"title":"\u79bb\u7ebf\u5b89\u88c5"},"sidebar":"docs","previous":{"title":"\u4f7f\u7528 Helm \u5b89\u88c5 Chaos Mesh","permalink":"/zh/docs/next/production-installation-using-helm"},"next":{"title":"Expose Chaos Dashboard with Ingress","permalink":"/zh/docs/next/expose-dashboard-with-ingress"}}'
      )
      var c = n(74848),
        a = n(28453),
        r = n(34661),
        i = n(22707),
        h = n(58149)
      const t = { title: '\u79bb\u7ebf\u5b89\u88c5' },
        l = void 0,
        d = {},
        m = [
          { value: '\u73af\u5883\u51c6\u5907', id: '\u73af\u5883\u51c6\u5907', level: 2 },
          { value: '\u51c6\u5907\u5b89\u88c5\u6587\u4ef6', id: '\u51c6\u5907\u5b89\u88c5\u6587\u4ef6', level: 2 },
          { value: '\u6307\u5b9a\u7248\u672c\u53f7', id: '\u6307\u5b9a\u7248\u672c\u53f7', level: 3 },
          { value: '\u4e0b\u8f7d Chaos Mesh \u955c\u50cf', id: '\u4e0b\u8f7d-chaos-mesh-\u955c\u50cf', level: 3 },
          {
            value: '\u4e0b\u8f7d Chaos Mesh \u4ed3\u5e93\u538b\u7f29\u5305',
            id: '\u4e0b\u8f7d-chaos-mesh-\u4ed3\u5e93\u538b\u7f29\u5305',
            level: 3,
          },
          { value: '\u62f7\u8d1d\u6587\u4ef6', id: '\u62f7\u8d1d\u6587\u4ef6', level: 3 },
          { value: '\u5b89\u88c5', id: '\u5b89\u88c5', level: 2 },
          {
            value: '\u7b2c 1 \u6b65\uff1a\u52a0\u8f7d Chaos Mesh \u955c\u50cf',
            id: '\u7b2c-1-\u6b65\u52a0\u8f7d-chaos-mesh-\u955c\u50cf',
            level: 3,
          },
          {
            value: '\u7b2c 2 \u6b65\uff1a\u63a8\u9001\u955c\u50cf\u81f3 Registry',
            id: '\u7b2c-2-\u6b65\u63a8\u9001\u955c\u50cf\u81f3-registry',
            level: 3,
          },
          {
            value: '\u7b2c 3 \u6b65\uff1a\u4f7f\u7528 Helm \u5b89\u88c5',
            id: '\u7b2c-3-\u6b65\u4f7f\u7528-helm-\u5b89\u88c5',
            level: 3,
          },
          { value: '\u9a8c\u8bc1\u5b89\u88c5', id: '\u9a8c\u8bc1\u5b89\u88c5', level: 2 },
          ...i.toc,
          { value: '\u8fd0\u884c Chaos \u5b9e\u9a8c', id: '\u8fd0\u884c-chaos-\u5b9e\u9a8c', level: 2 },
          ...h.toc,
        ]
      function u(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, a.R)(),
          ...e.components,
        }
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(s.p, {
              children: '\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u79bb\u7ebf\u5b89\u88c5 Chaos Mesh\u3002',
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u73af\u5883\u51c6\u5907', children: '\u73af\u5883\u51c6\u5907' }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5728\u5b89\u88c5\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u79bb\u7ebf\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 Docker \u5e76\u90e8\u7f72\u4e86 Kubernetes \u96c6\u7fa4\u3002\u5982\u679c\u73af\u5883\u5c1a\u672a\u51c6\u5907\u597d\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\u5b89\u88c5 Docker \u5e76\u90e8\u7f72 Kubernetes \u96c6\u7fa4\uff1a',
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsx)(s.li, {
                  children: (0, c.jsx)(s.a, { href: 'https://www.docker.com/get-started', children: 'Docker' }),
                }),
                '\n',
                (0, c.jsx)(s.li, {
                  children: (0, c.jsx)(s.a, { href: 'https://kubernetes.io/docs/setup/', children: 'Kubernetes' }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, {
              id: '\u51c6\u5907\u5b89\u88c5\u6587\u4ef6',
              children: '\u51c6\u5907\u5b89\u88c5\u6587\u4ef6',
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5728\u79bb\u7ebf\u5b89\u88c5 Chaos Mesh \u524d\uff0c\u4f60\u9700\u8981\u4ece\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\u4e0b\u8f7d\u6240\u6709 Chaos Mesh \u955c\u50cf\u548c\u4ed3\u5e93\u538b\u7f29\u5305\uff0c\u7136\u540e\u5c06\u4e0b\u8f7d\u7684\u6587\u4ef6\u62f7\u8d1d\u5230\u79bb\u7ebf\u73af\u5883\u4e2d\u3002',
            }),
            '\n',
            (0, c.jsx)(s.h3, { id: '\u6307\u5b9a\u7248\u672c\u53f7', children: '\u6307\u5b9a\u7248\u672c\u53f7' }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5728\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\uff0c\u8bbe\u7f6e Chaos Mesh \u7684\u7248\u672c\u53f7\u4e3a\u73af\u5883\u53d8\u91cf\uff1a',
            }),
            '\n',
            (0, c.jsx)(r.A, { children: 'export CHAOS_MESH_VERSION=latest' }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u4e0b\u8f7d-chaos-mesh-\u955c\u50cf',
              children: '\u4e0b\u8f7d Chaos Mesh \u955c\u50cf',
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5728\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\uff0c\u901a\u8fc7\u5df2\u7ecf\u8bbe\u7f6e\u7684\u7248\u672c\u53f7\u62c9\u53d6\u955c\u50cf\uff1a',
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker pull ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\ndocker pull ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u4fdd\u5b58\u955c\u50cf\u4e3a tar \u5305\uff1a' }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker save ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} > image-chaos-mesh.tar\ndocker save ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} > image-chaos-daemon.tar\ndocker save ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} > image-chaos-dashboard.tar\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsxs)(s.p, {
                children: [
                  '\u5982\u9700\u6a21\u62df DNS \u6545\u969c\uff08\u4f8b\u5982\uff0c\u4f7f DNS \u54cd\u5e94\u8fd4\u56de\u968f\u673a\u7684\u9519\u8bef IP \u5730\u5740\uff09\uff0c\u8bf7\u989d\u5916\u62c9\u53d6 ',
                  (0, c.jsx)(s.a, {
                    href: 'https://hub.docker.com/r/pingcap/coredns',
                    children: (0, c.jsx)(s.code, { children: 'pingcap/coredns' }),
                  }),
                  ' \u955c\u50cf\u3002',
                ],
              }),
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u4e0b\u8f7d-chaos-mesh-\u4ed3\u5e93\u538b\u7f29\u5305',
              children: '\u4e0b\u8f7d Chaos Mesh \u4ed3\u5e93\u538b\u7f29\u5305',
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5728\u6709\u5916\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e0a\uff0c\u4e0b\u8f7d Chaos Mesh \u7684 zip \u5305\uff1a',
            }),
            '\n',
            (0, c.jsx)(r.A, {
              children:
                'curl -fsSL -o chaos-mesh.zip https://github.com/chaos-mesh/chaos-mesh/archive/refs/heads/master.zip',
            }),
            '\n',
            (0, c.jsx)(s.h3, { id: '\u62f7\u8d1d\u6587\u4ef6', children: '\u62f7\u8d1d\u6587\u4ef6' }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u6240\u6709\u5b89\u88c5\u6240\u9700\u7684\u6587\u4ef6\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u8bf7\u5c06\u8fd9\u4e9b\u6587\u4ef6\u62f7\u8d1d\u5230\u79bb\u7ebf\u73af\u5883\u4e2d\uff1a',
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsx)(s.li, { children: (0, c.jsx)(s.code, { children: 'image-chaos-mesh.tar' }) }),
                '\n',
                (0, c.jsx)(s.li, { children: (0, c.jsx)(s.code, { children: 'image-chaos-daemon.tar' }) }),
                '\n',
                (0, c.jsx)(s.li, { children: (0, c.jsx)(s.code, { children: 'image-chaos-dashboard.tar' }) }),
                '\n',
                (0, c.jsx)(s.li, { children: (0, c.jsx)(s.code, { children: 'chaos-mesh.zip' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u5b89\u88c5', children: '\u5b89\u88c5' }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5c06 Chaos Mesh \u955c\u50cf\u7684 tar \u5305\u548c\u4ed3\u5e93\u7684 zip \u5305\u62f7\u8d1d\u5230\u4f60\u7684\u79bb\u7ebf\u73af\u5883\u540e\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u5b89\u88c5\u3002',
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u7b2c-1-\u6b65\u52a0\u8f7d-chaos-mesh-\u955c\u50cf',
              children: '\u7b2c 1 \u6b65\uff1a\u52a0\u8f7d Chaos Mesh \u955c\u50cf',
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u4ece tar \u5305\u4e2d\u52a0\u8f7d\u955c\u50cf\uff1a' }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker load < image-chaos-mesh.tar\ndocker load < image-chaos-daemon.tar\ndocker load < image-chaos-dashboard.tar\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u7b2c-2-\u6b65\u63a8\u9001\u955c\u50cf\u81f3-registry',
              children: '\u7b2c 2 \u6b65\uff1a\u63a8\u9001\u955c\u50cf\u81f3 Registry',
            }),
            '\n',
            (0, c.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsxs)(s.p, {
                children: [
                  '\u5728\u63a8\u9001\u955c\u50cf\u524d\uff0c\u8bf7\u786e\u4fdd\u79bb\u7ebf\u73af\u5883\u4e2d\u5df2\u7ecf\u90e8\u7f72 Registry\u3002\u5982\u679c\u5c1a\u672a\u90e8\u7f72\uff0c\u8bf7\u53c2\u8003 ',
                  (0, c.jsx)(s.a, { href: 'https://docs.docker.com/registry/', children: 'Docker Registry' }),
                  ' \u8fdb\u884c\u90e8\u7f72\u3002',
                ],
              }),
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u8bbe\u7f6e Chaos Mesh \u7248\u672c\u548c Registry \u5730\u5740\u4e3a\u73af\u5883\u53d8\u91cf\uff1a',
            }),
            '\n',
            (0, c.jsx)(r.A, { children: 'export CHAOS_MESH_VERSION=latest; export DOCKER_REGISTRY=localhost:5000' }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u6807\u8bb0\u955c\u50cf\u4f7f\u5176\u6307\u5411 Registry\uff1a' }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'export CHAOS_MESH_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION}\nexport CHAOS_DAEMON_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION}\nexport CHAOS_DASHBOARD_IMAGE=$DOCKER_REGISTRY/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION}\ndocker image tag ghcr.io/chaos-mesh/chaos-mesh:${CHAOS_MESH_VERSION} $CHAOS_MESH_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-daemon:${CHAOS_MESH_VERSION} $CHAOS_DAEMON_IMAGE\ndocker image tag ghcr.io/chaos-mesh/chaos-dashboard:${CHAOS_MESH_VERSION} $CHAOS_DASHBOARD_IMAGE\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u63a8\u9001\u955c\u50cf\u81f3 Registry\uff1a' }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'docker push $CHAOS_MESH_IMAGE\ndocker push $CHAOS_DAEMON_IMAGE\ndocker push $CHAOS_DASHBOARD_IMAGE\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u7b2c-3-\u6b65\u4f7f\u7528-helm-\u5b89\u88c5',
              children: '\u7b2c 3 \u6b65\uff1a\u4f7f\u7528 Helm \u5b89\u88c5',
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u89e3\u538b Chaos Mesh \u7684 zip \u5305\uff1a' }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children: 'unzip chaos-mesh.zip -d chaos-mesh && cd chaos-mesh\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsxs)(s.p, {
                children: [
                  '\u5982\u679c\u4f60\u6b63\u5728\u5b89\u88c5\u5728 Kubernetes v1.15\uff08\u6216\u66f4\u4f4e\u7248\u672c\uff09\u4e2d\u5b89\u88c5 Chaos Mesh\uff0c\u8bf7\u901a\u8fc7 ',
                  (0, c.jsx)(s.code, { children: 'kubectl create -f manifests/crd-v1beta1.yaml' }),
                  ' \u624b\u52a8\u5b89\u88c5 CRD\u3002 \u5177\u4f53\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 ',
                  (0, c.jsx)(s.a, {
                    href: '/zh/docs/next/faqs#failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1',
                    children: 'FAQ',
                  }),
                  '\u3002',
                ],
              }),
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a' }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, { className: 'language-bash', children: 'kubectl create ns chaos-mesh\n' }),
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u6267\u884c Chaos Mesh \u5b89\u88c5\u547d\u4ee4\u3002\u5728\u5b89\u88c5\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6307\u5b9a Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4\u548c\u5404\u7ec4\u4ef6\u7684\u955c\u50cf\u503c\uff1a',
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'helm install chaos-mesh helm/chaos-mesh -n=chaos-mesh --set images.registry=$DOCKER_REGISTRY\n',
              }),
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u9a8c\u8bc1\u5b89\u88c5', children: '\u9a8c\u8bc1\u5b89\u88c5' }),
            '\n',
            (0, c.jsx)(i.default, {}),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u8fd0\u884c-chaos-\u5b9e\u9a8c', children: '\u8fd0\u884c Chaos \u5b9e\u9a8c' }),
            '\n',
            (0, c.jsx)(h.default, {}),
          ],
        })
      }
      function p(e = {}) {
        const { wrapper: s } = { ...(0, a.R)(), ...e.components }
        return s ? (0, c.jsx)(s, { ...e, children: (0, c.jsx)(u, { ...e }) }) : u(e)
      }
    },
    34661: (e, s, n) => {
      n.d(s, { A: () => t, t: () => h })
      var o = n(78478),
        c = n(44586),
        a = n(66588),
        r = n(21432),
        i = n(74848)
      const h = (e, s) => {
        const n = window.location.pathname
        let o = window.localStorage.getItem('docs-preferred-version-default')
        if (n === e.baseUrl && o) return 'current' === o ? 'latest' : o
        if (n.includes('/docs/next')) return 'latest'
        const c = s.find((e) => e.isLast),
          a = s.find((e) => n.includes(e.name))
        return a ? a.name : c.name
      }
      const t = (e) => {
        let { children: s, replaced: n = 'latest', isArchive: t = !1, className: l = 'language-bash' } = e
        const { siteConfig: d } = (0, c.A)(),
          { versions: m } = (0, a.P_)('docusaurus-plugin-content-docs')
        return (0, i.jsx)(o.A, {
          children: () => {
            const e = h(d, m),
              o = t
                ? s.replace(
                    n,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? s
                : s.replace(n, 'v' + e)
            return (0, i.jsx)(r.A, { className: l, children: o })
          },
        })
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => r, x: () => i })
      var o = n(96540)
      const c = {},
        a = o.createContext(c)
      function r(e) {
        const s = o.useContext(a)
        return o.useMemo(
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
              ? e.components(c)
              : e.components || c
            : r(e.components)),
          o.createElement(a.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
