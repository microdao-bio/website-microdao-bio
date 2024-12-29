'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9766],
  {
    7992: (e, t, l) => {
      l.r(t),
        l.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => x,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => h,
        })
      const n = JSON.parse(
        '{"id":"simulate-jvm-application-chaos-in-physical-nodes","title":"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c","description":"Chaosd \u53ef\u4ee5\u901a\u8fc7 Byteman \u6a21\u62df JVM \u5e94\u7528\u6545\u969c\uff0c\u4e3b\u8981\u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u6545\u969c\u7c7b\u578b\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/simulate-jvm-application-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-jvm-application-chaos-in-physical-nodes","permalink":"/zh/docs/simulate-jvm-application-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/simulate-jvm-application-chaos-in-physical-nodes.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u78c1\u76d8\u6545\u969c","permalink":"/zh/docs/simulate-disk-pressure-in-physical-nodes"},"next":{"title":"\u6a21\u62df\u65f6\u95f4\u6545\u969c","permalink":"/zh/docs/simulate-time-chaos-on-physical-nodes"}}'
      )
      var s = l(74848),
        d = l(28453)
      const i = { title: '\u6a21\u62df JVM \u5e94\u7528\u6545\u969c' },
        r = void 0,
        c = {},
        h = [
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
            level: 3,
          },
          {
            value: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u547d\u4ee4',
            id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
            id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
            level: 3,
          },
          {
            value: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u547d\u4ee4',
            id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
            id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
            level: 3,
          },
          {
            value: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u547d\u4ee4',
            id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
            id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
            level: 3,
          },
          {
            value: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u547d\u4ee4',
            id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
            id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
            level: 4,
          },
          {
            value:
              '\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
            id: '\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
            level: 3,
          },
          {
            value: '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u547d\u4ee4',
            id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u547d\u4ee4',
            level: 4,
          },
          {
            value:
              '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
            id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0 JVM \u538b\u529b',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0-jvm-\u538b\u529b',
            level: 3,
          },
          {
            value: '\u589e\u52a0 JVM \u538b\u529b\u547d\u4ee4',
            id: '\u589e\u52a0-jvm-\u538b\u529b\u547d\u4ee4',
            level: 4,
          },
          {
            value: '\u589e\u52a0 JVM \u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u589e\u52a0-jvm-\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u589e\u52a0 JVM \u538b\u529b\u793a\u4f8b',
            id: '\u589e\u52a0-jvm-\u538b\u529b\u793a\u4f8b',
            level: 4,
          },
          {
            value:
              '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5728 MySQL \u7684 Java \u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
            id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5728-mysql-\u7684-java-\u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
            level: 3,
          },
          { value: '\u6ce8\u5165\u6545\u969c\u547d\u4ee4', id: '\u6ce8\u5165\u6545\u969c\u547d\u4ee4', level: 4 },
          {
            value: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            id: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            level: 4,
          },
          { value: '\u6ce8\u5165\u6545\u969c\u793a\u4f8b', id: '\u6ce8\u5165\u6545\u969c\u793a\u4f8b', level: 4 },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
            level: 3,
          },
          {
            value: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value:
              '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
            level: 3,
          },
          {
            value: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
            level: 3,
          },
          {
            value: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
            level: 3,
          },
          {
            value: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value:
              '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
            level: 4,
          },
          {
            value:
              '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
            level: 3,
          },
          {
            value:
              '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value:
              '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
            id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0 JVM \u538b\u529b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0-jvm-\u538b\u529b',
            level: 3,
          },
          {
            value: '\u589e\u52a0 JVM \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u589e\u52a0-jvm-\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0 JVM \u538b\u529b\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0-jvm-\u538b\u529b\u793a\u4f8b',
            level: 4,
          },
          {
            value:
              '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u5bf9 MySQL Java \u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u5bf9-mysql-java-\u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
            level: 3,
          },
          {
            value: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            id: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            level: 4,
          },
          {
            value: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df MySQL \u6545\u969c\u793a\u4f8b',
            id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df-mysql-\u6545\u969c\u793a\u4f8b',
            level: 4,
          },
        ]
      function a(e) {
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
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, d.R)(),
          ...e.components,
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(t.p, {
              children: [
                'Chaosd \u53ef\u4ee5\u901a\u8fc7 ',
                (0, s.jsx)(t.a, { href: 'https://github.com/chaos-mesh/byteman', children: 'Byteman' }),
                ' \u6a21\u62df JVM \u5e94\u7528\u6545\u969c\uff0c\u4e3b\u8981\u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u6545\u969c\u7c7b\u578b\uff1a',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, { children: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38' }),
                '\n',
                (0, s.jsx)(t.li, { children: '\u89e6\u53d1\u5783\u573e\u56de\u6536' }),
                '\n',
                (0, s.jsx)(t.li, { children: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf' }),
                '\n',
                (0, s.jsx)(t.li, { children: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c' }),
                '\n',
                (0, s.jsx)(t.li, { children: '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c' }),
                '\n',
                (0, s.jsx)(t.li, { children: '\u589e\u52a0 JVM \u538b\u529b' }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                '\u540c\u65f6\uff0cChaosd \u652f\u6301\u5bf9\u5e38\u7528\u7684\u670d\u52a1\u6216\u5176 Java \u5ba2\u6237\u7aef\u6ce8\u5165\u4e0a\u8ff0\u7684\u6545\u969c\u3002\u6bd4\u5982\uff0c\u5f53 MySQL Java \u5ba2\u6237\u7aef\u6267\u884c\u6307\u5b9a\u7c7b\u578b\u7684 SQL \u8bed\u53e5\uff08',
                (0, s.jsx)(t.code, { children: '"select"' }),
                '\uff0c',
                (0, s.jsx)(t.code, { children: '"update"' }),
                '\uff0c',
                (0, s.jsx)(t.code, { children: '"insert"' }),
                '\uff0c',
                (0, s.jsx)(t.code, { children: '"replace"' }),
                ' \u6216 ',
                (0, s.jsx)(t.code, { children: '"delete"' }),
                '\uff09\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Chaosd \u5728\u8be5\u5ba2\u6237\u7aef\u6ce8\u5165\u5ef6\u8fdf\u6216\u629b\u51fa\u5f02\u5e38\u3002',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Chaosd \u521b\u5efa\u4ee5\u4e0a\u6545\u969c\u7c7b\u578b\u7684 JVM \u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u521b\u5efa JVM \u5e94\u7528\u6545\u969c\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5728\u521b\u5efa\u78c1\u76d8\u6545\u969c\u5b9e\u9a8c\u524d\uff0c\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u7684 JVM \u5e94\u7528\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack jvm -h\n' }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "JVM attack related commands\n\nUsage:\n  chaosd attack jvm [command]\n\nAvailable Commands:\n  exception   throw specified exception for specified method\n  gc          trigger GC for JVM\n  latency     inject latency to specified method\n  mysql       inject fault into MySQL client\n  return      return specified value for specified method\n  rule-file   inject fault with configured byteman rule file\n  stress      inject stress to JVM\n\nFlags:\n  -h, --help       help for jvm\n      --pid int    the pid of Java process which needs to attach\n      --port int   the port of agent server (default 9288)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\nUse \"chaosd attack jvm [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
              children:
                '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u547d\u4ee4',
              children: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm exception --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "throw specified exception for specified method\n\nUsage:\n  chaosd attack jvm exception [options] [flags]\n\nFlags:\n  -c, --class string       Java class name\n      --exception string   the exception which needs to throw for action 'exception'\n  -h, --help               help for exception\n  -m, --method string      the method name in Java class\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'exception' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u629b\u51fa\u7684\u81ea\u5b9a\u4e49\u5f02\u5e38',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0c\u56e0\u4e3a Chaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
              children: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'chaosd attack jvm exception -c Main -m sayhello --exception \'java.io.IOException("BOOM")\' --pid 30045\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 02:39:39.106 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE Main-sayhello-exception-q6nd0\\nCLASS Main\\nMETHOD sayhello\\nAT ENTRY\\nIF true\\nDO \\n\\tthrow new java.io.IOException(\\"BOOM\\");\\nENDRULE\\n"] [file=/tmp/rule.btm296930759]\nAttack jvm successfully, uid: 26a45ae2-d395-46f5-a126-2b2c6c85ae9d\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u547d\u4ee4',
              children: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u629b\u51fa\u89e6\u53d1\u5783\u573e\u56de\u6536\u573a\u666f\u652f\u6301\u7684\u914d\u7f6e\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack jvm gc --help\n' }),
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "trigger GC for JVM\n\nUsage:\n  chaosd attack jvm gc [flags]\n\nFlags:\n  -h, --help   help for gc\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
              children: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm gc --pid 89345\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 02:49:47.850 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE --gc-u0mlf\\nGC\\nENDRULE\\n"] [file=/tmp/rule.btm012481052]\nAttack jvm successfully, uid: f360e70a-5359-49b6-8526-d7e0a3c6f696\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u89e6\u53d1\u5783\u573e\u56de\u6536\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c\uff0c\u5b9e\u9a8c\u4e0d\u9700\u8981\u6062\u590d\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u547d\u4ee4',
              children: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm latency --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "inject latency to specified method\n\nUsage:\n  chaosd attack jvm latency [options] [flags]\n\nFlags:\n  -c, --class string    Java class name\n  -h, --help            help for latency\n      --latency int     the latency duration, unit ms\n  -m, --method string   the method name in Java class\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'latency' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u589e\u52a0\u65b9\u6cd5\u7684\u5ef6\u8fdf\u65f6\u95f4',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e\uff0c\u5355\u4f4d\u4e3a ms',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
              children: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm latency --class Main --method sayhello --latency 5000 --pid 100840\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:08:50.716 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE Main-sayhello-latency-hlib2\\nCLASS Main\\nMETHOD sayhello\\nAT ENTRY\\nIF true\\nDO \\n\\tThread.sleep(5000);\\nENDRULE\\n"] [file=/tmp/rule.btm359997255]\n[2021/08/05 03:08:51.155 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule Main-sayhello-latency-hlib2\\n\\n"]\nAttack jvm successfully, uid: bbe00c57-ac9d-4113-bf0c-2a6f184be261\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
              children:
                '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u547d\u4ee4',
              children: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm return --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "return specified value for specified method\n\nUsage:\n  chaosd attack jvm return [options] [flags]\n\nFlags:\n  -c, --class string    Java class name\n  -h, --help            help for return\n  -m, --method string   the method name in Java class\n      --value string    the return value for action 'return'. Only supports number and string types.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'value' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e\u3002\u76ee\u524d\u652f\u6301\u6570\u5b57\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u8fd4\u56de\u503c\uff0c\u5982\u679c\u4e3a\u5b57\u7b26\u4e32\uff0c\u5219\u9700\u8981\u4f7f\u7528\u53cc\u5f15\u53f7\uff0c\u4f8b\u5982\uff1a"chaos"\u3002',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
              children: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm return --class Main --method getnum --value 999 --pid 112694\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:35:10.603 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE Main-getnum-return-i6gb7\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO \\n\\treturn 999;\\nENDRULE\\n"] [file=/tmp/rule.btm051982059]\n[2021/08/05 03:35:10.820 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule Main-getnum-return-i6gb7\\n\\n"]\nAttack jvm successfully, uid: e2f204f6-4bed-4d92-aade-2b4a47b02e5d\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
              children:
                '\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                '\u4f60\u53ef\u4ee5\u5148\u5728 Byteman \u89c4\u5219\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u6545\u969c\u89c4\u5219\uff0c\u7136\u540e\u518d\u901a\u8fc7\u4f7f\u7528 Chaosd \u6307\u5b9a\u8be5\u6587\u4ef6\u8def\u5f84\u7684\u65b9\u5f0f\u6ce8\u5165\u6545\u969c\u3002\u5173\u4e8e Byteman \u7684\u89c4\u5219\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u547d\u4ee4',
              children: '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm rule-file --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "inject fault with configured byteman rule file\n\nUsage:\n  chaosd attack jvm rule-file [options] [flags]\n\nFlags:\n  -h, --help          help for rule-file\n  -p, --path string   the path of configured byteman rule file\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children:
                '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a Byteman \u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
              children: '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                '\u9996\u5148\u6839\u636e\u5177\u4f53\u7684 Java \u7a0b\u5e8f\uff0c\u5e76\u53c2\u8003 ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                ' \u7f16\u5199\u4e00\u4e2a\u89c4\u5219\u914d\u7f6e\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a',
              ],
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-txt',
                children:
                  'RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                '\u5176\u6b21\uff0c\u5c06\u8be5\u914d\u7f6e\u6587\u4ef6\u4fdd\u5b58\u5230\u6587\u4ef6 ',
                (0, s.jsx)(t.code, { children: 'return.btm' }),
                ' \u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6ce8\u5165\u6545\u969c\uff1a',
              ],
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm rule-file -p ./return.btm --pid 112694\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:45:40.757 +00:00] [INFO] [jvm.go:152] ["rule file data:RULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO\\n    return 9999\\nENDRULE\\n"]\n[2021/08/05 03:45:41.011 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule modify return value\\n\\n"]\nAttack jvm successfully, uid: 5ca2e06d-a7c6-421d-bb67-0c9908bac17a\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0-jvm-\u538b\u529b',
              children: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u6a21\u62df\u589e\u52a0 JVM \u538b\u529b',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0-jvm-\u538b\u529b\u547d\u4ee4',
              children: '\u589e\u52a0 JVM \u538b\u529b\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm stress --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "inject stress to JVM\n\nUsage:\n  chaosd attack jvm stress [options] [flags]\n\nFlags:\n      --cpu-count int   the CPU core number\n  -h, --help            help for stress\n      --mem-type int    the memory type to be allocated. The value can be 'stack' or 'heap'.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0-jvm-\u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u589e\u52a0 JVM \u538b\u529b\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'cpu-count' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u589e\u52a0 CPU \u538b\u529b\u6240\u4f7f\u7528\u7684 CPU \u6838\u7684\u6570\u91cf',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c',
                            (0, s.jsx)(t.code, { children: 'cpu-count' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'mem-type' }),
                            ' \u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'mem-type' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'OOM \u7684\u7c7b\u578b' }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            "string \u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 'stack' \u548c 'heap' \u4e24\u79cd OOM \u7c7b\u578b\u3002",
                            (0, s.jsx)(t.code, { children: 'cpu-count' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'mem-type' }),
                            ' \u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\u3002',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0-jvm-\u538b\u529b\u793a\u4f8b',
              children: '\u589e\u52a0 JVM \u538b\u529b\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm stress --cpu-count 2 --pid 123546\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:59:51.256 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE --stress-jfeiu\\nSTRESS CPU\\nCPUCOUNT 2\\nENDRULE\\n"] [file=/tmp/rule.btm773062009]\n[2021/08/05 03:59:51.613 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule --stress-jfeiu\\n\\n"]\nAttack jvm successfully, uid: b9b997b5-0a0d-4f1f-9081-d52a32318b84\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5728-mysql-\u7684-java-\u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
              children:
                '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5728 MySQL \u7684 Java \u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Chaosd \u652f\u6301\u5728 MySQL \u7684 Java \u5ba2\u6237\u7aef\u6267\u884c\u6307\u5b9a\u7c7b\u578b\u7684 SQL \u8bed\u53e5\u65f6\u5bf9\u5176\u6ce8\u5165\u5ef6\u8fdf\u3001\u629b\u51fa\u5f02\u5e38\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u6ce8\u5165\u6545\u969c\u547d\u4ee4',
              children: '\u6ce8\u5165\u6545\u969c\u547d\u4ee4',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm stress --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "inject fault into MySQL client\n\nUsage:\n  chaosd attack jvm mysql [options] [flags]\n\nFlags:\n  -d, --database string                  the match database\n      --exception string                 the exception message needs to throw\n  -h, --help                             help for mysql\n      --latency int                      the latency duration, unit ms\n  -v, --mysql-connector-version string   the version of mysql-connector-java, only support 5.X.X(set to 5) and 8.X.X(set to 8) (default \"8\")\n      --sql-type string                  the match sql type\n  -t, --table string                     the match table\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which need to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
              children: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u914d\u7f6e\u8bf4\u660e',
            }),
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
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u9ed8\u8ba4\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'database' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'd' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ef\u5339\u914d\u7684\u6307\u5b9a\u7684\u6570\u636e\u5e93\u540d\u79f0',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '\u201ctest\u201d' }),
                          ],
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, s.jsx)(t.code, { children: '""' }),
                            '\uff08\u5373\u5339\u914d\u6240\u6709\u7684\u6570\u636e\u5e93\uff09',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'exception' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u629b\u51fa\u7684\u81ea\u5b9a\u4e49\u5f02\u5e38\u4fe1\u606f',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '\u201cBOOM\u201d' }),
                            '\u3002',
                            (0, s.jsx)(t.code, { children: 'exception' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'latency' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'latency' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6267\u884c SQL \u7684\u5ef6\u8fdf\u65f6\u95f4',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2 (ms)\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '1000' }),
                            '\u3002',
                            (0, s.jsx)(t.code, { children: 'exception' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'latency' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'mysql-connector-version' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'v' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4f7f\u7528\u7684 MySQL \u5ba2\u6237\u7aef (mysql-connector-java) \u7684\u7248\u672c',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u5bf9\u4e8e ',
                            (0, s.jsx)(t.code, { children: '5.X.X' }),
                            ' \u7248\u672c\u8bbe\u7f6e\u4e3a ',
                            (0, s.jsx)(t.code, { children: '5' }),
                            '\uff0c\u5bf9\u4e8e ',
                            (0, s.jsx)(t.code, { children: '8.X.X' }),
                            ' \u7248\u672c\u8bbe\u7f6e\u4e3a ',
                            (0, s.jsx)(t.code, { children: '8' }),
                          ],
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: '8' }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'sql-type' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ef\u5339\u914d\u7684 SQL \u7c7b\u578b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a ',
                            (0, s.jsx)(t.code, { children: '"select"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"update"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"insert"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"replace"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"delete"' }),
                          ],
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, s.jsx)(t.code, { children: '""' }),
                            '\uff08\u5373\u5339\u914d\u6240\u6709\u7c7b\u578b\u7684 SQL\uff09',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'table' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 't' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ef\u5339\u914d\u7684\u6307\u5b9a\u7684\u8868\u540d\u79f0',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['string \u7c7b\u578b\uff0c\u5982 ', (0, s.jsx)(t.code, { children: '"t1"' })],
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, s.jsx)(t.code, { children: '""' }),
                            '\uff08\u5373\u5339\u914d\u6240\u6709\u7684\u8868\uff09',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff08Chaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a\uff09',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int \u7c7b\u578b' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: '9288' }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u8bbe\u7f6e',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' } }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u6ce8\u5165\u6545\u969c\u793a\u4f8b',
              children: '\u6ce8\u5165\u6545\u969c\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, { children: '\u90e8\u7f72 TiDB\uff08\u6216\u8005 MySQL\uff09' }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u90e8\u7f72\u4e00\u4e2a ',
                        (0, s.jsx)(t.code, { children: 'mocktikv' }),
                        ' \u6a21\u5f0f\u7684 TiDB\uff1a',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'export tidb_dir="tidb-v5.3.0-linux-amd64"\ncurl -fsSL -o ${tidb_dir}.tar.gz https://download.pingcap.org/${tidb_dir}.tar.gz\ntar zxvf ${tidb_dir}.tar.gz\n${tidb_dir}/bin/tidb-server -store mocktikv -P 4000 > tidb.log 2>&1 &\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, { children: '\u90e8\u7f72 Demo \u5e94\u7528\u7a0b\u5e8f' }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u90e8\u7f72\u4e00\u4e2a Demo \u5e94\u7528\u7a0b\u5e8f ',
                        (0, s.jsx)(t.code, { children: 'mysqldemo' }),
                        '\u3002\u8be5\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u63a5\u6536 HTTP \u8bf7\u6c42\uff0c\u5e76\u67e5\u8be2 TiDB\uff08\u6216\u8005 MySQL\uff09\u6570\u636e\u5e93\uff1a',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'git clone https://github.com/WangXiangUSTC/byteman-example.git\ncd byteman-example/mysqldemo\nmvn -X package -Dmaven.test.skip=true -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true\nexport MYSQL_DSN=jdbc:"mysql://127.0.0.1:4000/test"\nexport MYSQL_USER=root\nexport MYSQL_CONNECTOR_VERSION=8\nmvn exec:java -Dexec.mainClass="com.mysqldemo.App" > mysqldemo.log 2>&1 &\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsx)(t.p, {
                      children:
                        '\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\uff1a',
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children: 'curl -X GET "http://127.0.0.1:8001/query?sql=SELECT%20*%20FROM%20mysql.user"\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsx)(t.p, {
                      children:
                        '\u4f60\u53ef\u4ee5\u5728\u547d\u4ee4\u8f93\u51fa\u7ed3\u679c\u4e2d\u67e5\u770b\u7528\u6237\u540d\u4e3a root \u7684\u7528\u6237\u7684\u4fe1\u606f\u3002',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, { children: '\u6ce8\u5165\u6545\u969c' }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u5047\u8bbe ',
                        (0, s.jsx)(t.code, { children: 'mysqldemo' }),
                        ' \u7684 PID\uff08\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7\uff09 \u4e3a ',
                        (0, s.jsx)(t.code, { children: '12345' }),
                        '\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u8be5\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6ce8\u5165\u6545\u969c\uff1a',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'chaosd attack jvm mysql --database mysql --table user --port 9288  --exception "BOOM" --pid 12345\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u6ce8\u5165\u6545\u969c\u540e\uff0c\u6b63\u5728\u6267\u884c\u4e0e ',
                        (0, s.jsx)(t.code, { children: 'mysql.user' }),
                        ' \u8868\u76f8\u5173\u7684 SQL \u8bed\u53e5\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u4f1a\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f ',
                        (0, s.jsx)(t.code, { children: 'BOOM' }),
                        '\u3002\u786e\u8ba4\u8be5\u7ed3\u679c\u540e\uff0c\u518d\u6b21\u5411 ',
                        (0, s.jsx)(t.code, { children: 'mysqldemo' }),
                        ' \u53d1\u9001\u67e5\u8be2\u8bf7\u6c42\uff1a',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children: 'curl -X GET "http://127.0.0.1:8001/query?sql=SELECT%20*%20FROM%20mysql.user"\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsx)(t.p, { children: '\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-log',
                        children:
                          'java.sql.SQLException: BOOM\nat com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:129)\n  at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122)\nat com.mysql.cj.jdbc.StatementImpl.executeQuery(StatementImpl.java:1206)\n  at com.mysqldemo.App.querySQL(App.java:125)\n  at com.mysqldemo.App$QueryHandler.handle(App.java:95)\nat jdk.httpserver/com.sun.net.httpserver.Filter$Chain.doFilter(Filter.java:77)\n  at jdk.httpserver/sun.net.httpserver.AuthFilter.doFilter(AuthFilter.java:82)\n  at jdk.httpserver/com.sun.net.httpserver.Filter$Chain.doFilter(Filter.java:80)\n  at jdk.httpserver/sun.net.httpserver.ServerImpl$Exchange$LinkHandler.handle(ServerImpl.java:692)\nat jdk.httpserver/com.sun.net.httpserver.Filter$Chain.doFilter(Filter.java:77)\n  at jdk.httpserver/sun.net.httpserver.ServerImpl$Exchange.run(ServerImpl.java:664)\nat jdk.httpserver/sun.net.httpserver.ServerImpl$DefaultExecutor.execute(ServerImpl.java:159)\n  at jdk.httpserver/sun.net.httpserver.ServerImpl$Dispatcher.handle(ServerImpl.java:442)\n  at jdk.httpserver/sun.net.httpserver.ServerImpl$Dispatcher.run(ServerImpl.java:408)\n  at java.base/java.lang.Thread.run(Thread.java:832)\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c',
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
                    '\n',
                    (0, s.jsx)(t.p, { children: '\u4ee5\u670d\u52a1\u6a21\u5f0f\u8fd0\u884c Chaosd\u3002' }),
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
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                        (0, s.jsx)(t.code, { children: '/api/attack/jvm' }),
                        ' \u53d1\u9001 ',
                        (0, s.jsx)(t.code, { children: 'POST' }),
                        ' HTTP \u8bf7\u6c42\u3002',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u4f60\u9700\u8981\u6309\u7167\u6545\u969c\u7c7b\u578b\u5728 ',
                        (0, s.jsx)(t.code, { children: 'fault-configuration' }),
                        ' \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u6709\u5173\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0b\u6587\u4e2d\u5404\u4e2a\u7c7b\u578b\u6545\u969c\u7684\u76f8\u5173\u53c2\u6570\u8bf4\u660e\u548c\u547d\u4ee4\u793a\u4f8b\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, s.jsxs)(t.p, {
                children: [
                  '\u5728\u8fd0\u884c\u5b9e\u9a8c\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5b58\u5b9e\u9a8c\u7684 UID \u4fe1\u606f\u3002\u5f53\u8981\u7ed3\u675f UID \u5bf9\u5e94\u7684\u5b9e\u9a8c\u65f6\uff0c\u9700\u8981\u5411 Chaosd \u670d\u52a1\u7684\u8def\u5f84 ',
                  (0, s.jsx)(t.code, { children: '/api/attack/{uid}' }),
                  ' \u53d1\u9001 ',
                  (0, s.jsx)(t.code, { children: 'DELETE' }),
                  ' HTTP \u8bf7\u6c42\u3002',
                ],
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "exception"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'exception' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u629b\u51fa\u7684\u81ea\u5b9a\u4e49\u5f02\u5e38',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
              children:
                '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"exception","class":"Main","method":"sayhello","exception":"java.io.IOException(\\"BOOM\\")","pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u89e6\u53d1\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "gc"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
              children:
                '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u89e6\u53d1\u5783\u573e\u56de\u6536\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"gc","pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u89e6\u53d1\u5783\u573e\u56de\u6536\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c\uff0c\u5b9e\u9a8c\u4e0d\u9700\u8981\u6062\u590d\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "latency"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'latency' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u589e\u52a0\u65b9\u6cd5\u7684\u5ef6\u8fdf\u65f6\u95f4',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e\uff0c\u5355\u4f4d\u4e3a ms',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
              children:
                '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"latency","class":"Main","method":"sayhello","latency":5000,"pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "return"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'value' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e\u3002\u76ee\u524d\u652f\u6301\u6570\u5b57\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u8fd4\u56de\u503c\uff0c\u5982\u679c\u4e3a\u5b57\u7b26\u4e32\uff0c\u5219\u9700\u8981\u4f7f\u7528\u53cc\u5f15\u53f7\uff0c\u4f8b\u5982\uff1a"chaos"\u3002',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
              children:
                '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"return","class":"Main","method":"getnum","value":"999","pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
              children:
                '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                '\u901a\u8fc7 Byteman \u89c4\u5219\u914d\u7f6e\u6765\u8bbe\u7f6e\u6545\u969c\u89c4\u5219\u3002\u5173\u4e8e Byteman \u7684\u89c4\u5219\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children:
                '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "rule-data"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'rule-data' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6307\u5b9a Byteman \u914d\u7f6e\u6570\u636e',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e-byteman-\u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
              children:
                '\u670d\u52a1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                '\u9996\u5148\u6839\u636e\u5177\u4f53\u7684 Java \u7a0b\u5e8f\uff0c\u5e76\u53c2\u8003 ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                ' \u7f16\u5199\u4e00\u4e2a\u89c4\u5219\u914d\u7f6e\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a',
              ],
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-txt',
                children:
                  'RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u5176\u6b21\uff0c\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u628a\u914d\u7f6e\u4e2d\u7684\u6362\u884c\u8f6c\u6362\u4e3a\u6362\u884c\u7b26 "\\n"\uff0c\u5e76\u5c06\u8f6c\u6362\u540e\u7684\u6570\u636e\u8bbe\u7f6e\u4e3a\u53c2\u6570 "rule-data" \u7684\u503c\uff1a',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 127.0.0.1:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"rule-data","pid":30045,"rule-data":"\\nRULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO return 9999\\nENDRULE\\n"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0-jvm-\u538b\u529b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0 JVM \u538b\u529b',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u589e\u52a0-jvm-\u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u589e\u52a0 JVM \u538b\u529b\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
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
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u884c\u4e3a' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u8bbe\u7f6e\u4e3a "stress"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'cpu-count' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u589e\u52a0 CPU \u538b\u529b\u6240\u4f7f\u7528\u7684 CPU \u6838\u7684\u6570\u91cf',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c',
                            (0, s.jsx)(t.code, { children: 'cpu-count' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'mem-type' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'mem-type' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'OOM \u7684\u7c7b\u578b' }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            "string \u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 'stack' \u548c 'heap' \u4e24\u79cd OOM \u7c7b\u578b\u3002",
                            (0, s.jsx)(t.code, { children: 'cpu-count' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'mem-type' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u914d\u7f6e',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ',
                            (0, s.jsx)(t.code, { children: '9288' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0cChaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0-jvm-\u538b\u529b\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u589e\u52a0 JVM \u538b\u529b\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"stress","cpu-count":1,"pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u5bf9-mysql-java-\u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
              children:
                '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df\u5bf9 MySQL Java \u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Chaosd \u652f\u6301\u5bf9 MySQL \u7684 Java \u5ba2\u6237\u7aef\u6267\u884c\u6307\u5b9a\u7c7b\u578b\u7684 SQL \u65f6\u6ce8\u5165\u5ef6\u8fdf\u3001\u629b\u51fa\u5f02\u5e38\u3002',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
              children: '\u6ce8\u5165\u6545\u969c\u76f8\u5173\u53c2\u6570\u8bf4\u660e',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u914d\u7f6e\u9879' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u8bf4\u660e' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u503c' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u9ed8\u8ba4\u503c' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'database' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ef\u5339\u914d\u7684\u6307\u5b9a\u7684\u6570\u636e\u5e93\u540d\u79f0',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '\u201ctest\u201d' }),
                          ],
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, s.jsx)(t.code, { children: '""' }),
                            '\uff08\u5373\u5339\u914d\u6240\u6709\u7684\u6570\u636e\u5e93\uff09',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'exception' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u629b\u51fa\u7684\u81ea\u5b9a\u4e49\u5f02\u5e38\u4fe1\u606f',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '\u201cBOOM\u201d' }),
                            '\u3002',
                            (0, s.jsx)(t.code, { children: 'exception' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'latency' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'latency' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u6267\u884c SQL \u7684\u5ef6\u8fdf\u65f6\u95f4',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2 (ms)\uff0c\u5982 ',
                            (0, s.jsx)(t.code, { children: '1000' }),
                            '\u3002',
                            (0, s.jsx)(t.code, { children: 'exception' }),
                            ' \u548c ',
                            (0, s.jsx)(t.code, { children: 'latency' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'mysql-connector-version' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u4f7f\u7528\u7684 MySQL \u5ba2\u6237\u7aef (mysql-connector-java) \u7684\u7248\u672c',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int \u7c7b\u578b\uff0c\u5bf9\u4e8e ',
                            (0, s.jsx)(t.code, { children: '5.X.X' }),
                            ' \u7248\u672c\u8bbe\u7f6e\u4e3a ',
                            (0, s.jsx)(t.code, { children: '5' }),
                            '\uff0c\u5bf9\u4e8e ',
                            (0, s.jsx)(t.code, { children: '8.X.X' }),
                            ' \u7248\u672c\u8bbe\u7f6e\u4e3a ',
                            (0, s.jsx)(t.code, { children: '8' }),
                          ],
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: '8' }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'sql-type' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ef\u5339\u914d\u7684 SQL \u7c7b\u578b',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'string \u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a ',
                            (0, s.jsx)(t.code, { children: '"select"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"update"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"insert"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"replace"' }),
                            '\u3001',
                            (0, s.jsx)(t.code, { children: '"delete"' }),
                          ],
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, s.jsx)(t.code, { children: '""' }),
                            '\uff08\u5373\u5339\u914d\u6240\u6709\u7c7b\u578b\u7684 SQL\uff09',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'table' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u53ef\u5339\u914d\u7684\u6307\u5b9a\u7684\u8868\u540d\u79f0',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['string \u7c7b\u578b\uff0c\u5982 ', (0, s.jsx)(t.code, { children: '"t1"' })],
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, s.jsx)(t.code, { children: '""' }),
                            '\uff08\u5373\u5339\u914d\u6240\u6709\u7684\u8868\uff09',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u5b9e\u9a8c\u7684\u7f16\u53f7' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string \u7c7b\u578b\uff0c\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff08Chaosd \u4f1a\u968f\u673a\u751f\u6210\u4e00\u4e2a\uff09',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: '\u65e0' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int \u7c7b\u578b' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: '9288' }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int \u7c7b\u578b\uff0c\u5fc5\u987b\u8bbe\u7f6e',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' } }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df-mysql-\u6545\u969c\u793a\u4f8b',
              children: '\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u6a21\u62df MySQL \u6545\u969c\u793a\u4f8b',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, {
                      children: '\u90e8\u7f72 TiDB\uff08\u6216\u8005 MySQL\uff09\u548c Demo \u5e94\u7528\u7a0b\u5e8f',
                    }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u5728\u6ce8\u5165\u6545\u969c\u524d\uff0c\u4f60\u9700\u8981\u63d0\u524d\u90e8\u7f72 TiDB\uff08\u6216\u8005 MySQL\uff09\u548c Demo \u5e94\u7528\u7a0b\u5e8f ',
                        (0, s.jsx)(t.code, { children: 'mysqldemo' }),
                        '\u3002\u5177\u4f53\u7684\u90e8\u7f72\u6b65\u9aa4\uff0c\u8bf7\u53c2\u9605 ',
                        (0, s.jsx)(t.a, {
                          href: '#%E6%B3%A8%E5%85%A5%E6%95%85%E9%9A%9C%E7%A4%BA%E4%BE%8B',
                          children:
                            '\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u5728 MySQL \u7684 Java \u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c\u7684\u793a\u4f8b',
                        }),
                        ' \u4e2d\u7684\u6b65\u9aa4 1 \u548c\u6b65\u9aa4 2\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, { children: '\u6ce8\u5165\u6545\u969c' }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        '\u5047\u8bbe ',
                        (0, s.jsx)(t.code, { children: 'mysqldemo' }),
                        ' \u7684 PID\uff08\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 Java \u8fdb\u7a0b\u53f7\uff09 \u4e3a ',
                        (0, s.jsx)(t.code, { children: '12345' }),
                        '\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u8be5\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6ce8\u5165\u6545\u969c\uff1a',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"mysql","database":"mysql", "table":"user", "port":9288, "exception":"boom", "pid":12345}\'\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsx)(t.p, { children: '\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a' }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-log',
                        children:
                          'java.sql.SQLException: BOOM\n at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:129)\n at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122)\nat com.mysql.cj.jdbc.StatementImpl.executeQuery(StatementImpl.java:1206)\n at com.mysqldemo.App.querySQL(App.java:125)\n at com.mysqldemo.App$QueryHandler.handle(App.java:95)\nat jdk.httpserver/com.sun.net.httpserver.Filter$Chain.doFilter(Filter.java:77)\n at jdk.httpserver/sun.net.httpserver.AuthFilter.doFilter(AuthFilter.java:82)\n at jdk.httpserver/com.sun.net.httpserver.Filter$Chain.doFilter(Filter.java:80)\n at jdk.httpserver/sun.net.httpserver.ServerImpl$Exchange$LinkHandler.handle(ServerImpl.java:692)\nat jdk.httpserver/com.sun.net.httpserver.Filter$Chain.doFilter(Filter.java:77)\n at jdk.httpserver/sun.net.httpserver.ServerImpl$Exchange.run(ServerImpl.java:664)\nat jdk.httpserver/sun.net.httpserver.ServerImpl$DefaultExecutor.execute(ServerImpl.java:159)\n at jdk.httpserver/sun.net.httpserver.ServerImpl$Dispatcher.handle(ServerImpl.java:442)\n at jdk.httpserver/sun.net.httpserver.ServerImpl$Dispatcher.run(ServerImpl.java:408)\n at java.base/java.lang.Thread.run(Thread.java:832)\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function x(e = {}) {
        const { wrapper: t } = { ...(0, d.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, t, l) => {
      l.d(t, { R: () => i, x: () => r })
      var n = l(96540)
      const s = {},
        d = n.createContext(s)
      function i(e) {
        const t = n.useContext(d)
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
            : i(e.components)),
          n.createElement(d.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
