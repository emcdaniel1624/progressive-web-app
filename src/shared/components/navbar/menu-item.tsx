import Link from "next/link"
import { MobileView, BrowserView } from "react-device-detect"
import { MenuItemDTO } from "../../models"
import styles from "./navbar.module.css"
type Props = {
    item: MenuItemDTO,
    activeTab: string
}

//Google icons for mobile
export const MenuItem = (props:Props) => {

    const activeTab = props.activeTab
    const item = props.item

    return (
      <>
      <MobileView>
        {activeTab === item.route ?
          <Link href={item.route}>
          </Link> :
          <Link href={item.route}>
          </Link>}
      </MobileView>
      <BrowserView>
        {activeTab === item.route ?
          <Link href={item.route}>
            <a style={{color:'white'}}>
              {item.name}
            </a>
          </Link> :
          <Link href={item.route}>
            <a style={{color:'#949494', textDecoration:'none'}}>
              {item.name}
            </a>
          </Link>}
      </BrowserView>
      </>
    )
  }