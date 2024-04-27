import Image from "next/image";
import classes from "./page.module.css";
import CountDownRow from "./Components/Countdown/countdown-row";

import patternHills from "@/public/images/pattern-hills.svg";
import bgStars from "@/public/images/bg-stars.svg";
import iconFacebook from "@/public/images/icon-facebook.svg";
import iconPinterest from "@/public/images/icon-pinterest.svg";
import iconInstagram from "@/public/images/icon-instagram.svg";

export default function Home() {
  return (
    <div className={classes.wraper}>
      <header className={classes.header}>
        <h1>WE`RE LAUNCHING SOON</h1>
      </header>
      <main>
        <CountDownRow />
      </main>
      <footer className={classes.footer}>
        <Image src={patternHills} alt="Footer Hills pattern" className={classes.footerImage}/>
        <div className={classes.footerRow}>
          <Image src={iconFacebook } alt="Facebook icon"/>
          <Image src={iconPinterest } alt="Pinterest icon"/>
          <Image src={iconInstagram } alt="Instagram icon"/>
        </div>
      </footer>
    </div>
  );
}
