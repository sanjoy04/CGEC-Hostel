import {useEffect} from "react";
import Navbar_ from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import styles from "./index.module.css";
import {ColRow, ColRowMain} from "../IndexFiles/IndexStyles";
import sanjoy from "../../images/sanjoy.jpg";
import dipantan from "../../images/dipantan.jpg";
import tinku from "../../images/tinku.jpg";
import {Link} from "react-router-dom";

function Index() {
    useEffect(() => {
        document.title = "Developers";
    });

    return (
        <div>
            <Navbar_/>
            <div className={styles.allCards}>
                <a className={styles.card} href="https://www.linkedin.com/in/sanjoyroy04/" target="_blank">
                    <div className={styles.img}>
                        {<img src={sanjoy} alt="Sanjoy"></img>}
                    </div>
                    <div className={styles.cardText}>
                        <h4 className={styles.name}>Name: Sanjoy Roy</h4>
                        <h4>Role: Front-End developer</h4>
                        <h4>Batch: 2023 CSE</h4>

                </div>
                </a>
                <a className={styles.card} href="https://www.linkedin.com/in/dipantan/" target="_blank">
                    <div className={styles.img}>
                        {<img src={dipantan} alt="Dipantan"></img>}
                    </div>
                    <div className={styles.cardText}>
                        <h4 className={styles.name}>Name: Dipantan Chakrabarty</h4>
                        <h4>Role: Backend Developer</h4>
                        <h4>Batch: 2023 CSE</h4>
                    </div>
                </a>

                <a className={styles.card} href="https://www.linkedin.com/in/tinku-mahato17/" target="_blank">
                    <div className={styles.img}>
                        {<img src={tinku} alt="Tinku"></img>}
                    </div>
                    <div className={styles.cardText}>
                        <h4 className={styles.name}>Name: Tinku Mahato</h4>
                        <h4>Role: Front-End Developer</h4>
                        <h4>Batch: 2023 CSE</h4>
                    </div>
                </a>
            </div>
            <Footer/>
        </div>
    );
}

export default Index;