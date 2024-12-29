'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2957],
  {
    41861: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => a,
        })
      const l = JSON.parse(
        '{"id":"simulate-redis-chaos-on-physical-nodes","title":"Simulate Redis Faults","description":"This document introduces how to use Chaosd to simulate Redis faults. This feature uses Golang interfaces in go-redis package and the redis-server command-line tool. You can create experiments either in command-line mode or service mode.","source":"@site/docs/simulate-redis-chaos-on-physical-nodes.md","sourceDirName":".","slug":"/simulate-redis-chaos-on-physical-nodes","permalink":"/docs/next/simulate-redis-chaos-on-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/simulate-redis-chaos-on-physical-nodes.md","tags":[],"version":"current","frontMatter":{"title":"Simulate Redis Faults"},"sidebar":"docs","previous":{"title":"Simulate File Faults","permalink":"/docs/next/simulate-file-chaos-in-physical-nodes"},"next":{"title":"Search and Recover Experiments of Chaosd","permalink":"/docs/next/chaosd-search-recover"}}'
      )
      var n = i(74848),
        s = i(28453)
      const r = { title: 'Simulate Redis Faults' },
        d = void 0,
        c = {},
        a = [
          {
            value: 'Create experiments using command-line mode',
            id: 'create-experiments-using-command-line-mode',
            level: 2,
          },
          {
            value: 'Simulate cache expiration using command-line mode',
            id: 'simulate-cache-expiration-using-command-line-mode',
            level: 3,
          },
          { value: 'Commands for cache expiration', id: 'commands-for-cache-expiration', level: 4 },
          {
            value: 'Configuration description for cache expiration',
            id: 'configuration-description-for-cache-expiration',
            level: 4,
          },
          { value: 'Example for simulating cache expiration', id: 'example-for-simulating-cache-expiration', level: 4 },
          {
            value: 'Simulate cache limit using command-line mode',
            id: 'simulate-cache-limit-using-command-line-mode',
            level: 3,
          },
          { value: 'Commands for cache limit', id: 'commands-for-cache-limit', level: 4 },
          {
            value: 'Configuration description for cache limit',
            id: 'configuration-description-for-cache-limit',
            level: 4,
          },
          { value: 'Example for simulating cache limit', id: 'example-for-simulating-cache-limit', level: 4 },
          {
            value: 'Simulate cache penetration using command-line mode',
            id: 'simulate-cache-penetration-using-command-line-mode',
            level: 3,
          },
          { value: 'Commands for cache penetration', id: 'commands-for-cache-penetration', level: 4 },
          {
            value: 'Configuration description for cache penetration',
            id: 'configuration-description-for-cache-penetration',
            level: 4,
          },
          {
            value: 'Example for simulating cache penetration',
            id: 'example-for-simulating-cache-penetration',
            level: 4,
          },
          {
            value: 'Simulate Sentinel restart using command-line mode',
            id: 'simulate-sentinel-restart-using-command-line-mode',
            level: 3,
          },
          { value: 'Commands for Sentinel restart', id: 'commands-for-sentinel-restart', level: 4 },
          {
            value: 'Configuration description for Sentinel restart',
            id: 'configuration-description-for-sentinel-restart',
            level: 4,
          },
          { value: 'Example for simulating Sentinel restart', id: 'example-for-simulating-sentinel-restart', level: 4 },
          {
            value: 'Simulate Sentinel stop using command-line mode',
            id: 'simulate-sentinel-stop-using-command-line-mode',
            level: 3,
          },
          { value: 'Commands for Sentinel stop', id: 'commands-for-sentinel-stop', level: 4 },
          {
            value: 'Configuration description for Sentinel stop',
            id: 'configuration-description-for-sentinel-stop',
            level: 4,
          },
          {
            value: 'Example for simulating Sentinel restart',
            id: 'example-for-simulating-sentinel-restart-1',
            level: 4,
          },
          {
            value: 'Create Redis fault experiments using service mode',
            id: 'create-redis-fault-experiments-using-service-mode',
            level: 2,
          },
          {
            value: 'Simulate cache expiration using service mode',
            id: 'simulate-cache-expiration-using-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating cache expiration',
            id: 'parameters-for-simulating-cache-expiration',
            level: 4,
          },
          {
            value: 'Example for simulating cache expiration using service mode',
            id: 'example-for-simulating-cache-expiration-using-service-mode',
            level: 4,
          },
          { value: 'Simulate cache limit using service mode', id: 'simulate-cache-limit-using-service-mode', level: 3 },
          { value: 'Parameters for simulating cache limit', id: 'parameters-for-simulating-cache-limit', level: 4 },
          {
            value: 'Example for simulating cache limit using service mode',
            id: 'example-for-simulating-cache-limit-using-service-mode',
            level: 4,
          },
          {
            value: 'Simulate cache penetration using service mode',
            id: 'simulate-cache-penetration-using-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating cache penetration',
            id: 'parameters-for-simulating-cache-penetration',
            level: 4,
          },
          {
            value: 'Example for simulating cache penetration using service mode',
            id: 'example-for-simulating-cache-penetration-using-service-mode',
            level: 4,
          },
          {
            value: 'Simulate Sentinel restart using service mode',
            id: 'simulate-sentinel-restart-using-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating Sentinel restart',
            id: 'parameters-for-simulating-sentinel-restart',
            level: 4,
          },
          {
            value: 'Example for simulating Sentinel restart using service mode',
            id: 'example-for-simulating-sentinel-restart-using-service-mode',
            level: 4,
          },
          {
            value: 'Simulate Sentinel stop using service mode',
            id: 'simulate-sentinel-stop-using-service-mode',
            level: 3,
          },
          { value: 'Parameters for simulating Sentinel stop', id: 'parameters-for-simulating-sentinel-stop', level: 4 },
          {
            value: 'Example for simulating Sentinel stop using service mode',
            id: 'example-for-simulating-sentinel-stop-using-service-mode',
            level: 4,
          },
        ]
      function o(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
          ...(0, s.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(t.p, {
              children: [
                'This document introduces how to use Chaosd to simulate Redis faults. This feature uses Golang interfaces in ',
                (0, n.jsx)(t.code, { children: 'go-redis' }),
                ' package and the ',
                (0, n.jsx)(t.code, { children: 'redis-server' }),
                ' command-line tool. You can create experiments either in command-line mode or service mode.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'create-experiments-using-command-line-mode',
              children: 'Create experiments using command-line mode',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Before creating an experiment, you can run the following command to see the Redis fault types that are supported by Chaosd:',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack redis -h\n' }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "Redis attack related commands\n\nUsage:\n  chaosd attack redis [command]\n\nAvailable Commands:\n  cache-expiration  expire keys in Redis\n  cache-limit       set maxmemory of Redis\n  cache-penetration penetrate cache\n  sentinel-restart  restart sentinel\n  sentinel-stop     stop sentinel\n\nFlags:\n  -h, --help   help for redis\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\nUse \"chaosd attack redis [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Currently, Chaosd supports simulating cache expiration, cache penetration, cache limit, sentinel restart, and sentinel stop.',
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-cache-expiration-using-command-line-mode',
              children: 'Simulate cache expiration using command-line mode',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The meaning of this command is the same as EXPIRE in Redis. For more details, refer to the ',
                (0, n.jsx)(t.a, {
                  href: 'https://redis.io/commands/expire/',
                  children: 'Redis official documentation',
                }),
                '.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.admonition, {
              type: 'note',
              children: (0, n.jsxs)(t.p, {
                children: [
                  'Currently, Chaosd does not support recovering keys that have executed ',
                  (0, n.jsx)(t.code, { children: 'cache-expiration' }),
                  ', so please backup them in advance if you want to recover them.',
                ],
              }),
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'commands-for-cache-expiration', children: 'Commands for cache expiration' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-expiration -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "expire keys in Redis\n\nUsage:\n  chaosd attack redis cache-expiration [flags]\n\nFlags:\n  -a, --addr string         The address of redis server\n      --expiration string   The expiration of the key. A expiration string should be able to be converted to a time duration, such as \"5s\" or \"30m\" (default \"0\")\n  -h, --help                help for cache-expiration\n  -k, --key string          The key to be set a expiration, default expire all keys\n      --option string       The additional options of expiration, only NX, XX, GT, LT supported\n  -p, --password string     The password of server\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'configuration-description-for-cache-expiration',
              children: 'Configuration description for cache expiration',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Redis server to be injected into the fault, for example ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'expiration' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The specified key will be expired after ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            ' arrives',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default value: ',
                            (0, n.jsx)(t.code, { children: '"0"' }),
                            '. Make sure that the string is in the format supported by ',
                            (0, n.jsx)(t.code, { children: 'time.Duration' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'key' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'k' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The key to be expired' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default value: ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            ', which means the expiration is set for all keys',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'option' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Additional options for ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            '. ',
                            (0, n.jsx)(t.strong, { children: 'Only versions of Redis after 7.0.0 support this flag' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default value: ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            '. Only NX, XX, GT, and LT are supported',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-cache-expiration',
              children: 'Example for simulating cache expiration',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-expiration -a 127.0.0.1:6379 --option GT --expiration 1m\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-cache-limit-using-command-line-mode',
              children: 'Simulate cache limit using command-line mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'commands-for-cache-limit', children: 'Commands for cache limit' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-limit -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "set maxmemory of Redis\n\nUsage:\n  chaosd attack redis cache-limit [flags]\n\nFlags:\n  -a, --addr string       The address of redis server\n  -h, --help              help for cache-limit\n  -p, --password string   The password of server\n      --percent string    The percentage of maxmemory\n  -s, --size string       The size of cache (default \"0\")\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'configuration-description-for-cache-limit',
              children: 'Configuration description for cache limit',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Redis server to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'percent' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies ',
                            (0, n.jsx)(t.code, { children: 'maxmemory' }),
                            ' as a percentage of the original value',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Specifies the size of ', (0, n.jsx)(t.code, { children: 'maxmemory' })],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default ',
                            (0, n.jsx)(t.code, { children: '0' }),
                            ', which means no limitation of memory',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-cache-limit',
              children: 'Example for simulating cache limit',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-limit -a 127.0.0.1:6379 -s 256M\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-cache-penetration-using-command-line-mode',
              children: 'Simulate cache penetration using command-line mode',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'This command will send the specified number of ',
                (0, n.jsx)(t.code, { children: 'GET' }),
                ' requests to Redis server as quickly as possible using Redis Pipeline. Since the requested keys do not exist on the Redis server, these requests will cause a cache penetration phenomenon.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'commands-for-cache-penetration', children: 'Commands for cache penetration' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-penetration -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "penetrate cache\n\nUsage:\n  chaosd attack redis cache-penetration [flags]\n\nFlags:\n  -a, --addr string       The address of redis server\n  -h, --help              help for cache-penetration\n  -p, --password string   The password of server\n      --request-num int   The number of requests\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'configuration-description-for-cache-penetration',
              children: 'Configuration description for cache penetration',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Redis server to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'request-num' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the number of requests to be sent to the Redis server',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '0' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-cache-penetration',
              children: 'Example for simulating cache penetration',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-penetration -a 127.0.0.1:6379 --request-num 100000\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-sentinel-restart-using-command-line-mode',
              children: 'Simulate Sentinel restart using command-line mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'commands-for-sentinel-restart', children: 'Commands for Sentinel restart' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis sentinel-restart -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "restart sentinel\n\nUsage:\n  chaosd attack redis sentinel-restart [flags]\n\nFlags:\n  -a, --addr string         The address of redis server\n  -c, --conf string         The config of Redis server\n      --flush-config         Force Sentinel to rewrite its configuration on disk (default true)\n  -h, --help                help for sentinel-restart\n  -p, --password string     The password of server\n      --redis-path string   The path of the redis-server command\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'configuration-description-for-sentinel-restart',
              children: 'Configuration description for Sentinel restart',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Sentinel to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'conf' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the path of Sentinel config file, this file will be used to revover the Sentinel',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'flush-config' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'bool' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Forces Sentinel to rewrite its configuration on disk, including the current Sentinel state',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: 'true' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'redis-path' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the path of ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' command-line tool',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-sentinel-restart',
              children: 'Example for simulating Sentinel restart',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'chaosd attack redis sentinel-restart -a 127.0.0.1:26379 --conf /home/redis-test/sentinel-26379.conf\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-sentinel-stop-using-command-line-mode',
              children: 'Simulate Sentinel stop using command-line mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, { id: 'commands-for-sentinel-stop', children: 'Commands for Sentinel stop' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis sentinel-stop -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "stop sentinel\n\nUsage:\n  chaosd attack redis sentinel-stop [flags]\n\nFlags:\n  -a, --addr string         The address of redis server\n  -c, --conf string         The config path of Redis server\n      --flush-config        Force Sentinel to rewrite its configuration on disk (default true)\n  -h, --help                help for sentinel-stop\n  -p, --password string     The password of server\n      --redis-path string   The path of the redis-server command\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'configuration-description-for-sentinel-stop',
              children: 'Configuration description for Sentinel stop',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Sentinel to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'conf' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the path of Sentinel configuration file, which is used to recover the Sentinel',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'flush-config' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'bool' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Forces Sentinel to rewrite its configuration on disk, including the current Sentinel state',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: 'true' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'redis-path' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the path of ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' command-line tool',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-sentinel-restart-1',
              children: 'Example for simulating Sentinel restart',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'chaosd attack redis sentinel-stop -a 127.0.0.1:26379 --conf /home/redis-test/sentinel-26379.conf\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'create-redis-fault-experiments-using-service-mode',
              children: 'Create Redis fault experiments using service mode',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: 'To create experiments using the service mode, follow the instructions below:',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, { children: 'Run Chaosd in the service mode:' }),
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
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Send a ',
                        (0, n.jsx)(t.code, { children: 'POST' }),
                        ' HTTP request to the ',
                        (0, n.jsx)(t.code, { children: '/api/attack/redis' }),
                        ' path of the Chaosd service.',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(t.pre, {
                      children: (0, n.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 127.0.0.1:31767/api/attack/redis -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'In the above command, you need to configure ',
                        (0, n.jsx)(t.code, { children: 'fault-configuration' }),
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
            (0, n.jsx)(t.admonition, {
              type: 'note',
              children: (0, n.jsxs)(t.p, {
                children: [
                  'When running an experiment, remember to record the UID of the experiment. When you want to end the experiment corresponding to the UID, you need to send a ',
                  (0, n.jsx)(t.code, { children: 'DELETE' }),
                  ' HTTP request to the ',
                  (0, n.jsx)(t.code, { children: '/api/attack/{uid}' }),
                  ' path of the Chaosd service.',
                ],
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-cache-expiration-using-service-mode',
              children: 'Simulate cache expiration using service mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'parameters-for-simulating-cache-expiration',
              children: 'Parameters for simulating cache expiration',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Action of the experiment' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'set to "corrupt"' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Redis server to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'expiration' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The specified key will be expired after ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            ' arrives',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default value: ',
                            (0, n.jsx)(t.code, { children: '"0"' }),
                            '. Make sure that the string is in the format supported by ',
                            (0, n.jsx)(t.code, { children: 'time.Duration' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'key' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The key to be expired' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default value: ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            ', which means the expiration is set for all keys',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'option' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Additional options for ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            '. ',
                            (0, n.jsx)(t.strong, { children: 'Only versions of Redis after 7.0.0 support this flag' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default value: ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            '. Only NX, XX, GT, and LT are supported',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' } }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-cache-expiration-using-service-mode',
              children: 'Example for simulating cache expiration using service mode',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 127.0.0.1:31767/api/attack/redis -H "Content-Type:application/json" -d \'{"action":"expiration", "expiration":"1m","addr":"127.0.0.1:6379"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-cache-limit-using-service-mode',
              children: 'Simulate cache limit using service mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'parameters-for-simulating-cache-limit',
              children: 'Parameters for simulating cache limit',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Action of the experiment' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'set to "cacheLimit"' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Redis server to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'percent' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies ',
                            (0, n.jsx)(t.code, { children: 'maxmemory' }),
                            ' as a percentage of the original value',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Specifies the size of ', (0, n.jsx)(t.code, { children: 'maxmemory' })],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Default ',
                            (0, n.jsx)(t.code, { children: '0' }),
                            ', which means no limitation of memory',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-cache-limit-using-service-mode',
              children: 'Example for simulating cache limit using service mode',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 127.0.0.1:31767/api/attack/redis -H "Content-Type:application/json" -d \'{"action":"cacheLimit", ""addr":"127.0.0.1:6379", "percent":"50%"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-cache-penetration-using-service-mode',
              children: 'Simulate cache penetration using service mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'parameters-for-simulating-cache-penetration',
              children: 'Parameters for simulating cache penetration',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Action of the experiment' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'set to "penetration"' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Redis server to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'request-num' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the number of requests to be sent to the Redis server',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '0' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-cache-penetration-using-service-mode',
              children: 'Example for simulating cache penetration using service mode',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 127.0.0.1:31767/api/attack/redis -H "Content-Type:application/json" -d \'{"action":"penetration", ""addr":"127.0.0.1:6379", "request-num":"10000"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-sentinel-restart-using-service-mode',
              children: 'Simulate Sentinel restart using service mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'parameters-for-simulating-sentinel-restart',
              children: 'Parameters for simulating Sentinel restart',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Action of the experiment' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'set to "restart"' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Sentinel to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'conf' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the path of Sentinel configuration file, which is used to recover the Sentinel',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'flush-config' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Forces Sentinel to rewrite its configuration on disk, including the current Sentinel state',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'bool' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: 'true' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'redis-path' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the path of ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' command-line tool',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-sentinel-restart-using-service-mode',
              children: 'Example for simulating Sentinel restart using service mode',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 127.0.0.1:31767/api/attack/redis -H "Content-Type:application/json" -d \'{"action":"restart", ""addr":"127.0.0.1:26379", "conf":"/home/redis-test/sentinel-26379.conf"}\'\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'simulate-sentinel-stop-using-service-mode',
              children: 'Simulate Sentinel stop using service mode',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'parameters-for-simulating-sentinel-stop',
              children: 'Parameters for simulating Sentinel stop',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Action of the experiment' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'set to "stop"' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'addr' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'The address and port of Sentinel to be injected into the fault, such as ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'conf' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the path of Sentinel configuration file, which is used to recover the Sentinel',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'flush-config' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Forces Sentinel to rewrite its configuration on disk, including the current Sentinel state',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'bool' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: 'true' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'password' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The password to log in to the server',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'redis-path' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the path of ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' command-line tool',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Default value: ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'example-for-simulating-sentinel-stop-using-service-mode',
              children: 'Example for simulating Sentinel stop using service mode',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 127.0.0.1:31767/api/attack/redis -H "Content-Type:application/json" -d \'{"action":"stop", ""addr":"127.0.0.1:26379", "conf":"/home/redis-test/sentinel-26379.conf"}\'\n',
              }),
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, s.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(o, { ...e }) }) : o(e)
      }
    },
    28453: (e, t, i) => {
      i.d(t, { R: () => r, x: () => d })
      var l = i(96540)
      const n = {},
        s = l.createContext(n)
      function r(e) {
        const t = l.useContext(s)
        return l.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function d(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : r(e.components)),
          l.createElement(s.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
