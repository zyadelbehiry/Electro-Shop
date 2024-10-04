import React from "react";
import style from "./About.module.css";
import animations from "../../Animations/Animations.module.css";
import img from "../../Assets/labtop.png";
const About = () => {
  return (
    <div className={style["about"]}>
      <h1 className={animations["move-right"]}>about</h1>
      <div className={animations["move-up"]}>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, of type and scrambled it to make a type specimen book. But also
          the leap into electronic typesetting, remaining essentially unchanged.
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining.
        </p>
        <h3>
          Cinnamon eu so, cultivar sweet crema java blue mountain iced
          cappuccino acerbic flavour. Con panna, dark coffee coffee crema
          cortado, carajillo sugar wings robust coffee. Spoon, iced organic,
          medium, acerbic dripper pumpkin spice robust black single origin. Qui
          americano coffee milk lungo crema dripper. Grinder plunger pot est
          percolator medium shop latte foam crema café au lait wings.
        </h3>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, of type and scrambled it to make a type specimen book. But also
          the leap into electronic typesetting, remaining essentially unchanged.
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining.
        </p>
      </div>
    </div>
  );
};

export default About;
