import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "./NavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.navBar}>
        {/* Left side of navbar with Logo and Title */}
        <div className={styles.logo}>
          <Link href={"/"}>
            <img src={props.src} className={styles.logoImage} />
          </Link>
        </div>

        {/* Navbar items */}
        <ul className={styles.itemList}>
          {props.items.map((item, i) => (
            <li key={i}>
              <Link
                href={`${props?.hrefPrefix}/${item}`}
                className={router.pathname === `/${item}` ? "active" : ""}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Navbar button (Visible only for smaller screens) */}
        <button className={styles.barsIcon} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* Navbar items list (Designed & Visible only for smaller screens) */}
      <ul
        className={
          isOpen
            ? styles.smallItemList
            : styles.hiddenSmallItemBar + " " + styles.smallItemList
        }
      >
        {props.items.map((item) => (
          <li key={item}>
            <Link
              href={`${props?.hrefPrefix}/${item}`}
              className={router.pathname === `/${item}` ? "active" : ""}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
