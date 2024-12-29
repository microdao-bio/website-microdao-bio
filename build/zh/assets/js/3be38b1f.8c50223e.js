'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7351],
  {
    71250: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => o,
          contentTitle: () => h,
          default: () => a,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => d,
        })
      const r = JSON.parse(
        '{"id":"configure-development-environment","title":"\u914d\u7f6e\u5f00\u53d1\u73af\u5883","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u642d\u5efa Chaos Mesh \u7684\u5f00\u53d1\u73af\u5883\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/configure-development-environment.md","sourceDirName":".","slug":"/configure-development-environment","permalink":"/zh/docs/2.5.2/configure-development-environment","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/configure-development-environment.md","tags":[],"version":"2.5.2","frontMatter":{"title":"\u914d\u7f6e\u5f00\u53d1\u73af\u5883"},"sidebar":"docs","previous":{"title":"\u5f00\u53d1\u6307\u5357\u6982\u89c8","permalink":"/zh/docs/2.5.2/developer-guide-overview"},"next":{"title":"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b","permalink":"/zh/docs/2.5.2/add-new-chaos-experiment-type"}}'
      )
      var c = s(74848),
        i = s(28453)
      const l = { title: '\u914d\u7f6e\u5f00\u53d1\u73af\u5883' },
        h = void 0,
        o = {},
        d = [
          { value: '\u73af\u5883\u8981\u6c42', id: '\u73af\u5883\u8981\u6c42', level: 2 },
          { value: '\u51c6\u5907\u5de5\u5177\u94fe', id: '\u51c6\u5907\u5de5\u5177\u94fe', level: 2 },
          { value: '\u51c6\u5907\u90e8\u7f72\u73af\u5883', id: '\u51c6\u5907\u90e8\u7f72\u73af\u5883', level: 2 },
          { value: '\u4e0b\u4e00\u6b65', id: '\u4e0b\u4e00\u6b65', level: 2 },
        ]
      function t(e) {
        const n = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(n.p, {
              children:
                '\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u642d\u5efa Chaos Mesh \u7684\u5f00\u53d1\u73af\u5883\u3002',
            }),
            '\n',
            (0, c.jsx)(n.h2, { id: '\u73af\u5883\u8981\u6c42', children: '\u73af\u5883\u8981\u6c42' }),
            '\n',
            (0, c.jsx)(n.p, { children: '\u5b89\u88c5 Chaos Mesh \u6240\u9700\u7684\u5f00\u53d1\u5de5\u5177\u3002' }),
            '\n',
            (0, c.jsxs)(n.ul, {
              children: [
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    (0, c.jsx)(n.a, { href: 'https://golang.org/dl/', children: 'golang' }),
                    ' \u7248\u672c\u4e0d\u4f4e\u4e8e v1.15',
                  ],
                }),
                '\n',
                (0, c.jsx)(n.li, {
                  children: (0, c.jsx)(n.a, { href: 'https://www.docker.com/', children: 'docker' }),
                }),
                '\n',
                (0, c.jsx)(n.li, { children: (0, c.jsx)(n.a, { href: 'https://gcc.gnu.org/', children: 'gcc' }) }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    (0, c.jsx)(n.a, { href: 'https://helm.sh/', children: 'helm' }),
                    ' \u7248\u672c\u4e0d\u4f4e\u4e8e v2.8.2',
                  ],
                }),
                '\n',
                (0, c.jsx)(n.li, {
                  children: (0, c.jsx)(n.a, { href: 'https://github.com/kubernetes-sigs/kind', children: 'kind' }),
                }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    (0, c.jsx)(n.a, { href: 'https://nodejs.org/en/', children: 'nodejs' }),
                    ' \u548c ',
                    (0, c.jsx)(n.a, { href: 'https://yarnpkg.com/lang/en/', children: 'yarn' }),
                    ' (\u7528\u4e8e\u5f00\u53d1 Chaos Dashboard)',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(n.h2, { id: '\u51c6\u5907\u5de5\u5177\u94fe', children: '\u51c6\u5907\u5de5\u5177\u94fe' }),
            '\n',
            (0, c.jsx)(n.p, {
              children:
                '\u51c6\u5907\u597d\u4e0a\u8ff0\u73af\u5883\u540e\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u914d\u7f6e\u7528\u4e8e\u7f16\u8bd1 Chaos Mesh \u7684\u5de5\u5177\u94fe\u3002',
            }),
            '\n',
            (0, c.jsxs)(n.ol, {
              children: [
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, c.jsx)(n.p, { children: '\u5c06 Chaos Mesh \u9879\u76ee\u514b\u9686\u81f3\u672c\u5730\u3002' }),
                    '\n',
                    (0, c.jsx)(n.pre, {
                      children: (0, c.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, c.jsxs)(n.p, {
                      children: [
                        '\u786e\u4fdd\u4f60\u7684\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 ',
                        (0, c.jsx)(n.a, { href: 'https://docs.docker.com/install/', children: 'Docker' }),
                        ' \u5e76\u4e14\u6b63\u5728\u8fd0\u884c Docker\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, c.jsxs)(n.p, {
                      children: [
                        '\u786e\u4fdd ',
                        (0, c.jsx)(n.a, { href: 'https://docs.docker.com/registry/', children: 'Docker Registry' }),
                        ' \u6b63\u5728\u8fd0\u884c\u3002\u5c06\u73af\u5883\u53d8\u91cf ',
                        (0, c.jsx)(n.code, { children: 'DOCKER_REGISTRY' }),
                        ' \u8bbe\u7f6e\u4e3a\u5176\u5730\u5740:',
                      ],
                    }),
                    '\n',
                    (0, c.jsx)(n.pre, {
                      children: (0, c.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          "echo 'export DOCKER_REGISTRY=localhost:5000' >> ~/.bash_profile\nsource ~/.bash_profile\n",
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, c.jsxs)(n.p, {
                      children: [
                        '\u786e\u4fdd ',
                        (0, c.jsx)(n.code, { children: '${GOPATH}/bin' }),
                        ' \u5728\u4f60\u7684 ',
                        (0, c.jsx)(n.code, { children: 'PATH' }),
                        ' \u73af\u5883\u53d8\u91cf\u4e2d\u3002',
                      ],
                    }),
                    '\n',
                    (0, c.jsx)(n.pre, {
                      children: (0, c.jsx)(n.code, {
                        className: 'language-bash',
                        children: "echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile\n",
                      }),
                    }),
                    '\n',
                    (0, c.jsx)(n.pre, {
                      children: (0, c.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'source ~/.bash_profile\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, c.jsx)(n.p, { children: '\u68c0\u67e5 Nodejs \u76f8\u5173\u73af\u5883\u3002' }),
                    '\n',
                    (0, c.jsx)(n.pre, {
                      children: (0, c.jsx)(n.code, { className: 'language-bash', children: ' node -v\n yarn -v\n' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, c.jsx)(n.p, { children: '\u5c1d\u8bd5\u7f16\u8bd1 Chaos Mesh\uff1a' }),
                    '\n',
                    (0, c.jsx)(n.pre, {
                      children: (0, c.jsx)(n.code, { className: 'language-bash', children: 'make\n' }),
                    }),
                    '\n',
                    (0, c.jsx)(n.p, {
                      children:
                        '\u5982\u679c\u6ca1\u6709\u62a5\u9519\uff0c\u90a3\u4e48\u5de5\u5177\u94fe\u5df2\u7ecf\u914d\u7f6e\u5b8c\u6bd5\u3002',
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(n.h2, {
              id: '\u51c6\u5907\u90e8\u7f72\u73af\u5883',
              children: '\u51c6\u5907\u90e8\u7f72\u73af\u5883',
            }),
            '\n',
            (0, c.jsx)(n.p, {
              children:
                '\u5728\u5de5\u5177\u94fe\u51c6\u5907\u5b8c\u4e4b\u540e\uff0c\u4f60\u8fd8\u9700\u8981\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684 Kubernetes \u96c6\u7fa4\u7528\u4e8e\u90e8\u7f72 Chaos Mesh\u3002\u7531\u4e8e kind \u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u542f\u52a8\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff1a',
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, { className: 'language-bash', children: 'hack/kind-cluster-build.sh\n' }),
            }),
            '\n',
            (0, c.jsx)(n.p, {
              children:
                '\u5f53\u4f60\u4e0d\u518d\u9700\u8981\u6b64\u96c6\u7fa4\uff0c\u5e0c\u671b\u5220\u9664\u5b83\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\uff1a',
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children: 'kind delete cluster --name=kind\n',
              }),
            }),
            '\n',
            (0, c.jsx)(n.p, {
              children:
                '\u5982\u9700\u542f\u52a8 Chaos Dashboard\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'cd ui && yarn\n# \u542f\u52a8\nyarn workspace @ui/app start:default # cross-env REACT_APP_API_URL=http://localhost:2333 BROWSER=none react-scripts start\n',
              }),
            }),
            '\n',
            (0, c.jsx)(n.h2, { id: '\u4e0b\u4e00\u6b65', children: '\u4e0b\u4e00\u6b65' }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u5728\u5b8c\u6210\u4e0a\u8ff0 Chaos Mesh \u5f00\u53d1\u7684\u51c6\u5907\u5de5\u4f5c\u540e\uff0c\u8bf7\u5c1d\u8bd5',
                (0, c.jsx)(n.a, {
                  href: '/zh/docs/2.5.2/add-new-chaos-experiment-type',
                  children: '\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b',
                }),
                '\u3002',
              ],
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components }
        return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(t, { ...e }) }) : t(e)
      }
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => l, x: () => h })
      var r = s(96540)
      const c = {},
        i = r.createContext(c)
      function l(e) {
        const n = r.useContext(i)
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function h(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(c)
              : e.components || c
            : l(e.components)),
          r.createElement(i.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
