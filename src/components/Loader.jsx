import { RotatingTriangles } from "react-loader-spinner";
export const Loader = () => {
  return (
    <RotatingTriangles
      visible={true}
      height="190"
      width="100"
      ariaLabel="rotating-triangels-loading"
      wrapperStyle={{}}
      wrapperClass="rotating-triangels-wrapper"
    />
  );
};
