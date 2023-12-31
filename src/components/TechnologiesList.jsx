import { m, useTransform } from 'framer-motion';

import styles from './TechnologiesList.module.css';
import useCheckMobileScreen from '../hooks/use-mobileScreen';

const TechnologiesList = ({ doubleViewportScrollProgress, doubleViewportScrollCompleted }) => {
    const isMobile = useCheckMobileScreen();

    // Customized animation of icons:
    const cssIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 1.03]);
    const jsIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.65]);
    const reactIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.32]);
    const figmaIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.5]);
    const tailwindIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.55]);
    const expressIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.45]);
    const gitIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 1.05]);
    const firebaseIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.45]);
    const midjourneyIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.6]);
    const androidIcon = useTransform(doubleViewportScrollProgress, [0, 1], [0.00001, 0.45]);

    return (
        <div
            className={`${styles.skills_svg_technologies_container} ${
                doubleViewportScrollCompleted ? `${styles.show_tech_labels}` : ''
            }`}
        >
            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="css_icon"
                    className={styles.item}
                >
                    <m.path
                        fill="#6766DB"
                        d="M12 19a.491.491 0 0 1-.221-.052L7.646 16.91a.498.498 0 0 1-.275-.385l-.376-2.962A.5.5 0 0 1 7.491 13h2.488a.5.5 0 0 1 .491.409l.237 1.271 1.347.761 1.728-.781.354-2.66H7.242a.499.499 0 0 1-.493-.419l-.329-2a.499.499 0 0 1 .288-.537L10.14 7.5H6.165a.499.499 0 0 1-.483-.372l-.665-2.5A.498.498 0 0 1 5.5 4h13a.501.501 0 0 1 .491.598l-.498 2.5a.5.5 0 0 1-.284.358L14.79 9h2.656a.5.5 0 0 1 .495.569l-.975 6.987a.5.5 0 0 1-.29.387l-4.472 2.013A.496.496 0 0 1 12 19z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : cssIcon,
                            fill: 'none',
                        }}
                    ></m.path>
                    <m.path
                        fill="#110638"
                        d="M12 24a.507.507 0 0 1-.176-.032l-8-3a.498.498 0 0 1-.321-.418l-2-20A.5.5 0 0 1 2 0h20a.5.5 0 0 1 .497.55l-2 20a.5.5 0 0 1-.321.418l-8 3A.507.507 0 0 1 12 24zm-7.533-3.859L12 22.966l7.533-2.825L21.447 1H2.553l1.914 19.141z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : cssIcon,
                            strokeWidth: '0.7px',
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>CSS</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                    id="javascript"
                    className={styles.item}
                >
                    <m.path
                        fill="#212121"
                        d="M8.5 7.5C8.5 6.67157 9.17157 6 10 6H11.5C11.7761 6 12 6.22386 12 6.5 12 6.77614 11.7761 7 11.5 7H10C9.72386 7 9.5 7.22386 9.5 7.5V8C9.5 8.27614 9.72386 8.5 10 8.5H10.5C11.3284 8.5 12 9.17157 12 10V10.5C12 11.3284 11.3284 12 10.5 12H9C8.72386 12 8.5 11.7761 8.5 11.5 8.5 11.2239 8.72386 11 9 11H10.5C10.7761 11 11 10.7761 11 10.5V10C11 9.72386 10.7761 9.5 10.5 9.5H10C9.17157 9.5 8.5 8.82843 8.5 8V7.5zM8 6.5C8 6.22386 7.77614 6 7.5 6 7.22386 6 7 6.22386 7 6.5V10.5C7 10.7761 6.77614 11 6.5 11H5.5C5.22386 11 5 11.2239 5 11.5 5 11.7761 5.22386 12 5.5 12H6.5C7.32843 12 8 11.3284 8 10.5V6.5z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : jsIcon,
                            strokeWidth: '0.6px',
                            fill: 'none',
                        }}
                    ></m.path>
                    <m.path
                        fill="#212121"
                        d="M2 4.5C2 3.11929 3.11929 2 4.5 2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5Z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : jsIcon,
                            strokeWidth: '0.6px',
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>JavaScript</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="react_icon"
                    className={styles.item}
                >
                    <m.path
                        d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '0.6px',
                            pathLength: isMobile ? 1 : reactIcon,
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>React</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    clipRule="evenodd"
                    viewBox="0 0 24 24"
                    id="figma"
                    className={styles.item}
                >
                    <g transform="translate(-40 -40)">
                        <rect width="24" height="24" x="40" y="40" fill="none"></rect>
                        <m.path
                            fill="#2c2c2c"
                            d="M144.49,381.147L151.51,381.147C153.93,381.147 155.9,383.062 155.9,385.361C155.9,386.705 155.226,387.919 154.182,388.694C155.226,389.47 155.9,390.683 155.9,392.028C155.9,394.326 153.93,396.241 151.51,396.241C150.524,396.241 149.613,395.924 148.88,395.392L148.88,398.694C148.88,400.993 146.911,402.908 144.49,402.908C142.07,402.908 140.1,400.993 140.1,398.694C140.1,397.35 140.774,396.137 141.818,395.361C140.774,394.585 140.1,393.372 140.1,392.028C140.1,390.683 140.774,389.47 141.818,388.694C140.774,387.919 140.1,386.705 140.1,385.361C140.1,383.062 142.07,381.147 144.49,381.147ZM147.12,396.241L144.49,396.241C143.06,396.241 141.86,397.336 141.86,398.694C141.86,400.053 143.06,401.147 144.49,401.147C145.921,401.147 147.12,400.053 147.12,398.694L147.12,396.241ZM148.88,392.028C148.88,390.669 150.079,389.574 151.51,389.574C152.94,389.574 154.14,390.669 154.14,392.028C154.14,393.386 152.94,394.481 151.51,394.481C150.079,394.481 148.88,393.386 148.88,392.028ZM144.457,389.575C143.041,389.591 141.86,390.68 141.86,392.028C141.86,393.386 143.06,394.481 144.49,394.481L147.12,394.481L147.12,389.574L144.49,389.574L144.457,389.575ZM147.12,387.814L147.12,382.908L144.49,382.908C143.06,382.908 141.86,384.002 141.86,385.361C141.86,386.72 143.06,387.814 144.49,387.814L147.12,387.814ZM148.88,387.814L151.51,387.814C152.94,387.814 154.14,386.72 154.14,385.361C154.14,384.002 152.94,382.908 151.51,382.908L148.88,382.908L148.88,387.814Z"
                            transform="translate(-96 -340)"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : figmaIcon,
                                fill: 'none',
                            }}
                        ></m.path>
                    </g>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Figma</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="tailwind"
                    className={styles.item}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <m.path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : tailwindIcon,
                                strokeWidth: '0.8px',
                                fill: 'none',
                            }}
                        ></m.path>
                    </g>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Tailwind CSS</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.item} ${styles.framer_motion_icon}`}
                >
                    <g clipPath="url(#clip0_289_6)">
                        <m.path
                            d="M80 0V40L60 60L40 80L20 60L40 40L80 0Z"
                            fill="black"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                                strokeWidth: '4px',
                                fill: 'none',
                            }}
                        />
                        <m.path
                            d="M80 40V80L60 60L80 40Z"
                            fill="black"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                                strokeWidth: '4px',
                                fill: 'none',
                            }}
                        />
                        <m.path
                            d="M40 40L20 60L0 80V0L20 20L40 40Z"
                            fill="black"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                                strokeWidth: '4px',
                                fill: 'none',
                            }}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_289_6">
                            <rect width="80" height="80" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Framer motion</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    id="express"
                    className={styles.item}
                >
                    <m.path
                        d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : expressIcon,
                            strokeWidth: '3px',
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>ExpressJS</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="nodeJS_icon"
                    className={styles.item}
                >
                    <m.path
                        d="M14.478,14.8829a4.06111,4.06111,0,0,1-2.18725-.39825,1.4389,1.4389,0,0,1-.53547-1.01019.22184.22184,0,0,0-.22662-.21942c-.31659-.00385-.63312-.003-.94965-.00043a.2113.2113,0,0,0-.23138.18628,2.33854,2.33854,0,0,0,.75305,1.84454,3.99135,3.99135,0,0,0,2.22827.8382,8.06151,8.06151,0,0,0,2.53308-.10755,3.12591,3.12591,0,0,0,1.67823-.90442,2.33824,2.33824,0,0,0,.396-2.23077,1.869,1.869,0,0,0-1.2304-1.09454c-1.28077-.4494-2.66431-.41541-3.97-.7569-.22668-.07135-.50366-.1488-.60467-.38879a.85461.85461,0,0,1,.28418-.95478,2.5576,2.5576,0,0,1,1.34875-.33581,4.07051,4.07051,0,0,1,1.88416.26959,1.43564,1.43564,0,0,1,.68677.99219.243.243,0,0,0,.2276.23565c.31433.00641.62878.00171.94311.00214a.22791.22791,0,0,0,.24732-.16772,2.43369,2.43369,0,0,0-1.18665-2.106,5.8791,5.8791,0,0,0-3.2182-.49243V8.08341a3.50546,3.50546,0,0,0-2.17615.87438,2.1746,2.1746,0,0,0-.43438,2.26264,1.92964,1.92964,0,0,0,1.21838,1.06177c1.27649.46106,2.67554.31311,3.96442.72082.25116.08521.54364.21552.6206.49506a.9907.9907,0,0,1-.26965.94616A2.97065,2.97065,0,0,1,14.478,14.8829Zm5.81891-8.44537q-3.73837-2.114-7.47845-4.22418a1.67742,1.67742,0,0,0-1.63733,0Q7.4556,4.31715,3.72968,6.42075a1.54242,1.54242,0,0,0-.8042,1.34271V16.2377a1.55266,1.55266,0,0,0,.8352,1.355c.71351.38837,1.40674.81629,2.13318,1.17884a3.06373,3.06373,0,0,0,2.73822.07525,2.1275,2.1275,0,0,0,.99482-1.92114c.00555-2.79669.00085-5.59351.00213-8.39026a.21981.21981,0,0,0-.20727-.25415c-.31739-.00513-.63526-.003-.95264-.00085a.20935.20935,0,0,0-.228.21368c-.00427,2.77875.00086,5.55829-.00256,8.33746a.94053.94053,0,0,1-.609.88373,1.53242,1.53242,0,0,1-1.23993-.16595q-.99152-.56-1.983-1.11988a.23714.23714,0,0,1-.13464-.23529q0-4.19383,0-8.38726a.2589.2589,0,0,1,.157-.2602Q8.1423,5.4553,11.85419,3.35953a.258.258,0,0,1,.29163.00043Q15.859,5.452,19.57184,7.5455a.262.262,0,0,1,.15613.26142Q19.72733,12,19.72712,16.19376a.242.242,0,0,1-.13294.23828q-3.65643,2.06753-7.31677,4.12909c-.11658.06494-.25458.16943-.39093.09076-.6391-.36176-1.27039-.73755-1.90735-1.10273a.20589.20589,0,0,0-.22968-.01379,5.21834,5.21834,0,0,1-.88208.41162c-.13806.05591-.30792.07184-.40295.19989a1.31566,1.31566,0,0,0,.43127.31061q1.11741.647,2.236,1.29285a1.62967,1.62967,0,0,0,1.65539.046q3.7261-2.101,7.45185-4.20392a1.55627,1.55627,0,0,0,.83563-1.35474V7.76346A1.53956,1.53956,0,0,0,20.29694,6.43753Z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                            strokeWidth: '0.8px',
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>NodeJS</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    id="mongodb"
                    className={styles.item}
                >
                    <m.path
                        fill="#4FAA41"
                        fillRule="evenodd"
                        d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618-1.968 2.588-3.935 5.176-5.901 7.763-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383 2.427-2.917 4.515-6.101 6.191-9.516 1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"
                        clipRule="evenodd"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                            strokeWidth: '3px',
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>MongoDB</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="git"
                    className={styles.item}
                >
                    <g
                        fill="none"
                        stroke="#303c42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-name="<Group>"
                    >
                        <m.path
                            d="M23.21 11.29 12.71.79a1 1 0 0 0-1.41 0L.79 11.29a1 1 0 0 0 0 1.41l10.5 10.5a1 1 0 0 0 1.41 0l10.5-10.5a1 1 0 0 0 0-1.41ZM8.6 3.6l2.34 2.34M12 8.5v7"
                            data-name="<Path>"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                                strokeWidth: '1px',
                                fill: 'none',
                            }}
                        ></m.path>
                        <m.circle
                            cx="12"
                            cy="7"
                            r="1.5"
                            data-name="<Path>"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : gitIcon,
                                strokeWidth: '1px',
                                fill: 'none',
                            }}
                        ></m.circle>
                        <m.circle
                            cx="17"
                            cy="12"
                            r="1.5"
                            data-name="<Path>"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : gitIcon,
                                strokeWidth: '1px',
                                fill: 'none',
                            }}
                        ></m.circle>
                        <m.circle
                            cx="12"
                            cy="17"
                            r="1.5"
                            data-name="<Path>"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : gitIcon,
                                strokeWidth: '1px',
                                fill: 'none',
                            }}
                        ></m.circle>
                        <m.path
                            d="m13.05 8.07 2.88 2.88"
                            data-name="<Path>"
                            style={{
                                stroke: 'var(--text-clr-1)',
                                pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                                strokeWidth: '1px',
                                fill: 'none',
                            }}
                        ></m.path>
                    </g>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Git</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="firebase"
                    className={styles.item}
                >
                    <m.path
                        d="M20.5 19.364L18.296 5.365c-.044-.259-.261-.453-.524-.453-.146 0-.278.06-.375.158L3.5 19.364l7.69 4.428C11.413 23.923 11.681 24 11.966 24c.284 0 .551-.077.781-.211L20.5 19.364 20.5 19.364zM7.37.286C7.28.116 7.105 0 6.902 0 6.637 0 6.417.199 6.377.461L4.063 15.673 9.86 5.06 7.371.289 7.37.286zM14.251 7.148L12.47 3.666c-.091-.174-.267-.29-.47-.29-.203 0-.379.116-.469.287L11.53 3.666l-7.82 14.318L14.251 7.148z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            pathLength: isMobile ? 1 : firebaseIcon,
                            strokeWidth: '.7px',
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Firebase</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    width="550"
                    height="457"
                    viewBox="0 0 550 457"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="midjourney"
                    className={styles.item}
                >
                    <m.path
                        d="M78.6 2.39966C75.8 5.46633 75.6667 9.19965 78.2 12.7997C82.3333 18.533 99.6667 54.7997 105.667 69.9997C121.8 110.533 128.2 138.133 129.267 171.466C130.733 217.733 123 258.933 105.667 295.6C98.3333 310.933 89.4 325.466 80.8667 335.6C77.4 339.6 75 343.733 75 345.733C75 349.066 78.6 353.333 81.5333 353.333C82.6 353.333 88.4667 350.266 94.8667 346.666C122.067 330.933 153.133 319.866 186.333 313.866C202.733 310.933 241.4 311.066 261 314C283.4 317.333 308.467 323.333 327.667 330.133C350.6 338.133 350.2 338.133 353.667 334.666C356.2 332.133 356.467 330.933 355.667 324.933C351.533 295.066 334.067 246.533 314.867 211.6C273.4 136.133 217.667 77.333 143 30.2663C123.667 18.133 88.2 -0.000335693 83.8 -0.000335693C82.0667 -0.000335693 79.8 1.06632 78.6 2.39966ZM118.733 33.4663C216.867 89.5997 293.267 178.8 327.8 278C332.2 290.4 339.267 316.133 338.6 316.8C338.467 317.066 330.733 314.8 321.533 312C286.067 301.066 257.533 296.666 222.333 296.8C182.867 296.8 156.333 302.533 112.067 320.666C110.333 321.333 111.8 317.6 116.867 307.2C135.533 269.866 144.733 228 144.733 180.666C144.733 138 135.267 98.7997 112.733 47.9997C108.067 37.333 103.8 27.8663 103.4 26.933C102.2 24.2663 103.933 24.933 118.733 33.4663Z"
                        fill="black"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '10px',
                            pathLength: isMobile ? 1 : midjourneyIcon,
                            fill: 'none',
                        }}
                    />
                    <m.path
                        d="M223.8 58.1327C220.2 61.7327 221.267 66.1327 226.733 70.1327C229.4 72.2661 236.2 77.1994 241.667 81.1994C256.6 92.2661 290.2 126.533 300.333 141.066C331.4 185.466 363.267 252.266 379 305.999C381.4 313.999 384.333 321.733 385.667 323.199C387.933 325.466 388.867 325.599 399 323.999C413.667 321.733 422.6 322.799 437.667 328.666C465.667 339.733 468.067 336.666 455.533 304.933C439.267 263.599 411.8 212.666 389.8 183.466C362.733 147.466 312.333 99.3327 278.333 76.9327C252.067 59.5994 229.933 51.9994 223.8 58.1327ZM303.267 114.933C339.8 146.133 373.933 184.399 394.733 217.466C412.333 245.466 444.067 309.999 441.533 312.533C441.133 312.933 437 311.999 432.333 310.533C425.533 308.399 420.733 307.866 409.8 308.133L395.933 308.533L388.333 285.866C366.467 221.066 335.133 159.866 303.4 120.266C297.4 112.799 292.733 106.666 293 106.666C293.4 106.666 297.933 110.399 303.267 114.933Z"
                        fill="black"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '10px',
                            pathLength: isMobile ? 1 : midjourneyIcon,
                            fill: 'none',
                        }}
                    />
                    <m.path
                        d="M455 347.467C404.6 350.8 379.667 352.4 168.333 366C42.1999 374 43.5333 374 41.1333 376C37.5333 378.933 38.7333 383.867 46.4666 398.267C50.5999 406 53.6666 412.4 53.3999 412.533C34.8666 426.4 11.7999 440 6.73328 440C3.53328 440 -0.0667244 445.867 0.999942 449.333C3.13328 456.133 13.3999 456 25.6666 449.067C29.6666 446.8 39.2666 440.667 46.9999 435.333C65.5333 422.533 71.5333 419.6 76.8666 420.533C79.1333 420.933 86.3333 425.6 92.9999 430.933C118.2 450.933 127.933 455.333 145.4 454.4C158.333 453.867 166.067 450.267 182.067 438.133C206.6 419.333 214.2 419.333 237 438C256.333 453.867 270.867 458.533 286.333 454.133C295.4 451.467 301.667 447.6 314.333 437.2C336.2 419.2 347.933 419.6 371.667 439.2C387.667 452.533 394.333 455.333 409 455.333C423.933 455.333 430.333 452.533 447.667 438.667C461.933 427.067 468.067 424.133 477.133 424C485.933 424 494.333 428.267 507 439.467C523.8 454.4 541.533 460.533 547.267 453.467C548.6 451.733 549.667 449.6 549.667 448.533C549.667 445.467 544.6 441.333 540.733 441.333C534.733 441.2 527 436.933 515.133 426.8C497.267 411.467 485 406.8 469.667 409.6C459.8 411.333 452.333 415.467 439 426.267C426.467 436.4 420.867 439.467 412.867 440.8C407.133 441.6 398.467 439.867 394.333 436.8C391.933 435.067 392.867 434.4 405.667 428C437 412.4 461.4 397.333 488.333 377.6C518.067 355.733 520.867 352.533 515 346.667C511.8 343.467 513.533 343.467 455 347.467ZM476.067 368C457.533 382 422.6 402.933 395.667 416.267C377.933 425.067 379 424.933 369.933 418.8C359.533 411.6 352.2 409.2 341.667 409.2C327.8 409.2 319.933 412.8 302.467 427.2C289.933 437.6 284.733 440 275.533 440C265.667 440 260.2 437.333 244.867 424.933C228.867 412 221.667 408.933 208.467 409.6C196.067 410.133 190.467 412.667 174.067 425.067C147 445.6 135.8 445.067 106.2 421.733C89.1333 408.4 83.1333 405.333 74.0666 405.333H66.9999L62.8666 397.2C60.7333 392.667 58.9999 388.933 59.2666 388.667C59.7999 388.133 87.9333 386.267 217.667 378C359.933 368.933 432.733 364.133 451.667 362.8C459.8 362.133 470.467 361.6 475.533 361.467L484.733 361.333L476.067 368Z"
                        fill="black"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '10px',
                            pathLength: isMobile ? 1 : midjourneyIcon,
                            fill: 'none',
                        }}
                    />
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Midjourney</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    id="java_icon"
                    className={styles.item}
                >
                    <m.path
                        fill="#0074BD"
                        d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '3px',
                            pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                            fill: 'none',
                        }}
                    />
                    <m.path
                        fill="#EA2D2E"
                        d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '3px',
                            pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                            fill: 'none',
                        }}
                    />
                    <m.path
                        fill="#0074BD"
                        d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '3px',
                            pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                            fill: 'none',
                        }}
                    />
                    <m.path
                        fill="#EA2D2E"
                        d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '3px',
                            pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                            fill: 'none',
                        }}
                    />
                    <m.path
                        fill="#0074BD"
                        d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '3px',
                            pathLength: isMobile ? 1 : doubleViewportScrollProgress,
                            fill: 'none',
                        }}
                    />
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Java(core)</p>
            </div>

            <div className={styles.skill_svg_cont}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="android"
                    className={styles.item}
                >
                    <m.path
                        d="M14.97535,3.01886l.95982-1.73159a.19342.19342,0,0,0-.33833-.18756l-.97045,1.75078a6.54141,6.54141,0,0,0-5.25275,0L8.40316,1.09971a.19342.19342,0,0,0-.33833.18756l.95985,1.7316A5.54614,5.54614,0,0,0,5.93152,7.89522h12.137A5.54615,5.54615,0,0,0,14.97535,3.01886ZM9.19911,5.67446a.5068.5068,0,1,1,.5068-.5068A.50737.50737,0,0,1,9.19911,5.67446Zm5.60178,0a.5068.5068,0,1,1,.5068-.5068A.50737.50737,0,0,1,14.80089,5.67446Zm-8.86946,11.497a1.46713,1.46713,0,0,0,1.46713,1.46713h.9736v3.00095a1.36046,1.36046,0,1,0,2.72091,0V18.63859h1.81386v3.00095a1.36046,1.36046,0,1,0,2.72091,0V18.63859h.97364a1.46713,1.46713,0,0,0,1.46713-1.46713V8.37532H5.93143ZM4.06415,8.14191A1.362,1.362,0,0,0,2.7037,9.50237v5.66846a1.36046,1.36046,0,1,0,2.72091,0V9.50237A1.362,1.362,0,0,0,4.06415,8.14191Zm15.8717,0a1.362,1.362,0,0,0-1.36046,1.36046v5.66846a1.36046,1.36046,0,1,0,2.72091,0V9.50237A1.362,1.362,0,0,0,19.93585,8.14191Z"
                        style={{
                            stroke: 'var(--text-clr-1)',
                            strokeWidth: '.7px',
                            pathLength: isMobile ? 1 : androidIcon,
                            fill: 'none',
                        }}
                    ></m.path>
                </svg>
                <p className={`body_text_100 ${styles.technology_label}`}>Android</p>
            </div>
        </div>
    );
};
export default TechnologiesList;
