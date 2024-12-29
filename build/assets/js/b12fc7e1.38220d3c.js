'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7272],
  {
    88386: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => l,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => d,
          metadata: () => n,
          toc: () => o,
        })
      const n = JSON.parse(
        '{"id":"simulate-http-chaos-on-kubernetes","title":"Simulate HTTP Faults","description":"This document describes how to simulate HTTP faults by creating HTTPChaos experiments in Chaos Mesh.","source":"@site/versioned_docs/version-2.5.2/simulate-http-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-http-chaos-on-kubernetes","permalink":"/docs/2.5.2/simulate-http-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/simulate-http-chaos-on-kubernetes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate HTTP Faults"},"sidebar":"docs","previous":{"title":"Simulate GCP Faults","permalink":"/docs/2.5.2/simulate-gcp-chaos"},"next":{"title":"Simulate Block Device Latency","permalink":"/docs/2.5.2/simulate-block-chaos-on-kubernetes"}}'
      )
      var r = t(74848),
        i = t(28453)
      const d = { title: 'Simulate HTTP Faults' },
        c = void 0,
        l = {},
        o = [
          { value: 'HTTPChaos introduction', id: 'httpchaos-introduction', level: 2 },
          { value: 'Notes', id: 'notes', level: 2 },
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using YAML files', id: 'create-experiments-using-yaml-files', level: 2 },
          { value: 'Example of <code>abort</code>', id: 'example-of-abort', level: 3 },
          { value: 'Example of fault combinations', id: 'example-of-fault-combinations', level: 3 },
          { value: 'Field description', id: 'field-description', level: 2 },
          { value: 'Description for common fields', id: 'description-for-common-fields', level: 3 },
          {
            value: 'Description for <code>target</code>-related fields',
            id: 'description-for-target-related-fields',
            level: 3,
          },
          { value: '<code>Request</code>-related fields', id: 'request-related-fields', level: 4 },
          { value: '<code>Respond</code>-related fields', id: 'respond-related-fields', level: 4 },
          { value: 'Specify side', id: 'specify-side', level: 2 },
          { value: 'Client side', id: 'client-side', level: 3 },
          { value: 'Server side', id: 'server-side', level: 3 },
          { value: 'TLS', id: 'tls', level: 2 },
          { value: 'Local debugging', id: 'local-debugging', level: 2 },
        ]
      function h(e) {
        const s = {
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
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.p, {
              children:
                'This document describes how to simulate HTTP faults by creating HTTPChaos experiments in Chaos Mesh.',
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'httpchaos-introduction', children: 'HTTPChaos introduction' }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'HTTPChaos is a fault type provided by Chaos Mesh. By creating HTTPChaos experiments, you can simulate the fault scenarios during the HTTP request and response processing. Currently, HTTPChaos supports simulating the following fault types:',
            }),
            '\n',
            (0, r.jsxs)(s.ul, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [(0, r.jsx)(s.code, { children: 'abort' }), ': interrupts the connection'],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    (0, r.jsx)(s.code, { children: 'delay' }),
                    ': injects latency into the request or response',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    (0, r.jsx)(s.code, { children: 'replace' }),
                    ': replaces part of content in HTTP request or response messages',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    (0, r.jsx)(s.code, { children: 'patch' }),
                    ': adds additional content to HTTP request or response messages',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'HTTPChaos supports combinations of different fault types. If you have configured multiple HTTP fault types at the same time when creating HTTPChaos experiments, the order set to inject the faults when the experiments start running is ',
                (0, r.jsx)(s.code, { children: 'abort' }),
                ' -> ',
                (0, r.jsx)(s.code, { children: 'delay' }),
                ' -> ',
                (0, r.jsx)(s.code, { children: 'replace' }),
                ' -> ',
                (0, r.jsx)(s.code, { children: 'patch' }),
                '. When the ',
                (0, r.jsx)(s.code, { children: 'abort' }),
                ' fault cause short circuits, the connection will be directly interrupted.',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'For the detailed description of HTTPChaos configuration, see ',
                (0, r.jsx)(s.a, { href: '#field-description', children: 'Field description' }),
                ' below.',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'notes', children: 'Notes' }),
            '\n',
            (0, r.jsx)(s.p, { children: 'Before injecting the faults supported by HTTPChaos, note the followings:' }),
            '\n',
            (0, r.jsxs)(s.ul, {
              children: [
                '\n',
                (0, r.jsx)(s.li, { children: 'There is no control manager of Chaos Mesh running on the target Pod.' }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    'The rules will affect both of clients and servers in the Pod, if you want to affect only one side, please refer to the ',
                    (0, r.jsx)(s.a, { href: '#specify-side', children: 'specify side' }),
                    ' section.',
                  ],
                }),
                '\n',
                (0, r.jsx)(s.li, {
                  children:
                    'HTTPS accesses should be disabled, because injecting HTTPS connections is not supported currently.',
                }),
                '\n',
                (0, r.jsx)(s.li, {
                  children:
                    'For HTTPChaos injection to take effect, the client should avoid reusing TCP socket. This is because HTTPChaos does not affect the HTTP requests that are sent via TCP socket before the fault injection.',
                }),
                '\n',
                (0, r.jsx)(s.li, {
                  children:
                    'Use non-idempotent requests (such as most of the POST requests) with caution in production environments. If such requests are used, the target service may not return to normal status by repeating requests after the fault injection.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h2, {
              id: 'create-experiments-using-chaos-dashboard',
              children: 'Create experiments using Chaos Dashboard',
            }),
            '\n',
            (0, r.jsxs)(s.ol, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, r.jsx)(s.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.p, {
                      children: (0, r.jsx)(s.img, {
                        alt: 'create an experiment',
                        src: t(2557).A + '',
                        width: '959',
                        height: '519',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'In the ',
                        (0, r.jsx)(s.strong, { children: 'Choose a Target' }),
                        ' area, choose ',
                        (0, r.jsx)(s.strong, { children: 'HTTP FAULT' }),
                        ' and select a specific behavior, such as ',
                        (0, r.jsx)(s.code, { children: 'RESPONSE ABORT' }),
                        '. Then fill out specific configurations.',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.p, {
                      children: (0, r.jsx)(s.img, {
                        alt: 'create HTTP fault',
                        src: t(93060).A + '',
                        width: '1085',
                        height: '1219',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(s.p, { children: 'Submit the experiment.' }),
                    '\n',
                    (0, r.jsx)(s.p, {
                      children:
                        'In the example above, you have configured injecting the "Response abort" fault into all requests of Port 80.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h2, {
              id: 'create-experiments-using-yaml-files',
              children: 'Create experiments using YAML files',
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'Chaos Mesh also supports using YAML configuration files to create HTTPChaos experiments. In a YAML file, you can simulate either one HTTP fault type or a combination of different HTTP fault types.',
            }),
            '\n',
            (0, r.jsxs)(s.h3, {
              id: 'example-of-abort',
              children: ['Example of ', (0, r.jsx)(s.code, { children: 'abort' })],
            }),
            '\n',
            (0, r.jsxs)(s.ol, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Write the experimental configuration to the ',
                        (0, r.jsx)(s.code, { children: 'http-abort-failure.yaml' }),
                        ' file as the example below:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-yaml',
                        children:
                          'apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api\n  abort: true\n  duration: 5m\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject the ',
                        (0, r.jsx)(s.code, { children: 'abort' }),
                        ' fault into the specified pod for 5 minutes. During the fault injection, the GET requests sent through port 80 in the ',
                        (0, r.jsx)(s.code, { children: '/api' }),
                        ' path of the target Pod will be interrupted.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, r.jsx)(s.code, { children: 'kubectl' }),
                        ' to create the experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./http-abort-failure.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h3, { id: 'example-of-fault-combinations', children: 'Example of fault combinations' }),
            '\n',
            (0, r.jsxs)(s.ol, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Write the experimental configuration to ',
                        (0, r.jsx)(s.code, { children: 'http-failure.yaml' }),
                        ' file as the example below:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-chaos\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  method: GET\n  path: /api/*\n  delay: 10s\n  replace:\n    path: /api/v2/\n    method: DELETE\n  patch:\n    headers:\n      - ['Token', '<one token>']\n      - ['Token', '<another token>']\n    body:\n      type: JSON\n      value: '{\"foo\": \"bar\"}'\n  duration: 5m\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Based on this configuration example, Chaos Mesh will inject the ',
                        (0, r.jsx)(s.code, { children: 'delay' }),
                        ' fault, ',
                        (0, r.jsx)(s.code, { children: 'replace' }),
                        ' fault, and ',
                        (0, r.jsx)(s.code, { children: 'patch' }),
                        ' fault consecutively.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, r.jsx)(s.code, { children: 'kubectl' }),
                        ' to create the experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./http-failure.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'field-description', children: 'Field description' }),
            '\n',
            (0, r.jsx)(s.h3, { id: 'description-for-common-fields', children: 'Description for common fields' }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'Common fields are meaningful when the ',
                (0, r.jsx)(s.code, { children: 'target' }),
                ' of fault injection is ',
                (0, r.jsx)(s.code, { children: 'Request' }),
                ' or ',
                (0, r.jsx)(s.code, { children: 'Response' }),
                '.',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, { children: 'Parameter' }),
                      (0, r.jsx)(s.th, { children: 'Type' }),
                      (0, r.jsx)(s.th, { children: 'Description' }),
                      (0, r.jsx)(s.th, { children: 'Default value' }),
                      (0, r.jsx)(s.th, { children: 'Required' }),
                      (0, r.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'mode' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'Specifies the mode of the experiment. The mode options include ',
                            (0, r.jsx)(s.code, { children: 'one' }),
                            ' (selecting a random pod), ',
                            (0, r.jsx)(s.code, { children: 'all' }),
                            ' (selecting all eligible pods), ',
                            (0, r.jsx)(s.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible pods), ',
                            (0, r.jsx)(s.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of Pods from the eligible pods), and ',
                            (0, r.jsx)(s.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of Pods from the eligible pods).',
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'yes' }),
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'value' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'Provides parameters for the ',
                            (0, r.jsx)(s.code, { children: 'mode' }),
                            ' configuration depending on the value of ',
                            (0, r.jsx)(s.code, { children: 'mode' }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '1' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'target' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'Specifies whether the target of fault injuection is ',
                            (0, r.jsx)(s.code, { children: 'Request' }),
                            ' or ',
                            (0, r.jsx)(s.code, { children: 'Response' }),
                            '. The ',
                            (0, r.jsxs)(s.a, {
                              href: '#Description-for-%60target%60-related-fields',
                              children: [(0, r.jsx)(s.code, { children: 'target' }), '-related fields'],
                            }),
                            ' should be configured at the same time.',
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'yes' }),
                        (0, r.jsx)(s.td, { children: 'Request' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'port' }) }),
                        (0, r.jsx)(s.td, { children: 'int32' }),
                        (0, r.jsx)(s.td, { children: 'The TCP port that the target service listens on.' }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'yes' }),
                        (0, r.jsx)(s.td, { children: '80' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'path' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'The URI path of the target request. Supports ',
                            (0, r.jsx)(s.a, {
                              href: 'https://www.wikiwand.com/en/Matching_wildcards',
                              children: 'Matching wildcards',
                            }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(s.td, { children: 'Takes effect on all paths by default.' }),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '/api/*' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'method' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, { children: 'The HTTP method of the target request method.' }),
                        (0, r.jsx)(s.td, { children: 'Takes effect for all methods by default.' }),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'GET' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'request_headers' }) }),
                        (0, r.jsx)(s.td, { children: 'map[string]string' }),
                        (0, r.jsx)(s.td, { children: 'Matches request headers to the target service.' }),
                        (0, r.jsx)(s.td, { children: 'Takes effect for all requests by default.' }),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'Content-Type: application/json' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'abort' }) }),
                        (0, r.jsx)(s.td, { children: 'bool' }),
                        (0, r.jsx)(s.td, {
                          children: 'Indicates whether to inject the fault that interrupts the connection.',
                        }),
                        (0, r.jsx)(s.td, { children: 'false' }),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'true' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'delay' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, { children: 'Specifies the time for a latency fault.' }),
                        (0, r.jsx)(s.td, { children: '0' }),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '10s' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'replace.headers' }) }),
                        (0, r.jsx)(s.td, { children: 'map[string]string' }),
                        (0, r.jsx)(s.td, {
                          children: 'Specifies the key pair used to replace the request headers or response headers.',
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'Content-Type: application/xml' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'replace.body' }) }),
                        (0, r.jsx)(s.td, { children: '[]byte' }),
                        (0, r.jsx)(s.td, {
                          children: 'Specifies request body or response body to replace the fault (Base64 encoded).',
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'eyJmb28iOiAiYmFyIn0K' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'patch.headers' }) }),
                        (0, r.jsx)(s.td, { children: '[][]string' }),
                        (0, r.jsx)(s.td, {
                          children:
                            'Specifies the attached key pair of the request headers or response headers with patch faults.',
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '- [Set-Cookie, one cookie]' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'patch.body.type' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'Specifies the type of patch faults of the request body or response body. Currently, it only supports ',
                            (0, r.jsx)(s.a, {
                              href: 'https://tools.ietf.org/html/rfc7396',
                              children: (0, r.jsx)(s.code, { children: 'JSON' }),
                            }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'JSON' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'patch.body.value' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, {
                          children: 'Specifies the fault of the request body or response body with patch faults.',
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: '{"foo": "bar"}' }) }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'duration' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, { children: 'Specifies the duration of a specific experiment.' }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'yes' }),
                        (0, r.jsx)(s.td, { children: '30s' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'scheduler' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, {
                          children: 'Specifies the scheduling rules for the time of a specific experiment.',
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '5 * * * *' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'tls.secretName' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'SecretName represents the name of required secret resource. The secrete must combined with data ',
                            (0, r.jsx)(s.code, {
                              children: '{"tls.certName":cert, "tls.KeyName":key, "tls.caName":ca}',
                            }),
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '"http-tls-scr"' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'tls.secretNamespace' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, {
                          children:
                            'SecretNamespace represents the namespace of required secret resource,should be the same with deployment/chaos-controller-manager in most cases',
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '"chaos-mesh"' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'tls.certName' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'CertName represents the data name of cert file in secret, ',
                            (0, r.jsx)(s.code, { children: 'tls.crt' }),
                            ' for example',
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '"tls.crt"' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'tls.KeyName' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'KeyName represents the data name of key file in secret, ',
                            (0, r.jsx)(s.code, { children: 'tls.key' }),
                            ' for example',
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '"tls.key"' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'tls.caName' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'CAName represents the data name of ca file in secret, ',
                            (0, r.jsx)(s.code, { children: 'ca.crt' }),
                            ' for example',
                          ],
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '"ca.crt"' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(s.admonition, {
              type: 'note',
              children: [
                (0, r.jsxs)(s.ul, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.li, {
                      children: [
                        '\n',
                        (0, r.jsxs)(s.p, {
                          children: [
                            'When creating experiments with YAML files, ',
                            (0, r.jsx)(s.code, { children: 'replace.body' }),
                            ' must be the base64 encoding of the replacement content.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(s.li, {
                      children: [
                        '\n',
                        (0, r.jsxs)(s.p, {
                          children: [
                            'When creating experiments with the Kubernetes API, there is no need to encode the replacement content, just convert it to ',
                            (0, r.jsx)(s.code, { children: '[]byte' }),
                            ' and put it into the ',
                            (0, r.jsx)(s.code, { children: 'httpchaos.Spec.Replace.Body' }),
                            ' field. The following is an example:',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                (0, r.jsx)(s.pre, {
                  children: (0, r.jsx)(s.code, {
                    className: 'language-golang',
                    children: 'httpchaos.Spec.Replace.Body = []byte(`{"foo": "bar"}`)\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(s.h3, {
              id: 'description-for-target-related-fields',
              children: ['Description for ', (0, r.jsx)(s.code, { children: 'target' }), '-related fields'],
            }),
            '\n',
            (0, r.jsxs)(s.h4, {
              id: 'request-related-fields',
              children: [(0, r.jsx)(s.code, { children: 'Request' }), '-related fields'],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'The ',
                (0, r.jsx)(s.code, { children: 'Request' }),
                ' field is a meaningful when the ',
                (0, r.jsx)(s.code, { children: 'target' }),
                ' set to ',
                (0, r.jsx)(s.code, { children: 'Request' }),
                ' during the fault injection.',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, { children: 'Parameter' }),
                      (0, r.jsx)(s.th, { children: 'Type' }),
                      (0, r.jsx)(s.th, { children: 'Description' }),
                      (0, r.jsx)(s.th, { children: 'Default value' }),
                      (0, r.jsx)(s.th, { children: 'Required' }),
                      (0, r.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'replace.path' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, { children: 'Specifies the URI path used to replace content.' }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '/api/v2/' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'replace.method' }) }),
                        (0, r.jsx)(s.td, { children: 'string' }),
                        (0, r.jsx)(s.td, { children: 'Specifies the replaced content of the HTTP request method.' }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'DELETE' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'replace.queries' }) }),
                        (0, r.jsx)(s.td, { children: 'map[string]string' }),
                        (0, r.jsx)(s.td, { children: 'Specifies the replaced key pair of the URI query.' }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'foo: bar' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'patch.queries' }) }),
                        (0, r.jsx)(s.td, { children: '[][]string' }),
                        (0, r.jsx)(s.td, {
                          children: 'Specifies the attached key pair of the URI query with patch faults.',
                        }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '- [foo, bar]' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(s.h4, {
              id: 'respond-related-fields',
              children: [(0, r.jsx)(s.code, { children: 'Respond' }), '-related fields'],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'The ',
                (0, r.jsx)(s.code, { children: 'Response' }),
                ' is a meaningful when the ',
                (0, r.jsx)(s.code, { children: 'target' }),
                ' set to ',
                (0, r.jsx)(s.code, { children: 'Response' }),
                ' during the fault injection.',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, { children: 'Parameter' }),
                      (0, r.jsx)(s.th, { children: 'Type' }),
                      (0, r.jsx)(s.th, { children: 'Description' }),
                      (0, r.jsx)(s.th, { children: 'Default value' }),
                      (0, r.jsx)(s.th, { children: 'Required' }),
                      (0, r.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'code' }) }),
                        (0, r.jsx)(s.td, { children: 'int32' }),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'Specifies the status code responded by ',
                            (0, r.jsx)(s.code, { children: 'target' }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(s.td, { children: 'Takes effect for all status codes by default.' }),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '200' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'response_headers' }) }),
                        (0, r.jsx)(s.td, { children: 'map[string]string' }),
                        (0, r.jsxs)(s.td, {
                          children: ['Matches request headers to ', (0, r.jsx)(s.code, { children: 'target' }), '.'],
                        }),
                        (0, r.jsx)(s.td, { children: 'Takes effect for all responses by default.' }),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: 'Content-Type: application/json' }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, { children: (0, r.jsx)(s.code, { children: 'replace.code' }) }),
                        (0, r.jsx)(s.td, { children: 'int32' }),
                        (0, r.jsx)(s.td, { children: 'Specifies the replaced content of the response status code.' }),
                        (0, r.jsx)(s.td, {}),
                        (0, r.jsx)(s.td, { children: 'no' }),
                        (0, r.jsx)(s.td, { children: '404' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'specify-side', children: 'Specify side' }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'The rules will affect both of clients and servers in the Pod by default, but you can affect only one side by selecting the request headers.',
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'This section provides some examples to specify the affected side, you can adjust the header selector in rules depend on your particular cases.',
            }),
            '\n',
            (0, r.jsx)(s.h3, { id: 'client-side', children: 'Client side' }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'To inject faults into clients in the Pod without affecting servers, you can select the request/response by the ',
                (0, r.jsx)(s.code, { children: 'Host' }),
                ' header in the request.',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'For example, if you want to interrupt all requests to ',
                (0, r.jsx)(s.code, { children: 'http://example.com/' }),
                ', you can apply the following YAML config:',
              ],
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-client\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: some-http-client\n  target: Request\n  port: 80\n  path: '*'\n  request_headers:\n    Host: 'example.com'\n  abort: true\n",
              }),
            }),
            '\n',
            (0, r.jsx)(s.h3, { id: 'server-side', children: 'Server side' }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'To inject faults into servers in the Pod without affecting clients, you can also select the request/response by the ',
                (0, r.jsx)(s.code, { children: 'Host' }),
                ' header in the request.',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'For example, if you want to interrupt all requests to your server behind service ',
                (0, r.jsx)(s.code, { children: 'nginx.nginx.svc' }),
                ', you can apply the following YAML config:',
              ],
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-server\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  path: '*'\n  request_headers:\n    Host: 'nginx.nginx.svc'\n  abort: true\n",
              }),
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'In other cases, especially when injecting the inbound request from outside, you may select the request/response by the ',
                (0, r.jsx)(s.code, { children: 'X-Forwarded-Host' }),
                ' header in the request.',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'For example, if you want to interrupt all requests to your server behind a public gateway ',
                (0, r.jsx)(s.code, { children: 'nginx.host.org' }),
                ', you can apply the following YAML config:',
              ],
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: chaos-mesh.org/v1alpha1\nkind: HTTPChaos\nmetadata:\n  name: test-http-server\nspec:\n  mode: all\n  selector:\n    labelSelectors:\n      app: nginx\n  target: Request\n  port: 80\n  path: '*'\n  request_headers:\n    X-Forwarded-Host: 'nginx.host.org'\n  abort: true\n",
              }),
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'tls', children: 'TLS' }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'To inject faults inside connection base on TLS, user should use TLS mode. Our proxy play a proxy role here, so in TLS people both need to act as a remote server with a trustful CA , but also need to act as a client trust the server with some ca.',
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children: "So in the secret data blow user need to create its' TLS keys & CA & CRT on their own.",
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                children: '{\n  "tls.certName":cert,\n  "tls.KeyName":key,\n  "tls.caName":ca\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children: 'If user need to create a new TLS server and inject the connection to it, they should:',
            }),
            '\n',
            (0, r.jsxs)(s.ol, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(s.p, { children: "Create their own root CA's private key and root CA's certificate:" }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        children:
                          'openssl req -newkey rsa:4096  -x509  -sha512  -days 365 -nodes -out ca.crt -keyout ca.key\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(s.p, { children: "Create their server's Certificate Signing Request:" }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        children:
                          'openssl genrsa -out server.key 2048\nopenssl req -new -key server.key -out server.csr\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Write an extension file ',
                        (0, r.jsx)(s.code, { children: 'server.ext' }),
                        ' for the server like:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        children:
                          'authorityKeyIdentifier=keyid,issuer\nbasicConstraints=CA:FALSE\nkeyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment\nsubjectAltName = @alt_names\n\n[alt_names]\nIP.1 = X.X.X.X\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(s.p, { children: 'Generate certificate of server:' }),
                    '\n',
                    (0, r.jsx)(s.pre, {
                      children: (0, r.jsx)(s.code, {
                        children:
                          'openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256 -extfile server.ext\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: ['Add CA ', (0, r.jsx)(s.code, { children: 'ca.crt' }), ' to client.'],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(s.p, {
                      children: [
                        'Put ',
                        (0, r.jsx)(s.code, { children: 'server.key' }),
                        ', ',
                        (0, r.jsx)(s.code, { children: 'server.crt' }),
                        ', ',
                        (0, r.jsx)(s.code, { children: 'ca.crt' }),
                        ' into a secrete and give it to TLS mode.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'If user need to inject a client , they should act the proxy of HTTP Chaos like the remote server , you should just edit ',
                (0, r.jsx)(s.code, { children: 'server.ext' }),
                ' above to the specify domain.',
              ],
            }),
            '\n',
            (0, r.jsx)(s.p, { children: 'Example:' }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                children: 'subjectAltName = @alt_names\n\n[alt_names]\nDNS.1 = *.domain.com\nIP.1 = xxx.xxx.xxx.xxx\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.h2, { id: 'local-debugging', children: 'Local debugging' }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'If you are not sure of the effects of certain fault injections, you can also test the corresponding features locally using ',
                (0, r.jsx)(s.a, { href: 'https://github.com/chaos-mesh/rs-tproxy', children: 'rs-tproxy' }),
                '. Chaos Mesh also provides HTTPChaos by using rs-tproxy.',
              ],
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: s } = { ...(0, i.R)(), ...e.components }
        return s ? (0, r.jsx)(s, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e)
      }
    },
    2557: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png'
    },
    93060: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/create-new-httpchaos-f393051ca1c9c7fc3c5893dd9a024dc5.png'
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => d, x: () => c })
      var n = t(96540)
      const r = {},
        i = n.createContext(r)
      function d(e) {
        const s = n.useContext(i)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function c(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : d(e.components)),
          n.createElement(i.Provider, { value: s }, e.children)
        )
      }
    },
  },
])