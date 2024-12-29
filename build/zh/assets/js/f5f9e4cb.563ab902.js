'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7983],
  {
    9323: (e, t, l) => {
      l.r(t),
        l.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => a,
          frontMatter: () => d,
          metadata: () => n,
          toc: () => h,
        })
      const n = JSON.parse(
        '{"id":"simulate-network-chaos-in-physical-nodes","title":"\u6a21\u62df\u7f51\u7edc\u6545\u969c","description":"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u7f51\u7edc\u6545\u969c\u573a\u666f\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 iptables\u3001ipsets\u3001tc \u7b49\u5de5\u5177\u4fee\u6539\u7f51\u7edc\u8def\u7531\u3001\u6d41\u91cf\u63a7\u5236\u6765\u6a21\u62df\u7f51\u7edc\u6545\u969c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-network-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-network-chaos-in-physical-nodes","permalink":"/zh/docs/2.5.2/simulate-network-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-network-chaos-in-physical-nodes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"\u6a21\u62df\u7f51\u7edc\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u8fdb\u7a0b\u6545\u969c","permalink":"/zh/docs/2.5.2/simulate-process-chaos-in-physical-nodes"},"next":{"title":"\u6a21\u62df\u4e3b\u673a\u6545\u969c","permalink":"/zh/docs/2.5.2/simulate-host-console-in-physical-nodes"}}'
      )
      var s = l(74848),
        i = l(28453)
      const d = { title: '\u6a21\u62df\u7f51\u7edc\u6545\u969c' },
        r = void 0,
        c = {},
        h = [
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5305\u9519\u8bef\u547d\u4ee4',
            id: '\u7f51\u7edc\u5305\u9519\u8bef\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
            id: '\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u547d\u4ee4',
            id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
            id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5305\u91cd\u590d\u547d\u4ee4',
            id: '\u7f51\u7edc\u5305\u91cd\u590d\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
            id: '\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
            level: 3,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u547d\u4ee4',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
            id: '\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
            level: 3,
          },
          { value: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4', id: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4', level: 4 },
          {
            value: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
            id: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df DNS \u6545\u969c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df-dns-\u6545\u969c',
            level: 3,
          },
          { value: 'DNS \u6545\u969c\u547d\u4ee4', id: 'dns-\u6545\u969c\u547d\u4ee4', level: 4 },
          {
            value: 'DNS \u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: 'dns-\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          { value: 'DNS \u6545\u969c\u793a\u4f8b', id: 'dns-\u6545\u969c\u793a\u4f8b', level: 4 },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
            level: 3,
          },
          {
            value: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u547d\u4ee4',
            id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
            id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
            level: 3,
          },
          { value: '\u5360\u7528\u7aef\u53e3\u547d\u4ee4', id: '\u5360\u7528\u7aef\u53e3\u547d\u4ee4', level: 4 },
          {
            value: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          { value: '\u5360\u7528\u7aef\u53e3\u793a\u4f8b', id: '\u5360\u7528\u7aef\u53e3\u793a\u4f8b', level: 4 },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
            level: 3,
          },
          {
            value: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u670d\u52a1\u6a21\u5f0f\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df DNS \u6545\u969c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df-dns-\u6545\u969c',
            level: 3,
          },
          {
            value: 'DNS \u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: 'dns-\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df DNS \u6545\u969c\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df-dns-\u6545\u969c\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
            level: 3,
          },
          {
            value: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
            level: 3,
          },
          {
            value: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3\u793a\u4f8b',
            level: 4,
          },
        ]
      function x(e) {
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
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.p, {
              children:
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaosd \u6a21\u62df\u7f51\u7edc\u6545\u969c\u573a\u666f\u3002\u8be5\u529f\u80fd\u901a\u8fc7\u4f7f\u7528 iptables\u3001ipsets\u3001tc \u7b49\u5de5\u5177\u4fee\u6539\u7f51\u7edc\u8def\u7531\u3001\u6d41\u91cf\u63a7\u5236\u6765\u6a21\u62df\u7f51\u7edc\u6545\u969c\u3002',
            }),
            '\n',
            (0, s.jsx)(t.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, s.jsxs)(t.p, {
                children: [
                  '\u8bf7\u786e\u4fdd Linux \u5185\u6838\u4e2d\u6709 ',
                  (0, s.jsx)(t.code, { children: 'NET_SCH_NETEM' }),
                  ' \u6a21\u5757\u3002\u5bf9\u4e8e CentOS\uff0c\u53ef\u4ee5\u901a\u8fc7 ',
                  (0, s.jsx)(t.code, { children: 'kernel-modules-extra' }),
                  ' \u5305\u5b89\u88c5\u8be5\u6a21\u5757\uff0c\u5927\u90e8\u5206\u5176\u4ed6\u53d1\u884c\u7248\u9ed8\u8ba4\u5df2\u5b89\u88c5\u76f8\u5e94\u6a21\u5757\u3002',
                ],
              }),
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Chaosd \u652f\u6301\u7684\u7f51\u7edc\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack network --help\n' }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "Network attack related commands\n\nUsage:\n  chaosd attack network [command]\n\nAvailable Commands:\n  bandwidth   limit network bandwidth\n  corrupt     corrupt network packet\n  delay       delay network\n  dns         attack DNS server or map specified host to specified IP\n  duplicate   duplicate network packet\n  loss        loss network packet\n  partition   partition\n  port        attack network port\n\nFlags:\n  -h, --help   help for network\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack network [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u76ee\u524d Chaosd \u652f\u6301\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\uff08corrupt\uff09\u3001\u5ef6\u8fdf\uff08delay\uff09\u3001\u91cd\u590d\uff08duplicate\uff09\u3001\u4e22\u5931\uff08loss\uff09\u56db\u79cd\u5b9e\u9a8c\u573a\u666f\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u901a\u8fc7\u8fd0\u884c\u7f51\u7edc\u5305\u9519\u8bef\u547d\u4ee4\uff0c\u53ef\u4ee5\u67e5\u770b\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u9519\u8bef\u547d\u4ee4',
              children: '\u7f51\u7edc\u5305\u9519\u8bef\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network corrupt --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "corrupt network packet\n\nUsage:\n  chaosd attack network corrupt [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for corrupt\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to corrupt (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5305\u9519\u8bef\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u7f51\u7edc\u5305\u9519\u8bef\u7684\u6bd4\u4f8b',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 1',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
              children: '\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network corrupt -d eth0 -i 172.16.4.4 --percent 50\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u6210\u529f\u65f6\uff0c\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u7ed3\u679c\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 4eab1e62-8d60-45cb-ac85-3c17b8ac4825\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u901a\u8fc7\u8fd0\u884c\u7f51\u7edc\u5305\u5ef6\u8fdf\u547d\u4ee4\uff0c\u67e5\u770b\u6a21\u62df\u7f51\u7edc\u5ef6\u8fdf\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u547d\u4ee4',
              children: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network delay --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "delay network\n\nUsage:\n  chaosd attack network delay [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for delay\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n  -j, --jitter string        jitter time, time units: ns, us (or \xb5s), ms, s, m, h.\n  -l, --latency string       delay egress time, time units: ns, us (or \xb5s), ms, s, m, h.\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5ef6\u8fdf\u65f6\u95f4\u7684\u65f6\u95f4\u957f\u5ea6\u4e0e\u524d\u4e00\u6b21\u5ef6\u8fdf\u65f6\u957f\u7684\u76f8\u5173\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'jitter' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'j' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5ef6\u8fdf\u65f6\u95f4\u7684\u53d8\u5316\u8303\u56f4',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4f7f\u7528\u7684\u65f6\u95f4\u5355\u4f4d\u5305\u62ec\uff1ans\u3001us (\xb5s)\u3001ms\u3001s\u3001m\u3001h\uff0c\u5982 "1ms"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'latency' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'l' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u8868\u793a\u5ef6\u8fdf\u7684\u65f6\u95f4\u957f\u5ea6',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4f7f\u7528\u7684\u65f6\u95f4\u5355\u4f4d\u5305\u62ec\uff1ans\u3001us (\xb5s)\u3001ms\u3001s\u3001m\u3001h\uff0c\u5982 "1ms"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
              children: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network delay -d eth0 -i 172.16.4.4 -l 10ms\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u6210\u529f\u65f6\uff0c\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u7ed3\u679c\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 4b23a0b5-e193-4b27-90a7-3e04235f32ab\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u53ef\u4ee5\u8fd0\u884c\u7f51\u7edc\u5305\u91cd\u590d\u547d\u4ee4\uff0c\u67e5\u770b\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u91cd\u590d\u547d\u4ee4',
              children: '\u7f51\u7edc\u5305\u91cd\u590d\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network duplicate --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "duplicate network packet\n\nUsage:\n  chaosd attack network duplicate [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for duplicate\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to duplicate (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5305\u91cd\u590d\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u7f51\u7edc\u5305\u91cd\u590d\u7684\u6bd4\u4f8b',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 1',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
              children: '\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network duplicate -d eth0 -i 172.16.4.4 --percent 50\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u6210\u529f\u65f6\uff0c\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u7ed3\u679c\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 7bcb74ee-9101-4ae4-82f0-e44c8a7f113c\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u53ef\u4ee5\u8fd0\u884c\u7f51\u7edc\u5305\u4e22\u5931\u547d\u4ee4\uff0c\u67e5\u770b\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u547d\u4ee4',
              children:
                '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network loss --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "loss network packet\n\nUsage:\n  chaosd attack network loss [flags]\n\nFlags:\n  -c, --correlation string   correlation is percentage (10 is 10%) (default \"0\")\n  -d, --device string        the network interface to impact\n  -e, --egress-port string   only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n  -h, --help                 help for loss\n  -H, --hostname string      only impact traffic to these hostnames\n  -i, --ip string            only impact egress traffic to these IP addresses\n      --percent string       percentage of packets to drop (10 is 10%) (default \"1\")\n  -p, --protocol string      only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n  -s, --source-port string   only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. It can only be used in conjunction with -p tcp or -p udp\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u4e22\u5305\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'e' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u7f51\u7edc\u4e22\u5305\u7684\u6bd4\u4f8b',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 1',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 's' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
              children: '\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network loss -d eth0 -i 172.16.4.4 --percent 50\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: '\u8fd0\u884c\u6210\u529f\u65f6\uff0c\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u7ed3\u679c\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'Attack network successfully, uid: 1e818adf-3942-4de4-949b-c8499f120265\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u53ef\u4ee5\u8fd0\u884c\u7f51\u7edc\u5206\u533a\u547d\u4ee4\uff0c\u67e5\u770b\u6a21\u62df\u7f51\u7edc\u5206\u533a\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4',
              children: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network partition --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "partition\n\nUsage:\n  chaosd attack network partition [flags]\n\nFlags:\n      --accept-tcp-flags string   only the packet which match the tcp flag can be accepted, others will be dropped. only set when the protocol is tcp.\n  -d, --device string             the network interface to impact\n      --direction string          specifies the partition direction, values can be 'from', 'to'. 'from' means packets coming from the 'IPAddress' or 'Hostname' and going to your server, 'to' means packets originating from your server and going to the 'IPAddress' or 'Hostname'.\n  -h, --help                      help for partition\n  -H, --hostname string           only impact traffic to these hostnames\n  -i, --ip string                 only impact egress traffic to these IP addresses\n  -p, --protocol string           only impact traffic using this IP protocol, supported: tcp, udp, icmp, all\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'accept-tcp-flags' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u63a5\u6536\u5305\u542b\u6307\u5b9a\u6807\u5fd7\u7684\u7684 tcp \u6570\u636e\u5305\uff0c\u5176\u4ed6\u7684\u5219\u4e22\u5f03\u3002\u5177\u4f53\u914d\u7f6e\u89c4\u5219\u53c2\u8003 iptables \u7684 tcp-flags\u3002\u4ec5\u5f53 protocol \u4e3a tcp \u65f6\u53ef\u4ee5\u914d\u7f6e\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"SYN,ACK SYN,ACK"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'direction' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u5206\u533a\u7684\u65b9\u5411\uff0c\u5bf9\u6765\u81ea/\u53d1\u9001\u5230 hostname \u6307\u5b9a\u7684\u4e3b\u673a\u6216\u8005 ip \u6307\u5b9a\u7684\u5730\u5740\u7684\u6570\u636e\u5305\u8fdb\u884c\u5206\u533a',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a "from" \u6216\u8005 "to"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
              children: '\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: './chaosd attack network partition -i 172.16.4.4 -d eth0 --direction from\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df-dns-\u6545\u969c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df DNS \u6545\u969c',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u53ef\u4ee5\u8fd0\u884c DNS \u6545\u969c\u547d\u4ee4\uff0c\u67e5\u770b\u6a21\u62df DNS \u6545\u969c\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, { id: 'dns-\u6545\u969c\u547d\u4ee4', children: 'DNS \u6545\u969c\u547d\u4ee4' }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network dns --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "attack DNS server or map specified host to specified IP\n\nUsage:\n  chaosd attack network dns [flags]\n\nFlags:\n  -d, --dns-domain-name string   map this host to specified IP\n  -i, --dns-ip string         map specified host to this IP address\n      --dns-server string     update the DNS server in /etc/resolv.conf with this value (default \"123.123.123.123\")\n  -h, --help                  help for dns\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'dns-\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: 'DNS \u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-domain-name' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u8868\u793a\u5f71\u54cd\u7684\u57df\u540d\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-ip' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5c06\u5f71\u54cd\u7684\u57df\u540d\u6620\u5c04\u5230\u8be5\u5730\u5740\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-server' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a DNS \u670d\u52a1\u5730\u5740\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a "123.123.123.123"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, { id: 'dns-\u6545\u969c\u793a\u4f8b', children: 'DNS \u6545\u969c\u793a\u4f8b' }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u901a\u8fc7\u6620\u5c04\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u548c IP \u5730\u5740\u4ece\u800c\u6a21\u62df DNS \u6545\u969c\uff0c\u8fd0\u884c\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: './chaosd attack network dns --dns-ip 123.123.123.123 --dns-domain-name chaos-mesh.org\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u914d\u7f6e\u9519\u8bef\u7684 DNS \u670d\u52a1\u5730\u5740\u4ece\u800c\u6a21\u62df DNS \u6545\u969c\uff0c\u8fd0\u884c\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network dns --dns-server 123.123.123.123\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u53ef\u4ee5\u8fd0\u884c\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u547d\u4ee4\uff0c\u67e5\u770b\u8be5\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u547d\u4ee4',
              children: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network bandwidth --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "limit network bandwidth\n\nUsage:\n  chaosd attack network bandwidth [flags]\n\nFlags:\n  -b, --buffer uint32     the maximum amount of bytes that tokens can be available for instantaneously\n  -d, --device string     the network interface to impact\n  -h, --help              help for bandwidth\n  -H, --hostname string   only impact traffic to these hostnames\n  -i, --ip string         only impact egress traffic to these IP addresses\n  -l, --limit uint32      the number of bytes that can be queued waiting for tokens to become available\n  -m, --minburst uint32   specifies the size of the peakrate bucket\n      --peakrate uint     the maximum depletion rate of the bucket\n  -r, --rate string       the speed knob, allows bps, kbps, mbps, gbps, tbps unit. bps means bytes per second\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'buffer' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'b' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u80fd\u591f\u77ac\u95f4\u53d1\u9001\u7684\u6700\u5927\u5b57\u8282\u6570',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint32 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                            '\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'd' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"eth0"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'H' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"chaos-mesh.org"' }),
                            '\u3002',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a\u3002\u540c\u65f6\u8bbe\u7f6e ',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u65f6\uff0c\u914d\u7f6e\u9879\u5bf9\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u548c IP \u5730\u5740\u5747\u4ea7\u751f\u5f71\u54cd',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-address' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"123.123.123.123"' }),
                            '\u3002',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a\u3002\u540c\u65f6\u8bbe\u7f6e ',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u65f6\uff0c\u914d\u7f6e\u9879\u5bf9\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u548c IP \u5730\u5740\u5747\u4ea7\u751f\u5f71\u54cd',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'limit' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'i' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u7684\u5b57\u8282\u6570',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint32 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                            '\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'minburst' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'peakrate bucket \u7684\u5927\u5c0f',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint32 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'peakrate' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'bucket \u7684\u6700\u5927\u6d88\u8017\u7387',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint64 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'rate' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'r' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5e26\u5bbd\u9650\u5236\u7684\u901f\u7387',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"1mbps"' }),
                            '\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
              children: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  './chaosd attack network bandwidth --buffer 10000 --device eth0 --limit 10000 --rate 10mbps\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u53ef\u4ee5\u8fd0\u884c\u5360\u7528\u7aef\u53e3\u547d\u4ee4\uff0c\u67e5\u770b\u8be5\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u5360\u7528\u7aef\u53e3\u547d\u4ee4',
              children: '\u5360\u7528\u7aef\u53e3\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack network port --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "attack network port\n\nUsage:\n  chaosd attack network port [flags]\n\nFlags:\n  -h, --help          help for port\n  -p, --port string   this specified port is to occupied\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u7f29\u5199' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsx)(t.tbody, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'port' }),
                      (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'p' }),
                      (0, s.jsx)(t.td, {
                        style: { textAlign: 'left' },
                        children: '\u5360\u7528\u7684\u7aef\u53e3\u53f7',
                      }),
                      (0, s.jsx)(t.td, {
                        style: { textAlign: 'left' },
                        children: 'int \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a8080\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u5360\u7528\u7aef\u53e3\u793a\u4f8b',
              children: '\u5360\u7528\u7aef\u53e3\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: './chaosd attack network port --port 8080\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u7f51\u7edc\u6545\u969c\u5b9e\u9a8c',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u8981\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c chaosd\u3002',
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\u5411 chaosd \u670d\u52a1\u7684\u8def\u5f84 /api/attack/network \u53d1\u9001 HTTP POTST \u8bf7\u6c42\u3002 ',
                    (0, s.jsx)(t.code, {
                      children:
                        'bash curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{fault-configuration}\' ',
                    }),
                    ' \u5176\u4e2d ',
                    (0, s.jsx)(t.code, { children: 'fault-configuration' }),
                    ' \u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u8fdb\u884c\u914d\u7f6e\uff0c\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002 \u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 uid \u4fe1\u606f\uff0c\u5f53\u8981\u7ed3\u675f uid \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                    (0, s.jsx)(t.code, { children: '/api/attack/{uid}' }),
                    ' \u53d1\u9001 HTTP DELETE \u8bf7\u6c42\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\u65f6\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u9519\u8bef\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'action' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "corrupt"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5305\u9519\u8bef\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-address' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-protocol' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u7f51\u7edc\u5305\u9519\u8bef\u7684\u6bd4\u4f8b',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 1',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u9519\u8bef\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"corrupt","device":"eth0","ip-address":"172.16.4.4","percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\u65f6\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'action' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "delay"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5ef6\u8fdf\u65f6\u95f4\u7684\u65f6\u95f4\u957f\u5ea6\u4e0e\u524d\u4e00\u6b21\u5ef6\u8fdf\u65f6\u957f\u7684\u76f8\u5173\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-address' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'jitter' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5ef6\u8fdf\u65f6\u95f4\u7684\u53d8\u5316\u8303\u56f4',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4f7f\u7528\u7684\u65f6\u95f4\u5355\u4f4d\u5305\u62ec\uff1ans\u3001us (\xb5s)\u3001ms\u3001s\u3001m\u3001h\uff0c\u5982 "1ms"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'latency' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u8868\u793a\u5ef6\u8fdf\u7684\u65f6\u95f4\u957f\u5ea6',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4f7f\u7528\u7684\u65f6\u95f4\u5355\u4f4d\u5305\u62ec\uff1ans\u3001us (\xb5s)\u3001ms\u3001s\u3001m\u3001h\uff0c\u5982 "1ms"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-protocol' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u5ef6\u8fdf\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"delay","device":"eth0","ip-address":"172.16.4.4","latency":"10ms"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\u65f6\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u91cd\u590d\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'action' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "duplicate"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5305\u91cd\u590d\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-address' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u7f51\u7edc\u5305\u91cd\u590d\u7684\u6bd4\u4f8b',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 1',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-protocol' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"duplicate","ip-address":"172.16.4.4","device":"eth0","percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u65f6\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u7f51\u7edc\u5305\u4e22\u5931\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'action' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "loss"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'correlation' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u4e22\u5305\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 0',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'egress-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u51fa\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-address' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'percent' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u7f51\u7edc\u4e22\u5305\u7684\u6bd4\u4f8b',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'int \u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0 \u5230 100\uff0c\u8868\u793a\u767e\u5206\u6bd4\uff0810 \u8868\u793a 10%\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a 1',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-protocol' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001 udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'source-port' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u76ee\u7684\u7aef\u53e3\u7684\u5165\u53e3\u6d41\u91cf\uff0c\u4ec5\u5f53 protocol \u4e3a tcp \u6216 udp \u65f6\u914d\u7f6e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u4f7f\u7528 "," \u5206\u9694\u6307\u5b9a\u7684\u7aef\u53e3\u6216\u8005\u7aef\u53e3\u8303\u56f4\uff0c\u5982 "80,8001:8010"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5305\u4e22\u5931\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"loss","ip-address":"172.16.4.4","device":"eth0","percent":"50"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u7f51\u7edc\u5206\u533a\u65f6\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u7f51\u7edc\u5206\u533a\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'action' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "partition"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'accept-tcp-flags' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u63a5\u6536\u5305\u542b\u6307\u5b9a\u6807\u5fd7\u7684\u7684 tcp \u6570\u636e\u5305\uff0c\u5176\u4ed6\u7684\u5219\u4e22\u5f03\u3002\u5177\u4f53\u914d\u7f6e\u89c4\u5219\u53c2\u8003 iptables \u7684 tcp-flags\u3002\u4ec5\u5f53 protocol \u4e3a tcp \u65f6\u53ef\u4ee5\u914d\u7f6e\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"SYN,ACK SYN,ACK"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "eth0"\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'direction' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u6307\u5b9a\u5206\u533a\u7684\u65b9\u5411\uff0c\u5bf9\u6765\u81ea/\u53d1\u9001\u5230 hostname \u6307\u5b9a\u7684\u4e3b\u673a\u6216\u8005 ip \u6307\u5b9a\u7684\u5730\u5740\u7684\u6570\u636e\u5305\u8fdb\u884c\u5206\u533a',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a "from" \u6216\u8005 "to"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-address' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'protocol' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u6307\u5b9a\u7684 IP \u534f\u8bae',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u652f\u6301\u534f\u8bae\u7c7b\u578b\u5305\u62ec\uff1atcp\u3001udp\u3001icmp\u3001all\uff08\u8868\u793a\u5f71\u54cd\u6240\u6709\u7f51\u7edc\u534f\u8bae\uff09',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
              children: '\u670d\u52a1\u6a21\u5f0f\u7f51\u7edc\u5206\u533a\u547d\u4ee4\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"partition","ip-address":"172.16.4.4","device":"eth0","direction":"from"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df-dns-\u6545\u969c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df DNS \u6545\u969c',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u62df DNS \u6545\u969c\u65f6\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'dns-\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: 'DNS \u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'action' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "dns"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-domain-name' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u8868\u793a\u5f71\u54cd\u7684\u57df\u540d\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"chaos-mesh.org"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-ip' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u8868\u793a\u5c06\u5f71\u54cd\u7684\u57df\u540d\u6620\u5c04\u5230\u8be5\u5730\u5740\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u4f8b\u5982 "123.123.123.123"',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'dns-server' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a DNS \u670d\u52a1\u5730\u5740\u3002',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a "123.123.123.123"',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df-dns-\u6545\u969c\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df DNS \u6545\u969c\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"dns","dns-ip":"123.123.123.123","dns-domain-name":"chaos-mesh.org"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53c2\u6570' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'buffer' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u80fd\u591f\u77ac\u95f4\u53d1\u9001\u7684\u6700\u5927\u5b57\u8282\u6570',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint32 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                            '\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'device' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5f71\u54cd\u7684\u7f51\u5361\u8bbe\u5907\u540d\u79f0',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"eth0"' }),
                            '\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'hostname' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u4ec5\u5f71\u54cd\u5230\u6307\u5b9a\u7684\u4e3b\u673a\u540d',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"chaos-mesh.org"' }),
                            '\u3002 ',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a\uff1b\u540c\u65f6\u8bbe\u7f6e ',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u65f6\uff0c\u914d\u7f6e\u9879\u5bf9\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u548c IP \u5730\u5740\u5747\u4ea7\u751f\u5f71\u54cd',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'ip-address' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ea\u5f71\u54cd\u5230\u6307\u5b9a\u7684 IP \u5730\u5740',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"123.123.123.123"' }),
                            '\u3002',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u4e0d\u80fd\u90fd\u4e3a\u7a7a\uff1b\u540c\u65f6\u8bbe\u7f6e ',
                            (0, s.jsx)(t.code, { children: 'hostname' }),
                            ' \u4e0e ',
                            (0, s.jsx)(t.code, { children: 'ip' }),
                            ' \u65f6\uff0c\u914d\u7f6e\u9879\u5bf9\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u548c IP \u5730\u5740\u5747\u4ea7\u751f\u5f71\u54cd',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'limit' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u7684\u5b57\u8282\u6570',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint32 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                            '\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'minburst' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'peakrate bucket \u7684\u5927\u5c0f',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint32 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'peakrate' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'bucket \u7684\u6700\u5927\u6d88\u8017\u7387',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'uint64 \u7c7b\u578b\uff0c\u5982\uff1a',
                            (0, s.jsx)(t.code, { children: '10000' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'rate' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u5e26\u5bbd\u9650\u5236\u7684\u901f\u7387',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '"1mbps"' }),
                            '\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u9650\u5236\u7f51\u7edc\u5e26\u5bbd\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"bandwidth","ip-address": "123.123.123.123", "buffer": 10000, "device": "eth0", "limit": 10000, "rate": "10mbps"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u5185\u5bb9\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u5360\u7528\u7aef\u53e3\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsx)(t.tbody, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'port' }),
                      (0, s.jsx)(t.td, {
                        style: { textAlign: 'left' },
                        children: '\u5360\u7528\u7684\u7aef\u53e3\u53f7',
                      }),
                      (0, s.jsx)(t.td, {
                        style: { textAlign: 'left' },
                        children: 'int \u7c7b\u578b\uff0c\u4f8b\u5982\uff1a8080\u3002\u5fc5\u987b\u8981\u8bbe\u7f6e',
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u5360\u7528\u7aef\u53e3\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/network -H "Content-Type:application/json" -d \'{"action":"port", "port": 8080}\'\n',
              }),
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x(e)
      }
    },
    28453: (e, t, l) => {
      l.d(t, { R: () => d, x: () => r })
      var n = l(96540)
      const s = {},
        i = n.createContext(s)
      function d(e) {
        const t = n.useContext(i)
        return n.useMemo(
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
              ? e.components(s)
              : e.components || s
            : d(e.components)),
          n.createElement(i.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
