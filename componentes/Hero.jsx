import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import css from '../styles/Hero.module.css'
import {UilPhone} from '@iconscout/react-unicons'


export default function Hero() {
    return (
        <div className={css.container}>

            {/* lado izquierdo */}
            <div className={css.izquierda}>


                <div className={css.cherryDiv}>
                    <span>Más Que una Salchipapa</span>
                    <Image src={Cherry} alt="" width={40} height={25} />
                </div>

                <div className={css.heroText}>
                    <span>Todo Lo Que</span>
                    <span> Te Encanta</span>
                    <span> En Sólo <span className={css.colorPizza}>Minutos</span>
                    </span>
                </div>
                
                <span className={css.miniText}>
                    Nuestra Misión en que puedas tener tu salchipapa en la puerta de tu casa lo más rápido posible.
                </span>

                <button className={`btn ${css.btn}`}>
                    Vamos a Darle
                </button>

            </div>

            {/* lado derecho */}
            <div className={css.derecha}>

                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>
                </div>

                <div className={css.ContactUs}>
                    <span>
                        Contact Us
                    </span>
                    <div>
                        <UilPhone color= 'white'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
