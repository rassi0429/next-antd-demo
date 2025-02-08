import type { ReactNode } from 'react';
import dynamic from "next/dynamic";
import { Dropdown, Layout, Menu, MenuProps, Space, ConfigProvider } from 'antd';
import { CaretDownOutlined, KeyOutlined, LogoutOutlined } from '@ant-design/icons';
import UserAvatarIcon from '@/components/icon/UserAvatarIcon';
import { MENU_TOKEN } from "@/theme/themeConfig";
// import { logout, updatePassword } from '@/(api)/user';
// import { redirect } from 'next/navigation';
import pageStyles from '@/styles/base-layout.module.css';

const Header = Layout.Header;
const Content = Layout.Content;

// 系统导航
const menuItems: MenuProps['items'] = [
  {
    key: '/',
    label: '监控面板',
  },
  {
    key: '/config',
    label: '系统配置',
  },
];

const items: MenuProps['items'] = [
  {
    key: 'pwd',
    label: '修改密码',
    icon: <KeyOutlined />,
  },
  {
    key: 'logout',
    label: '退出登陆',
    icon: <LogoutOutlined />,
  },
];

function PageLayout({ children }: Readonly<{ children: ReactNode }>) {

  return (
    <Layout>
      <Header className={pageStyles.header}>
        <ConfigProvider theme={MENU_TOKEN}>
          <Menu theme="dark" mode="horizontal" style={{ width: '100%' }} items={menuItems} />
        </ConfigProvider>
        <Space>
          <UserAvatarIcon style={{ fontSize: 20, color: '#fff', cursor: 'pointer' }} />
          <span style={{ fontSize: 20, color: '#fff' }}>admin</span>
          <Dropdown
            menu={{
              items: items,
              theme: 'dark',
            }}
            placement="bottom"
            trigger={['click']}
          >
            <CaretDownOutlined style={{ fontSize: 16, color: '#fff', cursor: 'pointer' }} />
          </Dropdown>
        </Space>
      </Header>
      <Content className={pageStyles.contentWrapper}>
        <div className={pageStyles.content}>
          {children}
        </div>
      </Content>
    </Layout>
  );
}

const BaseLayout = dynamic(() => Promise.resolve(PageLayout), {
  ssr: false,
});

export default BaseLayout;
