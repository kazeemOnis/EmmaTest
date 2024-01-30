import React from 'react';

interface OnboardingInterface {}

const OnboardingContext = React.createContext<OnboardingInterface>({});

export const OnboardingProvider = (props: {children?: React.ReactNode}) => {
  return (
    <OnboardingContext.Provider value={{}}>
      {props.children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  return React.useContext(OnboardingContext);
};
