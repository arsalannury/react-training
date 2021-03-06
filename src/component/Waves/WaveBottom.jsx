import {useWaveStyle} from './WavesStyle';

const WaveBottom = () => {
  const classes = useWaveStyle();
  return (
    <>
      <svg className={classes.wawe_bottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fillOpacity="0.5"
          d="M0,160L30,154.7C60,149,120,139,180,149.3C240,160,300,192,360,213.3C420,235,480,245,540,234.7C600,224,660,192,720,154.7C780,117,840,75,900,85.3C960,96,1020,160,1080,192C1140,224,1200,224,1260,224C1320,224,1380,224,1410,224L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
export default WaveBottom;
