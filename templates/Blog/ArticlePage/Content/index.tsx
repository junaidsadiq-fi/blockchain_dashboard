import cn from "classnames";
import styles from "./Content.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";

type ContentProps = {};

const Content = ({}: ContentProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <Card
                className={styles.card}
                backgroundCardClass={styles.background}
                cornerCardClass={styles.corner}
                squareCardClass={styles.square}
            >
                <div className={styles.caption}>
                    Everything onic weekly report
                </div>
                <div className={styles.video}>
                    <video
                        className={styles.confetti}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </Card>
            <div className={cn("content", styles.content)}>
                <section>
                    <h2>Scaling solutions, amplified.</h2>
                    <h3>Built by developers, for developers.</h3>
                    <p>
                        onic is committed to fostering the growth of Web3
                        applications by providing the infrastructure and
                        security needed for Web3.
                    </p>
                    <p>
                        onic believes in Web3 for all. onic is a decentralised
                        blockchain scaling platform that enables developers to
                        build scalable user-friendly dApps with low transaction
                        fees without ever sacrificing on security.
                    </p>
                    <figure>
                        <Image
                            src="/images/content-pic-1.jpg"
                            width={996}
                            height={640}
                            alt="Article"
                        />
                    </figure>
                </section>
                <section>
                    <h2>Everything onic weekly report</h2>
                    <h3>Built by developers, for developers.</h3>
                    <p>
                        onic is committed to fostering the growth of Web3
                        applications by providing the infrastructure and
                        security needed for Web3. “onic accelerated our
                        development process tenfold all while maintaining
                        security and integrity from production to post launch”
                    </p>
                    <p>
                        onic believes in Web3 for all. onic is a decentralised
                        blockchain scaling platform that enables developers to
                        build scalable user-friendly dApps with low transaction
                        fees without ever sacrificing on security.
                    </p>
                    <figure>
                        <Image
                            src="/images/content-pic-2.jpg"
                            width={996}
                            height={640}
                            alt="Article"
                        />
                    </figure>
                    <ul>
                        <li>Fully benefit from scalable network effects</li>
                        <li>Inherently more secure than all competitors</li>
                        <li>More open and powerful with 0.001% downtime</li>
                    </ul>
                </section>
                <section>
                    <h2>Scaling solutions, amplified.</h2>
                    <h3>Built by developers, for developers.</h3>
                    <p>
                        onic is committed to fostering the growth of Web3
                        applications by providing the infrastructure and
                        security needed for Web3.
                    </p>
                    <p>
                        onic believes in Web3 for all. onic is a decentralised
                        blockchain scaling platform that enables developers to
                        build scalable user-friendly dApps with low transaction
                        fees without ever sacrificing on security.
                    </p>
                    <figure>
                        <Image
                            src="/images/content-pic-3.jpg"
                            width={996}
                            height={640}
                            alt="Article"
                        />
                    </figure>
                </section>
            </div>
        </div>
    </div>
);

export default Content;
