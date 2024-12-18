// Icons.tsx

// Import React
import React from "react";

// Export function for TagIcon
export const Logo = ({
  className = "w-[108px] h-[24px] lg:w-[153px] lg:h-[34px]",
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 153 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "var(--common)" }}
    >
      <path
        d="M20.8623 26.9208C22.2504 26.2676 23.4752 25.3694 24.5367 24.1855L29.9666 25.9818C29.2317 27.0842 28.3744 28.1048 27.3537 29.003C26.3739 29.9012 25.3124 30.6769 24.1284 31.3301C22.9853 31.9833 21.7605 32.4732 20.4132 32.7999C19.1068 33.1673 17.7595 33.3306 16.3306 33.3306C11.7988 33.3306 8.00199 31.6975 4.81752 28.5131C1.63306 25.3286 0 21.5318 0 17C0 12.5091 1.59223 8.67142 4.81752 5.48695C7.96116 2.26166 11.7988 0.669434 16.3306 0.669434C18.576 0.669434 20.699 1.0777 22.6995 1.93505C24.6592 2.79241 26.4147 3.97638 27.9253 5.48695L24.006 9.32464C21.883 7.20167 19.3517 6.14018 16.3306 6.14018C13.3503 6.14018 10.7782 7.16084 8.61438 9.32464C6.49141 11.4476 5.47075 14.0197 5.47075 17C5.47075 19.9803 6.49141 22.5932 8.61438 24.7162C10.7374 26.8392 13.3503 27.8599 16.3306 27.8599C17.9636 27.8599 19.4742 27.5332 20.8623 26.9208ZM16.3306 19.7354V14.3055H29.9666L24.5367 19.7354H16.3306Z"
        fill="#15864E"
      />
      <path
        d="M48.4202 19.7354H40.2958C37.642 19.7354 35.3966 18.7964 33.5594 16.9592C31.7222 15.0812 30.7832 12.8357 30.7832 10.182C30.7832 7.5691 31.7222 5.36447 33.5594 3.48646C35.3966 1.60844 37.642 0.669434 40.2958 0.669434V6.14018C39.7242 6.14018 39.1935 6.22183 38.7035 6.42596C38.1728 6.6301 37.7645 6.91588 37.3563 7.32415C36.9888 7.69158 36.703 8.14067 36.4989 8.63059C36.2948 9.12051 36.2131 9.65125 36.2131 10.182C36.2131 11.3251 36.5806 12.2641 37.3563 13.0807C38.1728 13.8972 39.1118 14.3055 40.2958 14.3055H48.4202C51.074 14.3055 53.3194 15.2445 55.1566 17.0817C57.0346 18.9597 57.9736 21.2051 57.9736 23.818C57.9736 26.4309 57.0346 28.6764 55.1566 30.5544C53.3194 32.3916 51.074 33.3306 48.4202 33.3306V27.8599C48.9918 27.8599 49.5225 27.7782 50.0125 27.5741C50.5432 27.3699 50.9923 27.0842 51.3597 26.7167C51.7272 26.3493 52.013 25.941 52.2171 25.4103C52.4212 24.9203 52.5437 24.3896 52.5437 23.818C52.5437 22.7157 52.0946 21.7767 51.3189 20.9602C50.5024 20.1437 49.5634 19.7354 48.4202 19.7354Z"
        fill="currentColor"
      />
      <path
        d="M71.6715 21.4501V21.4093L62.4039 33.3306H55.4226L68.2421 17L55.4226 0.669434H62.4039L71.6715 12.5908L80.98 0.669434H87.8796L71.6715 21.4501ZM71.6715 21.4093V21.4501L62.4039 33.3306L71.6715 21.4093Z"
        fill="currentColor"
      />
      <path
        d="M113.384 0.669434H118.814V33.3306L91.6641 8.91638V0.669434L113.384 20.2253V0.669434Z"
        fill="currentColor"
      />
      <path
        d="M135.118 32.0242C133.118 31.1668 131.403 29.9828 129.892 28.5131C128.423 27.0025 127.239 25.2878 126.381 23.2873C125.524 21.2868 125.075 19.2046 125.075 17C125.075 14.7546 125.524 12.6316 126.381 10.6311C127.239 8.67142 128.423 6.95671 129.892 5.48695C131.403 3.97638 133.118 2.83323 135.118 1.97588C137.078 1.11852 139.201 0.669434 141.446 0.669434C143.692 0.669434 145.815 1.0777 147.774 1.93505C149.734 2.79241 151.489 3.97638 153 5.48695L149.122 9.28381C146.958 7.16084 144.386 6.14018 141.446 6.14018C139.936 6.14018 138.507 6.42596 137.2 6.95671C135.853 7.52828 134.71 8.30398 133.73 9.32464C132.75 10.3045 131.974 11.4476 131.403 12.7541C130.831 14.1013 130.546 15.4894 130.546 17C130.546 18.5106 130.831 19.8987 131.403 21.246C131.974 22.5524 132.75 23.6956 133.771 24.6754C134.751 25.6961 135.894 26.4718 137.2 27.0433C138.548 27.5741 139.936 27.8599 141.446 27.8599L147.774 32.065C145.815 32.9223 143.692 33.3306 141.446 33.3306C139.201 33.3306 137.078 32.8815 135.118 32.0242Z"
        fill="currentColor"
      />
    </svg>
  );
};

// Export function for TagIcon
export const TagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12 2.26782H2V12.2678L11.29 21.5578C12.23 22.4978 13.77 22.4978 14.71 21.5578L21.29 14.9778C22.23 14.0378 22.23 12.4978 21.29 11.5578L12 2.26782Z"
        stroke="#0E462C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.26782H7.01"
        stroke="#0E462C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Export function for RocketIcon
export const RocketIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M4.5 16.7678C3 18.0278 2.5 21.7678 2.5 21.7678C2.5 21.7678 6.24 21.2678 7.5 19.7678C8.21 18.9278 8.2 17.6378 7.41 16.8578C7.02131 16.4868 6.50929 16.2724 5.97223 16.2558C5.43516 16.2392 4.91088 16.4215 4.5 16.7678Z"
        stroke="#0E462C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.2678L9 12.2678C9.53214 10.8873 10.2022 9.56389 11 8.31783C12.1652 6.45481 13.7876 4.92087 15.713 3.86192C17.6384 2.80296 19.8027 2.2542 22 2.26783C22 4.98783 21.22 9.76783 16 13.2678C14.7369 14.0665 13.3968 14.7366 12 15.2678Z"
        stroke="#0E462C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.2678H4C4 12.2678 4.55 9.23784 6 8.26784C7.62 7.18784 11 8.26784 11 8.26784"
        stroke="#0E462C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.2678V20.2678C12 20.2678 15.03 19.7178 16 18.2678C17.08 16.6478 16 13.2678 16 13.2678"
        stroke="#0E462C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Export function for CrownIcon
export const CrownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M5 20.2678H19M2 4.26782L5 16.2678H19L22 4.26782L16 11.2678L12 4.26782L8 11.2678L2 4.26782Z"
        stroke="#0E462C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Export function for CheckIcon
export const CheckIcon = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      style={{ color: color }}
    >
      <path
        d="M20 6.26782L9 17.2678L4 12.2678"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Export function for HamburgerIcon
export const HamburgerIcon = () => {
  return (
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
      style={{ color: "var(--common)" }}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );
};

export const pictureIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke="#105535"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
        stroke="#105535"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14.9999L17.914 11.9139C17.5389 11.539 17.0303 11.3284 16.5 11.3284C15.9697 11.3284 15.4611 11.539 15.086 11.9139L6 20.9999"
        stroke="#105535"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 21V10H5L12 3L19 10H15V21H9Z"
        // fill="#15864E"
        stroke="#15864E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 3H15V14H19L12 21L5 14H9V3Z"
        stroke="#15864E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MessageCircleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
        stroke="#105535"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
