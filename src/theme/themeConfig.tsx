import { ThemeConfig } from "antd/es/config-provider/context";

/**
 * 影响全局布局、视觉效果的主题设置
 */
const GLOBAL_TOKEN: Pick<ThemeConfig, 'token' | 'components'> = {
  token: {
    colorPrimary: '#1F62E7'
  },
  components: {
    Layout: {
      bodyBg: '#F0F3F8',
      siderBg: '#061B43',
      footerBg: '#F0F3F8',
      triggerBg: '#061B43',
      headerBg: '#061B43',
      headerHeight: 64,
      headerPadding: '0 24px'
    }
  }
}

const MENU_TOKEN: Pick<ThemeConfig, 'token' | 'components'> = {
  components: {
    Menu: {
      itemHeight: 50,
      iconSize: 16,
      darkItemBg: '#061B43',
      darkPopupBg: '#061B43',
      darkSubMenuItemBg: '#061B43',
    }
  }
}

export {
  GLOBAL_TOKEN,
  MENU_TOKEN
};
