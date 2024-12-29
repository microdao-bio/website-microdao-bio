'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5198],
  {
    80215: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => a,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => d,
          metadata: () => s,
          toc: () => o,
        })
      const s = JSON.parse(
        '{"id":"simulate-disk-pressure-in-physical-nodes","title":"Simulate Disk Faults","description":"This document describes how to use Chaosd to simulate disk faults. This feature helps you simulate disk read/write load (via dd) or disk fill (via dd or fallocate).","source":"@site/versioned_docs/version-2.6.2/simulate-disk-pressure-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-disk-pressure-in-physical-nodes","permalink":"/docs/simulate-disk-pressure-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/simulate-disk-pressure-in-physical-nodes.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Simulate Disk Faults"},"sidebar":"docs","previous":{"title":"Simulate Stress Scenarios","permalink":"/docs/simulate-heavy-stress-in-physical-nodes"},"next":{"title":"Simulate JVM Application Faults","permalink":"/docs/simulate-jvm-application-chaos-in-physical-nodes"}}'
      )
      var l = i(74848),
        n = i(28453)
      const d = { title: 'Simulate Disk Faults' },
        r = void 0,
        a = {},
        o = [
          {
            value: 'Create experiments using the command-line mode',
            id: 'create-experiments-using-the-command-line-mode',
            level: 2,
          },
          {
            value: 'Simulate disk read load using the command-line mode',
            id: 'simulate-disk-read-load-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Commands for simulating disk read load', id: 'commands-for-simulating-disk-read-load', level: 4 },
          {
            value: 'Configuration description for simulating disk read load',
            id: 'configuration-description-for-simulating-disk-read-load',
            level: 4,
          },
          { value: 'Example for simulating disk read load', id: 'example-for-simulating-disk-read-load', level: 4 },
          {
            value: 'Simulate disk write load using the command-line mode',
            id: 'simulate-disk-write-load-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Command for simulating disk write load', id: 'command-for-simulating-disk-write-load', level: 4 },
          {
            value: 'Configuration description for simulating disk write load',
            id: 'configuration-description-for-simulating-disk-write-load',
            level: 4,
          },
          { value: 'Example for simulating disk write load', id: 'example-for-simulating-disk-write-load', level: 4 },
          {
            value: 'Simulate disk fill using the command-line mode',
            id: 'simulate-disk-fill-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Command for simulating disk fill', id: 'command-for-simulating-disk-fill', level: 4 },
          {
            value: 'Configuration description for simulating disk fill',
            id: 'configuration-description-for-simulating-disk-fill',
            level: 4,
          },
          { value: 'Example for simulating disk fill', id: 'example-for-simulating-disk-fill', level: 4 },
          {
            value: 'Create experiments using the service mode',
            id: 'create-experiments-using-the-service-mode',
            level: 2,
          },
          {
            value: 'Simulate disk read load using the service mode',
            id: 'simulate-disk-read-load-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating disk read load',
            id: 'parameters-for-simulating-disk-read-load',
            level: 4,
          },
          {
            value: 'Example for simulating disk read load using the service mode',
            id: 'example-for-simulating-disk-read-load-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate disk write load using the service mode',
            id: 'simulate-disk-write-load-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for simulating disk write load',
            id: 'parameters-for-simulating-disk-write-load',
            level: 4,
          },
          {
            value: 'Example for simulating disk write load using the service mode',
            id: 'example-for-simulating-disk-write-load-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Simulate disk fill using the service mode',
            id: 'simulate-disk-fill-using-the-service-mode',
            level: 3,
          },
          { value: 'Parameters for simulating disk fill', id: 'parameters-for-simulating-disk-fill', level: 4 },
          {
            value: 'Example for simulating disk fill using the service mode',
            id: 'example-for-simulating-disk-fill-using-the-service-mode',
            level: 4,
          },
        ]
      function c(e) {
        const t = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, n.R)(),
          ...e.components,
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(t.p, {
              children: [
                'This document describes how to use Chaosd to simulate disk faults. This feature helps you simulate disk read/write load (via ',
                (0, l.jsx)(t.a, { href: 'https://man7.org/linux/man-pages/man1/dd.1.html', children: 'dd' }),
                ') or disk fill (via ',
                (0, l.jsx)(t.a, { href: 'https://man7.org/linux/man-pages/man1/dd.1.html', children: 'dd' }),
                ' or ',
                (0, l.jsx)(t.a, {
                  href: 'https://man7.org/linux/man-pages/man1/fallocate.1.html',
                  children: 'fallocate',
                }),
                ').',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {
              id: 'create-experiments-using-the-command-line-mode',
              children: 'Create experiments using the command-line mode',
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children: 'This section describes how to create disk fault experiments using the command-line mode.',
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Before creating an experiment, you can run the following command to check the types of disk faults that are supported by Chaosd:',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack disk -h\n' }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "disk attack related command\n\nUsage:\n  chaosd attack disk [command]\n\nAvailable Commands:\n  add-payload add disk payload\n  fill        fill disk\n\nFlags:\n  -h, --help   help for disk\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack disk [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Currently, Chaosd supports creating disk read load experiments, disk write load experiments, and disk fill experiments.',
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'simulate-disk-read-load-using-the-command-line-mode',
              children: 'Simulate disk read load using the command-line mode',
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Simulating disk read load is a one-time operation, so the experiment does not need to be recovered.',
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'commands-for-simulating-disk-read-load',
              children: 'Commands for simulating disk read load',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload read -h\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "read payload\n\nUsage:\n  chaosd attack disk add-payload read [flags]\n\nFlags:\n  -h, --help                help for read\n  -p, --path string         'path' specifies the location to read data.If path not provided, payload will read from disk mount on \"/\"\n  -n, --process-num uint8   'process-num' specifies the number of process work on reading , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will read from the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'configuration-description-for-simulating-disk-read-load',
              children: 'Configuration description for simulating disk read load',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the file path to read the data. If this parameter is not specified, or the parameter value is set to an empty string, Chaosd reads from the virtual disk files mounted in the "/" directory. Depending on the permissions to read the files, you might be required to run this program using certain permissions.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: string; default: ', (0, l.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'process-num' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'n' }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the number of concurrently running ',
                            (0, l.jsx)(t.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' programs to be used.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: uint8; default: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            '; range: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            ' to ',
                            (0, l.jsx)(t.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the volume of data to be read. It is the total size of data that dd reads.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            '; ',
                            (0, l.jsx)(t.strong, { children: 'required' }),
                            '; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024*1024 BYTE and so on.',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'example-for-simulating-disk-read-load',
              children: 'Example for simulating disk read load',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'andrew@LAPTOP-NUS30NQD:~/chaosd/bin$ ./chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n[2021/05/20 13:54:31.323 +08:00] [INFO] [disk.go:128] ["5242880+0 records in\\n5242880+0 records out\\n5242880 bytes (5.2 MB, 5.0 MiB) copied, 4.13252 s, 1.3 MB/s\\n"]\n[2021/05/20 13:54:46.977 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6513 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.002 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6762 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.004 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6777 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.015 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6899 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.018 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6914 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.051 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7254 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.074 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7487 s, 9.7 GB/s\\n"]\nRead file /dev/zero successfully, uid: 4bc9b74a-5fe2-4038-b4f2-09ae95b57694\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'simulate-disk-write-load-using-the-command-line-mode',
              children: 'Simulate disk write load using the command-line mode',
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'command-for-simulating-disk-write-load',
              children: 'Command for simulating disk write load',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload write -h\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "write payload\n\nUsage:\n  chaosd attack disk add-payload write [flags]\n\nFlags:\n  -h, --help                help for write\n  -p, --path string         'path' specifies the location to fill data in.If path not provided, payload will write into a temp file, temp file will be deleted after writing\n  -n, --process-num uint8   'process-num' specifies the number of process work on writing , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will write into the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'configuration-description-for-simulating-disk-write-load',
              children: 'Configuration description for simulating disk write load',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: string; default: ', (0, l.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'process-num' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'n' }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the number of concurrently running ',
                            (0, l.jsx)(t.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' programs to be used.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: uint8; default: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            '; range: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            ' to ',
                            (0, l.jsx)(t.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the volume of data to be written. It is the total size of data that dd writes.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            '; ',
                            (0, l.jsx)(t.strong, { children: 'required' }),
                            '; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024*1024 BYTE and so on.',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'example-for-simulating-disk-write-load',
              children: 'Example for simulating disk write load',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack disk add-payload write -s 2G -n 8\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/05/20 14:28:14.452 +08:00] [INFO] [disk.go:128] ["0+0 records in\\n0+0 records out\\n0 bytes copied, 4.3e-05 s, 0.0 kB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.32841 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3344 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33312 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33466 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33189 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33752 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33295 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.794 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3359 s, 115 MB/s\\n"]\nWrite file /home/andrew/chaosd/bin/example255569279 successfully, uid: e66afd86-6f3e-43a0-b161-09447ed84856\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'simulate-disk-fill-using-the-command-line-mode',
              children: 'Simulate disk fill using the command-line mode',
            }),
            '\n',
            (0, l.jsx)(t.h4, { id: 'command-for-simulating-disk-fill', children: 'Command for simulating disk fill' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack disk fill -h\n' }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "fill disk\n\nUsage:\n  chaosd attack disk fill [flags]\n\nFlags:\n  -d, --destroy          destroy file after filled in or allocated\n  -f, --fallocate        fill disk by fallocate instead of dd (default true)\n  -h, --help             help for fill\n  -p, --path string      'path' specifies the location to fill data in.If path not provided, a temp file will be generated and deleted immediately after data filled in or allocated\n  -c, --percent string   'percent' how many percent data of disk will fill in the file path\n  -s, --size string      'size' specifies how many units of data will fill in the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'configuration-description-for-simulating-disk-fill',
              children: 'Configuration description for simulating disk fill',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'destroy' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'If this parameter is set to ',
                            (0, l.jsx)(t.code, { children: 'true,' }),
                            ' the fill file is immediately deleted after being filled.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: bool; default: ', (0, l.jsx)(t.code, { children: 'false' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'fallocate' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'f' }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'If this parameter is set to ',
                            (0, l.jsx)(t.code, { children: 'true' }),
                            ', Linux is used to call fallocate to quickly apply for disk space and size must be greater than ',
                            (0, l.jsx)(t.code, { children: '0' }),
                            '. If this parameter is set to ',
                            (0, l.jsx)(t.code, { children: 'false' }),
                            ', Linux is used to call dd to fill disks at a relatively slow pace.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: bool; default: ', (0, l.jsx)(t.code, { children: 'true' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: string; default: ', (0, l.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'percent' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the percentage of disk size to be filled.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            '; positive integer of the uint type is acceptable; You must set one of ',
                            (0, l.jsx)(t.code, { children: 'size' }),
                            ' or ',
                            (0, l.jsx)(t.code, { children: 'percent' }),
                            ' (both items ',
                            (0, l.jsx)(t.strong, { children: 'cannot' }),
                            ' be ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            ' at the same time).',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the volume of data to be written.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            '; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024*1024 BYTE and so on. You must set one of ',
                            (0, l.jsx)(t.code, { children: 'size' }),
                            ' or ',
                            (0, l.jsx)(t.code, { children: 'percent' }),
                            ' (both items ',
                            (0, l.jsx)(t.strong, { children: 'cannot' }),
                            ' be ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            ' at the same time).',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h4, { id: 'example-for-simulating-disk-fill', children: 'Example for simulating disk fill' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack disk fill -c 50 -d\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/05/20 14:30:02.943 +08:00] [INFO] [disk.go:215]\nFill file /home/andrew/chaosd/bin/example623832242 successfully, uid: 097b4214-8d8e-46ad-8768-c3e0d8cbb326\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.h2, {
              id: 'create-experiments-using-the-service-mode',
              children: 'Create experiments using the service mode',
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children: 'This section describes how to create disk fault experiments using the service mode.',
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'simulate-disk-read-load-using-the-service-mode',
              children: 'Simulate disk read load using the service mode',
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Simulating disk read load is a one-time operation, so the experiment does not need to be recovered.',
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'parameters-for-simulating-disk-read-load',
              children: 'Parameters for simulating disk read load',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Actions of the experiment' }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Set to ', (0, l.jsx)(t.code, { children: '"read-payload"' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the file path to read the data. If this parameter is not specified, or the parameter value is set to an empty string, Chaosd reads from the virtual disk files mounted in the "/" directory. Depending on the permissions to read the files, you might be required to run this program using certain permissions.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: string; default: ', (0, l.jsx)(t.code, { children: '"""' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'payload-process-num' }),
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the number of concurrently running ',
                            (0, l.jsx)(t.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' programs to be used.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: uint8; default: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            '; range: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            ' to ',
                            (0, l.jsx)(t.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the volume of data to be read. It is the total size of data that dd reads.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            '; ',
                            (0, l.jsx)(t.strong, { children: 'required' }),
                            '; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024*1024 BYTE and so on.',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'example-for-simulating-disk-read-load-using-the-service-mode',
              children: 'Example for simulating disk read load using the service mode',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"read-payload","path":"/dev/zero", "payload-process-num":7,"size":"1000G"}\'\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'simulate-disk-write-load-using-the-service-mode',
              children: 'Simulate disk write load using the service mode',
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'parameters-for-simulating-disk-write-load',
              children: 'Parameters for simulating disk write load',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Actions of the experiment' }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Set to ', (0, l.jsx)(t.code, { children: '"write-payload"' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: string; default: ', (0, l.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'payload-process-num' }),
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Specifies the number of concurrently running ',
                            (0, l.jsx)(t.a, {
                              href: 'https://man7.org/linux/man-pages/man1/dd.1.html',
                              children: 'dd',
                            }),
                            ' programs to be used.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: uint8; default: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            '; range: ',
                            (0, l.jsx)(t.code, { children: '1' }),
                            ' to ',
                            (0, l.jsx)(t.code, { children: '255' }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the volume of data to be written. It is the total size of data that dd writes.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            '; ',
                            (0, l.jsx)(t.strong, { children: 'required' }),
                            '; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024*1024 BYTE and so on.',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'example-for-simulating-disk-write-load-using-the-service-mode',
              children: 'Example for simulating disk write load using the service mode',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"write-payload","path":"/tmp/test", "payload-process-num":7,"size":"1000G"}\'\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'simulate-disk-fill-using-the-service-mode',
              children: 'Simulate disk fill using the service mode',
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'parameters-for-simulating-disk-fill',
              children: 'Parameters for simulating disk fill',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, l.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, l.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Actions of the experiment' }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['Set to ', (0, l.jsx)(t.code, { children: '"fill"' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'destroy' }),
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'If this parameter is set to ',
                            (0, l.jsx)(t.code, { children: 'true,' }),
                            ' the fill file is immediately deleted after being filled.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: bool; default: ', (0, l.jsx)(t.code, { children: 'false' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'fill-by-fallocate' }),
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'If this parameter is set to ',
                            (0, l.jsx)(t.code, { children: 'true' }),
                            ', Chaosd uses Linux to call ',
                            (0, l.jsx)(t.code, { children: 'fallocate' }),
                            ' to apply for disk space quickly, and you must set ',
                            (0, l.jsx)(t.code, { children: 'size' }),
                            ' to a value greater than ',
                            (0, l.jsx)(t.code, { children: '0' }),
                            '. If this parameter is set to ',
                            (0, l.jsx)(t.code, { children: 'false' }),
                            ', Chaosd uses Linux to call dd to fill disks at a relatively slow pace.',
                          ],
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: bool; default: ', (0, l.jsx)(t.code, { children: 'true' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'Specifies the file path to write the data. If this parameter is not specified, or the parameter value is set to an empty string, a temporary file will be created in the program execution directory. Depending on the permissions to write the files, you might be required to run this program using certain permissions.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['type: string; default: ', (0, l.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'percent' }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the percentage of disk size to be filled.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ""; positive integer of the uint type is acceptable; You must set one of ',
                            (0, l.jsx)(t.code, { children: 'size' }),
                            ' or ',
                            (0, l.jsx)(t.code, { children: 'percent' }),
                            ' (both items ',
                            (0, l.jsx)(t.strong, { children: 'cannot' }),
                            ' be ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            ' at the same time).',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, l.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the volume of data to be read.',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'type: string; default: ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            '; legal form: the combination of an integer and a unit. For example, 1M, 512kB. Supported units are c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024*1024 BYTE and so on. You must set one of ',
                            (0, l.jsx)(t.code, { children: 'size' }),
                            ' or ',
                            (0, l.jsx)(t.code, { children: 'percent' }),
                            ' (both items ',
                            (0, l.jsx)(t.strong, { children: 'cannot' }),
                            ' be ',
                            (0, l.jsx)(t.code, { children: '""' }),
                            ' at the same time).',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h4, {
              id: 'example-for-simulating-disk-fill-using-the-service-mode',
              children: 'Example for simulating disk fill using the service mode',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/disk -H "Content-Type:application/json" -d \'{"action":"fill","path":"/tmp/test", "fill-by-fallocate":true,"percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, n.R)(), ...e.components }
        return t ? (0, l.jsx)(t, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e)
      }
    },
    28453: (e, t, i) => {
      i.d(t, { R: () => d, x: () => r })
      var s = i(96540)
      const l = {},
        n = s.createContext(l)
      function d(e) {
        const t = s.useContext(n)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function r(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(l)
              : e.components || l
            : d(e.components)),
          s.createElement(n.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
