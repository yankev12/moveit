import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownData {
  minutes: number;
  seconds: number;
  hasFinalized: boolean;
  isActive: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
}

interface CountdownProviderData {
  children: ReactNode;
}

let countDownTimeout: NodeJS.Timeout;
const defaultTime = 0.1 * 60;

export const CountdownContext = createContext({} as CountdownData);

export function CountdownProvider({ children }: CountdownProviderData) {
  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinalized, setHasFinalized] = useState(false);

  const { startNewChallenge } = useContext(ChallengeContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setHasFinalized(false);
    setTime(defaultTime);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinalized(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinalized,
        isActive,
        resetCountdown,
        startCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
