'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [880],
  {
    47107: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => l,
          contentTitle: () => t,
          default: () => d,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => c,
        })
      const o = JSON.parse(
        '{"id":"configure-development-environment","title":"Configure the Development Environment","description":"This document describes how to configure a local development environment for Chaos Mesh.","source":"@site/versioned_docs/version-2.4.3/configure-development-environment.md","sourceDirName":".","slug":"/configure-development-environment","permalink":"/docs/2.4.3/configure-development-environment","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/configure-development-environment.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Configure the Development Environment"},"sidebar":"docs","previous":{"title":"Developer Guide Overview","permalink":"/docs/2.4.3/developer-guide-overview"},"next":{"title":"Add New Chaos Experiment Type","permalink":"/docs/2.4.3/add-new-chaos-experiment-type"}}'
      )
      var i = s(74848),
        r = s(28453)
      const a = { title: 'Configure the Development Environment' },
        t = void 0,
        l = {},
        c = [
          { value: 'Configuration Requirements', id: 'configuration-requirements', level: 2 },
          { value: 'Compiling Chaos Mesh', id: 'compiling-chaos-mesh', level: 2 },
          {
            value: 'Run Chaos Mesh in Local minkube Kubernetes Cluster',
            id: 'run-chaos-mesh-in-local-minkube-kubernetes-cluster',
            level: 2,
          },
          { value: 'Debug Chaos Mesh in local environment', id: 'debug-chaos-mesh-in-local-environment', level: 2 },
          { value: 'Learn more', id: 'learn-more', level: 2 },
        ]
      function h(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.p, {
              children: 'This document describes how to configure a local development environment for Chaos Mesh.',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Most components of Chaos Mesh are designed only for Linux, so we suggest that you also configure your development environment to run on Linux. For example, using a virtual machine or WSL 2, and using VSCode Remote as your editor.',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'This document assumes that you use Linux, without the restriction on specific Linux distributions. If you persist to use Windows/MacOS, you might need some tricks to make it work by yourself.',
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'configuration-requirements', children: 'Configuration Requirements' }),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'Before configuring, we suggest to install the development tools for Chaos Mesh.',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, { href: 'https://www.gnu.org/software/make/', children: 'make' }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, { href: 'https://docs.docker.com/install/', children: 'docker' }),
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.a, { href: 'https://go.dev/doc/install', children: 'golang' }),
                    ', v1.18 or later versions',
                  ],
                }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://gcc.gnu.org/', children: 'gcc' }) }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.a, { href: 'https://helm.sh/', children: 'helm' }),
                    ', v3.9.0 or later versions',
                  ],
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, { href: 'https://minikube.sigs.k8s.io/docs/start/', children: 'minikube' }),
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.a, { href: 'https://nodejs.org/en/', children: 'nodejs' }),
                    ' and ',
                    (0, i.jsx)(n.a, { href: 'https://yarnpkg.com/lang/en/', children: 'yarn' }),
                    ', for developing Chaos Dashboard',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'compiling-chaos-mesh', children: 'Compiling Chaos Mesh' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'After installing the above tools, follow the steps below to configure the toolchain for compiling Chaos Mesh.',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Clone the Chaos Mesh repository to your local server.' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n',
                      }),
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
                        'Make sure that ',
                        (0, i.jsx)(n.a, { href: 'https://docs.docker.com/install/', children: 'Docker' }),
                        ' is installed and running in your environment.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Compile Chaos Mesh:' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, { className: 'language-bash', children: 'UI=1 make\n' }),
                    }),
                    '\n',
                    (0, i.jsx)(n.p, { children: 'You should get these container images:' }),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(n.li, {
                          children: (0, i.jsx)(n.code, { children: 'ghcr.io/chaos-mesh/chaos-dashboard:latest' }),
                        }),
                        '\n',
                        (0, i.jsx)(n.li, {
                          children: (0, i.jsx)(n.code, { children: 'ghcr.io/chaos-mesh/chaos-mesh:latest' }),
                        }),
                        '\n',
                        (0, i.jsx)(n.li, {
                          children: (0, i.jsx)(n.code, { children: 'ghcr.io/chaos-mesh/chaos-daemon:latest' }),
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
            (0, i.jsx)(n.h2, {
              id: 'run-chaos-mesh-in-local-minkube-kubernetes-cluster',
              children: 'Run Chaos Mesh in Local minkube Kubernetes Cluster',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'After compiling Chaos Mesh, you can run Chaos Mesh in a local Kubernetes cluster.',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Start a local Kubernetes cluster with minkube.' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, { className: 'language-bash', children: 'minikube start\n' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Load container images into minikube' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'minikube image load ghcr.io/chaos-mesh/chaos-dashboard:latest\nminikube image load ghcr.io/chaos-mesh/chaos-mesh:latest\nminikube image load ghcr.io/chaos-mesh/chaos-daemon:latest\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Install Chaos Mesh by Helm' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'helm upgrade --install chaos-mesh-debug ./helm/chaos-mesh --namespace=chaos-mesh-debug --create-namespace\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, i.jsxs)(n.p, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'minikube image load' }),
                    " would cost lots of time, so here is a trick to avoid load images again and again. Using docker from minikube node instead of host's docker.",
                  ],
                }),
                (0, i.jsx)(n.pre, {
                  children: (0, i.jsx)(n.code, {
                    className: 'language-bash',
                    children:
                      'minikube start --mount --mount-string "$(pwd):$(pwd)"\neval $(minikube -p minikube docker-env)\nUI=1 make\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'debug-chaos-mesh-in-local-environment',
              children: 'Debug Chaos Mesh in local environment',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'We could use ',
                (0, i.jsx)(n.a, { href: 'https://github.com/go-delve/delve', children: 'delve' }),
                ' with remote debugging to debug the Chaos Mesh in local environment.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Compile Chaos Mesh with Debug Info' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, { className: 'language-bash', children: 'UI=1 DEBUGGER=1 make\n' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Load container images into minikube' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'minikube image load ghcr.io/chaos-mesh/chaos-dashboard:latest\nminikube image load ghcr.io/chaos-mesh/chaos-mesh:latest\nminikube image load ghcr.io/chaos-mesh/chaos-daemon:latest\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: 'Install Chaos Mesh by Helm with Enabling Remote Debugging' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'helm upgrade --install chaos-mesh-debug ./helm/chaos-mesh --namespace=chaos-mesh-debug --create-namespace --set chaosDlv.enable=true --set controllerManager.replicaCount=1\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.admonition, {
                      type: 'note',
                      children: (0, i.jsxs)(n.p, {
                        children: [
                          'We would set 3 replicas for ',
                          (0, i.jsx)(n.code, { children: 'chaos-controller-manager' }),
                          ' for HA purpose, ',
                          (0, i.jsx)(n.code, { children: '--set controllerManager.replicaCount=1' }),
                          ' would create 1 instance of ',
                          (0, i.jsx)(n.code, { children: 'chaos-controller-manager' }),
                          ' for easier debugging.',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: 'Setup Port-Forwarding and Configure IDE To Connect the Remote Debugger',
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'We could use ',
                        (0, i.jsx)(n.code, { children: 'kubectl port-forward' }),
                        ' for port-forwarding the delve debugging server on a local port.',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'For example, if we want to debug ',
                        (0, i.jsx)(n.code, { children: 'chaos-controller-manger' }),
                        ', we could execute the following command:',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'kubectl -n chaos-mesh-debug port-forward chaos-controller-manager-766dc8488d-7n5bq 58000:8000\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Then we could access the remote delve debugger server with ',
                        (0, i.jsx)(n.code, { children: '127.0.0.1:58000' }),
                        '.',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.admonition, {
                      type: 'note',
                      children: (0, i.jsxs)(n.p, {
                        children: [
                          'We always use ',
                          (0, i.jsx)(n.code, { children: '8000' }),
                          " in the pod for serving the delve debug server, that's a convention. You could find that in helm templates files.",
                        ],
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: 'Then we could configure our favorite IDE to connect to the remote debugger:',
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'For Goland, see ',
                        (0, i.jsx)(n.a, {
                          href: 'https://www.jetbrains.com/help/go/attach-to-running-go-processes-with-debugger.html#attach-to-a-process-on-a-remote-machine',
                          children:
                            'Attach to running Go processes with the debugger#Attach to a process on a remote machine',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'For VSCode, see ',
                        (0, i.jsx)(n.a, {
                          href: 'https://github.com/golang/vscode-go/blob/master/docs/debugging.md#remote-debugging',
                          children: 'vscode-go - Debugging#Remote Debugging',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'For more detailed information, see ',
                (0, i.jsx)(n.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/images/chaos-dlv/README.md',
                  children: 'README.md for container image chaos-dlv',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'learn-more', children: 'Learn more' }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'After finishing the above preparation, you can try to ',
                (0, i.jsx)(n.a, {
                  href: '/docs/2.4.3/add-new-chaos-experiment-type',
                  children: 'Add a New Chaos Experiment type',
                }),
                '.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e)
      }
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => a, x: () => t })
      var o = s(96540)
      const i = {},
        r = o.createContext(i)
      function a(e) {
        const n = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function t(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : a(e.components)),
          o.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])