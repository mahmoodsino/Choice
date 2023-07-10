import { Navbar } from "@/components";
import { AuthProvider } from "@/context/auth/AuthContext";
import BaseBox from "@/context/BaseBox";
import "@/styles/globals.scss";
import "@flaticon/flaticon-uicons/css/regular/rounded.css";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/api/queryClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: ReactNode;
}

const MyApp: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar />
          <BaseBox>
            <MyApp>
              <ToastContainer />
              <Component {...pageProps} />
            </MyApp>
          </BaseBox>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
