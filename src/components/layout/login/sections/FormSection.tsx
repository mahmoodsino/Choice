import { usePost } from "@/api/hooks/usePost";
import { Loading } from "@/components/loading";
import { useAuth } from "@/context/auth/AuthContext";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";

const FormSection: FC = () => {
  const [formData, setFormData] = useState<any>();
  const { isLoading, isError, error, data, mutate } = usePost<any, any>(
    "login"
  );
  const { setToken, setUser } = useAuth();
  const { push } = useRouter();

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("email", formData?.email);
    formdata.append("password", formData?.password);
    mutate(formdata, {
      onSuccess: (data) => {
        if (data) {
          console.log(data);
          setToken(data.data.token);
          setUser(data.data.data);
          push("/");
          toast.success("Welcome Back, " + data.data.data.name);
        }
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    });
  };

  return (
    <div className="col-6">
      <div className="login-box">
        <h3>Login to your account.</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="input1">
                <label>email</label>
                <br />
                <input
                  onChange={handleInputChange}
                  name="email"
                  required
                  type="email"
                  placeholder="type your email"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input1">
                <label>password</label>
                <br />
                <input
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  required
                  placeholder="type a strong password"
                />
              </div>

              <div className="row" style={{ marginTop: "25px" }}>
                <div style={{ textAlign: "center" }} className="col-12">
                  <button type="submit" className="btn-1">
                    {!isLoading ? (
                      <i className="fi fi-rr-magic-wand"></i>
                    ) : (
                      <Loading style={{ width: "25px" }} />
                    )}
                    {!isLoading && "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
