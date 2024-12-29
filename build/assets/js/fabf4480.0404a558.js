'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6408],
  {
    28350: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => c,
        })
      const s = JSON.parse(
        '{"id":"simulate-physical-machine-chaos","title":"Simulate Faults on Physical Machines","description":"This document describes how to create PhysicalMachineChaos (physical machine chaos) experiments in Chaos Mesh to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines.","source":"@site/versioned_docs/version-2.6.2/simulate-physical-machine-chaos.md","sourceDirName":".","slug":"/simulate-physical-machine-chaos","permalink":"/docs/simulate-physical-machine-chaos","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/simulate-physical-machine-chaos.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Simulate Faults on Physical Machines"},"sidebar":"docs","previous":{"title":"Chaosd Introduction","permalink":"/docs/chaosd-overview"},"next":{"title":"Simulate Process Faults","permalink":"/docs/simulate-process-chaos-in-physical-nodes"}}'
      )
      var n = i(74848),
        o = i(28453)
      const r = { title: 'Simulate Faults on Physical Machines' },
        l = void 0,
        a = {},
        c = [
          { value: 'Introduction to PhysicalMachineChaos', id: 'introduction-to-physicalmachinechaos', level: 2 },
          { value: 'Deploy Chaosd server', id: 'deploy-chaosd-server', level: 2 },
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using an YAML file', id: 'create-experiments-using-an-yaml-file', level: 2 },
          { value: 'Configuration description', id: 'configuration-description', level: 3 },
          { value: 'CPU stress', id: 'cpu-stress', level: 4 },
          { value: 'Memory stress', id: 'memory-stress', level: 4 },
          { value: 'Disk read load', id: 'disk-read-load', level: 4 },
          { value: 'Disk write load', id: 'disk-write-load', level: 4 },
          { value: 'Disk fill', id: 'disk-fill', level: 4 },
          { value: 'Network corruption', id: 'network-corruption', level: 4 },
          { value: 'Network latency', id: 'network-latency', level: 4 },
          { value: 'Network duplication', id: 'network-duplication', level: 4 },
          { value: 'Network loss', id: 'network-loss', level: 4 },
          { value: 'Network partition', id: 'network-partition', level: 4 },
          { value: 'DNS fault', id: 'dns-fault', level: 4 },
          { value: 'Process fault', id: 'process-fault', level: 4 },
          {
            value: 'Throw custom exceptions for JVM applications',
            id: 'throw-custom-exceptions-for-jvm-applications',
            level: 4,
          },
          {
            value: 'Increase method latency for JVM applications',
            id: 'increase-method-latency-for-jvm-applications',
            level: 4,
          },
          {
            value: 'Modify return values of methods for JVM applications',
            id: 'modify-return-values-of-methods-for-jvm-applications',
            level: 4,
          },
          {
            value: 'Trigger garbage collection for JVM applications',
            id: 'trigger-garbage-collection-for-jvm-applications',
            level: 4,
          },
          {
            value: 'Trigger faults using Byteman configuration files for JVM applications',
            id: 'trigger-faults-using-byteman-configuration-files-for-jvm-applications',
            level: 4,
          },
          { value: 'Time offset', id: 'time-offset', level: 4 },
        ]
      function d(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
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
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.p, {
              children:
                'This document describes how to create PhysicalMachineChaos (physical machine chaos) experiments in Chaos Mesh to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'introduction-to-physicalmachinechaos',
              children: 'Introduction to PhysicalMachineChaos',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'You can use PhysicalMachineChaos to simulate the faults of network, disk, pressure, JVM, time, and others in physical or virtual machines. Before using PhysicalMachineChaos provided by Chaos Mesh, you need to deploy Chaosd in your physical or virtual machines. The version mapping between Chaos Mesh and Chaosd is as follows:',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Chaos Mesh version' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Chaosd version' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'v2.1.x' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'v1.1.x' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'v2.2.x' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'v1.2.x' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: 'deploy-chaosd-server', children: 'Deploy Chaosd server' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Before creating PhysicalMachineChaos experiments using Chaos Mesh, you need to deploy Chaosd in service mode to all physical or virtual machines that are going to be injected with faults. After deploying Chaosd, run Chaosd server as follows:',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Deploy Chaosd, generate a TLS certificate, and create ',
                        (0, n.jsx)(t.code, { children: 'PhysicalMachine' }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            'For the deployment method of Chaosd, refer to ',
                            (0, n.jsx)(t.a, {
                              href: '/docs/chaosd-overview#download-and-deploy',
                              children: 'Download and deploy Chaosd',
                            }),
                            '.',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            'After deploying Chaosd, ',
                            (0, n.jsx)(t.strong, { children: 'before' }),
                            ' starting Chaosd server, you need to generate a TLS certificate and create a ',
                            (0, n.jsx)(t.code, { children: 'PhysicalMachine' }),
                            ' in Kubernetes clusters. For more information on how to generate TLS certificates, refer to ',
                            (0, n.jsx)(t.a, {
                              href: '/docs/chaosctl-tool#generate-tls-certificates-for-chaosd',
                              children: 'Generate TLS certificates for Chaosd',
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
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, { children: 'Start Chaosd server:' }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            '\n',
                            (0, n.jsx)(t.p, {
                              children:
                                'After generating the TLS certificate through Chaosctl, run the following command to start Chaosd in service mode:',
                            }),
                            '\n',
                            (0, n.jsx)(t.pre, {
                              children: (0, n.jsx)(t.code, {
                                className: 'language-bash',
                                children:
                                  'chaosd server --https-port 31768 --CA=/etc/chaosd/pki/ca.crt --cert=/etc/chaosd/pki/chaosd.crt --key=/etc/chaosd/pki/chaosd.key\n',
                              }),
                            }),
                            '\n',
                            (0, n.jsx)(t.admonition, {
                              type: 'note',
                              children: (0, n.jsx)(t.p, {
                                children:
                                  'The TLS certificates are saved to the default output directory of Chaosctl. If you manually specified another directory when generating certificates, replace the directory in the command line with the corresponding one.',
                              }),
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
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'If the TLS certificate is not generated through Chaosctl, you can run the following command to start Chaosd in service mode. However, for the security of your clusters, this is ',
                        (0, n.jsx)(t.strong, { children: 'not' }),
                        ' recommended.',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(t.pre, {
                      children: (0, n.jsx)(t.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'create-experiments-using-chaos-dashboard',
              children: 'Create experiments using Chaos Dashboard',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, n.jsx)(t.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment:',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        alt: 'create a new experiment',
                        src: i(23728).A + '',
                        width: '959',
                        height: '519',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Click ',
                        (0, n.jsx)(t.strong, { children: 'PHYSIC' }),
                        ' in ',
                        (0, n.jsx)(t.strong, { children: 'Experiment Type' }),
                        ' and choose a specific type of the experiment, such as ',
                        (0, n.jsx)(t.strong, { children: 'NETWORK ATTACK' }),
                        '. Then, choose a specific behavior and fill out the corresponding configurations:',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        alt: 'PhysicalMachineChaos experiment',
                        src: i(12691).A + '',
                        width: '1730',
                        height: '1264',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Fill out the experiment information to specify the range and the planned duration of the experiment:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        alt: 'PhysicalMachineChaos experiment information',
                        src: i(86322).A + '',
                        width: '1858',
                        height: '1362',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, { children: ['\n', (0, n.jsx)(t.p, { children: 'Submit the experiment.' }), '\n'] }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'create-experiments-using-an-yaml-file',
              children: 'Create experiments using an YAML file',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Write the experimental configurations to the "physicalmachine.yaml" file. For example:',
                    }),
                    '\n',
                    (0, n.jsx)(t.pre, {
                      children: (0, n.jsx)(t.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: PhysicalMachineChaos\nmetadata:\n  name: physical-network-delay\n  namespace: chaos-mesh\nspec:\n  action: network-delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'arch': 'amd64'\n  network-delay:\n    device: ens33\n    ip-address: 140.82.112.3\n    latency: 1000ms\n  duration: '10m'\n",
                      }),
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'The experimental configurations above send HTTP requests to Chaosd service in the specified physical machines or virtual machines to trigger network latency experiments.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Create the experiment using ',
                        (0, n.jsx)(t.code, { children: 'kubectl' }),
                        '. The command is as follows:',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(t.pre, {
                      children: (0, n.jsx)(t.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f physicalmachine.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, { id: 'configuration-description', children: 'Configuration description' }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Default value' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Required' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Example' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Defines the actions of physical machines faults, optional values are as follows: ',
                            (0, n.jsx)(t.code, { children: 'stress-cpu' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'stress-mem' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'disk-read-payload' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'disk-write-payload' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'disk-fill' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'network-corrupt' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'network-duplicate' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'network-loss' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'network-delay' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'network-partition' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'network-dns' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'process' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'jvm-exception' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'jvm-gc' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'jvm-latency' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'jvm-return' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'jvm-stress' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'jvm-rule-data' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'clock' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'stress-cpu' }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'address' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string array' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Selects the ',
                            (0, n.jsx)(t.code, { children: 'address' }),
                            ' of Chaosd service to inject faults, only one of ',
                            (0, n.jsx)(t.code, { children: 'address' }),
                            ' or ',
                            (0, n.jsx)(t.code, { children: 'selector' }),
                            ' could be specified',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '[]' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '["192.168.0.10:31767"]' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'selector' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'struct' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the target PhysicalMachine. For details, refer to ',
                            (0, n.jsx)(t.a, {
                              href: '/docs/define-chaos-experiment-scope',
                              children: 'Define the experiment scope',
                            }),
                            ', only one of ',
                            (0, n.jsx)(t.code, { children: 'address' }),
                            ' or ',
                            (0, n.jsx)(t.code, { children: 'selector' }),
                            ' could be specified',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' } }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'mode' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the mode of the experiment. The mode options include ',
                            (0, n.jsx)(t.code, { children: 'one' }),
                            ' (selecting a random PhysicalMachine), ',
                            (0, n.jsx)(t.code, { children: 'all' }),
                            ' (selecting all eligible PhysicalMachines), ',
                            (0, n.jsx)(t.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible PhysicalMachines), ',
                            (0, n.jsx)(t.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of PhysicalMachines from the eligible PhysicalMachines), and ',
                            (0, n.jsx)(t.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of PhysicalMachines from the eligible PhysicalMachines).',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'one' }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'value' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Provides a parameter for the ',
                            (0, n.jsx)(t.code, { children: 'mode' }),
                            ' configuration, depending on ',
                            (0, n.jsx)(t.code, { children: 'mode' }),
                            '. For example, when ',
                            (0, n.jsx)(t.code, { children: 'mode' }),
                            ' is set to ',
                            (0, n.jsx)(t.code, { children: 'fixed-percent' }),
                            ', ',
                            (0, n.jsx)(t.code, { children: 'value' }),
                            ' specifies the percentage of PhysicalMachines.',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: '1' }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'duration' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the duration of experiments',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: '30s' }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Each fault action has its own specific configurations. The following section introduces various fault types and their corresponding configuration methods.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'cpu-stress', children: 'CPU stress' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a CPU stress scenario, you need to set the action to "stress-cpu". For the corresponding configurations, refer to Parameters of simulating CPU stress.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'memory-stress', children: 'Memory stress' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a memory stress scenario, you need to set the action to "stress-mem". For the corresponding configurations, refer to Parameters of simulating memory stress.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'disk-read-load', children: 'Disk read load' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a disk read load scenario, you need to set the action to "disk-read-payload". For the corresponding configurations, refer to Parameters of simulating disk read load.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'disk-write-load', children: 'Disk write load' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a disk write load scenario, you need to set the action to "disk-write-payload". For the corresponding configurations, refer to Parameters of simulating disk write load.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'disk-fill', children: 'Disk fill' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a disk fill scenario, you need to set the action to "disk-fill". For the corresponding configurations, refer to Parameters of simulating disk fill.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'network-corruption', children: 'Network corruption' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a network corruption scenario, you need to set the action to "network-corrupt". For the corresponding configurations, refer to Parameters of simulating network corruption.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'network-latency', children: 'Network latency' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a network latency scenario, you need to set the action to "network-delay". For the corresponding configurations, refer to Parameters of simulating network latency.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'network-duplication', children: 'Network duplication' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a network duplication scenario, you need to set the action to "network-duplicate". For the corresponding configurations, refer to Parameters of simulating network duplication.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'network-loss', children: 'Network loss' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a network loss scenario, you need to set the action to "network-loss". For the corresponding configurations, refer to Parameters of simulating network loss.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'network-partition', children: 'Network partition' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a network partition scenario, you need to set the action to "network-partition". For the corresponding configurations, refer to Parameters of simulating network partition.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'dns-fault', children: 'DNS fault' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a DNS fault scenario, you need to set the action to "network-dns". For the corresponding configurations, refer to Parameters of simulating DNS fault.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'process-fault', children: 'Process fault' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a process fault scenario, you need to set the action to "process". For the corresponding configurations, refer to Parameters of simulating process fault.',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'throw-custom-exceptions-for-jvm-applications',
              children: 'Throw custom exceptions for JVM applications',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a scenario that JVM applications throw custom exceptions, you need to set the action to "jvm-exception". For the corresponding configurations, refer to Parameters for throwing custom exceptions.',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'increase-method-latency-for-jvm-applications',
              children: 'Increase method latency for JVM applications',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a scenario that JVM applications increase method latency, you need to set the action to "jvm-latency". For the corresponding configurations, refer to Parameters for increasing method latency.',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'modify-return-values-of-methods-for-jvm-applications',
              children: 'Modify return values of methods for JVM applications',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a scenario that JVM applications modify return values of methods, you need to set the action to "jvm-return". For the corresponding configurations, refer to Parameters for modifying return values of a method.',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'trigger-garbage-collection-for-jvm-applications',
              children: 'Trigger garbage collection for JVM applications',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a scenario that JVM applications trigger garbage collection, you need to set the action to "jvm-gc". For the corresponding configurations, refer to Parameters for triggering garbage collection.',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'trigger-faults-using-byteman-configuration-files-for-jvm-applications',
              children: 'Trigger faults using Byteman configuration files for JVM applications',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a scenario that JVM applications trigger faults using Byteman configuration files, you need to set the action to "jvm-rule-data". For the corresponding configurations, refer to Parameters for triggering faults by setting Byteman configuration files.',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'time-offset', children: 'Time offset' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'To simulate a time offset scenario, you need to set the action to "clock". For the corresponding configurations, refer to Parameters of simulating time offset.',
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, o.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(d, { ...e }) }) : d(e)
      }
    },
    23728: (e, t, i) => {
      i.d(t, { A: () => s })
      const s = i.p + 'assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png'
    },
    86322: (e, t, i) => {
      i.d(t, { A: () => s })
      const s = i.p + 'assets/images/physicalmachinechaos-exp-info-6bf01b809471eb5c369b149ca8bab573.png'
    },
    12691: (e, t, i) => {
      i.d(t, { A: () => s })
      const s = i.p + 'assets/images/physicalmachinechaos-exp-c601153f614a0dcd77569bf32905f6f7.png'
    },
    28453: (e, t, i) => {
      i.d(t, { R: () => r, x: () => l })
      var s = i(96540)
      const n = {},
        o = s.createContext(n)
      function r(e) {
        const t = s.useContext(o)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function l(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : r(e.components)),
          s.createElement(o.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
