const socialmedia = [
  "https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg",
  "https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg",
  "https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg",
  "https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg",
  "https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg",
  "https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg",
  "https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg",
];

function Media() {
  return (
    <div className="flex flex-col items-start gap-4 mt-[60px] ml-[30px] mb-[90px]  xl:flex-row xl:justify-between xl:ml-[0px] xl:pl-[50px] xl:pr-[167px] xl:w-[1280px]">
      <img
        src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
        alt="title-logo"
        className="w-[130px] h-[35px]"
      ></img>
      <ul className="flex gap-[15px]">
        {socialmedia.map((logo, i) => (
          <li key={i}>
            <img
              src={logo}
              className="w-[30px] h-[30px] xl:w-[32px] xl:h-[32px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Media;
