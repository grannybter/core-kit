import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Card, Input, Button } from '@supabase/ui';
import LoadingDots from 'components/ui/LoadingDots';
import Logo from 'components/icons/Logo';
import { getURL } from '@/utils/helpers';
import { Auth, ThemeSupa, ThemeMinimal } from '@supabase/auth-ui-react';

const customTheme = {
  default: {
    colors: {
      brand: '#296eb4',
      brandAccent: '#3687d9',
      brandButtonText: 'white',
      defaultButtonBackground: 'white',
      defaultButtonBackgroundHover: '#eaeaea',
      defaultButtonBorder: 'lightgray',
      defaultButtonText: 'gray',
      dividerBackground: '#eaeaea',
      inputBackground: 'transparent',
      inputBorder: 'lightgray',
      inputBorderHover: 'gray',
      inputBorderFocus: 'gray',
      inputText: 'black',
      inputLabelText: 'gray',
      inputPlaceholder: 'darkgray',
      messageText: 'gray',
      messageTextDanger: 'red',
      anchorTextColor: 'gray',
      anchorTextHoverColor: 'darkgray'
    },
    space: {
      spaceSmall: '4px',
      spaceMedium: '8px',
      spaceLarge: '16px',
      labelBottomMargin: '8px',
      anchorBottomMargin: '4px',
      emailInputSpacing: '4px',
      socialAuthSpacing: '4px',
      buttonPadding: '10px 15px',
      inputPadding: '10px 15px'
    },
    fontSizes: {
      baseBodySize: '13px',
      baseInputSize: '14px',
      baseLabelSize: '10px lg:14px',
      baseButtonSize: '14px'
    },
    fonts: {
      bodyFontFamily: `ui-sans-serif, sans-serif`,
      buttonFontFamily: `ui-sans-serif, sans-serif`,
      inputFontFamily: `ui-sans-serif, sans-serif`,
      labelFontFamily: `ui-sans-serif, sans-serif`
    },
    // fontWeights: {},
    // lineHeights: {},
    // letterSpacings: {},
    // sizes: {},
    borderWidths: {
      buttonBorderWidth: '1px',
      inputBorderWidth: '1px'
    },
    // borderStyles: {},
    radii: {
      borderRadiusButton: '4px',
      buttonBorderRadius: '4px',
      inputBorderRadius: '4px'
    }
    // shadows: {},
    // zIndices: {},
    // transitions: {},
  },
  dark: {
    colors: {
      brandButtonText: 'white',
      defaultButtonBackground: '#2e2e2e',
      defaultButtonBackgroundHover: '#3e3e3e',
      defaultButtonBorder: '#3e3e3e',
      defaultButtonText: 'white',
      dividerBackground: '#2e2e2e',
      inputBackground: '#1e1e1e',
      inputBorder: '#3e3e3e',
      inputBorderHover: 'gray',
      inputBorderFocus: 'gray',
      inputText: 'white',
      inputPlaceholder: 'darkgray'
    }
  }
};

const SignIn = () => {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user]);

  if (!user)
    return (
      <>
        <div className="flex justify-center h-screen">
          <div className="flex flex-col justify-between max-w-xl p-3 px-12 m-auto w-full h-fit mx-2 sm:mx-0 bg-white rounded-md shadow-xl">
            <div className="flex py-4 text-2xl font-bold">
              <span className="text-black">Sign in to your account</span>
            </div>

            <div className="flex flex-col space-y-4">
              <Auth
                supabaseClient={supabaseClient}
                view="sign_in"
                //providers={['google', 'github']}
                //redirectTo={getURL()}
                localization={{
                  variables: {
                    sign_in: {
                      email_label: 'Email',
                      password_label: 'Password',
                      email_input_placeholder: '',
                      password_input_placeholder: ''
                    },
                    forgotten_password: {
                      link_text: ''
                    },
                    sign_up: {
                      link_text: ''
                    }
                  }
                }}
                magicLink={false}
                appearance={{
                  theme: customTheme
                }}
                theme="defualt"
              />
            </div>
            <div className='flex justify-center pb-1'>
              <a href="/reset" className='text-sm underline text-gray-400'>Forgot your password?</a>
            </div>
            <div className='flex justify-center pb-1'>
              <span className='text-black text-sm'>
                Dont have an account? <a href="/signup" className='text-sm underline text-gray-400'>Sign up</a>
              </span>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
