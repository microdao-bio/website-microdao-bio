'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2855],
  {
    28455: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => l,
          metadata: () => s,
          toc: () => c,
        })
      const s = JSON.parse(
        '{"id":"simulate-network-chaos-in-physical-nodes","title":"Simulate Network Faults","description":"This document introduces how to use Chaosd to simulate network faults. The simulations can be completed by modifying network routing and traffic flow control using iptables, ipsets, tc, etc.","source":"@site/versioned_docs/version-2.5.2/simulate-network-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-network-chaos-in-physical-nodes","permalink":"/docs/2.5.2/simulate-network-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/simulate-network-chaos-in-physical-nodes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate Network Faults"},"sidebar":"docs","previous":{"title":"Simulate Process Faults","permalink":"/docs/2.5.2/simulate-process-chaos-in-physical-nodes"},"next":{"title":"Simulate Host Faults","permalink":"/docs/2.5.2/simulate-host-console-in-physical-nodes"}}'
      )
      var i = n(74848),
        r = n(28453)
      const l = { title: 'Simulate Network Faults' },
        o = void 0,
        d = {},
        c = [
          {
            value: 'Create network fault experiments using command-line mode',
            id: 'create-network-fault-experiments-using-command-line-mode',
            level: 2,
          },
          {
            value: 'Simulate network corruption using the command-line mode',
            id: 'simulate-network-corruption-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for network corruption', id: 'the-command-for-network-corruption', level: 4 },
          {
            value: 'Configuration items related to network corruption',
            id: 'configuration-items-related-to-network-corruption',
            level: 4,
          },
          {
            value: 'Example for simulating network corruption using the command mode',
            id: 'example-for-simulating-network-corruption-using-the-command-mode',
            level: 4,
          },
          {
            value: 'Simulate network latency using the command-line mode',
            id: 'simulate-network-latency-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for network latency', id: 'the-command-for-network-latency', level: 4 },
          {
            value: 'Configuration items related to network latency',
            id: 'configuration-items-related-to-network-latency',
            level: 4,
          },
          {
            value: 'Example for simulating network latency using the command-line mode',
            id: 'example-for-simulating-network-latency-using-the-command-line-mode',
            level: 4,
          },
          {
            value: 'Simulate network duplication using the command-line mode',
            id: 'simulate-network-duplication-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for network duplication', id: 'the-command-for-network-duplication', level: 4 },
          {
            value: 'Configuration items related to network duplication',
            id: 'configuration-items-related-to-network-duplication',
            level: 4,
          },
          {
            value: 'Example for simulating network duplication using the command-line mode',
            id: 'example-for-simulating-network-duplication-using-the-command-line-mode',
            level: 4,
          },
          {
            value: 'Simulate network loss using the command-line mode',
            id: 'simulate-network-loss-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for network loss', id: 'the-command-for-network-loss', level: 4 },
          {
            value: 'Configuration items related to network loss',
            id: 'configuration-items-related-to-network-loss',
            level: 4,
          },
          {
            value: 'Example for simulating network loss using the command-line mode',
            id: 'example-for-simulating-network-loss-using-the-command-line-mode',
            level: 4,
          },
          {
            value: 'Simulate network partition using the command-line mode',
            id: 'simulate-network-partition-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for network partition', id: 'the-command-for-network-partition', level: 4 },
          {
            value: 'Configuration items related to network partition',
            id: 'configuration-items-related-to-network-partition',
            level: 4,
          },
          {
            value: 'Example for simulating network partition using the command-line mode',
            id: 'example-for-simulating-network-partition-using-the-command-line-mode',
            level: 4,
          },
          {
            value: 'Simulate DNS fault using the command-line mode',
            id: 'simulate-dns-fault-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for DNS fault', id: 'the-command-for-dns-fault', level: 4 },
          {
            value: 'Configuration items related to DNS fault',
            id: 'configuration-items-related-to-dns-fault',
            level: 4,
          },
          {
            value: 'Example for simulating DNS fault using the command-line mode',
            id: 'example-for-simulating-dns-fault-using-the-command-line-mode',
            level: 4,
          },
          {
            value: 'Simulate network bandwidth using the command-line mode',
            id: 'simulate-network-bandwidth-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for network bandwidth', id: 'the-command-for-network-bandwidth', level: 4 },
          {
            value: 'Configuration items related to network bandwidth',
            id: 'configuration-items-related-to-network-bandwidth',
            level: 4,
          },
          {
            value: 'Example for simulating network bandwidth using the command-line mode',
            id: 'example-for-simulating-network-bandwidth-using-the-command-line-mode',
            level: 4,
          },
          {
            value: 'Simulate port occupation using the command-line mode',
            id: 'simulate-port-occupation-using-the-command-line-mode',
            level: 3,
          },
          { value: 'The command for port occupation', id: 'the-command-for-port-occupation', level: 4 },
          {
            value: 'Configuration items related to port occupation',
            id: 'configuration-items-related-to-port-occupation',
            level: 4,
          },
          {
            value: 'Example for simulating port occupation using the command-line mode',
            id: 'example-for-simulating-port-occupation-using-the-command-line-mode',
            level: 4,
          },
          {
            value: 'Create network fault experiments using service mode',
            id: 'create-network-fault-experiments-using-service-mode',
            level: 2,
          },
          {
            value: 'Simulate network corruption using the service mode',
            id: 'simulate-network-corruption-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating network corruption',
            id: 'parameters-for-simulating-network-corruption',
            level: 4,
          },
          {
            value: 'Example for simulating network corruption using the service mode',
            id: 'example-for-simulating-network-corruption-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate network latency using the service mode',
            id: 'simulate-network-latency-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating network latency',
            id: 'parameters-for-simulating-network-latency',
            level: 4,
          },
          {
            value: 'Example for simulating network latency using the service mode',
            id: 'example-for-simulating-network-latency-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate network duplication using the service mode',
            id: 'simulate-network-duplication-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating network duplication',
            id: 'parameters-for-simulating-network-duplication',
            level: 4,
          },
          {
            value: 'Example for simulating network duplication using the service mode',
            id: 'example-for-simulating-network-duplication-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate network loss using the service mode',
            id: 'simulate-network-loss-using-the-service-mode',
            level: 3,
          },
          { value: 'Parameters for simulating network loss', id: 'parameters-for-simulating-network-loss', level: 4 },
          {
            value: 'Example for simulating network loss using the service mode',
            id: 'example-for-simulating-network-loss-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate network partition using the service mode',
            id: 'simulate-network-partition-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating network partition',
            id: 'parameters-for-simulating-network-partition',
            level: 4,
          },
          {
            value: 'Example for simulating network partition using the service mode',
            id: 'example-for-simulating-network-partition-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate DNS fault using the service mode',
            id: 'simulate-dns-fault-using-the-service-mode',
            level: 3,
          },
          { value: 'Parameters for simulating DNS fault', id: 'parameters-for-simulating-dns-fault', level: 4 },
          {
            value: 'Example for simulating DNS fault using the service mode',
            id: 'example-for-simulating-dns-fault-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate network bandwidth using the service mode',
            id: 'simulate-network-bandwidth-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating network bandwidth',
            id: 'parameters-for-simulating-network-bandwidth',
            level: 4,
          },
          {
            value: 'Example for simulating network bandwidth using the service mode',
            id: 'example-for-simulating-network-bandwidth-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate port occupation using the service mode',
            id: 'simulate-port-occupation-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating port occupation',
            id: 'parameters-for-simulating-port-occupation',
            level: 4,
          },
          {
            value: 'Example for simulating port occupation using the service mode',
            id: 'example-for-simulating-port-occupation-using-the-service-mode',
            level: 4,
          },
        ]
      function a(e) {
        const t = {
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.p, {
              children:
                'This document introduces how to use Chaosd to simulate network faults. The simulations can be completed by modifying network routing and traffic flow control using iptables, ipsets, tc, etc.',
            }),
            '\n',
            (0, i.jsx)(t.admonition, {
              type: 'note',
              children: (0, i.jsx)(t.p, {
                children:
                  'Make sure the NET_SCH_NETEM module is installed in the Linux kernel. If you are using CentOS, you can install the module through the kernel-modules-extra package. Most other Linux distributions have installed it already by default.',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'create-network-fault-experiments-using-command-line-mode',
              children: 'Create network fault experiments using command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'This section introduces how to create network fault experiments using command-line mode.',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Before creating an experiment, you can run the following command to check the types of network faults supported by Chaosd:',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack network --help\n' }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "Network attack related commands\n\nUsage:\n  chaosd attack network [command]\n\nAvailable Commands:\n  bandwidth   limit network bandwidth\n  corrupt     corrupt network packet\n  delay       delay network\n  dns attack  DNS server or map specified host to specified IP\n  duplicate   duplicate network packet\n  loss        loss network packet\n  partition   partition\n  port        attack network port\n\nFlags:\n  -h, --help   help for network\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack network [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Currently, you can simulate four experimental scenarios using Chaosd: network corruption, network latency, network duplication, and network loss.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-corruption-using-the-command-line-mode',
              children: 'Simulate network corruption using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can run the command below to see the configuration of simulated network corruption using Chaosd.',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'the-command-for-network-corruption',
              children: 'The command for network corruption',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network corrupt --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "corrupt network packet\n\nUsage:\n  chaosd attack network corrupt [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for corrupt\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to corrupt (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-network-corruption',
              children: 'Configuration items related to network corruption',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The correlation between the percentage of current corrupt occurrence and the previous occurrence.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int. It is a percentage ranging from 0 to 100 (10 is 10%) ("0" by default ).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Name of the impacted network interface card.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "eth0", required.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic that only impacts specific destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "chaos-mesh.org".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "123.123.123.123".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The IP protocol impacted by traffic.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. Supported protocols: tcp, udp, icmp, all (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic which only impact specific source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. Use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to delimit the specific port or to indicate the range of the ports, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' } }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Ratio of network packet corruption.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-corruption-using-the-command-mode',
              children: 'Example for simulating network corruption using the command mode',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate network corruption:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network corrupt -d eth0 -i 172.16.4.4 --percent 50\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'If the command runs successfully, the output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 4eab1e62-8d60-45cb-ac85-3c17b8ac4825\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-latency-using-the-command-line-mode',
              children: 'Simulate network latency using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can run the command below to see the configuration of simulated network latency using Chaosd.',
            }),
            '\n',
            (0, i.jsx)(t.h4, { id: 'the-command-for-network-latency', children: 'The command for network latency' }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network delay --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "delay network\n\nUsage:\n  chaosd attack network delay [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for delay\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n  -j, --jitter string        jitter time, time units: ns, us (or \xb5s), ms, s, m, h.\n  -l, --latency string       delay egress time, time units: ns, us (or \xb5s), ms, s, m, h.\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-network-latency',
              children: 'Configuration items related to network latency',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The correlation between the current latency and the previous one.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. It is a percentage ranging from 0 to 100 (10 is 10%) ("0" by default).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Name of the impacted network interface card.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "eth0", required.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic which only impact specific destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "chaos-mesh.org".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "123.123.123.123".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'jitter' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'j' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Range of the length of network delay time.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. The time units can be: ns, us (\xb5s), ms, s, m, h, such as "1ms".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'latency' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'l' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Length of network delay time.' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. The time units can be: ns, us (\u03bcs), ms, s, m, h, such as "1ms".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The IP protocol impacted by traffic.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string. It supports the following protocol types: "tcp", "udp", "icmp", "all" (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic that only impacts specified source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-latency-using-the-command-line-mode',
              children: 'Example for simulating network latency using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate network latency:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network delay -d eth0 -i 172.16.4.4 -l 10ms\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'If the command runs successfully, the output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 4b23a0b5-e193-4b27-90a7-3e04235f32ab\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-duplication-using-the-command-line-mode',
              children: 'Simulate network duplication using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can run the command below to see the configuration of simulated network duplication using Chaosd.',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'the-command-for-network-duplication',
              children: 'The command for network duplication',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network duplicate --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "duplicate network packet\n\nUsage:\n  chaosd attack network duplicate [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for duplicate\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to duplicate (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-network-duplication',
              children: 'Configuration items related to network duplication',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The correlation between the percentage of current duplication occurrence and the previous one.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "0").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Name of the impacted network interface card.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "eth0", required.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic that only impacts specified destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "chaos-mesh.org".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "123.123.123.123".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'N/A' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Ratio of network packet duplicate.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The IP protocol impacted by traffic.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string. It supports the following protocol types: "tcp", "udp", "icmp", "all" (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic which only impact specific source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-duplication-using-the-command-line-mode',
              children: 'Example for simulating network duplication using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate network duplication:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network duplicate -d eth0 -i 172.16.4.4 --percent 50\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'If the command runs successfully, the output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 7bcb74ee-9101-4ae4-82f0-e44c8a7f113c\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-loss-using-the-command-line-mode',
              children: 'Simulate network loss using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can run the command below to see the configuration of simulated network loss using Chaosd:',
            }),
            '\n',
            (0, i.jsx)(t.h4, { id: 'the-command-for-network-loss', children: 'The command for network loss' }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network loss --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "loss network packet\n\nUsage:\n  chaosd attack network loss [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for loss\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to drop (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-network-loss',
              children: 'Configuration items related to network loss',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The correlation between the percentage of the current network loss and the previous one.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "0").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Name of the impacted network interface card.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "eth0", required.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic that only impacts specified destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "chaos-mesh.org".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "123.123.123.123".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'N/A' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Ratio of network packet loss.' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Only impact traffic using this IP protocol.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string. It supports the following protocol types: "tcp", "udp", "icmp", "all" (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The egress traffic which only impact specific source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-loss-using-the-command-line-mode',
              children: 'Example for simulating network loss using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate network loss:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network loss -d eth0 -i 172.16.4.4 --percent 50\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'If the command runs successfully, the output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 1e818adf-3942-4de4-949b-c8499f120265\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-partition-using-the-command-line-mode',
              children: 'Simulate network partition using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can run the command below to see the configuration of simulated network partition using Chaosd.',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'the-command-for-network-partition',
              children: 'The command for network partition',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network partition --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "partition\n\nUsage:\n  chaosd attack network partition [flags]\n\nFlags:\n      --accept-tcp-flags string   only the packet which match the tcp flag can be accepted, others will be dropped. only set when the protocol is tcp.\n  -d, --device string             the network interface to impact\n      --direction string          specifies the partition direction, values can be 'to', 'from' or 'both'. 'from' means packets coming from the 'IPAddress' or 'Hostname' and going to your server, 'to' means packets originating from your server and going to the 'IPAddress' or 'Hostname'. (default \"both\")\n  -h, --help                      help for partition\n  -H, --hostname string           only impact traffic to these hostnames\n  -i, --ip string                 only impact egress traffic to these IP addresses\n  -p, --protocol string           only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-network-partition',
              children: 'Configuration items related to network partition',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'accept-tcp-flags' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'N/A' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Only the packet which matches the tcp flag can be accepted, others will be dropped. Only set when the protocol is tcp.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "SYN,ACK SYN,ACK"',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'the network interface to impact' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "eth0", required',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'direction' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            "Specifies the partition direction, values can be 'to', 'from' or 'both'. 'from' means packets coming from the 'ip' or 'hostname' and going to your server, 'to' means packets originating from your server and going to the 'ip' or 'hostname'.",
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, values can be "to", "from" or "both" (default "both")',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Only impact traffic to these hostnames. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "chaos-mesh.org".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Only impact egress traffic to these IP addresses. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "192.168.123.123".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Only impact traffic using this IP protocol',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string. It supports the following protocol types: "tcp", "udp", "icmp", "all" (all network protocols).',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-partition-using-the-command-line-mode',
              children: 'Example for simulating network partition using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate network partition:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network partition -i 172.16.4.4 -d eth0 --direction from\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-dns-fault-using-the-command-line-mode',
              children: 'Simulate DNS fault using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'You can run the command below to see the configuration of simulated DNS fault using Chaosd.',
            }),
            '\n',
            (0, i.jsx)(t.h4, { id: 'the-command-for-dns-fault', children: 'The command for DNS fault' }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network dns --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "attack DNS server or map specified host to specified IP\n\nUsage:\n  chaosd attack network dns [flags]\n\nFlags:\n  -d, --dns-domain-name string   map this host to specified IP\n  -i, --dns-ip string            map specified host to this IP address\n      --dns-server string        update the DNS server in /etc/resolv.conf with this value (default \"123.123.123.123\")\n  -h, --help                     help for dns\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-dns-fault',
              children: 'Configuration items related to DNS fault',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-domain-name' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Map this host to specified IP(dns-ip)',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "chaos-mesh.org".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-ip' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Map specified host(dns-domain-name) to this IP address',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-server' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'N/A' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Update the DNS server in /etc/resolv.conf with this value',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, default is "123.123.123.123"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-dns-fault-using-the-command-line-mode',
              children: 'Example for simulating DNS fault using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'Run the following command to simulate DNS fault by mapping specified host to specified IP:',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network dns --dns-ip 123.123.123.123 --dns-domain-name chaos-mesh.org\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate DNS fault by using wrong DNS server:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network dns --dns-server 123.123.123.123\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-bandwidth-using-the-command-line-mode',
              children: 'Simulate network bandwidth using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can run the command below to see the configuration of simulated network bandwidth using Chaosd.',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'the-command-for-network-bandwidth',
              children: 'The command for network bandwidth',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network bandwidth --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "limit network bandwidth\n\nUsage:\n  chaosd attack network bandwidth [flags]\n\nFlags:\n  -b, --buffer uint32     the maximum amount of bytes that tokens can be available for instantaneously\n  -d, --device string     the network interface to impact\n  -h, --help              help for bandwidth\n  -H, --hostname string   only impact traffic to these hostnames\n  -i, --ip string         only impact egress traffic to these IP addresses\n  -l, --limit uint32      the number of bytes that can be queued waiting for tokens to become available\n  -m, --minburst uint32   specifies the size of the peakrate bucket\n      --peakrate uint     the maximum depletion rate of the bucket\n  -r, --rate string       the speed knob, allows bps, kbps, mbps, gbps, tbps unit. bps means bytes per second\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-network-bandwidth',
              children: 'Configuration items related to network bandwidth',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'buffer' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'b' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The maximum amount of bytes that tokens can be available for instantaneously',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' }), ', required'],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The network interface to impact' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "eth0", required',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Only impact traffic to these hostnames. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "chaos-mesh.org".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Only impact egress traffic to these IP addresses. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "123.123.123.123".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'limit' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'l' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The number of bytes that can be queued waiting for tokens to become available',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' }), ', required'],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'minburst' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, i.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the size of the peakrate bucket',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' })],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'peakrate' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'N/A' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The maximum depletion rate of the bucket',
                        }),
                        (0, i.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' })],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'rate' }),
                        (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'r' }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The speed knob, allows bps, kbps, mbps, gbps, tbps unit. The bps unit means bytes per second.',
                        }),
                        (0, i.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string, such as "1mbps", required',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-bandwidth-using-the-command-line-mode',
              children: 'Example for simulating network bandwidth using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate network bandwidth:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network bandwidth --buffer 10000 --device eth0 --limit 10000 --rate 10mbps\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-port-occupation-using-the-command-line-mode',
              children: 'Simulate port occupation using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'You can run the command below to see the configuration of simulated port occupation.',
            }),
            '\n',
            (0, i.jsx)(t.h4, { id: 'the-command-for-port-occupation', children: 'The command for port occupation' }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The command is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network port --help\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The output is as follows:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "attack network port\n\nUsage:\n  chaosd attack network port [flags]\n\nFlags:\n  -h, --help          help for port\n  -p, --port string   this specified port is to occupied\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configuration-items-related-to-port-occupation',
              children: 'Configuration items related to port occupation',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'The related configuration items are described as follows:' }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, i.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsx)(t.tbody, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'port' }),
                      (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                      (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The specified port to be occupied' }),
                      (0, i.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int, such as 8080, required' }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-port-occupation-using-the-command-line-mode',
              children: 'Example for simulating port occupation using the command-line mode',
            }),
            '\n',
            (0, i.jsx)(t.p, { children: 'Run the following command to simulate network bandwidth:' }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network port --port 8080\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'create-network-fault-experiments-using-service-mode',
              children: 'Create network fault experiments using service mode',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'To create experiments using the service mode, follow the instructions below:',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(t.p, { children: 'Run Chaosd in the service mode:' }),
                    '\n',
                    (0, i.jsx)(t.pre, {
                      children: (0, i.jsx)(t.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        'Send a ',
                        (0, i.jsx)(t.code, { children: 'POST' }),
                        ' HTTP request to the ',
                        (0, i.jsx)(t.code, { children: '/api/attack/process' }),
                        ' path of the Chaosd service.',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(t.pre, {
                      children: (0, i.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/process -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        'In the above command, you need to configure ',
                        (0, i.jsx)(t.code, { children: 'fault-configuration' }),
                        ' according to the fault types. For the corresponding parameters, refer to the parameters and examples of each fault type in the following sections.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.admonition, {
              type: 'note',
              children: (0, i.jsxs)(t.p, {
                children: [
                  'When running an experiment, remember to record the UID of the experiment. When you want to end the experiment corresponding to the UID, you need to send a ',
                  (0, i.jsx)(t.code, { children: 'DELETE' }),
                  ' HTTP request to the ',
                  (0, i.jsx)(t.code, { children: '/api/attack/{uid}' }),
                  ' path of the Chaosd service.',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-corruption-using-the-service-mode',
              children: 'Simulate network corruption using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-network-corruption',
              children: 'Parameters for simulating network corruption',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "corrupt"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'correlation' }),
                        (0, i.jsx)(t.td, {
                          children: 'The correlation between the current latency and the previous one.',
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'string. It is a percentage ranging from 0 to 100 (10 is 10%) ("0" by default).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'device' }),
                        (0, i.jsx)(t.td, { children: 'Name of the impacted network interface card.' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "eth0", required.' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'egress-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic which only impact specific destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'hostname' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "chaos-mesh.org".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-address' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "123.123.123.123".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-protocol' }),
                        (0, i.jsx)(t.td, { children: 'The IP protocol impacted by traffic.' }),
                        (0, i.jsx)(t.td, {
                          children: 'string. Supported protocols: tcp, udp, icmp, all (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'source-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic which only impact specific source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. Use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to delimit the specific port or to indicate the range of the ports, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'percent' }),
                        (0, i.jsx)(t.td, { children: 'Ratio of network packet corruption.' }),
                        (0, i.jsx)(t.td, {
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-corruption-using-the-service-mode',
              children: 'Example for simulating network corruption using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"corrupt","device":"eth0","ip-address":"172.16.4.4","percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-latency-using-the-service-mode',
              children: 'Simulate network latency using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-network-latency',
              children: 'Parameters for simulating network latency',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "delay"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'correlation' }),
                        (0, i.jsx)(t.td, {
                          children: 'The correlation between the current latency and the previous one.',
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'string. It is a percentage ranging from 0 to 100 (10 is 10%) ("0" by default).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'device' }),
                        (0, i.jsx)(t.td, { children: 'Name of the impacted network interface card.' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "eth0", required.' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'egress-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic which only impact specific destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'hostname' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "chaos-mesh.org".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-address' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "123.123.123.123".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'jitter' }),
                        (0, i.jsx)(t.td, { children: 'Range of the length of network delay time.' }),
                        (0, i.jsx)(t.td, {
                          children: 'string. The time units can be: ns, us (\xb5s), ms, s, m, h, such as "1ms".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'latency' }),
                        (0, i.jsx)(t.td, { children: 'Length of network delay time.' }),
                        (0, i.jsx)(t.td, {
                          children: 'string. The time units can be: ns, us (\u03bcs), ms, s, m, h, such as "1ms".',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-protocol' }),
                        (0, i.jsx)(t.td, { children: 'The IP protocol impacted by traffic.' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'string. It supports the following protocol types: "tcp", "udp", "icmp", "all" (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'source-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic that only impacts specified source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-latency-using-the-service-mode',
              children: 'Example for simulating network latency using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"delay","device":"eth0","ip-address":"172.16.4.4","latency":"10ms"}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-duplication-using-the-service-mode',
              children: 'Simulate network duplication using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-network-duplication',
              children: 'Parameters for simulating network duplication',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "duplicate"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'correlation' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The correlation between the percentage of current duplication occurrence and the previous one.',
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "0").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'device' }),
                        (0, i.jsx)(t.td, { children: 'Name of the impacted network interface card.' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "eth0", required.' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'egress-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic that only impacts specified destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'hostname' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "chaos-mesh.org".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-address' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "123.123.123.123".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'percent' }),
                        (0, i.jsx)(t.td, { children: 'Ratio of network packet duplicate.' }),
                        (0, i.jsx)(t.td, {
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-protocol' }),
                        (0, i.jsx)(t.td, { children: 'The IP protocol impacted by traffic.' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'string. It supports the following protocol types: "tcp", "udp", "icmp", "all" (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'source-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic which only impact specific source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-duplication-using-the-service-mode',
              children: 'Example for simulating network duplication using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"duplicate","ip-address":"172.16.4.4","device":"eth0","percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-loss-using-the-service-mode',
              children: 'Simulate network loss using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-network-loss',
              children: 'Parameters for simulating network loss',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "loss"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'correlation' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The correlation between the percentage of the current network loss and the previous one.',
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'string, it is a percentage which range is 0 to 100 (10 is 10%) (default "0").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'device' }),
                        (0, i.jsx)(t.td, { children: 'Name of the impacted network interface card.' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "eth0", required.' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'egress-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic that only impacts specified destination ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'hostname' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The host name impacted by traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "chaos-mesh.org".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-address' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'The IP address impacted by egress traffic. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "123.123.123.123".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'percent' }),
                        (0, i.jsx)(t.td, { children: 'Ratio of network packet loss.' }),
                        (0, i.jsx)(t.td, {
                          children: 'string. It is a percentage which range is 0 to 100 (10 is 10%) (default "1").',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-protocol' }),
                        (0, i.jsx)(t.td, { children: 'Only impact traffic using this IP protocol.' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'string, it supports the following protocol types: "tcp", "udp", "icmp", "all" (all network protocols).',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'source-port' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The egress traffic which only impact specific source ports. It can only be configured when the protocol is TCP or UDP.',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'string. You need to use a ',
                            (0, i.jsx)(t.code, { children: ',' }),
                            ' to separate the specific port or to indicate the range of the port, such as "80,8001:8010".',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-loss-using-the-service-mode',
              children: 'Example for simulating network loss using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"loss","ip-address":"172.16.4.4","device":"eth0","percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-partition-using-the-service-mode',
              children: 'Simulate network partition using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-network-partition',
              children: 'Parameters for simulating network partition',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "partition"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'accept-tcp-flags' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Only the packet which match the tcp flag can be accepted, others will be dropped. Only set when the protocol is tcp.',
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "SYN,ACK SYN,ACK"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'device' }),
                        (0, i.jsx)(t.td, { children: 'The network interface to impact' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "eth0", required' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'direction' }),
                        (0, i.jsx)(t.td, {
                          children:
                            "Specifies the partition direction, values can be 'to', 'from' or 'both'. 'from' means packets coming from the 'ip-address' or 'hostname' and going to your server, 'to' means packets originating from your server and going to the 'ip-address' or 'hostname'.",
                        }),
                        (0, i.jsx)(t.td, { children: 'string, values can be "to", "from" or "both" (default "both")' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'hostname' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'Only impact traffic to these hostnames. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "chaos-mesh.org".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-address' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'Only impact egress traffic to these IP addresses. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "192.168.123.123".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-protocol' }),
                        (0, i.jsx)(t.td, { children: 'Only impact traffic using this IP protocol' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'string. It supports the following protocol types: tcp, udp, icmp, all (all network protocols).',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-partition-using-the-service-mode',
              children: 'Example for simulating network partition using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"partition","ip-address":"172.16.4.4","device":"eth0","direction":"from"}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-dns-fault-using-the-service-mode',
              children: 'Simulate DNS fault using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-dns-fault',
              children: 'Parameters for simulating DNS fault',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "dns"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'dns-domain-name' }),
                        (0, i.jsx)(t.td, { children: 'Map this host to specified IP(dns-ip)' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "chaos-mesh.org".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'dns-ip' }),
                        (0, i.jsx)(t.td, { children: 'Map specified host(dns-domain-name) to this IP address' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "123.123.123.123"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'dns-server' }),
                        (0, i.jsx)(t.td, { children: 'Update the DNS server in /etc/resolv.conf with this value' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "123.123.123.123" (default "123.123.123.123")' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-dns-fault-using-the-service-mode',
              children: 'Example for simulating DNS fault using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"dns","dns-domain-name":"chaos-mesh.org","dns-ip":"123.123.123.123"}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-network-bandwidth-using-the-service-mode',
              children: 'Simulate network bandwidth using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-network-bandwidth',
              children: 'Parameters for simulating network bandwidth',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "bandwidth"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'buffer' }),
                        (0, i.jsx)(t.td, {
                          children: 'The maximum amount of bytes that tokens can be available for instantaneously',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' }), ', required'],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'device' }),
                        (0, i.jsx)(t.td, { children: 'The network interface to impact' }),
                        (0, i.jsx)(t.td, { children: 'string, such as "eth0", required' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'hostname' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'Only impact traffic to these hostnames. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. when ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "chaos-mesh.org".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'ip-address' }),
                        (0, i.jsxs)(t.td, {
                          children: [
                            'Only impact egress traffic to these IP addresses. ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' cannot be empty at the same time. When ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            ' are set at the same time, the configuration item affects both the specified ',
                            (0, i.jsx)(t.code, { children: 'hostname' }),
                            ' and ',
                            (0, i.jsx)(t.code, { children: 'ip-address' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "123.123.123.123".' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'limit' }),
                        (0, i.jsx)(t.td, {
                          children: 'The number of bytes that can be queued waiting for tokens to become available',
                        }),
                        (0, i.jsxs)(t.td, {
                          children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' }), ', required'],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'minburst' }),
                        (0, i.jsx)(t.td, { children: 'Specifies the size of the peakrate bucket' }),
                        (0, i.jsxs)(t.td, { children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' })] }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'peakrate' }),
                        (0, i.jsx)(t.td, { children: 'The maximum depletion rate of the bucket' }),
                        (0, i.jsxs)(t.td, { children: ['int, such as ', (0, i.jsx)(t.code, { children: '10000' })] }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'rate' }),
                        (0, i.jsx)(t.td, {
                          children:
                            'The speed knob, allows bps, kbps, mbps, gbps, tbps unit. The bps unit means bytes per second.',
                        }),
                        (0, i.jsx)(t.td, { children: 'string, such as "1mbps", required' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-network-bandwidth-using-the-service-mode',
              children: 'Example for simulating network bandwidth using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"bandwidth","buffer":10000,"limit":10000,"rate":"10mbps","device":"eth0"}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'simulate-port-occupation-using-the-service-mode',
              children: 'Simulate port occupation using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'parameters-for-simulating-port-occupation',
              children: 'Parameters for simulating port occupation',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, { children: 'Parameter' }),
                      (0, i.jsx)(t.th, { children: 'Description' }),
                      (0, i.jsx)(t.th, { children: 'Value' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'action' }),
                        (0, i.jsx)(t.td, { children: 'Action of the experiment.' }),
                        (0, i.jsx)(t.td, { children: 'set to "occupied"' }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: 'port' }),
                        (0, i.jsx)(t.td, { children: 'The specified port to be occupied.' }),
                        (0, i.jsx)(t.td, { children: 'int, such as 8080, required' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'example-for-simulating-port-occupation-using-the-service-mode',
              children: 'Example for simulating port occupation using the service mode',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"occupied","port":8080}\'\n',
              }),
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => l, x: () => o })
      var s = n(96540)
      const i = {},
        r = s.createContext(i)
      function l(e) {
        const t = s.useContext(r)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function o(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : l(e.components)),
          s.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
