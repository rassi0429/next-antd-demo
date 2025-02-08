import { FC, ReactNode } from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import type { AppProps } from 'next/app';
import { GLOBAL_TOKEN } from '@/theme/themeConfig';
import { NextComponentType } from "next/dist/shared/lib/utils";
import zhCN from 'antd/es/locale/zh_CN';
import InitAppNotification from "@/components/notification";
import "@/styles/globals.css";

declare type ComponentType = NextComponentType & {
  Layout: FC<{ children: ReactNode }>;
}

const Noop: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

function App({ Component, pageProps }: Omit<AppProps, 'Component'> & { Component: ComponentType }) {

  const Layout = Component.Layout ?? Noop;

  return (
    <ConfigProvider
      locale={zhCN}
      componentSize="middle"
      popupMatchSelectWidth={true}
      input={{ autoComplete: 'off' }}
      theme={{
        cssVar: true,
        ...GLOBAL_TOKEN,
      }}
    >
      <AntdApp>
        <InitAppNotification />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App;
