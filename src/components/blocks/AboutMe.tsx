import React from 'react';
import {Button} from "antd";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="container">
        <div className="aboutMe__wrp">
          <div className="aboutMe__l">
            <img className={'aboutMe-bg'} src={"/15273.jpg"} alt=""/>
            <div className={'mainBanner-video'} style={{pointerEvents: 'none'}}>
              <img src={"/me2.jpg"} alt=""/>
            </div>
            <div className={"aboutMe-btns"}>
              <Button type="primary" size={'large'}>Свяжитесь со мной</Button>
              <Button  size={'large'} >Узнать больше</Button>
            </div>
          </div>
          <div className="aboutMe__r">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div>
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores aut consequatur dicta
                doloribus dolorum, est ipsam maiores modi nihil numquam optio, quam quasi qui, quibusdam quisquam quos
                ratione velit? Consequatur earum excepturi illo labore maxime nobis placeat reprehenderit tempora
                temporibus voluptates? Accusantium, cupiditate facilis illo inventore ipsum laboriosam tempora ullam?
                Dolor ipsa, iure magnam maiores neque nobis officiis tempore. Ab accusamus accusantium animi architecto
                consectetur culpa deleniti fugit incidunt nihil optio pariatur quae, quaerat quis quos, ratione
                reprehenderit, sed soluta suscipit tempora velit! A at, blanditiis eos error est ex facilis itaque iusto
                modi nostrum possimus quam quia quibusdam quisquam repudiandae sapiente sed totam veritatis. Ab
                accusamus consequuntur, corporis, dignissimos ea exercitationem facilis illo maiores, minus molestias
                provident quisquam repellat saepe tempora vitae!

              </p>
              <p>A amet aperiam aspernatur consectetur consequatur consequuntur corporis, culpa delectus deleniti
                distinctio dolores est et, eveniet ex excepturi id inventore iste laboriosam magnam maiores mollitia
                natus necessitatibus neque officiis quo, quod reprehenderit sed sit tenetur totam ullam unde ut
                voluptatum. Aspernatur autem illo officiis perspiciatis quia quibusdam rerum ullam voluptas. Architecto
                asperiores dignissimos eos, facilis harum incidunt necessitatibus nobis praesentium, provident quidem
                repellat ullam vero voluptatem. Culpa delectus dolorem ex in minima praesentium repellat. Accusantium ad
                aliquid corporis doloremque doloribus eos minus officia soluta tempore voluptates! Beatae blanditiis
                distinctio est fugiat molestias mollitia quibusdam, ratione repellat repudiandae totam unde vero
                voluptas voluptate.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;