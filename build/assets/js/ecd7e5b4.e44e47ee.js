'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1824],
  {
    33215: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => a,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => c,
          metadata: () => i,
          toc: () => o,
        })
      const i = JSON.parse(
        '{"id":"simulate-azure-chaos","title":"Simulate Azure Faults","description":"This document describes how to use Chaos Mesh to simulate Azure faults.","source":"@site/versioned_docs/version-2.5.2/simulate-azure-chaos.md","sourceDirName":".","slug":"/simulate-azure-chaos","permalink":"/docs/2.5.2/simulate-azure-chaos","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/simulate-azure-chaos.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate Azure Faults"},"sidebar":"docs","previous":{"title":"Simulate AWS Faults","permalink":"/docs/2.5.2/simulate-aws-chaos"},"next":{"title":"Simulate GCP Faults","permalink":"/docs/2.5.2/simulate-gcp-chaos"}}'
      )
      var t = n(74848),
        r = n(28453)
      const c = { title: 'Simulate Azure Faults' },
        d = void 0,
        a = {},
        o = [
          { value: 'AzureChaos introduction', id: 'azurechaos-introduction', level: 2 },
          { value: '<code>Secret</code> file', id: 'secret-file', level: 2 },
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using the YAML file', id: 'create-experiments-using-the-yaml-file', level: 2 },
          { value: 'A <code>vm-stop</code> configuration example', id: 'a-vm-stop-configuration-example', level: 3 },
          {
            value: 'A <code>vm-restart</code> configuration example',
            id: 'a-vm-restart-configuration-example',
            level: 3,
          },
          {
            value: 'A <code>detach-volume</code> configuration example',
            id: 'a-detach-volume-configuration-example',
            level: 3,
          },
          { value: 'Field description', id: 'field-description', level: 3 },
        ]
      function l(e) {
        const s = {
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
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.p, { children: 'This document describes how to use Chaos Mesh to simulate Azure faults.' }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'azurechaos-introduction', children: 'AzureChaos introduction' }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'AzureChaos can help you simulate fault scenarios on the specified Azure instance. Currently, AzureChaos supports the following fault types:',
            }),
            '\n',
            (0, t.jsxs)(s.ul, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [(0, t.jsx)(s.strong, { children: 'VM Stop' }), ': stops the specified VM instance.'],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [(0, t.jsx)(s.strong, { children: 'VM Restart' }), ': restarts the specified VM instance.'],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    (0, t.jsx)(s.strong, { children: 'Disk Detach' }),
                    ': uninstalls the data disk from the specified VM instance.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.h2, { id: 'secret-file', children: [(0, t.jsx)(s.code, { children: 'Secret' }), ' file'] }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'To easily connect to the Azure cluster, you can create a Kubernetes ',
                (0, t.jsx)(s.code, { children: 'Secret' }),
                ' file to store the authentication information in advance.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: ['A ', (0, t.jsx)(s.code, { children: 'Secret' }), ' file sample is as follows:'],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  'apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloud-key-secret\n  namespace: chaos-mesh\ntype: Opaque\nstringData:\n  client_id: your-client-id\n  client_secret: your-client-secret\n  tenant_id: your-tenant-id\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(s.ul, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [(0, t.jsx)(s.strong, { children: 'name' }), ' means the Kubernetes Secret object.'],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    (0, t.jsx)(s.strong, { children: 'namespace' }),
                    ' means the namespace of the Kubernetes Secret object.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    (0, t.jsx)(s.strong, { children: 'client_id' }),
                    ' stores Application (client) ID of Azure App registrations.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    (0, t.jsx)(s.strong, { children: 'client_secret' }),
                    ' stores Application (client) secret value of Azure App registrations.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    (0, t.jsx)(s.strong, { children: 'tenant_id' }),
                    ' stores Directory (tenant) ID of Azure App registrations. For ',
                    (0, t.jsx)(s.code, { children: 'client_id' }),
                    ' and ',
                    (0, t.jsx)(s.code, { children: 'client_secret' }),
                    ', please refer to ',
                    (0, t.jsx)(s.a, {
                      href: 'https://docs.microsoft.com/en-us/azure/healthcare-apis/azure-api-for-fhir/register-confidential-azure-ad-client-app',
                      children: 'Confidential client application',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              type: 'note',
              children: (0, t.jsx)(s.p, {
                children:
                  'Make sure that App registrations in the Secret file has been added as a contributor or owner to the access control (IAM) of the VM instance.',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h2, {
              id: 'create-experiments-using-chaos-dashboard',
              children: 'Create experiments using Chaos Dashboard',
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, t.jsx)(s.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.p, {
                      children: (0, t.jsx)(s.img, { alt: 'img', src: n(2557).A + '', width: '959', height: '519' }),
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
                        'In the ',
                        (0, t.jsx)(s.strong, { children: 'Choose a Target' }),
                        ' area, choose ',
                        (0, t.jsx)(s.strong, { children: 'Azure FAULT' }),
                        ' and select a specific behavior, such as ',
                        (0, t.jsx)(s.strong, { children: 'VM STOP' }),
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
                    (0, t.jsx)(s.p, {
                      children:
                        'Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: ['\n', (0, t.jsx)(s.p, { children: 'Submit the experiment information.' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(s.h2, {
              id: 'create-experiments-using-the-yaml-file',
              children: 'Create experiments using the YAML file',
            }),
            '\n',
            (0, t.jsxs)(s.h3, {
              id: 'a-vm-stop-configuration-example',
              children: ['A ', (0, t.jsx)(s.code, { children: 'vm-stop' }), ' configuration example'],
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, t.jsx)(s.code, { children: 'azurechaos-vm-stop.yaml' }),
                        ' file, as shown below:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: vm-stop-example\n  namespace: chaos-mesh\nspec:\n  action: vm-stop\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  vmName: 'your-vm-name'\n  duration: '5m'\n",
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject the ',
                        (0, t.jsx)(s.code, { children: 'vm-stop' }),
                        ' fault into the specified VM instance so that the VM instance will be unavailable in 5 minutes.',
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'For more information about stopping VM instances, refer to ',
                        (0, t.jsx)(s.a, {
                          href: 'https://docs.microsoft.com/en-us/azure/devtest-labs/use-command-line-start-stop-virtual-machines',
                          children: 'Azure documentation - Start or stop a VM',
                        }),
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
                        'After the configuration file is prepared, use ',
                        (0, t.jsx)(s.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f azurechaos-vm-stop.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.h3, {
              id: 'a-vm-restart-configuration-example',
              children: ['A ', (0, t.jsx)(s.code, { children: 'vm-restart' }), ' configuration example'],
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, t.jsx)(s.code, { children: 'azurechaos-vm-restart.yaml' }),
                        ' file:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: vm-restart-example\n  namespace: chaos-mesh\nspec:\n  action: vm-restart\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  vmName: 'your-vm-name'\n",
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject ',
                        (0, t.jsx)(s.code, { children: 'vm-restart' }),
                        ' fault into the specified VM instance so that the VM instance will be restarted.',
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'For more information about restarting the VM instance, refer to the ',
                        (0, t.jsx)(s.a, {
                          href: 'https://docs.microsoft.com/en-us/azure/devtest-labs/devtest-lab-restart-vm',
                          children: 'Azure documentation - Restart a VM',
                        }),
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
                        'After the configuration file is prepared, use ',
                        (0, t.jsx)(s.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f azurechaos-vm-restart.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.h3, {
              id: 'a-detach-volume-configuration-example',
              children: ['A ', (0, t.jsx)(s.code, { children: 'detach-volume' }), ' configuration example'],
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, t.jsx)(s.code, { children: 'azurechaos-disk-detach.yaml' }),
                        ' file:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: AzureChaos\nmetadata:\n  name: disk-detach-example\n  namespace: chaos-mesh\nspec:\n  action: disk-detach\n  secretName: 'cloud-key-secret'\n  subscriptionID: 'your-subscription-id'\n  resourceGroupName: 'your-resource-group-name'\n  vmName: 'your-vm-name'\n  diskName: 'your-disk-name'\n  lun: 'your-disk-lun'\n  duration: '5m'\n",
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject a ',
                        (0, t.jsx)(s.code, { children: 'disk-detach' }),
                        ' fault into the specified VM instance so that the VM instance is detached from the specified data disk within 5 minutes.',
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'For more information about detaching Azure date disk, refer to the ',
                        (0, t.jsx)(s.a, {
                          href: 'https://docs.microsoft.com/en-us/azure/devtest-labs/devtest-lab-attach-detach-data-disk#detach-a-data-disk',
                          children: 'Azure documentation - Detach a data disk',
                        }),
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
                        'After the configuration file is prepared, use ',
                        (0, t.jsx)(s.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.pre, {
                      children: (0, t.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f azurechaos-disk-detach.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(s.h3, { id: 'field-description', children: 'Field description' }),
            '\n',
            (0, t.jsx)(s.p, { children: 'The following table shows the fields in the YAML configuration file.' }),
            '\n',
            (0, t.jsxs)(s.table, {
              children: [
                (0, t.jsx)(s.thead, {
                  children: (0, t.jsxs)(s.tr, {
                    children: [
                      (0, t.jsx)(s.th, { children: 'Parameter' }),
                      (0, t.jsx)(s.th, { children: 'Type' }),
                      (0, t.jsx)(s.th, { children: 'Description' }),
                      (0, t.jsx)(s.th, { children: 'Default value' }),
                      (0, t.jsx)(s.th, { children: 'Required' }),
                      (0, t.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, t.jsxs)(s.tbody, {
                  children: [
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'action' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsxs)(s.td, {
                          children: [
                            'Indicates the specific type of faults. Only ',
                            (0, t.jsx)(s.code, { children: 'vm-stop' }),
                            ', ',
                            (0, t.jsx)(s.code, { children: 'vm-restart' }),
                            ', and ',
                            (0, t.jsx)(s.code, { children: 'disk-detach' }),
                            ' are supported.',
                          ],
                        }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'vm-stop' }) }),
                        (0, t.jsx)(s.td, { children: 'Yes' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'vm-stop' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'mode' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsxs)(s.td, {
                          children: [
                            'Specifies the mode of the experiment. The mode options include ',
                            (0, t.jsx)(s.code, { children: 'one' }),
                            ' (selecting a random Pod), ',
                            (0, t.jsx)(s.code, { children: 'all' }),
                            ' (selecting all eligible Pods), ',
                            (0, t.jsx)(s.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible Pods), ',
                            (0, t.jsx)(s.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of Pods from the eligible Pods), and ',
                            (0, t.jsx)(s.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of Pods from the eligible Pods).',
                          ],
                        }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'Yes' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'value' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsxs)(s.td, {
                          children: [
                            'Provides parameters for the ',
                            (0, t.jsx)(s.code, { children: 'mode' }),
                            ' configuration, depending on ',
                            (0, t.jsx)(s.code, { children: 'mode' }),
                            '. For example, when ',
                            (0, t.jsx)(s.code, { children: 'mode' }),
                            ' is set to ',
                            (0, t.jsx)(s.code, { children: 'fixed-percent' }),
                            ', ',
                            (0, t.jsx)(s.code, { children: 'value' }),
                            ' specifies the percentage of Pods.',
                          ],
                        }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'No' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: '1' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'secretName' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsx)(s.td, {
                          children:
                            'Specifies the name of the Kubernetes Secret that stores the Azure authentication information.',
                        }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'No' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'cloud-key-secret' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'subscriptionID' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsx)(s.td, { children: "Specifies the VM instacnce's subscription ID." }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'Yes' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'your-subscription-id' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'resourceGroupName' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsx)(s.td, { children: 'Specifies the Resource group of VM.' }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'Yes' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'your-resource-group-name' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'vmName' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsx)(s.td, { children: 'VMName defines the name of Virtual Machine.' }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'Yes' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'your-vm-name' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'diskName' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsxs)(s.td, {
                          children: [
                            'This is a required field when the ',
                            (0, t.jsx)(s.code, { children: 'action' }),
                            ' is ',
                            (0, t.jsx)(s.code, { children: 'disk-detach' }),
                            ', specifies the name of data disk.',
                          ],
                        }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'No' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: 'DATADISK_0' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'lun' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsxs)(s.td, {
                          children: [
                            'This is a required field when the ',
                            (0, t.jsx)(s.code, { children: 'action' }),
                            ' is ',
                            (0, t.jsx)(s.code, { children: 'disk-detach' }),
                            ', specifies the LUN (Logic Unit Number) of data disk.',
                          ],
                        }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'No' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: '0' }) }),
                      ],
                    }),
                    (0, t.jsxs)(s.tr, {
                      children: [
                        (0, t.jsx)(s.td, { children: 'duration' }),
                        (0, t.jsx)(s.td, { children: 'string' }),
                        (0, t.jsx)(s.td, { children: 'Specifies the duration of the experiment.' }),
                        (0, t.jsx)(s.td, { children: 'N/A' }),
                        (0, t.jsx)(s.td, { children: 'Yes' }),
                        (0, t.jsx)(s.td, { children: (0, t.jsx)(s.code, { children: '30s' }) }),
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
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e)
      }
    },
    2557: (e, s, n) => {
      n.d(s, { A: () => i })
      const i = n.p + 'assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png'
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => c, x: () => d })
      var i = n(96540)
      const t = {},
        r = i.createContext(t)
      function c(e) {
        const s = i.useContext(r)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function d(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : c(e.components)),
          i.createElement(r.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
