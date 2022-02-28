import { useResizeWindows } from "../hooks/useResizeWindows";
import MinHeader from "./MinHeader";

const Header = () => {
  const [mq] = useResizeWindows("(min-width: 500px)");
  return <>{mq ? "" : <MinHeader />}</>;
};

export default Header;
