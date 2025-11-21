import { useMediaQuery } from "react-responsive";

export default function useDeviceBreakpoint() {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const isTablet = useMediaQuery({ minWidth: 901, maxWidth: 1200 });
  const isPc = useMediaQuery({ minWidth: 1201 });

  return { isMobile, isTablet, isPc };
}
