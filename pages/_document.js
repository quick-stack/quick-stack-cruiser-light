import Document             from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Normalize }        from 'styled-normalize';

import GlobalStyle          from '../ui/elements/GlobalStyle';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(
          <>
            <Normalize />
            <GlobalStyle />
            <App {...props} />
          </>,
        ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}