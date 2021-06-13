import axios from "axios";

const submitDonation = async (donation, payment, queryParamsValidation) => {
  const res = await axios.post(
    `http://localhost:8080/donation/${
      queryParamsValidation ? donation.restaurant : ""
    }`,
    {
      ...donation,
      ...payment,
    }
  );
  return res;
};

export { submitDonation };
