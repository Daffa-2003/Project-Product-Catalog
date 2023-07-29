import cx from "classnames";
const Typography = (props) => {
  const { children, variant, size, posision } = props;
  return (
    <p
      className={cx("text-[#152A46]", {
        "text-red-500": variant === "error",
        "text-green-500": variant === "success",
        "text-blue-500": variant === "info",
        "text-white": variant === "primary",
        "text-yellow-400": variant === "warning",
        "text-black": variant === "black",
        "text-[20px]": size === "title",
        "text-[16px]": size === "subtitle",
        "text-[12px]": size === "body",
        "text-center": posision === "center",
      })}
    >
      {children}
    </p>
  );
};

export default Typography;
