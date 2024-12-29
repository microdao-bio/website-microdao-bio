'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9671],
  {
    59077: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => i,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => h,
        })
      const o = JSON.parse(
        '{"id":"chaosctl-tool","title":"Chaosctl","description":"Chaosctl is a tool to assist in debugging Chaos Mesh. With Chaosctl, you can simplify the process of developing and debugging new chaos types, and provide references for other developers when raising an issue.","source":"@site/versioned_docs/version-2.6.2/chaosctl-tool.md","sourceDirName":".","slug":"/chaosctl-tool","permalink":"/docs/chaosctl-tool","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/chaosctl-tool.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Chaosctl"},"sidebar":"docs","previous":{"title":"Use Grafana Data Source Plugin for Observations","permalink":"/docs/use-grafana-data-source"},"next":{"title":"Developer Guide Overview","permalink":"/docs/developer-guide-overview"}}'
      )
      var t = n(74848),
        c = n(28453)
      const a = { title: 'Chaosctl' },
        r = void 0,
        i = {},
        h = [
          { value: 'Get Chaosctl', id: 'get-chaosctl', level: 2 },
          { value: 'Features', id: 'features', level: 2 },
          { value: 'Printing logs', id: 'printing-logs', level: 3 },
          { value: 'Printing debugging information', id: 'printing-debugging-information', level: 3 },
          { value: 'Generate TLS certificates for Chaosd', id: 'generate-tls-certificates-for-chaosd', level: 3 },
          { value: 'Questions and feedback', id: 'questions-and-feedback', level: 2 },
        ]
      function l(e) {
        const s = {
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
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.p, {
              children:
                'Chaosctl is a tool to assist in debugging Chaos Mesh. With Chaosctl, you can simplify the process of developing and debugging new chaos types, and provide references for other developers when raising an issue.',
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'get-chaosctl', children: 'Get Chaosctl' }),
            '\n',
            (0, t.jsx)(s.p, {
              children: 'For Linux users, you can directly download the executable file for Chaosctl.',
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/chaosctl -O\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'For Windows or macOS users, you can compile it from the source code. Go v1.15 or above is recommended for compiling. Perform the following steps:',
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(s.p, { children: 'Clone the Chaos Mesh repository to your local machine.' }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'git clone https://github.com/chaos-mesh/chaos-mesh.git\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: ['\n', (0, t.jsx)(s.p, { children: 'Switch to the Chaos Mesh directory.' }), '\n'],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(s.p, { children: 'Execute the following command:' }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, { className: 'language-bash', children: 'make chaosctl\n' }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'The compiled executable file is at ',
                        (0, t.jsx)(s.code, { children: 'bin/chaosctl' }),
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
            (0, t.jsx)(s.h2, { id: 'features', children: 'Features' }),
            '\n',
            (0, t.jsx)(s.p, {
              children: 'Currently, Chaosctl supports printing logs and debugging information for Chaos experiments.',
            }),
            '\n',
            (0, t.jsx)(s.h3, { id: 'printing-logs', children: 'Printing logs' }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'To print the logs from all Chaos Mesh components, use the ',
                (0, t.jsx)(s.code, { children: 'chaosctl logs' }),
                ' command. To check the help information and examples of this feature, use the ',
                (0, t.jsx)(s.code, { children: 'chaosctl logs -h' }),
                ' command. An example command is as follows:',
              ],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosctl logs -t 100 # Print the last 100 lines of logs from all components\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h3, { id: 'printing-debugging-information', children: 'Printing debugging information' }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'To print debugging information, use the ',
                (0, t.jsx)(s.code, { children: 'chaosctl debug' }),
                ' command. To check the help information and examples of this feature, use the ',
                (0, t.jsx)(s.code, { children: 'chaosctl debug -h' }),
                ' command. When you are debugging, you need to make sure Chaosctl is connected to the corresponding ',
                (0, t.jsx)(s.code, { children: 'chaos-daemon' }),
                '. If you disable TLS (enabled by default) when deploying Chaos Mesh, add the ',
                (0, t.jsx)(s.code, { children: '-i' }),
                ' option to tell Chaosctl that TLS is not used. An example command is as follows:',
              ],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: './chaosctl debug -i networkchaos web-show-network-delay\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children: 'Currently, Chaosctl only supports the debugging of IOChaos, NetworkChaos, and StressChaos.',
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'generate-tls-certificates-for-chaosd',
              children: 'Generate TLS certificates for Chaosd',
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'When a request is initiated between Chaosd and Chaos Mesh, to ensure communications security between Chaosd and Chaos-controller-manager services, Chaos Mesh recommends enabling mTLS (Mutual Transport Layer Security) mode.',
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'To enable mTLS mode, the TLS certificate parameters should be configured in Chaosd and Chaos mesh. Therefore, make sure that Chaosd and Chaos Mesh have generated TLS certificates, then start Chaosd and Chaos Mesh with the TLS certificate as parameters.',
            }),
            '\n',
            (0, t.jsxs)(s.ul, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    'Chaosd: You can start Chaosd before ',
                    (0, t.jsx)(s.strong, { children: 'or' }),
                    ' after configuring TLS certificate parameters. For clusters security, it is recommended to configure TLS certificate parameters first, and then start Chaosd. For details, see ',
                    (0, t.jsx)(s.a, {
                      href: '/docs/simulate-physical-machine-chaos#deploy-chaosd-server',
                      children: 'Deploy Chaosd server',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, t.jsx)(s.li, {
                  children:
                    'Chaos Mesh: If you deployed Chaos Mesh using Helm, TLS certificate parameters are configured by default.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'If your Chaosd does not generate a TLS certificate, you can use Chaosctl to easily generate the certificate through the command lines. In the following use cases, Chaosctl runs commands through different schemes.',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                (0, t.jsx)(s.strong, { children: 'Case 1' }),
                ': The nodes where Chaosctl runs can access Kubernetes clusters and connect to a physical machine using SSH tools.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'Run the following commands to complete the operations:' }),
            '\n',
            (0, t.jsxs)(s.ul, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: ['Command: Use ', (0, t.jsx)(s.code, { children: 'chaosctl pm init' }), ' command:'],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children: './chaosctl pm init pm-name --ip=123.123.123.123 -l arch=amd64,anotherkey=value\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(s.p, { children: 'Operation: The command performs the following operations.' }),
                    '\n',
                    (0, t.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(s.li, {
                          children:
                            'Generate the required certificate for Chaosd simply, and save the certificate to the corresponding physical machine.',
                        }),
                        '\n',
                        (0, t.jsxs)(s.li, {
                          children: [
                            'Create the corresponding ',
                            (0, t.jsx)(s.code, { children: 'PhysicalMachine' }),
                            ' resource in Kubernetes clusters.',
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
            (0, t.jsxs)(s.p, {
              children: [
                'For further information and examples of this feature, refer to ',
                (0, t.jsx)(s.code, { children: 'chaosctl pm init -h' }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                (0, t.jsx)(s.strong, { children: 'Case 2' }),
                ': The nodes where Chaosctl runs can access Kubernetes clusters, but they cannot connect to a physical machine using SSH tools.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'Run the following commands to complete the operations:' }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(s.p, {
                      children:
                        'Before executing the command, you need to manually get a CA certificate from Kubernetes clusters through commands. For example:',
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'kubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o "jsonpath={.data[\'ca\\.crt\']}" | base64 -d > ca.crt\n\nkubectl get secret chaos-mesh-chaosd-client-certs -n chaos-mesh -o "jsonpath={.data[\'ca\\.key\']}" | base64 -d> ca.key\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Copy the ',
                        (0, t.jsx)(s.code, { children: 'ca.crt' }),
                        ' and ',
                        (0, t.jsx)(s.code, { children: 'ca.key' }),
                        ' files to ',
                        (0, t.jsx)(s.strong, { children: 'the corresponding physical machine' }),
                        '. For example, copy the files to the ',
                        (0, t.jsx)(s.code, { children: '/etc/chaosd/pki' }),
                        ' directory.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Use the ',
                        (0, t.jsx)(s.code, { children: 'chaosctl pm generate' }),
                        ' command to generate TLS certificates (save to `/etc/chaosd/pki by default) on ',
                        (0, t.jsx)(s.strong, { children: 'the physical machine' }),
                        '. For example:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          './chaosctl pm generate --cacert=/etc/chaosd/pki/ca.crt --cakey=/etc/chaosd/pki/ca.key\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'For further information and examples of this feature, refer to ',
                        (0, t.jsx)(s.code, { children: 'chaosctl pm generate -h' }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Use the ',
                        (0, t.jsx)(s.code, { children: 'chaosctl pm create' }),
                        ' command to create a ',
                        (0, t.jsx)(s.code, { children: 'PhysicalMachine' }),
                        ' resource in Kubernetes clusters on the machine that has access to Kubernetes clusters. For example:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children: './chaosctl pm create pm-name --ip=123.123.123.123 -l arch=amd64\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'For further information and examples of this feature, refer to ',
                        (0, t.jsx)(s.code, { children: 'chaosctl pm create -h' }),
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
            (0, t.jsx)(s.h2, { id: 'questions-and-feedback', children: 'Questions and feedback' }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'The code of Chaosctl is currently hosted in the Chaos Mesh project. For details, refer to ',
                (0, t.jsx)(s.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/tree/master/pkg/chaosctl',
                  children: 'chaos-mesh/pkg/chaosctl',
                }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'If you encounter problems during performing operations, or you are interested in helping us improve this tool, you are welcome to contact the Chaos Mesh team through ',
                (0, t.jsx)(s.a, {
                  href: 'https://cloud-native.slack.com/archives/C0193VAV272',
                  children: 'CNCF Slack',
                }),
                ', or create an ',
                (0, t.jsx)(s.a, { href: 'https://github.com/chaos-mesh/chaos-mesh/issues', children: 'GitHub issue' }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'When describing your issues, it would be helpful to attach related logs and Chaos information. To provide reference material for developers, you are encouraged to attach the results of ',
                (0, t.jsx)(s.code, { children: 'chaosctl logs' }),
                ' to your questions. Besides, if your question is related to iochaos, networkchaos, stresschaos, the ',
                (0, t.jsx)(s.code, { children: 'chaosctl debug' }),
                ' related information also helps to diagnose the problem.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, c.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => a, x: () => r })
      var o = n(96540)
      const t = {},
        c = o.createContext(t)
      function a(e) {
        const s = o.useContext(c)
        return o.useMemo(
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
              ? e.components(t)
              : e.components || t
            : a(e.components)),
          o.createElement(c.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
