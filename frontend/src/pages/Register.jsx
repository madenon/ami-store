import React, { useContext, useEffect, useState } from "react";
import loginIcons from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import imageToBase from "../helpers/imageToBase";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [profilePic, setProfilePic] = useState(false);
  const { backendUrl, token, setToken, navigate } = useContext(ShopContext);


  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/user/register", {
        name,
        email,
        password,
        password2,
      });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [token]);
  return (
    <section id="login">
      <div className="mx-auto container p-4 bg-red-200 ">
        <div className="bg-white p-4 max-w-md mx-auto  ">
          <div className="w-20 h-20 mx-auto relative ">
            <img src={ loginIcons} alt="login icons" />
            <form>
            <label>
            <div className="text-xs bg-slate-200 bg-opacity-80 pb-4 pt-2 cursor-pointer text-center w-full  absolute bottom-0">
              Photo de couverture
            </div>
                <input type="file" className="hidden"   />
              </label>
            </form>
          </div>

          <form onSubmit={handleOnSubmit}>
            <div className="grid">
              <label htmlFor="">Nom et Prénom: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Votre nom et prenom"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoComplete="current-name"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label htmlFor="">Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  autoComplete="current-email"
                  placeholder="Votre email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="">Mot de passe: </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Votre mot de passe"
                  name="password"
                  autoComplete="current-password2"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="">Confirmationde mot de passe: </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirPassword ? "text" : "password"}
                  placeholder="Confirmez votre mot de passe"
                  name="password2"
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                  autoComplete="current-password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>{showConfirPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <button className="bg-red-300 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 hover:bg-red-500">
              Connexion
            </button>
          </form>
          <p className="my-5 text-lg text-slate-500">
            Avez-vous déjà un compte ?{" "}
            <Link to="/login">
              <span className="hover:text-red-600 hover:text-lg">
                Se connecter
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
