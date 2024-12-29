'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5828],
  {
    50903: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => d,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => a,
        })
      const i = JSON.parse(
        '{"id":"simulate-gcp-chaos","title":"Simulate GCP Faults","description":"This document describes how to use Chaos Mesh to inject faults into GCP Pod. Chaos Dashboard and YAML files are provided to create GCPChaos experiments.","source":"@site/versioned_docs/version-2.6.2/simulate-gcp-chaos.md","sourceDirName":".","slug":"/simulate-gcp-chaos","permalink":"/docs/simulate-gcp-chaos","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/simulate-gcp-chaos.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Simulate GCP Faults"},"sidebar":"docs","previous":{"title":"Simulate Azure Faults","permalink":"/docs/simulate-azure-chaos"},"next":{"title":"Simulate HTTP Faults","permalink":"/docs/simulate-http-chaos-on-kubernetes"}}'
      )
      var t = s(74848),
        c = s(28453)
      const o = { title: 'Simulate GCP Faults' },
        r = void 0,
        d = {},
        a = [
          { value: 'GCPChaos introduction', id: 'gcpchaos-introduction', level: 2 },
          { value: '<code>Secret</code> file', id: 'secret-file', level: 2 },
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using YAML file', id: 'create-experiments-using-yaml-file', level: 2 },
          {
            value: 'A <code>node-stop</code> configuration example',
            id: 'a-node-stop-configuration-example',
            level: 3,
          },
          {
            value: 'A <code>node-reset</code> configuration example',
            id: 'a-node-reset-configuration-example',
            level: 3,
          },
          {
            value: 'A <code>disk-loss</code> configuration example',
            id: 'a-disk-loss-configuration-example',
            level: 3,
          },
          { value: 'Field description', id: 'field-description', level: 3 },
        ]
      function l(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
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
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.p, {
              children:
                'This document describes how to use Chaos Mesh to inject faults into GCP Pod. Chaos Dashboard and YAML files are provided to create GCPChaos experiments.',
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: 'gcpchaos-introduction', children: 'GCPChaos introduction' }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'GCPChaos is a fault type in Chaos Mesh. By creating a GCPChaos experiment, you can simulate fault scenarios of the specified GCP instance. Currently, GCPChaos supports the following fault types:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [(0, t.jsx)(n.strong, { children: 'Node Stop' }), ': stops the specified GCP instance.'],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [(0, t.jsx)(n.strong, { children: 'Node Reset' }), ': reboots the specified GCP instance.'],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'Disk Loss' }),
                    ': uninstalls the storage volume from the specified GCP instance.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.h2, { id: 'secret-file', children: [(0, t.jsx)(n.code, { children: 'Secret' }), ' file'] }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'To easily connect to the GCP cluster, you can create a Kubernetes ',
                (0, t.jsx)(n.code, { children: 'Secret' }),
                ' file to store the authentication information in advance.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: ['Below is a sample ', (0, t.jsx)(n.code, { children: 'secret' }), ' file:'],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  'apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-mesh\ntype: Opaque\nstringData:\n  service_account: your-gcp-service-account-base64-encode\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [(0, t.jsx)(n.strong, { children: 'name' }), ' defines the name of kubernetes secret.'],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'namespace' }),
                    ' defines the namespace of kubernetes secret.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, { children: 'service_account' }),
                    ' stores the service account key of your GCP cluster. Remember to complete ',
                    (0, t.jsx)(n.a, { href: 'https://zh.wikipedia.org/wiki/Base64', children: 'Base64' }),
                    ' encoding for your GCP service account key. To learn more about service account key, see ',
                    (0, t.jsx)(n.a, {
                      href: 'https://cloud.google.com/iam/docs/creating-managing-service-account-keys',
                      children: 'Creating and managing service account keys',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'create-experiments-using-chaos-dashboard',
              children: 'Create experiments using Chaos Dashboard',
            }),
            '\n',
            (0, t.jsxs)(n.admonition, {
              type: 'note',
              children: [
                (0, t.jsx)(n.p, {
                  children:
                    'Before you create an experiment using Chaos Dashboard, make sure the following requirements are met:',
                }),
                (0, t.jsxs)(n.ol, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.li, {
                      children: ['\n', (0, t.jsx)(n.p, { children: 'Chaos Dashboard is installed.' }), '\n'],
                    }),
                    '\n',
                    (0, t.jsxs)(n.li, {
                      children: [
                        '\n',
                        (0, t.jsxs)(n.p, {
                          children: [
                            'Chaos Dashboard can be accessed using ',
                            (0, t.jsx)(n.code, { children: 'kubectl port-forward' }),
                            ' command:',
                          ],
                        }),
                        '\n',
                        (0, t.jsx)(n.pre, {
                          children: (0, t.jsx)(n.code, {
                            className: 'language-bash',
                            children: 'kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n',
                          }),
                        }),
                        '\n',
                        (0, t.jsxs)(n.p, {
                          children: [
                            'Then you can access the dashboard via ',
                            (0, t.jsx)(n.a, {
                              href: 'http://localhost:2333',
                              children: (0, t.jsx)(n.code, { children: 'http://localhost:2333' }),
                            }),
                            ' in your browser.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, t.jsx)(n.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.img, { alt: 'img', src: s(17135).A + '', width: '2486', height: '1376' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'In the ',
                        (0, t.jsx)(n.strong, { children: 'Choose a Target' }),
                        ' area, choose ',
                        (0, t.jsx)(n.strong, { children: 'GCP fault' }),
                        ' and select a specific behavior, such as ',
                        (0, t.jsx)(n.strong, { children: 'STOP NODE' }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.img, { alt: 'img', src: s(61957).A + '', width: '1550', height: '1126' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children:
                        'Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration:',
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.img, { alt: 'img', src: s(44444).A + '', width: '2000', height: '964' }),
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.img, { alt: 'img', src: s(28051).A + '', width: '774', height: '380' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: ['\n', (0, t.jsx)(n.p, { children: 'Submit the experiment information.' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'create-experiments-using-yaml-file',
              children: 'Create experiments using YAML file',
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'a-node-stop-configuration-example',
              children: ['A ', (0, t.jsx)(n.code, { children: 'node-stop' }), ' configuration example'],
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, t.jsx)(n.code, { children: 'gcpchaos-node-stop.yaml' }),
                        '\uff0c as shown below:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: node-stop-example\n  namespace: chaos-mesh\nspec:\n  action: node-stop\n  secretName: 'cloud-key-secret'\n  project: 'your-project-id'\n  zone: 'your-zone'\n  instance: 'your-instance-name'\n  duration: '5m'\n",
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject the ',
                        (0, t.jsx)(n.code, { children: 'node-stop' }),
                        ' fault into the specified GCP instance so that the GCP instance will be unavailable in 5 minutes.',
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'For more information about stopping GCP instances, refer to ',
                        (0, t.jsx)(n.a, {
                          href: 'https://cloud.google.com/compute/docs/instances/stop-start-instance',
                          children: 'Stop GCP instance',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, t.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f gcpchaos-node-stop.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'a-node-reset-configuration-example',
              children: ['A ', (0, t.jsx)(n.code, { children: 'node-reset' }), ' configuration example'],
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, t.jsx)(n.code, { children: 'gcpchaos-node-reset.yaml' }),
                        ', as shown below:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: node-reset-example\n  namespace: chaos-mesh\nspec:\n  action: node-reset\n  secretName: 'cloud-key-secret'\n  project: 'your-project-id'\n  zone: 'your-zone'\n  instance: 'your-instance-name'\n  duration: '5m'\n",
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject ',
                        (0, t.jsx)(n.code, { children: 'node-reset' }),
                        ' fault into the specified GCP instance so that the GCP instance will be reset.',
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'For more information about resetting GCP instances, refer to ',
                        (0, t.jsx)(n.a, {
                          href: 'https://cloud.google.com/compute/docs/instances/stop-start-instance#resetting_an_instance',
                          children: 'Resetting a GCP instance',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, t.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f gcpchaos-node-reset.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'a-disk-loss-configuration-example',
              children: ['A ', (0, t.jsx)(n.code, { children: 'disk-loss' }), ' configuration example'],
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, t.jsx)(n.code, { children: 'gcpchaos-disk-loss.yaml' }),
                        ', as shown below:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: GCPChaos\nmetadata:\n  name: disk-loss-example\n  namespace: chaos-mesh\nspec:\n  action: disk-loss\n  secretName: 'cloud-key-secret'\n  project: 'your-project-id'\n  zone: 'your-zone'\n  instance: 'your-instance-name'\n  deviceNames: ['disk-name']\n  duration: '5m'\n",
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject a ',
                        (0, t.jsx)(n.code, { children: 'disk-loss' }),
                        ' fault into the specified GCP instance so that the GCP instance is detached from the specified storage volume within 5 minutes.',
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'For more information about detaching GCP instances, refer to ',
                        (0, t.jsx)(n.a, {
                          href: 'https://cloud.google.com/compute/docs/reference/rest/v1/instances/detachDisk',
                          children: 'Detach GCP storage',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, t.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f gcpchaos-disk-loss.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'field-description', children: 'Field description' }),
            '\n',
            (0, t.jsx)(n.p, { children: 'The following table shows the fields in the YAML configuration file.' }),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, { children: 'Parameter' }),
                      (0, t.jsx)(n.th, { children: 'Type' }),
                      (0, t.jsx)(n.th, { children: 'Descpription' }),
                      (0, t.jsx)(n.th, { children: 'Default value' }),
                      (0, t.jsx)(n.th, { children: 'Required' }),
                      (0, t.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'action' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsx)(n.td, {
                          children:
                            'Indicates the specific type of faults. The available fault types include node-stop, node-reset, and disk-loss.',
                        }),
                        (0, t.jsx)(n.td, { children: 'node-stop' }),
                        (0, t.jsx)(n.td, { children: 'Yes' }),
                        (0, t.jsx)(n.td, { children: 'node-stop' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'mode' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsxs)(n.td, {
                          children: [
                            'Indicates the mode of the experiment. The mode options include ',
                            (0, t.jsx)(n.code, { children: 'one' }),
                            ' (selecting a Pod at random), ',
                            (0, t.jsx)(n.code, { children: 'all' }),
                            ' (selecting all eligible Pods), ',
                            (0, t.jsx)(n.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible Pods), ',
                            (0, t.jsx)(n.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of the eligible Pods), and ',
                            (0, t.jsx)(n.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of the eligible Pods).',
                          ],
                        }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'Yes' }),
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'value' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsxs)(n.td, {
                          children: [
                            'Provides parameters for the ',
                            (0, t.jsx)(n.code, { children: 'mode' }),
                            ' configuration, depending on ',
                            (0, t.jsx)(n.code, { children: 'mode' }),
                            '. For example, when ',
                            (0, t.jsx)(n.code, { children: 'mode' }),
                            ' is set to ',
                            (0, t.jsx)(n.code, { children: 'fixed-percent' }),
                            ', ',
                            (0, t.jsx)(n.code, { children: 'value' }),
                            ' specifies the percentage of pods.',
                          ],
                        }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'No' }),
                        (0, t.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'secretName' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsx)(n.td, {
                          children:
                            'Indicates the name of the Kubernetes secret that stores the GCP authentication information.',
                        }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'No' }),
                        (0, t.jsx)(n.td, { children: 'cloud-key-secret' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'project' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsx)(n.td, { children: 'Indicates the ID of GCP project.' }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'Yes' }),
                        (0, t.jsx)(n.td, { children: 'real-testing-project' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'zone' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsx)(n.td, { children: 'Indicates the region of GCP instance.' }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'Yes' }),
                        (0, t.jsx)(n.td, { children: 'us-central1-a' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'instance' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsx)(n.td, { children: 'Indicates the name of GCP instance.' }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'Yes' }),
                        (0, t.jsx)(n.td, { children: 'gke-xxx-cluster--default-pool-xxx-yyy' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'deviceNames' }),
                        (0, t.jsx)(n.td, { children: '[]string' }),
                        (0, t.jsxs)(n.td, {
                          children: [
                            'This is a required field when the ',
                            (0, t.jsx)(n.code, { children: 'action' }),
                            ' is ',
                            (0, t.jsx)(n.code, { children: 'disk-loss' }),
                            '. This field specifies the machine disk ID.',
                          ],
                        }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'no' }),
                        (0, t.jsx)(n.td, { children: '["your-disk-id"]' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: 'duration' }),
                        (0, t.jsx)(n.td, { children: 'string' }),
                        (0, t.jsx)(n.td, { children: 'Indicates the duration of the experiment.' }),
                        (0, t.jsx)(n.td, { children: 'None' }),
                        (0, t.jsx)(n.td, { children: 'Yes' }),
                        (0, t.jsx)(n.td, { children: '30s' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, c.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e)
      }
    },
    61957: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/create-gcp-chaos-on-dashboard-2-b005001db6b98e4b2f00394777a5bb25.png'
    },
    44444: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/create-gcp-chaos-on-dashboard-3-ae3fca17bc020295b609d1ed5c611d0e.png'
    },
    28051: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/create-gcp-chaos-on-dashboard-4-e08e6f26e6db3e497cb7359ac3ed45fb.png'
    },
    17135: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/create-pod-chaos-on-dashboard-1-c839bc424bbbdabd55a89ef7fa24710b.png'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => o, x: () => r })
      var i = s(96540)
      const t = {},
        c = i.createContext(t)
      function o(e) {
        const n = i.useContext(c)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function r(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          i.createElement(c.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
