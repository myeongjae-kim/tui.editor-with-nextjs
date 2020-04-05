import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import App from "next/app";

class MyApp extends App {
  render() { 
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}
 
export default MyApp;