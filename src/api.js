import axios from "axios";

export const backendData = async () => {
  const deneme = await axios
    .get("https://demotrainiq.com/case/dashboard")
    .then((res) => res.data);
  return deneme;
};
