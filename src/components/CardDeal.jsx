import { site2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Web development <br className="sm:block hidden" />that works for you.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our expert UI/UX and web designers create inspiring and brand-focused design solutions that impress and provide a fantastic user experience, while our development team offers deep expertise in programming technologies and platforms, including CMS, CRM, ERP, and more.
      </p>

      <Button styles={`mt-10`} text="Learn More" />
    </div>

    <div className={layout.sectionImg}>
      <img src={site2} alt="billing" className="w-[100%] h-[100%] rounded" />
    </div>
  </section>
);

export default CardDeal;
