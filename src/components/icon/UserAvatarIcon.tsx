
import Icon from "@ant-design/icons";

// 拓扑图 - 工具栏 - 保存固定拓扑布局的图标按钮
const UserAvatarSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path d="M501.76 538.624c152.064 0 275.968-116.736 275.968-260.096 0-143.36-123.904-260.096-275.968-260.096S225.792 135.168 225.792 278.528c0 143.36 123.904 260.096 275.968 260.096z m-105.984 47.616c-192 0-335.872 124.416-335.872 305.664v19.456c0 94.72 153.6 94.72 348.672 94.72h206.848c186.88 0 348.672 0 348.672-94.72v-19.456c0-180.736-143.36-305.664-335.872-305.664H395.776z"></path>
  </svg>
)

const UserAvatarIcon = (props: any) => (<Icon component={UserAvatarSvg} {...props} />);

export default UserAvatarIcon;
