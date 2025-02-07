import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs/lib';
import '@ant-design/v5-patch-for-react-19';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
      ...initialProps,
      head: [
        <><title>aa</title></>,
        <><meta charSet="utf-8" data-next-head=""/></>,
        <><meta name="viewport" content="width=device-width" data-next-head="" /></>
      ],
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="zn-ch">
        <Head />
        <body style={{ margin: 0, padding: 0 }}>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
