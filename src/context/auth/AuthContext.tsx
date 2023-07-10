import { useRouter } from "next/router";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAuthActions {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  token: string | null;
  getToken: () => string | null;
  getUser: () => any;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  isAuth: () => boolean;
  logout: () => void;
}

export const AuthContext = createContext<IAuthActions>({} as IAuthActions);

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useRouter().push;

  useEffect(() => {
    const local_user = localStorage.getItem("user") ?? null;
    if (local_user) {
      setUser(JSON.parse(local_user));
    }
    const local_token = localStorage.getItem("token") ?? null;

    if (local_token) {
      setToken(local_token);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const isAuth = () => {
    return token != null;
  };

  const getToken = (): string | null => {
    return localStorage.getItem("token") ?? null;
  };

  const getUser = (): any => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  const authContextValue: IAuthActions = {
    user,
    getUser,
    setUser,
    token,
    getToken,
    setToken,
    isAuth,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
