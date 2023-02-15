const Logo = ({ className = '', ...props }) => (
  <svg
    width="30"
    height="35"
    viewBox="0 0 30 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 8.75V26.25L14.733 35L0 26.25V11.6006L5.92025 14.6836V22.6816L14.9426 27.8428L24.1203 22.6816V12.3594L17.2877 8.42187L23.2079 4.79199L30 8.75ZM20.8561 3.35645L15.125 0L9.13719 3.74609L14.9493 6.97949L20.8561 3.35645Z"
      fill={props.fill || '#fff'}
    />
  </svg>
);

export default Logo;
