'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1122, 6712, 9055],
  {
    75178: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => l,
        })
      const s = JSON.parse(
        '{"id":"common/quick-run","title":"quick-run","description":"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.","source":"@site/versioned_docs/version-2.5.2/common/quick-run.md","sourceDirName":"common","slug":"/common/quick-run","permalink":"/docs/2.5.2/common/quick-run","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/common/quick-run.md","tags":[],"version":"2.5.2","frontMatter":{}}'
      )
      var i = t(74848),
        o = t(28453)
      const r = {},
        a = void 0,
        c = {},
        l = []
      function h(e) {
        const n = { a: 'a', p: 'p', ...(0, o.R)(), ...e.components }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.p, {
              children:
                'After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'For the method to run the experiment, it is recommended to refer to ',
                (0, i.jsx)(n.a, { href: '/docs/2.5.2/run-a-chaos-experiment', children: 'Run a Chaos experiment' }),
                '. After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e)
      }
    },
    93809: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => l,
        })
      const s = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"To check the running status of Chaos Mesh, execute the following command:","source":"@site/versioned_docs/version-2.5.2/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/docs/2.5.2/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/common/verify-installation.md","tags":[],"version":"2.5.2","frontMatter":{}}'
      )
      var i = t(74848),
        o = t(28453)
      const r = {},
        a = void 0,
        c = {},
        l = []
      function h(e) {
        const n = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.p, { children: 'To check the running status of Chaos Mesh, execute the following command:' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'kubectl get po -n chaos-mesh\n' }),
            }),
            '\n',
            (0, i.jsx)(n.p, { children: 'The expected output is as follows:' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-sh',
                children:
                  'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If your actual output is similar to the expected output with ',
                (0, i.jsx)(n.code, { children: 'NAME' }),
                ', ',
                (0, i.jsx)(n.code, { children: 'READY' }),
                ', ',
                (0, i.jsx)(n.code, { children: 'STATUS' }),
                ', ',
                (0, i.jsx)(n.code, { children: 'RESTARTS' }),
                ', and ',
                (0, i.jsx)(n.code, { children: 'AGE' }),
                ', it means that Helm is installed successfully.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, i.jsxs)(n.p, {
                  children: [
                    'If the ',
                    (0, i.jsx)(n.code, { children: 'STATUS' }),
                    ' of your actual output is not ',
                    (0, i.jsx)(n.code, { children: 'Running' }),
                    ', then execute the following command to check the Pod details, and troubleshoot issues according to the error information.',
                  ],
                }),
                (0, i.jsx)(n.pre, {
                  children: (0, i.jsx)(n.code, {
                    className: 'language-sh',
                    children:
                      '# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, i.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, i.jsxs)(n.p, {
                  children: [
                    'If ',
                    (0, i.jsx)(n.code, { children: 'leader-election' }),
                    ' feature is turned off manually, ',
                    (0, i.jsx)(n.code, { children: 'chaos-controller-manager' }),
                    ' should only have 1 replication.',
                  ],
                }),
                (0, i.jsx)(n.pre, {
                  children: (0, i.jsx)(n.code, {
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
        const { wrapper: n } = { ...(0, o.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e)
      }
    },
    2641: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => h,
          default: () => p,
          frontMatter: () => l,
          metadata: () => s,
          toc: () => u,
        })
      const s = JSON.parse(
        '{"id":"quick-start","title":"Quick Start","description":"This document describes how to start Chaos Mesh quickly in a test or local environment.","source":"@site/versioned_docs/version-2.5.2/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/docs/2.5.2/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/quick-start.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Quick Start"},"sidebar":"docs","previous":{"title":"Basic Features","permalink":"/docs/2.5.2/basic-features"},"next":{"title":"Install Chaos Mesh using Helm","permalink":"/docs/2.5.2/production-installation-using-helm"}}'
      )
      var i = t(74848),
        o = t(28453),
        r = t(34661),
        a = t(93809),
        c = t(75178)
      const l = { title: 'Quick Start' },
        h = void 0,
        d = {},
        u = [
          { value: 'Environment preparation', id: 'environment-preparation', level: 2 },
          { value: 'Quick installation', id: 'quick-installation', level: 2 },
          { value: 'Verify the installation', id: 'verify-the-installation', level: 2 },
          ...a.toc,
          { value: 'Run Chaos experiments', id: 'run-chaos-experiments', level: 2 },
          ...c.toc,
          { value: 'Uninstall Chaos Mesh', id: 'uninstall-chaos-mesh', level: 2 },
          { value: 'FAQ', id: 'faq', level: 2 },
          {
            value: 'Why the <code>local</code> directory appears in the root directory after installation?',
            id: 'why-the-local-directory-appears-in-the-root-directory-after-installation',
            level: 3,
          },
        ]
      function m(e) {
        const n = {
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
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.p, {
              children: 'This document describes how to start Chaos Mesh quickly in a test or local environment.',
            }),
            '\n',
            (0, i.jsxs)(n.admonition, {
              type: 'caution',
              children: [
                (0, i.jsx)(n.p, {
                  children: (0, i.jsx)(n.strong, {
                    children: 'In this document, Chaos Mesh is installed via a script for quick trial only.',
                  }),
                }),
                (0, i.jsxs)(n.p, {
                  children: [
                    'If you need to install Chaos Mesh in the production environment or other strict non-test scenarios, it is recommended to use ',
                    (0, i.jsx)(n.a, { href: 'https://helm.sh/', children: 'Helm' }),
                    '. For more details, refer to ',
                    (0, i.jsx)(n.a, {
                      href: '/docs/2.5.2/production-installation-using-helm',
                      children: 'Installation using Helm',
                    }),
                    '.',
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'environment-preparation', children: 'Environment preparation' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Please ensure that the Kubernetes cluster is deployed in the environment before the trial. If the Kubernetes cluster has not been deployed, you can refer to the links below to complete the deployment:',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, { href: 'https://kubernetes.io/docs/setup/', children: 'Kubernetes' }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, { href: 'https://minikube.sigs.k8s.io/docs/start/', children: 'minikube' }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: 'https://kind.sigs.k8s.io/docs/user/quick-start/',
                    children: 'kind',
                  }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: 'https://rancher.com/docs/k3s/latest/en/quick-start/',
                    children: 'K3s',
                  }),
                }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://microk8s.io/', children: 'Microk8s' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'quick-installation', children: 'Quick installation' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'To install Chaos Mesh in a test environment, run the following script:' }),
            '\n',
            (0, i.jsx)(r.A, { children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash' }),
            '\n',
            (0, i.jsx)(n.admonition, {
              type: 'note',
              children: (0, i.jsxs)(n.ul, {
                children: [
                  '\n',
                  (0, i.jsxs)(n.li, {
                    children: [
                      '\n',
                      (0, i.jsxs)(n.p, {
                        children: [
                          'If the current environment is ',
                          (0, i.jsx)(n.a, { href: 'https://kind.sigs.k8s.io/', children: 'kind' }),
                          ', add the ',
                          (0, i.jsx)(n.code, { children: '--local kind' }),
                          ' parameter at the end of the script.',
                        ],
                      }),
                      '\n',
                      (0, i.jsx)(r.A, {
                        children:
                          'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind',
                      }),
                      '\n',
                      (0, i.jsxs)(n.p, {
                        children: [
                          'If you want to specify a ',
                          (0, i.jsx)(n.code, { children: 'kind' }),
                          ' version, add the ',
                          (0, i.jsx)(n.code, { children: '--kind-version xx' }),
                          ' parameter at the end of the script, for example:',
                        ],
                      }),
                      '\n',
                      (0, i.jsx)(r.A, {
                        children:
                          'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --local kind --kind-version v0.20.0',
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, i.jsxs)(n.li, {
                    children: [
                      '\n',
                      (0, i.jsxs)(n.p, {
                        children: [
                          'If the current environment is ',
                          (0, i.jsx)(n.a, { href: 'https://k3s.io/', children: 'K3s' }),
                          ', add the ',
                          (0, i.jsx)(n.code, { children: '--k3s' }),
                          ' parameter at the end of the script.',
                        ],
                      }),
                      '\n',
                      (0, i.jsx)(r.A, {
                        children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --k3s',
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, i.jsxs)(n.li, {
                    children: [
                      '\n',
                      (0, i.jsxs)(n.p, {
                        children: [
                          'If the current environment is ',
                          (0, i.jsx)(n.a, { href: 'https://microk8s.io/', children: 'Microk8s' }),
                          ', add the ',
                          (0, i.jsx)(n.code, { children: '--microk8s' }),
                          ' parameter at the end of the script.',
                        ],
                      }),
                      '\n',
                      (0, i.jsx)(r.A, {
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
            (0, i.jsx)(n.p, {
              children:
                'After running this script, Chaos Mesh automatically installs the CustomResourceDefining (CRD) that matches the version, all required components, and related Service Account configurations.',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'For more installation details, refer to the source code of the ',
                (0, i.jsx)(n.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/install.sh',
                  children: (0, i.jsx)(n.code, { children: 'install.sh' }),
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'verify-the-installation', children: 'Verify the installation' }),
            '\n',
            (0, i.jsx)(a.default, {}),
            '\n',
            (0, i.jsx)(n.h2, { id: 'run-chaos-experiments', children: 'Run Chaos experiments' }),
            '\n',
            (0, i.jsx)(c.default, {}),
            '\n',
            (0, i.jsx)(n.h2, { id: 'uninstall-chaos-mesh', children: 'Uninstall Chaos Mesh' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'To uninstall Chaos Mesh, execute the following command:' }),
            '\n',
            (0, i.jsx)(r.A, {
              children:
                'curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash -s -- --template | kubectl delete -f -',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'You can also delete the ',
                (0, i.jsx)(n.code, { children: 'chaos-mesh' }),
                ' namespace to directly uninstall Chaos Mesh:',
              ],
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'kubectl delete ns chaos-mesh\n' }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'faq', children: 'FAQ' }),
            '\n',
            (0, i.jsxs)(n.h3, {
              id: 'why-the-local-directory-appears-in-the-root-directory-after-installation',
              children: [
                'Why the ',
                (0, i.jsx)(n.code, { children: 'local' }),
                ' directory appears in the root directory after installation?',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                "If you don't install ",
                (0, i.jsx)(n.code, { children: 'kind' }),
                ' in the existing environment, and you use the ',
                (0, i.jsx)(n.code, { children: '--local kind' }),
                ' parameter when executing the installation command, the ',
                (0, i.jsx)(n.code, { children: 'install.sh' }),
                ' script will automatically install the ',
                (0, i.jsx)(n.code, { children: 'kind' }),
                ' in the ',
                (0, i.jsx)(n.code, { children: 'local' }),
                ' directory under the root directory.',
              ],
            }),
          ],
        })
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e)
      }
    },
    34661: (e, n, t) => {
      t.d(n, { A: () => l, t: () => c })
      var s = t(78478),
        i = t(44586),
        o = t(66588),
        r = t(21432),
        a = t(74848)
      const c = (e, n) => {
        const t = window.location.pathname
        let s = window.localStorage.getItem('docs-preferred-version-default')
        if (t === e.baseUrl && s) return 'current' === s ? 'latest' : s
        if (t.includes('/docs/next')) return 'latest'
        const i = n.find((e) => e.isLast),
          o = n.find((e) => t.includes(e.name))
        return o ? o.name : i.name
      }
      const l = (e) => {
        let { children: n, replaced: t = 'latest', isArchive: l = !1, className: h = 'language-bash' } = e
        const { siteConfig: d } = (0, i.A)(),
          { versions: u } = (0, o.P_)('docusaurus-plugin-content-docs')
        return (0, a.jsx)(s.A, {
          children: () => {
            const e = c(d, u),
              s = l
                ? n.replace(
                    t,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? n
                : n.replace(t, 'v' + e)
            return (0, a.jsx)(r.A, { className: h, children: s })
          },
        })
      }
    },
    28453: (e, n, t) => {
      t.d(n, { R: () => r, x: () => a })
      var s = t(96540)
      const i = {},
        o = s.createContext(i)
      function r(e) {
        const n = s.useContext(o)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function a(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          s.createElement(o.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
