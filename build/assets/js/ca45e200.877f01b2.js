'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4987],
  {
    88949: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => c,
        })
      const a = JSON.parse(
        '{"id":"basic-features","title":"Basic Features","description":"This document describes the basic features of Chaos Mesh, including fault injection, Chaos workflows, visualized operations, and security guarantees.","source":"@site/versioned_docs/version-2.6.2/basic-features.md","sourceDirName":".","slug":"/basic-features","permalink":"/docs/basic-features","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/basic-features.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Basic Features"},"sidebar":"docs","previous":{"title":"Chaos Mesh Overview","permalink":"/docs/"},"next":{"title":"Quick Start","permalink":"/docs/quick-start"}}'
      )
      var i = n(74848),
        t = n(28453)
      const o = { title: 'Basic Features' },
        r = void 0,
        l = {},
        c = [
          { value: 'Fault injection', id: 'fault-injection', level: 2 },
          { value: 'Chaos workflows', id: 'chaos-workflows', level: 2 },
          { value: 'Visualized operations', id: 'visualized-operations', level: 2 },
          { value: 'Security guarantee', id: 'security-guarantee', level: 2 },
        ]
      function h(e) {
        const s = { a: 'a', h2: 'h2', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s.p, {
              children: [
                'This document describes the basic features of Chaos Mesh, including ',
                (0, i.jsx)(s.a, { href: '#fault-injection', children: 'fault injection' }),
                ', ',
                (0, i.jsx)(s.a, { href: '#chaos-workflows', children: 'Chaos workflows' }),
                ', ',
                (0, i.jsx)(s.a, { href: '#visualized-operations', children: 'visualized operations' }),
                ', and ',
                (0, i.jsx)(s.a, { href: '#security-guarantees', children: 'security guarantees' }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: 'fault-injection', children: 'Fault injection' }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'Fault injection is the key of Chaos experiments. Chaos Mesh covers a full range of faults that might occur in a distributed system, and provides three comprehensive and fine-grained fault types: basic resource faults, platform faults, and application-layer faults.',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Basic resource faults:',
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-pod-chaos-on-kubernetes', children: 'PodChaos' }),
                            ": simulates Pod failures, such as Pod node restart, Pod's persistent unavailablility, and certain container failures in a specific Pod.",
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, {
                              href: '/docs/simulate-network-chaos-on-kubernetes',
                              children: 'NetworkChaos',
                            }),
                            ': simulates network failures, such as network latency, packet loss, packet disorder, and network partitions.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-dns-chaos-on-kubernetes', children: 'DNSChaos' }),
                            ': simulates DNS failures, such as the parsing failure of DNS domain name and the wrong IP address returned.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-http-chaos-on-kubernetes', children: 'HTTPChaos' }),
                            ': simulates HTTP communication failures, such as HTTP communication latency.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, {
                              href: '/docs/simulate-heavy-stress-on-kubernetes',
                              children: 'StressChaos',
                            }),
                            ': simulates CPU race or memory race.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-io-chaos-on-kubernetes', children: 'IOChaos' }),
                            ': simulates the I/O failure of an application file, such as I/O delays, read and write failures.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-time-chaos-on-kubernetes', children: 'TimeChaos' }),
                            ': simulates the time jump exception.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, {
                              href: '/docs/simulate-kernel-chaos-on-kubernetes',
                              children: 'KernelChaos',
                            }),
                            ': simulates kernel failures, such as an exception of the application memory allocation.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Platform faults:',
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-aws-chaos', children: 'AWSChaos' }),
                            ': simulates AWS platform failures, such as the AWS node restart.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-gcp-chaos', children: 'GCPChaos' }),
                            ': simulates GCP platform failures, such as the GCP node restart.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Application faults:',
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.a, { href: '/docs/simulate-jvm-application-chaos', children: 'JVMChaos' }),
                            ': simulates JVM application failures, such as the function call delay.',
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
            (0, i.jsx)(s.h2, { id: 'chaos-workflows', children: 'Chaos workflows' }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'A Chaos workflow includes a set of Chaos experiments and an application status check, so you can complete the entire process of a Chaos engineering project on the platform.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'Chaos workflows enable you to perform a series of Chaos experiments, keep expanding the explosion radius (including the scope of attacks), and increase the failure types. After running a Chaos workflow, you can easily view the current state of the application using Chaos Mesh and determine whether to perform follow-up experiments.At the same time, to reduce the cost of maintaining Chaos workflows, you can keep updating and accumulating the Chaos experiment workflows, and apply the existing experiments to other workflows.',
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'Currently, Chaos workflows provide the following features:' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, { children: 'Orchestrate serial Chaos experiments' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Orchestrate parallel Chaos experiments' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Support checking experimental status and results' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Support pausing a Chaos experiment' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Support using YAML files to define and manage Chaos workflows' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Support using the web UI to define and manage Chaos workflows' }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'For the configuration of a specific workflow, see ',
                (0, i.jsx)(s.a, { href: '/docs/create-chaos-mesh-workflow', children: 'Create Chaos Mesh workflow' }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: 'visualized-operations', children: 'Visualized operations' }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'Chaos Mesh provides the Chaos Dashboard component for visualized operations, which greatly simplifies Chaos experiments.You can manage and monitor a Chaos experiment directly through the visualization interface. For example, with a few clicks on the interface, you can define the scope of a Chaos experiment, specify the type of Chaos injection, define scheduling rules, and get the results of the Chaos experiment.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: (0, i.jsx)(s.img, {
                alt: 'Chaos workflow',
                src: n(47795).A + '',
                width: '1892',
                height: '859',
              }),
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: 'security-guarantee', children: 'Security guarantee' }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'Chaos Mesh manages permissions using the native ',
                (0, i.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
                  children: 'RBAC',
                }),
                ' feature in Kubernetes.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'You can freely create multiple roles based on your actual permission requirements, bind the roles to the username service account, and then generate the token corresponding to the service account.When you log into the Dashboard using this token, you can only perform Chaos experiments within the permissions given by the service account.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'In addition, you can specify the namespaces that allow Chaos experiments by setting the namespace annotations, which further safeguards the control of Chaos experiments.',
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e)
      }
    },
    47795: (e, s, n) => {
      n.d(s, { A: () => a })
      const a = n.p + 'assets/images/dashboard-overview-445b086ab6dbbdf6525405e17c12782b.png'
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => o, x: () => r })
      var a = n(96540)
      const i = {},
        t = a.createContext(i)
      function o(e) {
        const s = a.useContext(t)
        return a.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function r(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          a.createElement(t.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
