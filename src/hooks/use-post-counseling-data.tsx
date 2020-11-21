import { useState } from "react";
import { Counseling } from "services/models/counseling";

type ReturnValue = {
  isLoading: boolean;
  isSuccess: boolean;
};

const usePostCounselingData = (values: Counseling): ReturnValue => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const load = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        "http://localhost/Sites/cyberelders/api/counseling.php",
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );

      console.log(response.status); // => 200
      if (!response.ok) {
        alert("申し訳ございません、再度お試しください");
      } else {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setIsSuccess(true);
        //handleShowDialog();
      }
    } catch (error) {
      alert("申し訳ございません、再度お試しください");
    } finally {
      setIsLoading(false);
    }
  };

  void load();

  return { isLoading, isSuccess };
};

export default usePostCounselingData;
