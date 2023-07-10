import { usePost } from "@/api/hooks/usePost";
import { Loading } from "@/components/loading";
import { useAuth } from "@/context/auth/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";

const FormSection: FC = () => {
  const [formData, setFormData] = useState<any>();
  const { isLoading, isError, error, data, mutate } = usePost<any, any>(
    "signup"
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
    formdata.append("name", formData?.name);
    formdata.append("email", formData?.email);
    formdata.append("password", formData?.password);
    formdata.append("password_confirmation", formData?.password_confirmation);
    mutate(formdata, {
      onSuccess: (data) => {
        if (data) {
          setToken(data.data.token);
          setUser(data.data.data);
          push("/");
          // toast_success('Welcome Back, ' + data.data.result.user.fname);
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
        <h3>Create new account.</h3>
        <span>
          Already A Member ? <Link href="/login">log in </Link>
        </span>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="input1">
                <label>name</label>
                <br />
                <input
                  required
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="type your name"
                />
              </div>
            </div>
            <div className="col-6">
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
              <div className="col-12">
                <div className="input1">
                  <label>confirmation password</label>
                  <br />
                  <input
                    name="password_confirmation"
                    onChange={handleInputChange}
                    type="password"
                    required
                    placeholder="confirmation your password"
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "25px" }}>
                <div style={{ textAlign: "center" }} className="col-12">
                  <button type="submit" className="btn-1">
                    {!isLoading ? (
                      <i className="fi fi-rr-magic-wand"></i>
                    ) : (
                      <Loading style={{ width: "25px" }} />
                    )}
                    {!isLoading && "Create Account"}
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
