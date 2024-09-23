//w-89px,h-35px,text-[16px],style-normal,font-[500],text-[353,a47],line-height-24px,text-decoration-none,transform-none,font-family-roboto,letter-spacing-0

function Button({ type, action }) {
  const styles = {
    login:
      "bg-[#fff] text-[#353a47]  border-[1px] border-[#E1E1E1] text-[#353a47]",
    signup: "bg-[#39B75D] text-white ",
    primary:
      "w-[89px] h-[35px]  text-base font-medium  font-['Roboto'] rounded-sm",
    secondary:
      "w-[250px] h-[48px] px-[80px] py-[15px]  font-['Roboto'] text-base font-medium text-[#fff] bg-[#39B75D]",
  };
  return (
    <button
      className={`${
        action === "Log in"
          ? `${styles.primary} ${styles.login}`
          : type === "secondary"
          ? `${styles.secondary}`
          : `${styles.primary} ${styles.signup}`
      }`}
    >
      {action}
    </button>
  );
}

export default Button;
