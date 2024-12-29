'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8134],
  {
    71018: (e, t, l) => {
      l.r(t),
        l.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => j,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => h,
        })
      const s = JSON.parse(
        '{"id":"simulate-redis-chaos-on-physical-nodes","title":"\u6a21\u62df Redis \u6545\u969c","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df Redis \u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 go-redis \u5305\u4e2d\u7684 Golang \u63a5\u53e3\u548c redis-server \u547d\u4ee4\u884c\u5de5\u5177\u6a21\u62df Redis \u6545\u969c\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/simulate-redis-chaos-on-physical-nodes.md","sourceDirName":".","slug":"/simulate-redis-chaos-on-physical-nodes","permalink":"/zh/docs/simulate-redis-chaos-on-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/simulate-redis-chaos-on-physical-nodes.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u6a21\u62df Redis \u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u6587\u4ef6\u6545\u969c","permalink":"/zh/docs/simulate-file-chaos-in-physical-nodes"},"next":{"title":"\u67e5\u627e\u548c\u6062\u590d Chaosd \u5b9e\u9a8c","permalink":"/zh/docs/chaosd-search-recover"}}'
      )
      var n = l(74848),
        d = l(28453)
      const i = { title: '\u6a21\u62df Redis \u6545\u969c' },
        r = void 0,
        c = {},
        h = [
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
            level: 3,
          },
          { value: '\u7f13\u5b58\u8fc7\u671f\u547d\u4ee4', id: '\u7f13\u5b58\u8fc7\u671f\u547d\u4ee4', level: 4 },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
            id: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u547d\u4ee4',
            id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
            id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u547d\u4ee4',
            id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
            id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u91cd\u542f',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u91cd\u542f',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u547d\u4ee4',
            id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
            id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u547d\u4ee4',
            id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
            id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
            level: 3,
          },
          {
            value: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
            level: 4,
          },
        ]
      function x(e) {
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
          ...(0, d.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(t.p, {
              children: [
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df Redis \u6545\u969c\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 ',
                (0, n.jsx)(t.code, { children: 'go-redis' }),
                ' \u5305\u4e2d\u7684 Golang \u63a5\u53e3\u548c ',
                (0, n.jsx)(t.code, { children: 'redis-server' }),
                ' \u547d\u4ee4\u884c\u5de5\u5177\u6a21\u62df Redis \u6545\u969c\u573a\u666f\uff0c\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u6a21\u5f0f\u6216\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u5728\u521b\u5efa Redis \u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Chaosd \u652f\u6301\u7684\u8fdb\u7a0b\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack redis -h\n' }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
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
                '\u76ee\u524d Chaosd \u652f\u6301\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u3001\u7f13\u5b58\u9650\u6d41\u3001\u7f13\u5b58\u7a7f\u900f\u3001\u54e8\u5175\u91cd\u542f\u548c\u54e8\u5175\u4e0d\u53ef\u7528\u7b49\u6545\u969c\u573a\u666f\u3002',
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                '\u8be5\u547d\u4ee4\u4e0e Redis ',
                (0, n.jsx)(t.code, { children: 'EXPIRE' }),
                ' \u64cd\u4f5c\u610f\u4e49\u4e00\u81f4\uff0c\u8be6\u60c5\u53c2\u8003 ',
                (0, n.jsx)(t.a, {
                  href: 'https://redis.io/commands/expire/',
                  children: 'Redis \u5b98\u65b9\u6587\u6863',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, n.jsxs)(t.p, {
                children: [
                  '\u76ee\u524d\u4e0d\u652f\u6301\u6062\u590d\u6267\u884c\u4e86 ',
                  (0, n.jsx)(t.code, { children: 'cache-expiration' }),
                  ' \u64cd\u4f5c\u7684 key\uff0c\u5982\u9700\u6062\u590d\u8bf7\u63d0\u524d\u5907\u4efd\u3002',
                ],
              }),
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u7f13\u5b58\u8fc7\u671f\u547d\u4ee4',
              children: '\u7f13\u5b58\u8fc7\u671f\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-expiration -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
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
              id: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'a' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis \u670d\u52a1\u5668\u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'expiration' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a\u7684\u952e\u503c\u5bf9\u5c06\u4f1a\u5728\u5230\u8fbe ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            ' \u4e4b\u540e\u8fc7\u671f',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u8bf7\u786e\u4fdd\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u4e3a ',
                            (0, n.jsx)(t.code, { children: 'time.Duration' }),
                            ' \u652f\u6301\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '0' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'k' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u952e',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            '\u3002\u5f53\u8be5\u503c\u4e3a\u9ed8\u8ba4\u65f6\uff0c\u5c06\u5bf9\u6240\u6709\u952e\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4',
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u5bf9 ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            ' \u7684\u989d\u5916\u64cd\u4f5c\uff0c\u7528\u4e8e\u8bbe\u7f6e\u952e\u7684\u8fc7\u671f\u6761\u4ef6\u3002',
                            (0, n.jsx)(t.strong, {
                              children:
                                '\u53ea\u6709 Redis 7.0.0 \u4e4b\u540e\u7684\u7248\u672c\u652f\u6301\u8be5\u53c2\u6570',
                            }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            '\u3002\u53ea\u652f\u6301 NX\uff0cXX\uff0cGT\uff0cLT',
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
                          children: (0, n.jsx)(t.code, { children: 'p' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u767b\u5f55 Redis \u670d\u52a1\u5668\u7684\u5bc6\u7801',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
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
              id: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
              children: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
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
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u547d\u4ee4',
              children: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-limit -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
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
              id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'a' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis \u670d\u52a1\u5668\u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
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
                          children: (0, n.jsx)(t.code, { children: 'p' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u767b\u5f55 Redis \u670d\u52a1\u5668\u7684\u5bc6\u7801',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'percent' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'maxmemory' }),
                            ' \u4e3a\u539f\u503c\u7684\u767e\u5206\u6bd4',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'size' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 's' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'maxmemory' }),
                            ' \u7684\u5927\u5c0f',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '0' }),
                            '\uff0c',
                            (0, n.jsx)(t.code, { children: '0' }),
                            ' \u8868\u793a\u4e0d\u9650\u5236\u5185\u5b58\u5927\u5c0f',
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
              id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
              children: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
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
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u8be5\u547d\u4ee4\u5c06\u4f7f\u7528 Redis Pipeline \u5c3d\u5feb\u5730\u5411 Redis \u670d\u52a1\u5668\u53d1\u9001\u6307\u5b9a\u6570\u91cf\u7684 GET \u8bf7\u6c42\uff0c\u5e76\u4e14\u7531\u4e8e\u8bf7\u6c42\u7684\u952e\u503c\u5bf9\u5e76\u4e0d\u5b58\u5728\u4e8e Redis \u670d\u52a1\u5668\uff0c\u8fd9\u4e9b\u8bf7\u6c42\u5c06\u9020\u6210\u7f13\u5b58\u7a7f\u900f\u73b0\u8c61\u3002',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u547d\u4ee4',
              children: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis cache-penetration -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
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
              id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'a' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis \u670d\u52a1\u5668\u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
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
                          children: (0, n.jsx)(t.code, { children: 'p' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u767b\u5f55 Redis \u670d\u52a1\u5668\u7684\u5bc6\u7801',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'request-num' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u5411 Redis \u670d\u52a1\u5668\u53d1\u9001\u7684\u65e0\u6548\u8bf7\u6c42\u6570',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '0' }),
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
              id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
              children: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
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
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u91cd\u542f',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u91cd\u542f',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u547d\u4ee4',
              children: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis sentinel-restart -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
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
              id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'a' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis Sentinel \u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
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
                          children: (0, n.jsx)(t.code, { children: 'c' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u54e8\u5175\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u6062\u590d\u54e8\u5175',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'flush-config' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u5728\u54e8\u5175\u91cd\u542f\u524d\uff0c\u662f\u5426\u5c06\u5185\u5b58\u4e2d\u7684\u914d\u7f6e\u66f4\u65b0\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: 'true' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u767b\u5f55 Redis Sentinel \u7684\u5bc6\u7801',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'redis-path' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' \u547d\u4ee4\u7684\u8def\u5f84',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
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
              id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
              children: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
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
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u547d\u4ee4',
              children: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u547d\u4ee4',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack redis sentinel-stop -h\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
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
              id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'a' }),
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis Sentinel \u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
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
                          children: (0, n.jsx)(t.code, { children: 'c' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u54e8\u5175\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u6062\u590d\u54e8\u5175',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'flush-config' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u5728\u54e8\u5175\u91cd\u542f\u524d\uff0c\u662f\u5426\u5c06\u5185\u5b58\u4e2d\u7684\u914d\u7f6e\u66f4\u65b0\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: 'true' }),
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
                          children: (0, n.jsx)(t.code, { children: 'p' }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u767b\u5f55 Redis Sentinel \u7684\u5bc6\u7801',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'redis-path' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' \u547d\u4ee4\u7684\u8def\u5f84',
                          ],
                        }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
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
              id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
              children: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
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
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, { children: '\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002' }),
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
                        '\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                        (0, n.jsx)(t.code, { children: '/api/attack/redis' }),
                        ' \u53d1\u9001 ',
                        (0, n.jsx)(t.code, { children: 'POST' }),
                        ' HTTP \u8bf7\u6c42\u3002',
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
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                '\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u5728 ',
                (0, n.jsx)(t.code, { children: 'fault-configuration' }),
                ' \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u6709\u5173\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, n.jsxs)(t.p, {
                children: [
                  '\u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 UID \u4fe1\u606f\u3002\u5f53\u8981\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                  (0, n.jsx)(t.code, { children: '/api/attack/{uid}' }),
                  ' \u53d1\u9001 ',
                  (0, n.jsx)(t.code, { children: 'DELETE' }),
                  ' HTTP \u8bf7\u6c42\u3002',
                ],
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(t.code, { children: '"expiration"' })],
                        }),
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
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis \u670d\u52a1\u5668\u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a\u7684\u952e\u503c\u5bf9\u5c06\u4f1a ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            ' \u5230\u8fbe\u4e4b\u540e\u8fc7\u671f',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u8bf7\u786e\u4fdd\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u4e3a ',
                            (0, n.jsx)(t.code, { children: 'time.Duration' }),
                            ' \u652f\u6301\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '0' }),
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
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u8981\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u952e',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            '\u3002\u5f53\u8be5\u503c\u4e3a\u9ed8\u8ba4\u65f6\uff0c\u5c06\u5bf9\u6240\u6709\u952e\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4',
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
                            '\u5bf9 ',
                            (0, n.jsx)(t.code, { children: 'expiration' }),
                            ' \u7684\u989d\u5916\u64cd\u4f5c\uff0c\u7528\u4e8e\u8bbe\u7f6e\u952e\u7684\u8fc7\u671f\u6761\u4ef6\u3002',
                            (0, n.jsx)(t.strong, {
                              children:
                                '\u53ea\u6709 Redis 7.0.0 \u4e4b\u540e\u7684\u7248\u672c\u652f\u6301\u8be5\u53c2\u6570',
                            }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '""' }),
                            '\u3002\u53ea\u652f\u6301 NX\uff0cXX\uff0cGT\uff0cLT',
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
                          children: '\u767b\u5f55 Redis \u670d\u52a1\u5668\u7684\u5bc6\u7801',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u793a\u4f8b',
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
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(t.code, { children: '"cacheLimit"' })],
                        }),
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
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis \u670d\u52a1\u5668\u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                          children: '\u767b\u5f55 Redis \u670d\u52a1\u5668\u7684\u5bc6\u7801',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'maxmemory' }),
                            ' \u4e3a\u539f\u503c\u7684\u767e\u5206\u6bd4',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                          children: [
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'maxmemory' }),
                            ' \u7684\u5927\u5c0f',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            '\u9ed8\u8ba4\u4e3a ',
                            (0, n.jsx)(t.code, { children: '0' }),
                            '\uff0c',
                            (0, n.jsx)(t.code, { children: '0' }),
                            ' \u8868\u793a\u4e0d\u9650\u5236\u5185\u5b58\u5927\u5c0f',
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
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u9650\u6d41\u793a\u4f8b',
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
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(t.code, { children: '"penetration"' })],
                        }),
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
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis \u670d\u52a1\u5668\u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:6379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                          children: '\u767b\u5f55 Redis \u670d\u52a1\u5668\u7684\u5bc6\u7801',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                          children:
                            '\u6307\u5b9a\u5411 Redis \u670d\u52a1\u5668\u53d1\u9001\u7684\u65e0\u6548\u8bf7\u6c42\u6570',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int \u7c7b\u578b' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '0' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u7f13\u5b58\u7a7f\u900f\u793a\u4f8b',
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
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u54e8\u5175\u91cd\u542f\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(t.code, { children: '"restart"' })],
                        }),
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
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis Sentinel \u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a\u54e8\u5175\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u6062\u590d\u54e8\u5175',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a\u5728\u54e8\u5175\u91cd\u542f\u524d\uff0c\u662f\u5426\u5c06\u5185\u5b58\u4e2d\u7684\u914d\u7f6e\u66f4\u65b0\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'bool \u7c7b\u578b' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: 'true' })],
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
                          children: '\u767b\u5f55 Redis Sentinel \u7684\u5bc6\u7801',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' \u547d\u4ee4\u7684\u8def\u5f84',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u91cd\u542f\u793a\u4f8b',
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
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528',
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7c7b\u578b' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
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
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u8bbe\u7f6e\u4e3a ', (0, n.jsx)(t.code, { children: '"stop"' })],
                        }),
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
                            '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Redis Sentinel \u7684\u5730\u5740\u4ee5\u53ca\u7aef\u53e3\u53f7\uff0c\u5982 ',
                            (0, n.jsx)(t.code, { children: '127.0.0.1:26379' }),
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a\u54e8\u5175\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u6062\u590d\u54e8\u5175',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a\u5728\u54e8\u5175\u91cd\u542f\u524d\uff0c\u662f\u5426\u5c06\u5185\u5b58\u4e2d\u7684\u914d\u7f6e\u66f4\u65b0\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'bool \u7c7b\u578b' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: 'true' })],
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
                          children: '\u767b\u5f55 Redis Sentinel \u7684\u5bc6\u7801',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
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
                            '\u6307\u5b9a ',
                            (0, n.jsx)(t.code, { children: 'redis-server' }),
                            ' \u547d\u4ee4\u7684\u8def\u5f84',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['\u9ed8\u8ba4\u4e3a ', (0, n.jsx)(t.code, { children: '""' })],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u6a21\u62df\u54e8\u5175\u4e0d\u53ef\u7528\u793a\u4f8b',
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
      function j(e = {}) {
        const { wrapper: t } = { ...(0, d.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(x, { ...e }) }) : x(e)
      }
    },
    28453: (e, t, l) => {
      l.d(t, { R: () => i, x: () => r })
      var s = l(96540)
      const n = {},
        d = s.createContext(n)
      function i(e) {
        const t = s.useContext(d)
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
              ? e.components(n)
              : e.components || n
            : i(e.components)),
          s.createElement(d.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
