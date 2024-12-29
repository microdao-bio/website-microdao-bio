'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [184],
  {
    48600: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => d,
          metadata: () => i,
          toc: () => o,
        })
      const i = JSON.parse(
        '{"id":"simulate-network-chaos-on-kubernetes","title":"Simulate Network Faults","description":"This document describes how to simulate network faults using NetworkChaos in Chaos Mesh.","source":"@site/docs/simulate-network-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-network-chaos-on-kubernetes","permalink":"/docs/next/simulate-network-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/simulate-network-chaos-on-kubernetes.md","tags":[],"version":"current","frontMatter":{"title":"Simulate Network Faults"},"sidebar":"docs","previous":{"title":"Simulate Pod Faults","permalink":"/docs/next/simulate-pod-chaos-on-kubernetes"},"next":{"title":"Simulate Stress Scenarios","permalink":"/docs/next/simulate-heavy-stress-on-kubernetes"}}'
      )
      var s = t(74848),
        r = t(28453)
      const d = { title: 'Simulate Network Faults' },
        l = void 0,
        c = {},
        o = [
          { value: 'NetworkChaos introduction', id: 'networkchaos-introduction', level: 2 },
          { value: 'Notes', id: 'notes', level: 2 },
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using the YAML files', id: 'create-experiments-using-the-yaml-files', level: 2 },
          { value: 'Net emulation example', id: 'net-emulation-example', level: 3 },
          { value: 'Partition example', id: 'partition-example', level: 3 },
          { value: 'Bandwidth example', id: 'bandwidth-example', level: 3 },
          { value: 'Field description', id: 'field-description', level: 2 },
          {
            value: 'Description for <code>action</code>-related fields',
            id: 'description-for-action-related-fields',
            level: 3,
          },
          { value: 'delay', id: 'delay', level: 4 },
          { value: 'reorder', id: 'reorder', level: 4 },
          { value: 'loss', id: 'loss', level: 4 },
          { value: 'duplicate', id: 'duplicate', level: 4 },
          { value: 'corrupt', id: 'corrupt', level: 4 },
          { value: 'bandwidth', id: 'bandwidth', level: 4 },
        ]
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.p, {
              children: 'This document describes how to simulate network faults using NetworkChaos in Chaos Mesh.',
            }),
            '\n',
            (0, s.jsx)(n.h2, { id: 'networkchaos-introduction', children: 'NetworkChaos introduction' }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'NetworkChaos is a fault type in Chaos Mesh. By creating a NetworkChaos experiment, you can simulate a network fault scenario for a cluster. Currently, NetworkChaos supports the following fault types:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [(0, s.jsx)(n.strong, { children: 'Partition' }), ': network disconnection and partition.'],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, { children: 'Net Emulation' }),
                    ': poor network conditions, such as high delays, high packet loss rate, packet reordering, and so on.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, { children: 'Bandwidth' }),
                    ': limit the communication bandwidth between nodes.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, { id: 'notes', children: 'Notes' }),
            '\n',
            (0, s.jsx)(n.p, { children: 'Before creating NetworkChaos experiments, ensure the following:' }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'During the network injection process, make sure that the connection between Controller Manager and Chaos Daemon works, otherwise the NetworkChaos cannot be restored anymore.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'If you want to simulate Net Emulation fault, make sure the NET_SCH_NETEM module is installed in the Linux kernel. If you are using CentOS, you can install the module through the kernel-modules-extra package. Most other Linux distributions have installed the module already by default.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'create-experiments-using-chaos-dashboard',
              children: 'Create experiments using Chaos Dashboard',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, s.jsx)(n.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: (0, s.jsx)(n.img, {
                        alt: 'Create Experiment',
                        src: t(7278).A + '',
                        width: '959',
                        height: '519',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'In the ',
                        (0, s.jsx)(n.strong, { children: 'Choose a Target' }),
                        ' area, choose ',
                        (0, s.jsx)(n.strong, { children: 'NETWORK ATTACK' }),
                        ' and select a specific behavior, such as ',
                        (0, s.jsx)(n.strong, { children: 'LOSS' }),
                        '. Then fill out specific configuration.',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: (0, s.jsx)(n.img, {
                        alt: 'NetworkChaos Experiments',
                        src: t(24161).A + '',
                        width: '2018',
                        height: '1480',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'For details of specific configuration fields, refer to ',
                        (0, s.jsx)(n.a, { href: '#field-description', children: 'Field description' }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration.',
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: (0, s.jsx)(n.img, {
                        alt: 'Experiment Information',
                        src: t(19263).A + '',
                        width: '973',
                        height: '442',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: ['\n', (0, s.jsx)(n.p, { children: 'Submit the experiment information.' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'create-experiments-using-the-yaml-files',
              children: 'Create experiments using the YAML files',
            }),
            '\n',
            (0, s.jsx)(n.h3, { id: 'net-emulation-example', children: 'Net emulation example' }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, s.jsx)(n.code, { children: 'network-delay.yaml' }),
                        ' file, as shown below:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: delay\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n",
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'This configuration causes a latency of 10 milliseconds in the network connections of the target Pods. In addition to latency injection, Chaos Mesh supports packet loss and packet reordering injection. For details, see ',
                        (0, s.jsx)(n.a, { href: '#field-description', children: 'field description' }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, s.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./network-delay.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, { id: 'partition-example', children: 'Partition example' }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, s.jsx)(n.code, { children: 'network-partition.yaml' }),
                        ' file, as shown below:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: partition\nspec:\n  action: partition\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  direction: to\n  target:\n    mode: all\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'app2'\n",
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'This configuration blocks the connection created from ',
                        (0, s.jsx)(n.code, { children: 'app1' }),
                        ' to ',
                        (0, s.jsx)(n.code, { children: 'app2' }),
                        '. The value for the ',
                        (0, s.jsx)(n.code, { children: 'direction' }),
                        ' field can be ',
                        (0, s.jsx)(n.code, { children: 'to' }),
                        ', ',
                        (0, s.jsx)(n.code, { children: 'from' }),
                        ' or ',
                        (0, s.jsx)(n.code, { children: 'both' }),
                        '. For details, refer to ',
                        (0, s.jsx)(n.a, { href: '#field-description', children: 'Field description' }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, s.jsx)(n.code, { children: 'kubectl' }),
                        ' to create the experiment:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./network-partition.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, { id: 'bandwidth-example', children: 'Bandwidth example' }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, s.jsx)(n.code, { children: 'network-bandwidth.yaml' }),
                        ' file, as shown below:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: bandwidth\nspec:\n  action: bandwidth\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  bandwidth:\n    rate: '1mbps'\n    limit: 20971520\n    buffer: 10000\n",
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'This configuration limits the bandwidth of ',
                        (0, s.jsx)(n.code, { children: 'app1' }),
                        ' to 1 mbps.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, s.jsx)(n.code, { children: 'kubectl' }),
                        ' to create the experiment:',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./network-bandwidth.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, { id: 'field-description', children: 'Field description' }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Description' }),
                      (0, s.jsx)(n.th, { children: 'Default value' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'action' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Indicates the specific fault type. Available types include: ',
                            (0, s.jsx)(n.code, { children: 'netem' }),
                            ', ',
                            (0, s.jsx)(n.code, { children: 'delay' }),
                            ' (network delay), ',
                            (0, s.jsx)(n.code, { children: 'loss' }),
                            ' (packet loss), ',
                            (0, s.jsx)(n.code, { children: 'duplicate' }),
                            ' (packet duplicating), ',
                            (0, s.jsx)(n.code, { children: 'corrupt' }),
                            ' (packet corrupt), ',
                            (0, s.jsx)(n.code, { children: 'partition' }),
                            ' (network partition), and ',
                            (0, s.jsx)(n.code, { children: 'bandwidth' }),
                            ' (network bandwidth limit).After you specify ',
                            (0, s.jsx)(n.code, { children: 'action' }),
                            ' field, refer to ',
                            (0, s.jsxs)(n.a, {
                              href: '#description-for-action-related-fields',
                              children: [
                                'Description for ',
                                (0, s.jsx)(n.code, { children: 'action' }),
                                '-related fields',
                              ],
                            }),
                            ' for other necessary field configuration.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, { children: 'Partition' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'target' }),
                        (0, s.jsx)(n.td, { children: 'Selector' }),
                        (0, s.jsx)(n.td, {
                          children: 'Used in combination with direction, making Chaos only effective for some packets.',
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, {}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'direction' }),
                        (0, s.jsx)(n.td, { children: 'enum' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Indicates the direction of ',
                            (0, s.jsx)(n.code, { children: 'target' }),
                            ' packets. Available vaules include ',
                            (0, s.jsx)(n.code, { children: 'from' }),
                            ' (the packets from ',
                            (0, s.jsx)(n.code, { children: 'target' }),
                            '), ',
                            (0, s.jsx)(n.code, { children: 'to' }),
                            ' (the packets to ',
                            (0, s.jsx)(n.code, { children: 'target' }),
                            '), and ',
                            (0, s.jsx)(n.code, { children: 'both' }),
                            ' ( the packets from or to ',
                            (0, s.jsx)(n.code, { children: 'target' }),
                            '). This parameter makes Chaos only take effect for a specific direction of packets.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'to' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: 'both' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'mode' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Specifies the mode of the experiment. The mode options include ',
                            (0, s.jsx)(n.code, { children: 'one' }),
                            ' (selecting a random Pod), ',
                            (0, s.jsx)(n.code, { children: 'all' }),
                            ' (selecting all eligible Pods), ',
                            (0, s.jsx)(n.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible Pods), ',
                            (0, s.jsx)(n.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of Pods from the eligible Pods), and ',
                            (0, s.jsx)(n.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of Pods from the eligible Pods).',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'value' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Provides a parameter for the ',
                            (0, s.jsx)(n.code, { children: 'mode' }),
                            ' configuration, depending on ',
                            (0, s.jsx)(n.code, { children: 'mode' }),
                            '. For example, when ',
                            (0, s.jsx)(n.code, { children: 'mode' }),
                            ' is set to ',
                            (0, s.jsx)(n.code, { children: 'fixed-percent' }),
                            ', ',
                            (0, s.jsx)(n.code, { children: 'value' }),
                            ' specifies the percentage of Pods.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'selector' }),
                        (0, s.jsx)(n.td, { children: 'struct' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Specifies the target Pod. For details, refer to ',
                            (0, s.jsx)(n.a, {
                              href: '/docs/next/define-chaos-experiment-scope',
                              children: 'Define the experiment scope',
                            }),
                            '.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, {}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'externalTargets' }),
                        (0, s.jsx)(n.td, { children: '[]string' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Indicates the network targets except for Kubernetes, which can be IPv4 addresses or domains. This parameter only works with ',
                            (0, s.jsx)(n.code, { children: 'direction: to' }),
                            '.',
                          ],
                        }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            '1.1.1.1, ',
                            (0, s.jsx)(n.a, { href: 'http://www.google.com', children: 'www.google.com' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'device' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, { children: 'Specifies the affected network interface' }),
                        (0, s.jsx)(n.td, { children: 'None' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '"eth0"' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(n.h3, {
              id: 'description-for-action-related-fields',
              children: ['Description for ', (0, s.jsx)(n.code, { children: 'action' }), '-related fields'],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For the Net Emulation and Bandwidth fault types, you can further configure the ',
                (0, s.jsx)(n.code, { children: 'action' }),
                ' related parameters according to the following description.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Net Emulation type: ',
                    (0, s.jsx)(n.code, { children: 'delay' }),
                    ', ',
                    (0, s.jsx)(n.code, { children: 'loss' }),
                    ', ',
                    (0, s.jsx)(n.code, { children: 'duplicated' }),
                    ', ',
                    (0, s.jsx)(n.code, { children: 'corrupt' }),
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, { children: ['Bandwidth type: ', (0, s.jsx)(n.code, { children: 'bandwidth' })] }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, { id: 'delay', children: 'delay' }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Setting ',
                (0, s.jsx)(n.code, { children: 'action' }),
                ' to ',
                (0, s.jsx)(n.code, { children: 'delay' }),
                ' means simulating network delay fault. You can also configure the following parameters.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Description' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'latency' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, { children: 'Indicates the network latency' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '2ms' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'correlation' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children:
                            'Indicates the correlation between the current latency and the previous one. Range of value: [0, 100]',
                        }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'jitter' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, { children: 'Indicates the range of the network latency' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '1ms' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'reorder' }),
                        (0, s.jsx)(n.td, { children: 'Reorder(#Reorder)' }),
                        (0, s.jsx)(n.td, { children: 'Indicates the status of network packet reordering' }),
                        (0, s.jsx)(n.td, {}),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'The computational model for ',
                (0, s.jsx)(n.code, { children: 'correlation' }),
                ' is as follows:',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: 'Generate a random number whose distribution is related to the previous value:',
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-c',
                        children: 'rnd = value * (1-corr) + last_rnd * corr\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        (0, s.jsx)(n.code, { children: 'rnd' }),
                        ' is the random number. ',
                        (0, s.jsx)(n.code, { children: 'corr' }),
                        ' is the ',
                        (0, s.jsx)(n.code, { children: 'correlation' }),
                        ' you fill out before.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: 'Use this random number to determine the delay of the current packet:',
                    }),
                    '\n',
                    (0, s.jsx)(n.pre, {
                      children: (0, s.jsx)(n.code, {
                        className: 'language-c',
                        children: '((rnd % (2 * sigma)) + mu) - sigma\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'In the above command, ',
                        (0, s.jsx)(n.code, { children: 'sigma' }),
                        ' is ',
                        (0, s.jsx)(n.code, { children: 'jitter' }),
                        ' and ',
                        (0, s.jsx)(n.code, { children: 'mu' }),
                        ' is ',
                        (0, s.jsx)(n.code, { children: 'latency' }),
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
            (0, s.jsx)(n.h4, { id: 'reorder', children: 'reorder' }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Setting ',
                (0, s.jsx)(n.code, { children: 'action' }),
                ' to ',
                (0, s.jsx)(n.code, { children: 'reorder' }),
                ' means simulating network packet reordering fault. You can also configure the following parameters.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Description' }),
                      (0, s.jsx)(n.th, { children: 'Default value' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'reorder' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, { children: 'Indicates the probability to reorder' }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '0.5' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'correlation' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children:
                            "Indicates the correlation between this time's length of delay time and the previous time's length of delay time. Range of value: [0, 100]",
                        }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'gap' }),
                        (0, s.jsx)(n.td, { children: 'int' }),
                        (0, s.jsx)(n.td, { children: 'Indicates the gap before and after packet reordering' }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '5' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, { id: 'loss', children: 'loss' }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Setting ',
                (0, s.jsx)(n.code, { children: 'action' }),
                ' to ',
                (0, s.jsx)(n.code, { children: 'loss' }),
                ' means simulating packet loss fault. You can also configure the following parameters.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Description' }),
                      (0, s.jsx)(n.th, { children: 'Default value' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'loss' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children: 'Indicates the probability of packet loss. Range of value: [0, 100]',
                        }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'correlation' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children:
                            "Indicates the correlation between the probability of current packet loss and the previous time's packet loss. Range of value: [0, 100]",
                        }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, { id: 'duplicate', children: 'duplicate' }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Set ',
                (0, s.jsx)(n.code, { children: 'action' }),
                ' to ',
                (0, s.jsx)(n.code, { children: 'duplicate' }),
                ', meaning simulating package duplication. At this point, you can also set the following parameters.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Description' }),
                      (0, s.jsx)(n.th, { children: 'Default value' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'duplicate' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children: 'Indicates the probability of packet duplicating. Range of value: [0, 100]',
                        }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'correlation' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children:
                            "Indicates the correlation between the probability of current packet duplicating and the previous time's packet duplicating. Range of value: [0, 100]",
                        }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, { id: 'corrupt', children: 'corrupt' }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Setting ',
                (0, s.jsx)(n.code, { children: 'action' }),
                ' to ',
                (0, s.jsx)(n.code, { children: 'corrupt' }),
                ' means simulating package corruption fault. You can also configure the following parameters.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Description' }),
                      (0, s.jsx)(n.th, { children: 'Default value' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'corrupt' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children: 'Indicates the probability of packet corruption. Range of value: [0, 100]',
                        }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'correlation' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children:
                            "Indicates the correlation between the probability of current packet corruption and the previous time's packet corruption. Range of value: [0, 100]",
                        }),
                        (0, s.jsx)(n.td, { children: '0' }),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '50' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For occasional events such as ',
                (0, s.jsx)(n.code, { children: 'reorder' }),
                ', ',
                (0, s.jsx)(n.code, { children: 'loss' }),
                ', ',
                (0, s.jsx)(n.code, { children: 'duplicate' }),
                ', and ',
                (0, s.jsx)(n.code, { children: 'corrupt' }),
                ', the ',
                (0, s.jsx)(n.code, { children: 'correlation' }),
                ' is more complicated. For specific model description, refer to ',
                (0, s.jsx)(n.a, {
                  href: 'http://web.archive.org/web/20200120162102/http://netgroup.uniroma2.it/twiki/bin/view.cgi/Main/NetemCLG',
                  children: 'NetemCLG',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, { id: 'bandwidth', children: 'bandwidth' }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Setting ',
                (0, s.jsx)(n.code, { children: 'action' }),
                ' to ',
                (0, s.jsx)(n.code, { children: 'bandwidth' }),
                ' means simulating bandwidth limit fault. You also need to configure the following parameters.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: 'Parameter' }),
                      (0, s.jsx)(n.th, { children: 'Type' }),
                      (0, s.jsx)(n.th, { children: 'Description' }),
                      (0, s.jsx)(n.th, { children: 'Default value' }),
                      (0, s.jsx)(n.th, { children: 'Required' }),
                      (0, s.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'rate' }),
                        (0, s.jsx)(n.td, { children: 'string' }),
                        (0, s.jsx)(n.td, {
                          children:
                            'Indicates the rate of bandwidth limit. Allows bit, kbit, mbit, gbit, tbit, bps, kbps, mbps, gbps, tbps unit. bps means bytes per second',
                        }),
                        (0, s.jsx)(n.td, {}),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, { children: '1mbps' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'limit' }),
                        (0, s.jsx)(n.td, { children: 'uint32' }),
                        (0, s.jsx)(n.td, { children: 'Indicates the number of bytes waiting in queue' }),
                        (0, s.jsx)(n.td, {}),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'buffer' }),
                        (0, s.jsx)(n.td, { children: 'uint32' }),
                        (0, s.jsx)(n.td, {
                          children: 'Indicates the maximum number of bytes that can be sent instantaneously',
                        }),
                        (0, s.jsx)(n.td, {}),
                        (0, s.jsx)(n.td, { children: 'Yes' }),
                        (0, s.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'peakrate' }),
                        (0, s.jsx)(n.td, { children: 'uint64' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Indicates the maximum consumption of ',
                            (0, s.jsx)(n.code, { children: 'bucket' }),
                            ' (usually not set)',
                          ],
                        }),
                        (0, s.jsx)(n.td, {}),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: 'minburst' }),
                        (0, s.jsx)(n.td, { children: 'uint32' }),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'Indicates the size of ',
                            (0, s.jsx)(n.code, { children: 'peakrate bucket' }),
                            ' (usually not set)',
                          ],
                        }),
                        (0, s.jsx)(n.td, {}),
                        (0, s.jsx)(n.td, { children: 'No' }),
                        (0, s.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For more details of these fields, you can refer to ',
                (0, s.jsx)(n.a, {
                  href: 'https://man7.org/linux/man-pages/man8/tc-tbf.8.html',
                  children: 'tc-tbf document',
                }),
                '. The limit is suggested to set to at least ',
                (0, s.jsx)(n.code, { children: '2 * rate * latency' }),
                ', where the ',
                (0, s.jsx)(n.code, { children: 'latency' }),
                ' is the estimated latency between source and target, and it can be estimated through ',
                (0, s.jsx)(n.code, { children: 'ping' }),
                ' command. Too small ',
                (0, s.jsx)(n.code, { children: 'limit' }),
                ' can cause high loss rate and impact the throughput of the tcp connection.',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e)
      }
    },
    7278: (e, n, t) => {
      t.d(n, { A: () => i })
      const i = t.p + 'assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png'
    },
    19263: (e, n, t) => {
      t.d(n, { A: () => i })
      const i = t.p + 'assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png'
    },
    24161: (e, n, t) => {
      t.d(n, { A: () => i })
      const i = t.p + 'assets/images/networkchaos-exp-bdb9cf9dc1cb7bf48717ed428ed8d8a5.png'
    },
    28453: (e, n, t) => {
      t.d(n, { R: () => d, x: () => l })
      var i = t(96540)
      const s = {},
        r = i.createContext(s)
      function d(e) {
        const n = i.useContext(r)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function l(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : d(e.components)),
          i.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
