import linkedLogo from "../../../public/images/linkedin-256.png"
const LinkedInLink = () => {
    return (
      <a
        href="https://www.linkedin.com/in/juneyoung-seo-10b757236/"
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 250 250"
          color="white"
          className="group absolute right-0 top-0 z-50 scale-x-[1] scale-y-[1] transform fill-[#256fa8] text-white"
          aria-hidden="true"
        >
          {/* Blue triangle facing left */}
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" fill="#0077B5"></path>
  
          {/* LinkedIn logo, rotated to align with the hypotenuse */}
          <g transform="translate(115, 115) rotate(45)">
            <image
              href={linkedLogo} 
              width="100" 
              height="100" 
              transform="translate(-30, -100)" // Adjust rotation and centering
            />
          </g>
        </svg>
      </a>
    );
  };
  
  export default LinkedInLink;
  